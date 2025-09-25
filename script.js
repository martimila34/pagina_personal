// Esto hace que salte una alerta cuando entras
alert('¡Bienvenido a mi página!');

// Esto cambia el color cuando haces clic
document.body.onclick = function() {
    document.body.style.backgroundColor = 'pink';
};

// NAVEGACIÓN SUAVE PARA EL BLOG (NUEVO)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// EFECTO AL PASAR MOUSE SOBRE ENTRADAS DEL BLOG (NUEVO)
document.querySelectorAll('.entrada').forEach(entrada => {
    entrada.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    entrada.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// BOTÓN "LEER MÁS" (NUEVO)
document.querySelectorAll('.leer-mas').forEach(boton => {
    boton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('¡Próximamente tendrás más contenido aquí! 📖');
    });
});