// Inicializar el SDK de MercadoPago con tu Public Key
const mp = new MercadoPago('TU_PUBLIC_KEY', {
    locale: 'es-AR' // Otras opciones: 'es-CL', 'es-MX', etc.
});

// Crear la preferencia de pago (normalmente esto se hace en el back-end)
fetch('/crear-preferencia', { // Llamada a tu back-end para crear una preferencia
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        items: [
            {
                title: 'nina',
                unit_price: 10000,
                quantity: 1
            }
        ]
    })
})  
.then(response => response.json())
.then(preference => {
    // Crear el botón de pago
    mp.checkout({
        preference: {
            id: preference.id
        },
        render: {
            container: '#checkout-btn', // Elemento donde se montará el botón
            label: 'Pagar', // Texto del botón
        }
    });
})
.catch(error => console.error(error));
