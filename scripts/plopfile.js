const ahemProject = 'Ahem-UI V1';
const otherProject = 'other';

module.exports = function (plop) {

  const currentYear = new Date(Date.now()).getUTCFullYear();
  plop.setHelper('currentYear', () => currentYear);

  plop.setHelper('replace', function (match, replacement, options) {
    const string = options.fn(this);
    return string.replace(match, replacement);
  });

  plop.setHelper('includes', function (array, string) {
    return array.includes(string);
  });

  plop.setGenerator('components', {
    description: 'add new component',
    prompts: [
      {
        type: 'list',
        name: 'projectType',
        message: 'what type of project are you setting up?',
        choices: [ahemProject, otherProject]
      },
      {
        type: 'checkbox',
        name: 'scopes',
        message: 'scope name(s)',
        choices: ['@ahem-components', '@ahem-types'],
        validate: (answer) => answer.length > 0,
        when: ({ projectType }) => projectType === ahemProject
      },
      {
        type: 'input',
        name: 'scopeName',
        message: 'scope name for new package',
        validate: (answer) => answer.length > 0,
        when: ({ projectType }) => projectType === otherProject
      },
      {
        type: 'input',
        name: 'packageName',
        message: 'package name, all lowercase (e.g. textfield)',
        validate: (answer) => answer.length > 0
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'component name, please use appropriate uppercase (e.g. TextField)',
        validate: (answer) => answer.length > 0,
        when: ({ projectType }) => projectType === ahemProject
      }
    ],
    actions: function (data) {
      const { projectType, scopes, scopeName, packageName, componentName } = data;
      const actions = [];
      if (projectType === ahemProject) {
        if (scopes.includes('@ahem-components')) {
          actions.push({
            type: 'addMany',
            templateFiles: '../plop-templates/@ahem-components/**',
            base: '../plop-templates/@ahem-components/',
            destination: `../packages/@ahem-components/${packageName}`,
            data: { packageName, componentName, scopes }
          });
        }

        if (scopes.includes('@ahem-types')) {
          actions.push({
            type: 'addMany',
            templateFiles: '../plop-templates/@ahem-types/**',
            base: '../plop-templates/@ahem-types/',
            destination: `../packages/@ahem-types/${packageName}`,
            data: { packageName, componentName, scopes }
          });
        }
      } else {
        actions.push({
          type: 'addMany',
          templateFiles: '../plop-templates/@scope/**',
          base: '../plop-templates/@scope/',
          destination: `../packages/@${scopeName}/${packageName}`,
          data: { scopeName, packageName, componentName }
        });
      }

      return actions;
    }
  });
};
