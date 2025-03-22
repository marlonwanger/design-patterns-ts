class DependencyContainer {
  private dependencies: Map<string, any> = new Map();

  register(key: string, instance: any) {
    this.dependencies.set(key, instance);
  }

  inject(key: string) {
    if (!this.dependencies.has(key)) {
      throw new Error(`Dependency ${key} not found`);
    }

    return this.dependencies.get(key);
  }
}

export const container = new DependencyContainer();
