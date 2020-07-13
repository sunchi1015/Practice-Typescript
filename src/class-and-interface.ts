class BaseComponent {}

class App extends BaseComponent {
  constructor(private type: string) {
    super();
    console.log('Class Instantiated');
    console.log('Type --->', type);
  }
}

new App('Employee');
