// Almacenamos nuestro numero en una constante
const numeroWhatsapp = "50576145799";

// Ahora usamos query Selector all para capturar todos los botones

const capturaBtn = document.querySelectorAll('.contratar-btn');


capturaBtn.forEach( boton => {
    boton.addEventListener("click", () =>{
        const obtnerPlataforma = boton.getAttribute("data-plataforma");
        const mensaje = `Hola, deseo contratar ${obtnerPlataforma}`;

        const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

        //Rediririgimos a Whatsapp
        window.open(url, "_blank")

    })
})
