    var cartas = [
        { id: 1, 
        textoEvento: "Se encontro un Tlacuache cerca de las canchas.",
        imagen: "tlac.png",
        textoOpcion1: "Reubicar al animal.", 
        impactoOpcion1: { economia: -10, sociedad: 20, medioAmbiente: 10 },
        textoOpcion2: "Mantenerlo protegido en el campus.", 
        impactoOpcion2: { economia: 0, sociedad: 0, medioAmbiente: 15 } },

        { id: 2, 
        textoEvento: "Un partido politico dara apoyo economico a cambio de que la escuela los promocione con los alumnos.",
        imagen: "Amlo.png",
        textoOpcion1: "Aceptar.", 
        impactoOpcion1: { economia: 15, sociedad: 0, medioAmbiente: 0 },
        textoOpcion2: "Rechazar.", 
        impactoOpcion2: { economia: -10, sociedad: 10, medioAmbiente: 0 } },

        { id: 3, 
        textoEvento: "El alumnado quiere que se construya un puente que conecte los dos planteles, pero esto dañara parte de las areas verdes del Tec.",
        imagen: "puente.png",
        textoOpcion1: "Construir.", 
        impactoOpcion1: { economia: -10, sociedad: 10, medioAmbiente: -15 },
        textoOpcion2: "No construir.", 
        impactoOpcion2: { economia: 5, sociedad: 5, medioAmbiente: 15 } },

        { id: 4, 
        textoEvento: "A los alumnos cada semestre se les hace mas dificil conseguir estacionamiento.",
        imagen: "Carro.png",
        textoOpcion1: "Sacrificar un area verde para ampliar el estacionamiento.", 
        impactoOpcion1: { economia: 15, sociedad: 5, medioAmbiente: -20 },
        textoOpcion2: "Decirles que usen transporte publico.", 
        impactoOpcion2: { economia: 5, sociedad: -5, medioAmbiente: 15 } },

        { id: 5,
        textoEvento: "Las computadoras del laboratorio de computación ya estan obsoletas.",
        imagen: "PC.png", 
        textoOpcion1: "Cambiarlas por computadoras mas nuevas.", 
        impactoOpcion1: { economia: -15, sociedad: 20, medioAmbiente: 10 }, 
        textoOpcion2: "Mantenerlas hasta que dejen de servir.", 
        impactoOpcion2: { economia: 5, sociedad: -10, medioAmbiente: -10 } },

        { id: 6, 
        textoEvento: "Hay una fuga de agua masiva en los baños del edificio L.", 
        imagen: "agua.png", 
        textoOpcion1: "Reparación urgente.", 
        impactoOpcion1: { economia: -10, sociedad: 20, medioAmbiente: 20 }, 
        textoOpcion2: "Ignorarla por ahora.", 
        impactoOpcion2: { economia: 5, sociedad: -20, medioAmbiente: -20 }  },

    { id: 7, 
        textoEvento: "Un grupo de alumnos propone instalar paneles solares en el techo del auditorio.", 
        imagen: "sol.png", 
        textoOpcion1: "Aprobar proyecto.", 
        impactoOpcion1: { economia: -20, sociedad: 20, medioAmbiente: 20 }, 
        textoOpcion2: "Rechazar por costo.", 
        impactoOpcion2: { economia: 10, sociedad: -10, medioAmbiente: -10 } },

    { id: 8, 
        textoEvento: "Empresa externa ofrece patrocinar un evento de convivencia a cambio de publicidad masiva.", 
        imagen: "billete.png", 
        textoOpcion1: "Aceptar trato.", 
        impactoOpcion1: { economia: 15, sociedad: 10, medioAmbiente: 0 }, 
        textoOpcion2: "Mantener autonomía.", 
        impactoOpcion2: { economia: -5, sociedad: 10, medioAmbiente: 0 } },

    { id: 9, 
        textoEvento: "Se detecta exceso de basura plástica en la cafetería.", 
        imagen: "plastico.png", 
        textoOpcion1: "Prohibir desechables.", 
        impactoOpcion1: { economia: -5, sociedad: 20, medioAmbiente: 20 }, 
        textoOpcion2: "Poner más botes.", 
        impactoOpcion2: { economia: 5, sociedad: 0, medioAmbiente: -10 } },

    { id: 10, 
        textoEvento: "Es semana de exámenes y los alumnos piden que se hagan mas cubiculos en la biblioteca.", 
        imagen: "libro.png", 
        textoOpcion1: "Autorizar horario.", 
        impactoOpcion1: { economia: -10, sociedad: 20, medioAmbiente: -5 }, 
        textoOpcion2: "Mantener horario.", 
        impactoOpcion2: { economia: 5, sociedad: -10, medioAmbiente: 0 } },

    { id: 11, 
        textoEvento: "Un árbol antiguo está dañando los cimientos de un salón.", 
        imagen: "arbol.png", 
        textoOpcion1: "Talar el árbol.", 
        impactoOpcion1: { economia: 10, sociedad: 0, medioAmbiente: -15 }, 
        textoOpcion2: "Reforzar estructura.", 
        impactoOpcion2: { economia: -15, sociedad: 10, medioAmbiente: 15 } },

    { id: 12, 
        textoEvento: "Se propone crear un huerto escolar gestionado por voluntarios.", 
        imagen: "Trigo.png", 
        textoOpcion1: "Apoyar con fondos.", 
        impactoOpcion1: { economia: -10, sociedad: 20, medioAmbiente: 15 }, 
        textoOpcion2: "Solo dar el espacio.", 
        impactoOpcion2: { economia: 5, sociedad: 10, medioAmbiente: 10 } },

    { id: 13, 
        textoEvento: "El equipo de robótica necesita fondos para una competencia nacional.", 
        imagen: "Dinero.png", 
        textoOpcion1: "Dar beca completa.", 
        impactoOpcion1: { economia: -15, sociedad: 20, medioAmbiente: 0 }, 
        textoOpcion2: "Apoyo parcial.", 
        impactoOpcion2: { economia: 5, sociedad: 10, medioAmbiente: 0 } },

    { id: 14, 
        textoEvento: "Hay una plaga de hormigas en los jardines centrales.", 
        imagen: "hormiga.png", 
        textoOpcion1: "Usar pesticida fuerte.", 
        impactoOpcion1: { economia: 10, sociedad: 0, medioAmbiente: -20 }, 
        textoOpcion2: "Control orgánico.", 
        impactoOpcion2: { economia: -10, sociedad: 20, medioAmbiente: 20 } },

    { id: 15, 
        textoEvento: "Se propone digitalizar todos los trámites para eliminar el uso de papel.", 
        imagen: "Digital.png", 
        textoOpcion1: "Implementar ahora.", 
        impactoOpcion1: { economia: -10, sociedad: 20, medioAmbiente: 10 }, 
        textoOpcion2: "Seguir igual.", 
        impactoOpcion2: { economia: 5, sociedad: 10, medioAmbiente: -5 } },

    { id: 16, 
        textoEvento: "Los alumnos se quejan de esperar la combi.", 
        imagen: "combi.png", 
        textoOpcion1: "Pedir que se construya una estacion del teleferico cerca de la escuela.", 
        impactoOpcion1: { economia: -15, sociedad: 20, medioAmbiente: 10 }, 
        textoOpcion2: "Ignorar las quejas.", 
        impactoOpcion2: { economia: 5, sociedad: -20, medioAmbiente: -5 } },

    { id: 17, 
        textoEvento: "Se planea una reforestación masiva en el campus.", 
        imagen: "Arbol.png", 
        textoOpcion1: "Comprar árboles.", 
        impactoOpcion1: { economia: -15, sociedad: 10, medioAmbiente: 20 }, 
        textoOpcion2: "Pedir donaciones.", 
        impactoOpcion2: { economia: 5, sociedad: 10, medioAmbiente: 10 } },

    { id: 18, 
        textoEvento: "El sistema de aire acondicionado en la biblioteca y laboratorios gasta demasiada energía eléctrica.", 
        imagen: "billete.png", 
        textoOpcion1: "Limitar su uso.", 
        impactoOpcion1: { economia: 15, sociedad: 10, medioAmbiente: 15 }, 
        textoOpcion2: "Mantenerlo.", 
        impactoOpcion2: { economia: -15, sociedad: 0, medioAmbiente: -10 } },

    { id: 19, 
        textoEvento: "Hay una zona del Tec con acumulación de escombro antiguo.", 
        imagen: "basura.png", 
        textoOpcion1: "Limpieza profunda.", 
        impactoOpcion1: { economia: -10, sociedad: 20, medioAmbiente: 10 }, 
        textoOpcion2: "Abandonar zona.", 
        impactoOpcion2: { economia: 5, sociedad: -10, medioAmbiente: -5 } },

    { id: 20, 
        textoEvento: "Una asociación civil pide usar la cancha para un torneo benéfico.", 
        imagen: "pelota.png", 
        textoOpcion1: "Prestar gratis.", 
        impactoOpcion1: { economia: -5, sociedad: 20, medioAmbiente: 0 }, 
        textoOpcion2: "Cobrar renta.", 
        impactoOpcion2: { economia: 10, sociedad: 10, medioAmbiente: 0 } }
    ];

        var cartasTutorial = [
            { id: 100, textoEvento: "Bienvenido Director. Cada dia enfrentaras situaciones en el campus. Desliza la carta para elegir.", imagen: null, colorSVG: '#8ac8a8', tituloSVG: 'Bienvenido', textoOpcion1: "Entendido.", impactoOpcion1: { economia: 0, sociedad: 0, medioAmbiente: 0 }, textoOpcion2: "Esperame.", impactoOpcion2: { economia: 0, sociedad: 0, medioAmbiente: 0 }, esTutorial: true },
            { id: 101, textoEvento: "Desliza a la izquierda para la primera opcion. Cada decision afecta las 3 dimensiones.", imagen: null, colorSVG: '#f0a050', tituloSVG: 'Izquierda', textoOpcion1: "Entendido.", impactoOpcion1: { economia: 0, sociedad: 0, medioAmbiente: 0 }, textoOpcion2: "OK.", impactoOpcion2: { economia: 0, sociedad: 0, medioAmbiente: 0 }, esTutorial: true },
            { id: 102, textoEvento: "Desliza a la derecha para la segunda opcion. Si alguna dimension llega a 0% o 100%, pierdes.", imagen: null, colorSVG: '#6ab890', tituloSVG: 'Derecha', textoOpcion1: "¡Comenzar!", impactoOpcion1: { economia: 0, sociedad: 0, medioAmbiente: 0 }, textoOpcion2: "¡Empecemos!", impactoOpcion2: { economia: 0, sociedad: 0, medioAmbiente: 0 }, esTutorial: true },
            { id: 103, textoEvento: "El límite de tiempo para seleccionar una carta es de 30s",imagen: null, colorSVG: '#ff746c',tituloSVG: 'Tiempo', textoOpcion1: "Entendido.", impactoOpcion1: { economia: 0, sociedad: 0, medioAmbiente: 0 }, textoOpcion2: "Listo.", impactoOpcion2: { economia: 0, sociedad: 0, medioAmbiente: 0 }, esTutorial: true}
        ];

        var economia = 50, sociedad = 50, medioAmbiente = 50;
        var contadorSemanas = 1, cartaActual = null, indiceCartasUsadas = [];
        var juegoActivo = false, animandoCarta = false, pasoTutorialActual = 0;

        var pantallaSplash = document.getElementById('pantallaSplash');
        var pantallaInicio = document.getElementById('pantallaInicio');
        var pantallaTutorial = document.getElementById('pantallaTutorial');
        var pantallaJuego = document.getElementById('pantallaJuego');
        var pantallaGameOver = document.getElementById('pantallaGameOver');
        var tutorialContenido = document.getElementById('tutorialContenido');
        var zonaJuego = document.getElementById('zonaJuego');
        var cartaContenedor = document.getElementById('cartaContenedor');
        var cartaWrapper = document.getElementById('cartaWrapper');
        var cartaFrente = document.getElementById('cartaFrente');
        var indicadorIzquierda = document.getElementById('indicadorIzquierda');
        var indicadorDerecha = document.getElementById('indicadorDerecha');
        var barraEconomia = document.getElementById('barraEconomia');
        var barraSociedad = document.getElementById('barraSociedad');
        var barraMedioAmbiente = document.getElementById('barraMedioAmbiente');
        var contadorSemanasElemento = document.getElementById('contadorSemanas');

        function iniciarSplash() {
            var s1 = document.getElementById('splash1');
            var s2 = document.getElementById('splash2');
            var s3 = document.getElementById('splash3');

            setTimeout(function() { s1.classList.add('activa'); }, 500);
            setTimeout(function() { s1.classList.remove('activa'); }, 4500);
            setTimeout(function() { s2.classList.add('activa'); }, 5500);
            setTimeout(function() { s2.classList.remove('activa'); }, 9500);
            setTimeout(function() { s3.classList.add('activa'); }, 10500);
            setTimeout(function() { s3.classList.remove('activa'); }, 14500);
            setTimeout(function() {
                pantallaSplash.style.display = 'none';
                pantallaInicio.style.display = 'flex';
            }, 16000);
        }

        function iniciarTutorial() {
            pantallaInicio.style.display = 'none';
            pantallaTutorial.style.display = 'flex';
            pasoTutorialActual = 0;
            mostrarPasoTutorial();
        }

        function mostrarPasoTutorial() {
            var paso = cartasTutorial[pasoTutorialActual];
            var total = cartasTutorial.length;
            var flechaHTML = '';
            if (pasoTutorialActual === 1) flechaHTML = '<div class="tutorial-flechas"><div class="tutorial-flecha izquierda"><span class="flecha-icono">◄</span><span class="flecha-label">Izquierda</span></div></div>';
            else if (pasoTutorialActual === 2) flechaHTML = '<div class="tutorial-flechas"><div class="tutorial-flecha derecha"><span class="flecha-icono">►</span><span class="flecha-label">Derecha</span></div></div>';
            var puntosHTML = '';
            for (var i = 0; i < total; i++) puntosHTML += '<div class="tutorial-punto ' + (i === pasoTutorialActual ? 'activo' : '') + '"></div>';

            var cartaHTML = '<div class="tutorial-carta-demo"><div class="tcd-imagen"><svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tg' + paso.id + '" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:' + paso.colorSVG + '" stop-opacity="0.3"/><stop offset="100%" style="stop-color:' + paso.colorSVG + '" stop-opacity="0.1"/></linearGradient></defs><rect width="220" height="140" fill="url(#tg' + paso.id + ')" rx="10"/><circle cx="110" cy="65" r="22" fill="' + paso.colorSVG + '" opacity="0.25"/></svg></div><div class="tcd-texto"><h3 style="font-size:0.7rem;text-transform:uppercase;letter-spacing:1px;color:#8a9a8a;margin-bottom:0.2rem;font-weight:800;">Situacion</h3><p style="font-size:0.8rem;color:#5a6a5a;line-height:1.3;font-weight:600;">' + paso.textoEvento + '</p></div></div>';

            var titulos = ['Bienvenido, Director', 'Desliza a la izquierda', 'Desliza a la derecha', 'Tiempo limite'];
            tutorialContenido.innerHTML = '<div class="tutorial-indicadores">' + puntosHTML + '</div>' + cartaHTML + '<div class="tutorial-titulo">' + titulos[pasoTutorialActual] + '</div><p class="tutorial-descripcion">' + paso.textoEvento + '</p>' + flechaHTML + '<button class="boton-tutorial" onclick="siguientePasoTutorial()">' + (pasoTutorialActual < total - 1 ? 'Siguiente' : '¡Comenzar!') + '</button>';
        }

        function siguientePasoTutorial() {
            pasoTutorialActual++;
            if (pasoTutorialActual >= cartasTutorial.length) iniciarJuego();
            else mostrarPasoTutorial();
        }

        function iniciarJuego() {
            pantallaTutorial.style.display = 'none';
            pantallaGameOver.style.display = 'none';
            pantallaJuego.style.display = 'flex';
            economia = 50; sociedad = 50; medioAmbiente = 50;
            contadorSemanas = 1; indiceCartasUsadas = [];
            juegoActivo = true; animandoCarta = false;
            cartaContenedor.style.transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
            cartaContenedor.style.opacity = '1'; cartaContenedor.style.transition = '';
            cartaWrapper.style.transition = '';
            limpiarCambioStats(); actualizarMetricas(); seleccionarCarta();iniciarTimer();
        }

        function seleccionarCarta() {
            if (indiceCartasUsadas.length >= cartas.length) indiceCartasUsadas = [];
            var idx;
            do { idx = Math.floor(Math.random() * cartas.length); } while (indiceCartasUsadas.includes(idx));
            indiceCartasUsadas.push(idx);
            cartaActual = cartas[idx];
            mostrarCartaEnFrente(cartaFrente, cartaActual);
            indicadorIzquierda.querySelector('.indicador-texto').textContent = cartaActual.textoOpcion1;
            indicadorDerecha.querySelector('.indicador-texto').textContent = cartaActual.textoOpcion2;
            contadorSemanasElemento.textContent = contadorSemanas;
        }

        function mostrarCartaEnFrente(contenedor, carta) {
            var html = '<div class="carta-imagen-contenedor" id="imgCont"></div>' +
                '<div class="carta-texto">' +
                '<h3>Situacion del Campus</h3>' +
                '<p>' + carta.textoEvento + '</p>' +
                '</div>';
            contenedor.innerHTML = html;
            contenedor.style.display = 'flex';
            contenedor.style.flexDirection = 'column';

            var contImg = contenedor.querySelector('.carta-imagen-contenedor');

            if (carta.imagen) {
                var img = document.createElement('img');
                img.classList.add('carta-imagen');
                img.src = 'img/' + carta.imagen;
                img.onload = function() { contImg.innerHTML = ''; contImg.appendChild(img); };
                img.onerror = function() {
                    contImg.innerHTML = '<div class="carta-imagen-placeholder">Imagen</div>';
                };
                if (img.complete && img.naturalHeight === 0) {
                    contImg.innerHTML = '<div class="carta-imagen-placeholder">Imagen</div>';
                }
            } else {
                contImg.innerHTML = '<div class="carta-imagen-placeholder">Imagen</div>';
            }
        }

        var arrastreActivo = false;
        var inicioX = 0, inicioY = 0, desplazamientoX = 0, desplazamientoY = 0;

        function iniciarArrastre(e) {
            if (!juegoActivo || animandoCarta) return;
            arrastreActivo = true;
            var p = e.touches ? e.touches[0] : e;
            inicioX = p.clientX; inicioY = p.clientY;
            desplazamientoX = 0; desplazamientoY = 0;
            cartaContenedor.style.transition = 'none';
            cartaWrapper.style.transition = 'none';
            e.preventDefault();
        }

        function moverArrastre(e) {
            if (!arrastreActivo) return;
            var p = e.touches ? e.touches[0] : e;
            desplazamientoX = p.clientX - inicioX;
            desplazamientoY = (p.clientY - inicioY) * 0.3;
            var rot = desplazamientoX * 0.06;
            var esc = Math.max(0.92, 1 - Math.abs(desplazamientoX) * 0.0005);
            cartaContenedor.style.transform = 'translateX(' + desplazamientoX + 'px) translateY(' + desplazamientoY + 'px) rotate(' + rot + 'deg) scale(' + esc + ')';
            var umbral = 50;
            if (desplazamientoX < -umbral) { indicadorIzquierda.classList.add('activo'); indicadorDerecha.classList.remove('activo'); }
            else if (desplazamientoX > umbral) { indicadorDerecha.classList.add('activo'); indicadorIzquierda.classList.remove('activo'); }
            else { indicadorIzquierda.classList.remove('activo'); indicadorDerecha.classList.remove('activo'); }
            e.preventDefault();
        }

        function soltarArrastre(e) {
            if (!arrastreActivo) return;
            arrastreActivo = false;
            indicadorIzquierda.classList.remove('activo');
            indicadorDerecha.classList.remove('activo');
            if (desplazamientoX < -100) ejecutarDecision(1);
            else if (desplazamientoX > 100) ejecutarDecision(2);
            else {
                cartaContenedor.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
                cartaContenedor.style.transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
                setTimeout(function() { cartaContenedor.style.transition = ''; }, 400);
            }
        }

        cartaContenedor.addEventListener('mousedown', iniciarArrastre);
        document.addEventListener('mousemove', moverArrastre);
        document.addEventListener('mouseup', soltarArrastre);
        cartaContenedor.addEventListener('touchstart', iniciarArrastre, { passive: false });
        document.addEventListener('touchmove', moverArrastre, { passive: false });
        document.addEventListener('touchend', soltarArrastre);

        function obtenerSiguienteCarta() {
            if (indiceCartasUsadas.length >= cartas.length) indiceCartasUsadas = [];
            var idx;
            do { idx = Math.floor(Math.random() * cartas.length); } while (indiceCartasUsadas.includes(idx));
            indiceCartasUsadas.push(idx);
            return cartas[idx];
        }

        function ejecutarDecision(opcion) {
            if (!juegoActivo || animandoCarta) return;
            animandoCarta = true; juegoActivo = false;
            var impacto = opcion === 1 ? cartaActual.impactoOpcion1 : cartaActual.impactoOpcion2;
            var proximaCarta = obtenerSiguienteCarta();
            var dirX = opcion === 1 ? -800 : 800;
            var rotF = opcion === 1 ? -30 : 30;
            cartaContenedor.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease';
            cartaContenedor.style.transform = 'translateX(' + dirX + 'px) translateY(20px) rotate(' + rotF + 'deg) scale(0.85)';
            cartaContenedor.style.opacity = '0';
            mostrarCambioStats(impacto);

            setTimeout(function() {
                economia = Math.max(0, Math.min(100, economia + impacto.economia));
                sociedad = Math.max(0, Math.min(100, sociedad + impacto.sociedad));
                medioAmbiente = Math.max(0, Math.min(100, medioAmbiente + impacto.medioAmbiente));
                actualizarMetricas();

                if (verificarDerrota()) { animandoCarta = false; return; }

                contadorSemanas++;
                mostrarCartaEnFrente(cartaFrente, proximaCarta);
                indicadorIzquierda.querySelector('.indicador-texto').textContent = proximaCarta.textoOpcion1;
                indicadorDerecha.querySelector('.indicador-texto').textContent = proximaCarta.textoOpcion2;
                contadorSemanasElemento.textContent = contadorSemanas;

                cartaContenedor.style.transition = 'none';
                cartaContenedor.style.transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
                cartaContenedor.style.opacity = '1';
                cartaContenedor.offsetHeight;
                cartaWrapper.classList.add('volteando');

                setTimeout(function() {
                    cartaWrapper.classList.remove('volteando');
                    cartaWrapper.style.transform = '';
                    cartaActual = proximaCarta;
                    animandoCarta = false; juegoActivo = true;
                }, 720);
            }, 420);
            resetTimer();
        }

        function mostrarCambioStats(impacto) {
            var cambios = [
                { el: document.getElementById('cambioEco'), ic: document.getElementById('cambioEcoIcono'), v: impacto.economia },
                { el: document.getElementById('cambioSoc'), ic: document.getElementById('cambioSocIcono'), v: impacto.sociedad },
                { el: document.getElementById('cambioAmb'), ic: document.getElementById('cambioAmbIcono'), v: impacto.medioAmbiente }
            ];
            cambios.forEach(function(c) { c.el.classList.remove('activo', 'positivo', 'negativo'); });
            setTimeout(function() {
                cambios.forEach(function(c, i) {
                    if (c.v !== 0) {
                        var pos = c.v > 0;
                        c.el.classList.add(pos ? 'positivo' : 'negativo');
                        c.ic.textContent = pos ? '▲' : '▼';
                        c.el.classList.add('activo');
                        setTimeout(function() { c.el.classList.remove('activo'); }, 1500 + i * 100);
                    }
                });
            }, 100);
            
        }

        function limpiarCambioStats() {
            ['cambioEco', 'cambioSoc', 'cambioAmb'].forEach(function(id) {
                document.getElementById(id).classList.remove('activo', 'positivo', 'negativo');
            });
        }

        function obtenerColorBarra(valor) {
            if (valor >= 40 && valor <= 60) return 'verde';
            else if ((valor > 15 && valor < 40) || (valor > 60 && valor < 85)) return 'naranja';
            else return 'rojo';
        }

        function actualizarMetricas() {
            barraEconomia.style.width = economia + '%';
            barraSociedad.style.width = sociedad + '%';
            barraMedioAmbiente.style.width = medioAmbiente + '%';
            barraEconomia.className = 'metrica-barra ' + obtenerColorBarra(economia);
            barraSociedad.className = 'metrica-barra ' + obtenerColorBarra(sociedad);
            barraMedioAmbiente.className = 'metrica-barra ' + obtenerColorBarra(medioAmbiente);
            barraEconomia.classList.toggle('peligro', economia <= 10 || economia >= 90);
            barraSociedad.classList.toggle('peligro', sociedad <= 10 || sociedad >= 90);
            barraMedioAmbiente.classList.toggle('peligro', medioAmbiente <= 10 || medioAmbiente >= 90);
            
        }

        function actualizarRecord(semanasActuales) {

            let record = localStorage.getItem("recordSemanas");
            const mensajeRecord =
            document.getElementById("nuevoRecord");
            mensajeRecord.classList.remove("activo");
            if (record === null) {
            record = 0;
            }
            record = Number(record);
            if (semanasActuales > record) {
            localStorage.setItem("recordSemanas",semanasActuales );
                record = semanasActuales;
                mensajeRecord.classList.add("activo");
            }
            document.getElementById( "recordSemanas" ).textContent = record;
        }

        function verificarDerrota() {
            var dim = '', nom = '', raz = '';

            if (economia <= 0) {
                dim = 'economia';
                nom = 'Economia';
                raz = 'El presupuesto se agoto.';
            }
            else if (economia >= 100) {
                dim = 'economia';
                nom = 'Economia';
                raz = 'Exceso de presupuesto, corrupcion detectada.';
            }
            else if (sociedad <= 0) {
                dim = 'sociedad';
                nom = 'Sociedad';
                raz = 'Protestas masivas obligaron tu renuncia.';
            }
            else if (sociedad >= 100) {
                dim = 'sociedad';
                nom = 'Sociedad';
                raz = 'Enfoque exclusivo en bienestar, colapso financiero.';
            }
            else if (medioAmbiente <= 0) {
                dim = 'medioAmbiente';
                nom = 'Medio Ambiente';
                raz = 'Colapso ecologico del campus.';
            }
            else if (medioAmbiente >= 100) {
                dim = 'medioAmbiente';
                nom = 'Medio Ambiente';
                raz = 'Enfoque extremo en ecologia, campus inviable.';
            }
            else if (tiempo <= 0) {
                dim = 'tiempo';
                nom = 'Tiempo';
                raz = 'Tiempo de seleccion de carta agotado.';
            }

            if (dim !== '') {
                setTimeout(function() {
                document.getElementById('motivoDerrota').textContent = raz;
                document.getElementById('metricaCritica').textContent = nom + ' colapso';
                document.getElementById('semanasFinales').textContent = contadorSemanas;
                actualizarRecord(contadorSemanas);
                pantallaGameOver.style.display = 'flex';
                }, 600);

                return true;
            }

                return false;
        }

        function reiniciarJuego() {
            pantallaGameOver.style.display = 'none';
            cartaContenedor.style.transition = '';
            cartaContenedor.style.transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
            cartaContenedor.style.opacity = '1';
            cartaWrapper.style.transition = '';
            cartaWrapper.classList.remove('volteando');
            iniciarJuego();
            resetTimer();
        }

        iniciarSplash();

        let tiempo = 30000;
        var intervalo;
        
        function iniciarTimer() {
            const timer = document.getElementById("cronometro");
            intervalo = setInterval(() => {
                tiempo -= 10;
                let segundos = (tiempo / 1000).toFixed(2);
                timer.textContent = segundos;
                if (tiempo <= 5000) {
                    timer.style.backgroundColor = "#FF746C";
                } 
                else if (tiempo <= 15000) {
                    timer.style.backgroundColor = "#f7bd56";
                }
                if (tiempo <= 10000) {
                    timer.classList.add("alerta");
                } else {
                    timer.classList.remove("alerta");
                }
                if (tiempo <= 0) {
                    clearInterval(intervalo);
                    timer.textContent = "0.00";
                    verificarDerrota();
                }
            }, 10);
        }
        function resetTimer(){
            clearInterval(intervalo);
            tiempo = 30000;
            const timer = document.getElementById("cronometro");
            timer.textContent = "30.00";
            timer.style.backgroundColor = "";
            timer.classList.remove("alerta");
            iniciarTimer();
        }