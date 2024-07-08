// Alura Midi - JavaScript para Web: Crie páginas dinâmicas 

function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio'){    
      elemento.play();    
  }  else {
      alert('Elemento não encontrado ou seletor inválido.'); 
  }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];   

    // Template String
    const idAudio = `#som_${instrumento}`;    

    tecla.onclick = () => {
      tocaSom(idAudio);
    }

    tecla.onkeydown = (event) => {            
      
      if(event.code === 'Space' || event.code ==='Enter'){
        tecla.classList.add('ativa');        
      }
      
    }

    tecla.onkeyup = () => {
      tecla.classList.remove('ativa')
    }

    // console.log(i);

}
