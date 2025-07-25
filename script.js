
/*FORMULARIO*/ 
document.getElementById('formularioEntrega').addEventListener('submit', function(event) {
    event.preventDefault();
    const Nombres = document.getElementById('Nombres').value;
    const Usuario = document.getElementById('Usuario').value;
    const Email = document.getElementById('Email').value;
    const Comentario = document.getElementById('Comentario').value;

    if (Nombres.length < 2) {
        console.log ("El campo Nombres debe tener más de 2 caracteres.")
        return
    }
    if (Usuario.length < 5) {
        console.log ("El Usuario debe tener más de 5 caracteres.")
        return
    }
    if(Nombres && Usuario && Email && Comentario) {
        console.log(`Nombres: ${Nombres}`)
        console.log(`Usuario: ${Usuario}`)
        console.log(`Email: ${Email}`)
        console.log(`Comentario: ${Comentario}`)
        console.log("TODO BIEN POR ACA...")
    } else {
        console.log(`Algunos campos estan vacios. Verifique los datos menso.`)
    }
});
