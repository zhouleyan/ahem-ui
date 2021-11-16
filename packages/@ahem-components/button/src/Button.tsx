function Button(props: string): string {
  return 'Button';
}

class Bork {
  // Property initializer syntax
  instanceProperty = 'bork';
  boundFunction = () => this.instanceProperty;

  // Static class properties
  static staticProperty = 'babelIsCool';
  static staticFunction = function () {
    return Bork.staticProperty;
  };
}

export { Button, Bork };
