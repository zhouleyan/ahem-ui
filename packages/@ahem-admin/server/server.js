const Koa = require('koa');
const boxen = require('boxen');
const chalk = require('chalk');
const os = require('os');

const interfaces = os.networkInterfaces();

const warning = (message) => chalk`{yellow WARNING:} ${message}`;
const info = (message) => chalk`{magenta INFO:} ${message}`;
const error = (message) => chalk`{red ERROR:} ${message}`;

const registerShutdown = (fn) => {
  let run = false;

  const wrapper = () => {
    if (!run) {
      run = true;
      fn();
    }
  };

  process.on('SIGINT', wrapper);
  process.on('SIGTERM', wrapper);
  process.on('exit', wrapper);
};

const getNetworkAddress = () => {
  for (const name of Object.keys(interfaces)) {
    for (const _interface of interfaces[name]) {
      const { address, family, internal } = _interface;
      if (family === 'IPv4' && !internal) {
        return address;
      }
    }
  }
};

Koa.prototype.apply = function (module, ...rest) {
  module(this, ...rest);
  return this;
};

global.HOSTNAME = 'localhost';
global.PORT = 8000;

const app = new Koa();

const httpMode = 'http';

app.server = app.listen(global.PORT, (err) => {
  const details = app.server.address();
  registerShutdown(() => app.server.close());

  let localAddress = null;
  let networkAddress = null;

  if (typeof details === 'string') {
    localAddress = details;
  } else if (typeof details === 'object' && details.port) {
    const address = details.address === '::' ? 'localhost' : details.address;
    const ip = getNetworkAddress();

    localAddress = `${httpMode}://${address}:${details.port}`;
    networkAddress = ip ? `${httpMode}://${ip}:${details.port}` : null;
  }

  let message = chalk.green('Serving!');

  if (localAddress) {
    const prefix = networkAddress ? '- ' : '';
    const space = networkAddress ? '            ' : '  ';
    message += `\n\n${chalk.bold(`${prefix}Local:`)}${space}${localAddress}`;
  }

  if (networkAddress) {
    message += `\n${chalk.bold('- On Your Network:')}  ${networkAddress}`;
  }

  if (err) {
    return error(err);
  }
  /* eslint-disable no-console */
  console.log(boxen(message, {
    padding: 1,
    borderColor: 'green',
    margin: 1
  }));
});

(async () => {
  registerShutdown(() => {
    console.log(`\n${info('Gracefully shutting down. Please wait...')}`);

    process.on('SIGINT', () => {
      console.log(`\n${warning('Force-closing all open sockets...')}`);
      process.exit(0);
    });
  });
})();

