let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asinarTextoElemento (elemento,texto) 
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () 
{
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     //   console.log(intentos);
     //   console.log (typeof(numeroDeUsuerio)); 
     //   console.log(numeroDeUsuario);
     //   console.log (typeof(numeroSecreto));
     //  console.log (numeroSecreto);  
     //   console.log (numeroDeUsuerio === numeroSecreto);
      if (numeroDeUsuario === numeroSecreto) {
          asinarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');      
                                             }                               
         else {
         //el usuario no acerto 
         if (numeroDeUsuario > numeroSecreto){
         asinarTextoElemento('p','Numero secreto es menor');
                                             }
         else {
         asinarTextoElemento('p','Numero secreto es mayor');
              }   
            intentos++;    
            limpiarCaja();                              
              }
    return;
}

function limpiarCaja ()
{
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto ()  
{
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);  
    console.log (listaDeNumerosSorteados);     

    //si ya sorteamos todos los numeros 
  if(listaDeNumerosSorteados.length == numeroMaximo)
    {
      asinarTextoElemento ('p','Ya se sortearon todos los elementos posibles');
    } 
    else
    {
      //si el numero generado esta incluido en la lista hacemos algo si no no 
      if (listaDeNumerosSorteados.includes(numeroGenerado))
      { return generarNumeroSecreto();}
      else  {
      listaDeNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
            }
    }
}

function condicionesIniciales() 
{
   asinarTextoElemento ('h1','juego del numero secreto');
   asinarTextoElemento ('p',`indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto ();
   intentos = 1; 
}

function reiniciarJuego ()
{
  //limpiar caja
  limpiarCaja();
  //indicar mensajes de inicio, generar nuevo numero aleatorio y iniciar los intentos
  condicionesIniciales();
  //desabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();                          