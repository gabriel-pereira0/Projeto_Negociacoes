export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement;
    Object.defineProperty(target, propertyKey, {
      get: () => {
        if (!elemento) {
          elemento = document.querySelector(seletor) as HTMLElement;
        }
        return elemento;
      },
    });
  };
}
