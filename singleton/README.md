# Padrão Singleton em DependencyContainer.ts

Este projeto utiliza o padrão Singleton para gerenciar a instância do container de dependências. A ideia principal é garantir que apenas uma instância do container seja criada e utilizada durante toda a execução da aplicação.

## Por que usar Singleton?

- **Controle de Instância:** Garante que todos os módulos ou classes que precisem acessar o container utilizem a mesma instância.
- **Gerenciamento de Dependências:** Facilita o registro e resolução de dependências de forma centralizada.
- **Economia de Recursos:** Evita a criação de múltiplas instâncias, o que pode levar à sobrecarga da aplicação.

## Como funciona

Em `DependencyContainer.ts`, a implementação do Singleton garante que, ao chamar a instância do container, a mesma instância seja retornada. Por exemplo:

```typescript
class DependencyContainer {
  private static instance: DependencyContainer;

  private constructor() {
    // Inicialização do container e registro das dependências
  }

  public static getInstance(): DependencyContainer {
    if (!DependencyContainer.instance) {
      DependencyContainer.instance = new DependencyContainer();
    }
    return DependencyContainer.instance;
  }

  // Métodos para registrar e resolver dependências
  public register<T>(key: string, dependency: T): void {
    // Implementação do registro
  }

  public resolve<T>(key: string): T | undefined {
    // Implementação da resolução da dependência
  }
}

export default DependencyContainer;
```

## Uso

Sempre que for necessário acessar ou injetar dependências, use o método `getInstance()` para obter a instância única do container.

```typescript
import DependencyContainer from "./DependencyContainer";

const container = DependencyContainer.getInstance();

// Exemplo de registro de uma dependência
container.register("SomeService", new SomeService());

const someService = container.resolve<SomeService>("SomeService");
```

Este padrão facilita o gerenciamento de dependências e melhora a estrutura e manutenibilidade do código.
