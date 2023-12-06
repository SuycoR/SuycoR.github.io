let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté
const enunciado = [
'De que forma podemos llamar tambien al grupo VIIA ?',  /* 0 */
'Tipo de mezcla que tiene las mismas propiedades en toda su extensión.',     /* 1 */
'Tipo de reacción que ocurre entre un ácido y una base.',     /* 2 */
'Reacción química en la que átomos, iones o moléculas pierden electrones.',     /* 3 */
'La capacidad de un átomo para atraer electrones se llama...',     /* 4 */
'Cuando las reacciones inversas reaccionan a la misma velocidad decimos que se ha conseguido un ...',     /* 5 */
'Las partículas cargadas positivamente que se encuentran en el núcleo del átomo se llaman ...',      /* 6 */
'Toda reacción de combustión implica un proceso.',      /* 7 */
'¿Qué tipo de transformación se produce cuando una sustancia pasa de su estado gaseoso a su estado sólido?',
'Ácido producido por el estómago para facilitar la digestión.',
'Elemento común en todas las fórmulas ácidas.',
'Tipo de reacción química que libera energía en forma de calor',
'Que elemento quimico posee el numero atómico 16',
'La xxxxxx es una propiedad general que se define como la resistencia de un cuerpo a la penetracion o abrasión de su superficie.',
'¿Qué cientifico propuso que el átomo era una esfera sólida de material con carga positiva con electrones negativos clavados, como uvas pasas en una torta o pudín?',
'¿Cómo se llama el cambio de estado de gaseoso a sólido, sin pasar por líquido?',
'¿Cuál es el elemento más electronegativo?'
]
const palabras = [
    'gases nobles',     /* 0 */
    'homogenea',     /* 1 */
    'neutralizacion',    /* 2 */
    'oxidacion',       /* 3 */
    'electronegatividad',     /* 4 */
    'equilibrio quimico',       /* 5 */
    'protones',   /* 6 */
    'exotermico',     /* 7 */
    'sublimacion',
    'clorhidrico',
    'hidrógeno',
    'exotermica',
    'oxigeno',
    'impenetrabilidad',
    'thomsom',
    'sublimacion inversa',
    'fluor'
];
const btn = id('jugar');
const imagen = id( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );
const enunciadoElement = id('enunciado');
/* click en iniciar juego */
btn.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );
    const preguntaSeleccionada = enunciado[valor_al_azar];
    enunciadoElement.textContent = preguntaSeleccionada; 
    console.log(preguntaSeleccionada);

    palabrita = palabras[ valor_al_azar ].replace(/ /g, '_');
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        if (palabrita[i] === '_') {
            span.innerHTML = '&nbsp;';
        } else {
            span.innerHTML = '_';
        }
        parrafo.appendChild( span );
    }
    
}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 7 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabrita;
        game_over( );
    }else if( cant_aciertos == palabrita.length ){
        id('resultado').innerHTML = "GANASTE FISIPANA";
        game_over( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}


/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }

    btn.disabled = false;
}


game_over( );