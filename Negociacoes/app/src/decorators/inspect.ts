export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(
        `Método ${propertyKey} chamado com os argumentos: ${JSON.stringify(args)}`,
      );
      return metodoOriginal.apply(this, args);
    };

    return descriptor;
  };
}
