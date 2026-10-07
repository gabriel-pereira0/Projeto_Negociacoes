export function domInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        Object.defineProperty(target, propertyKey, {
            get: () => {
                if (!elemento) {
                    elemento = document.querySelector(seletor);
                }
                return elemento;
            },
        });
    };
}
