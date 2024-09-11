const compararNumeros = (num1, num2, num3) => {
    let mensaje = "";

    const mayor = Math.max(num1, num2, num3);

    if (num1 === num2 && num2 === num3) {
        mensaje = `Todos los números son iguales: ${num1}`;
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        if (num1 === num2) {
            mensaje = `El número repetido es: ${num1}`;
        } else if (num1 === num3) {
            mensaje = `El número repetido es: ${num1}`;
        } else {
            mensaje = `El número repetido es: ${num2}`;
        }
        mensaje += ` y el número mayor es: ${mayor}`;
    } else {
        mensaje = `El número mayor es: ${mayor}`;
    }

    document.write(mensaje);
};

compararNumeros(7, 7, 9);
git commit -m "first commit"