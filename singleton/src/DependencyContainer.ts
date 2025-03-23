export default class DependencyContainer {
  private dependencies: Map<string, any>;
  private static instance: DependencyContainer;

  private constructor() {
    this.dependencies = new Map();
  }

  register(key: string, instance: any) {
    this.dependencies.set(key, instance);
  }

  inject(key: string) {
    if (!this.dependencies.has(key)) {
      throw new Error(`Dependency ${key} not found`);
    }

    return this.dependencies.get(key);
  }

  static getInstance() {
    if (!DependencyContainer.instance) {
      DependencyContainer.instance = new DependencyContainer();
    }

    return DependencyContainer.instance;
  }
}
