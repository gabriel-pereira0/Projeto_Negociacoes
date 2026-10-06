export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Método ${propertyKey} chamado com os argumentos: ${JSON.stringify(args)}`);
        return metodoOriginal.apply(this, args);
    };
    return descriptor;
}
