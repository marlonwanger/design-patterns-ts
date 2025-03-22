import { container } from "./DependencyContainer";

//Para criar um decorator eu crio uma função que retorna outra function
export function Inject(key: string) {
  return function (target: any, propertyKey: string) {
    // Criar um proxy para a propriedade
    Object.defineProperty(target, propertyKey, {
      get() {
        // resolve a dependencia do container
        return container.inject(key);
      },
      set() {
        throw new Error("Cannot set a dependency");
      },
    });
  };
}

/**
 * O proxy atua como um intermediario entre os objetos reais e quem os utiliza
 *  o get() -> dentro do proxy é chamado quando alguem tenta acessar a propriedade entao por exemplo
 *  dentro da classe user.service, onde utilizamos nossas objetos e onde injetamos as dependencias
 *  quando executamos this.logger o Proxy intercepta essa chamada e chama o get() do proxy
 *  que por sua vez chama o container.inject(key) que é a função que retorna a dependencia do container resolvendo as dependencias
 */
