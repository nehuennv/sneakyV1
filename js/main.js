let crearButton = document.querySelector('.crearButton')
let playButton = document.querySelector('.playButton')
let createToggle = document.querySelector('.createToggle')
let cancelButton = document.querySelector('.cancelButton')
let addButtonWord = document.querySelector('.addButtonWord')
let containerPalabras = document.querySelector('.containerPalabras')
let containerOptions = document.querySelector('.containerOptions')
let inicioInfo = document.querySelector('.inicioInfo')
let removeOption = document.querySelector('.removeOption')
let saveButton = document.querySelector('.saveButton')
let buttonFrases = document.querySelector('.buttonFrases')
let containerFrases = document.querySelector('.containerFrases')
let containerMain = document.querySelector('.containerMain')
let buttonPalabras = document.querySelector('.buttonPalabras')
let voiceButton = document.querySelector('.voiceButton')
let main = document.querySelector('main')
let searcher = document.querySelector('.searcher')
let logoHeader = document.querySelector('.logoHeader')
let welcomeSpeako = document.querySelector('.welcomeSpeako')
let acceptWelcome = document.querySelector('.acceptWelcome')
let rangeVoice = document.querySelector('#rate')

logoHeader.addEventListener('click',()=>{
  welcomeSpeako.classList.add('welcomeSpeakoOn')
  acceptWelcome.addEventListener('click', ()=>{
    welcomeSpeako.classList.remove('welcomeSpeakoOn')
  })
})


let optionsWords = []

let optionFrases = []


if(JSON.parse(localStorage.getItem('allOptions'))){

  let pushedLS = JSON.parse(localStorage.getItem('allOptions'))
  if(Array.isArray(pushedLS)){
    pushedLS.forEach(el => {
      inicioInfo.style.display = 'none';

      let newDiv = document.createElement("div")
      newDiv.className = "optionWord optionWord" + el

      newDiv.innerHTML=
      `
      <p>${el}</p>
      `
      containerOptions.appendChild(newDiv)

      let wordSelected = document.querySelector('.optionWord'+ el)
      wordSelected.addEventListener("click", ()=>{
        let stringWordSelected = wordSelected.textContent.replace(/\s+/g, '') 
        

        addFinalText(stringWordSelected)



      })
    });

  }

}else{
  
}

if(JSON.parse(localStorage.getItem('allFrases'))){

  let frasesLS = JSON.parse(localStorage.getItem('allFrases'))
  if(Array.isArray(frasesLS)){
    frasesLS.forEach(el => {

      let textFrases = document.querySelector('.textFrases')
      if(!textFrases.textContent.length == 0){
        textFrases.textContent = ""
      }
      let newDiv = document.createElement("div")
    
      let classSaved = el.split(" ")

      newDiv.className = "savedWord savedWord" + "-" +   classSaved.join('-')

      newDiv.innerHTML=
      `
      <p>${el}</p>
      `
      containerFrases.appendChild(newDiv)
    
      let savedOption = document.querySelector('.savedWord' + "-" +   classSaved.join('-'))
    
      savedOption.addEventListener("click",()=>{
        
        let textPrevious = document.querySelector('.textPrevious')
        textPrevious.style.color ="#fff"
        textPrevious.style.fontWeight ="500"
        textPrevious.textContent = savedOption.textContent
      })
    });

  }

}

////////////cargar voces

buttonPalabras.classList.add('headerPalabrasOn')

const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

vocesDisponibles = [];

  let posibleIndice = 0

  const $voces = document.querySelector("#voces")

  const cargarVoces = () => {
    if (vocesDisponibles.length > 0) {
      console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
      return;
    }
    vocesDisponibles = speechSynthesis.getVoices();
    console.log({ vocesDisponibles })
    posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
    if (posibleIndice === -1) posibleIndice = 0;
    vocesDisponibles = speechSynthesis.getVoices();
    console.log({ vocesDisponibles })
    posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
    if (posibleIndice === -1) posibleIndice = 0;
    vocesDisponibles.forEach((voz, indice) => {
      const opcion = document.createElement("option");
      opcion.value = indice;
      opcion.innerHTML = voz.name;
      opcion.selected = indice === posibleIndice;
      $voces.appendChild(opcion);
    })
  };


  cargarVoces();
  if ('onvoiceschanged' in speechSynthesis) {
    speechSynthesis.onvoiceschanged = function () {
      cargarVoces();
    };
  }








//////////////////logica crear boton
crearButton.addEventListener("click", ()=>{
    createToggle.classList.add('createToggleON')
    createToggle.classList.add('createToggleONBackground')

    cancelButton.addEventListener("click",()=>{
      createToggle.classList.remove('createToggleON')
      createToggle.classList.remove('createToggleONBackground')
    })
    

    
  })


  addButtonWord.addEventListener("click", ()=>{
     
    let wordForAdd = document.getElementById('createWord').value;
    document.getElementById('createWord').value = ""
    

    let duplicate = optionsWords.find(el=> el == wordForAdd)


        if(duplicate){
          Toastify({
            text:'Esa palabra ya esta en biblioteca',
            duration: 2500,
            gravity: "top",
            position: "center", 
            stopOnFocus: true, 
            style: {
              cursor:"default",
              fontSize:"14px",
              background: "#C9308C",
              borderRadius: "7px"
            },
            onClick: function(){} // Callback after click
          }).showToast();
        }else{


    if (wordForAdd.length == 0){
      Toastify({
        text:'Ingresa una palabra',
        duration: 2500,
        gravity: "top",
        position: "center", 
        stopOnFocus: true, 
        style: {
          cursor:"default",
          fontSize:"14px",
          background: "#C9308C",
          borderRadius: "7px"
        },
        onClick: function(){} // Callback after click
      }).showToast();
      
    }else if(/\s/.test(wordForAdd)){
      Toastify({
        text:'Ingresa una sola palabra',
        duration: 2500,
        gravity: "top",
        position: "center", 
        stopOnFocus: true, 
        style: {
          cursor:"default",
          fontSize:"14px",
          background: "#C9308C",
          borderRadius: "7px"
        },
        onClick: function(){} // Callback after click
      }).showToast();
     }

    else{
      Toastify({
        text:'"' + wordForAdd +'" añadida',
        duration: 2500,
        gravity: "top",
        position: "center", 
        stopOnFocus: true, 
        style: {
          cursor:"default",
          fontSize:"14px",
          background: "#C9308C",
          borderRadius: "7px"
        },
        onClick: function(){} 
      }).showToast();

      inicioInfo = document.querySelector('.inicioInfo')

      inicioInfo.innerHTML = ``

      
      optionsWords.push(wordForAdd)

      if(JSON.parse(localStorage.getItem('allOptions'))){
        let pushedLS = JSON.parse(localStorage.getItem('allOptions'))
        if(Array.isArray(pushedLS)){

          pushedLS.forEach(el => {

            optionsWords.push(el)
          
        });

          let optionsFilter = optionsWords.filter((item, index)=>{
            return optionsWords.indexOf(item)=== index;
          })
          optionsWords = optionsFilter
          localStorage.setItem('allOptions',JSON.stringify(optionsWords))
        }
      }else{
              localStorage.setItem('allOptions',JSON.stringify(optionsWords))
      }






      inicioInfo.style.display = 'none';

      let newDiv = document.createElement("div")
      newDiv.className = "optionWord optionWord" + wordForAdd

      newDiv.innerHTML=
      `
      <p>${wordForAdd}</p>
      `
      containerOptions.appendChild(newDiv)

      let wordSelected = document.querySelector('.optionWord'+ wordForAdd)
      wordSelected.addEventListener("click", ()=>{
        let stringWordSelected = wordSelected.textContent.replace(/\s+/g, '') 
        

        addFinalText(stringWordSelected)



      })
      


    }

  }

})
  
  function addFinalText (string){
    let previewText = document.querySelector('.resultFraseContainer')
    let textPrevious = document.querySelector('.textPrevious')

    textPrevious.style.color ="#fff"
    textPrevious.style.fontWeight ="500"

    if(textPrevious.textContent == "Tu frase aparecera aqui"){
      textPrevious.textContent= ""
    }



      removeOption.addEventListener("click", ()=>{
        textPrevious.textContent = "Tu frase aparecera aqui"
        textPrevious.style.color ="rgba(255, 255, 255, 0.45)"
        textPrevious.style.fontWeight ="300"
      })
      if(textPrevious.textContent.length == 0){
        textPrevious.textContent = textPrevious.textContent + string
      }else{
      textPrevious.textContent = textPrevious.textContent + " " + string
      }

    
  }
  function playText(){
    let textPrevious = document.querySelector('.textPrevious')



    let message = new SpeechSynthesisUtterance();

    message.voice= window.speechSynthesis.getVoices()[$voces.value]

    
    message.lang = 'es-AR'

    message.volume = 3;
    message.rate = rangeVoice.value;
    message.text = textPrevious.textContent.replace(/(\r\n|\n|\r)/gm, "")
    message.pitch = 1;


    console.log(message.text)


    speechSynthesis.speak(message)
  }



playButton.addEventListener("click", ()=>{



  let textPrevious = document.querySelector('.textPrevious')

  if(textPrevious.textContent == 'Tu frase aparecera aqui'){
    Toastify({
      text:'Recuerda ingresar una palabra',
      duration: 2500,
      gravity: "top",
      position: "center", 
      stopOnFocus: true, 
      style: {
        cursor:"default",
        fontSize:"14px",
        background: "#C9308C",
        borderRadius: "7px"
      },
      onClick: function(){} 
    }).showToast();
  }else{
    playText()
  }


})

let genderVoiceButton = document.querySelector('.voiceButton')
let menuGenderBackground = document.querySelector('.menuGenderBackground')
let closeGenderSelector = document.querySelector('.closeGenderSelector')

genderVoiceButton.addEventListener('click',()=>{
  menuGenderBackground.classList.toggle('menuGenderBackgroundON')
  voiceButton.classList.toggle('voiceButtonClose')

})

/////////////////////////////////logica Frases Guardadas////////////////////////////////
saveButton.addEventListener("click",()=>{
  
  let textPrevious = document.querySelector('.textPrevious')

  if(textPrevious.textContent == 'Tu frase aparecera aqui'){
    Toastify({
      text:'Recuerda ingresar una palabra',
      duration: 2500,
      gravity: "top",
      position: "center", 
      stopOnFocus: true, 
      style: {
        cursor:"default",
        fontSize:"14px",
        background: "#C9308C",
        borderRadius: "7px"
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }else{
    addFrases(textPrevious.textContent)
    optionFrases.push(textPrevious.textContent)


      if(JSON.parse(localStorage.getItem('allFrases'))){
        let frasesLS = JSON.parse(localStorage.getItem('allFrases'))
        if(Array.isArray(frasesLS)){

          frasesLS.forEach(el => {

            optionFrases.push(el)
          
        });

          let frasesFilter = optionFrases.filter((item, index)=>{
            return optionFrases.indexOf(item)=== index;
          })
          optionFrases = frasesFilter
          localStorage.setItem('allFrases',JSON.stringify(optionFrases))
        }
      }else{
              localStorage.setItem('allFrases',JSON.stringify(optionFrases))
      }

  }
})
function addFrases(string) {
  let textFrases = document.querySelector('.textFrases')
  if(!textFrases.textContent.length == 0){
    textFrases.textContent = ""
  }
  let newDiv = document.createElement("div")

  let classSaved = string.split(" ")


  newDiv.className = "savedWord savedWord" + "-" +   classSaved.join('-')

  newDiv.innerHTML=
  `
  <p>${string}</p>
  `
  containerFrases.appendChild(newDiv)

  let savedOption = document.querySelector('.savedWord' + "-" +   classSaved.join('-'))

  savedOption.addEventListener("click",()=>{
    
    let textPrevious = document.querySelector('.textPrevious')
    textPrevious.style.color ="#fff"
    textPrevious.style.fontWeight ="500"
    textPrevious.textContent = savedOption.textContent
  })

  Toastify({
    text:'Agregada a frases',
    duration: 2500,
    gravity: "top",
    position: "center", 
    stopOnFocus: true, 
    style: {
      cursor:"default",
      fontSize:"14px",
      background: "#46B990",
      borderRadius: "7px"
    },
    onClick: function(){} 
  }).showToast();
}
buttonFrases.addEventListener("click",()=>{


  buttonFrases.classList.add('headerFrasesOn')
  buttonPalabras.classList.remove('headerPalabrasOn')
  saveButton.style.opacity="0"
  saveButton.style.pointerEvents="none"
  containerFrases.classList.add('containerFrasesOn')
  containerPalabras.classList.add('containerPalabrasOn')


  let textPrevious = document.querySelector('.textPrevious')

  textPrevious.textContent = "Tu frase aparecera aqui"
  textPrevious.style.color ="rgba(255, 255, 255, 0.45)"
  textPrevious.style.fontWeight ="300"

  if(textPrevious.textContent != "Tu frase aparecera aqui"){
    textPrevious.textContent= ""
  }
})
buttonPalabras.addEventListener("click",()=>{

  buttonFrases.classList.remove('headerFrasesOn')
  buttonPalabras.classList.add('headerPalabrasOn')
  saveButton.style.opacity="1"
  saveButton.style.pointerEvents="all"
  containerFrases.classList.remove('containerFrasesOn')
  containerPalabras.classList.remove('containerPalabrasOn')




  let textPrevious = document.querySelector('.textPrevious')

  textPrevious.textContent = "Tu frase aparecera aqui"
  textPrevious.style.color ="rgba(255, 255, 255, 0.45)"
  textPrevious.style.fontWeight ="300"

  if(textPrevious.textContent != "Tu frase aparecera aqui"){
    textPrevious.textContent= ""
  }

})

///////////////////logica Buscador
function createOptions(array){
  array.forEach(el => {
    addFrases(el)
  });
}


  searcher.addEventListener ("input", () =>{

  if (!searcher.value == ""){
    if(JSON.parse(localStorage.getItem('allOptions'))){
      let optionsLS = JSON.parse(localStorage.getItem('allOptions'))
      let optionsSearch = optionsLS.filter(el => el.includes(searcher.value))
      console.log(optionsSearch)
      containerOptions = document.querySelector('.containerOptions')

  
      containerOptions.innerHTML = ``

      if(optionsSearch.length > 0){
  
      optionsSearch.forEach(el => {
        inicioInfo.style.display = 'none';
  
        let newDiv = document.createElement("div")
        newDiv.className = "optionWord optionWord" + el
  
        newDiv.innerHTML=
        `
        <p>${el}</p>
        `
        containerOptions.appendChild(newDiv)
  
        let wordSelected = document.querySelector('.optionWord'+ el)
        wordSelected.addEventListener("click", ()=>{
          let stringWordSelected = wordSelected.textContent.replace(/\s+/g, '') 
          
  
          addFinalText(stringWordSelected)
  
  
  
        })
      })
    }else{
      containerOptions = document.querySelector('.containerOptions')

      containerOptions.innerHTML = `
      <p class = "noResult" >No se encontraron resultados</p>
      `
    }
    }else{
      Toastify({
        text:'Crea tu primer palabra',
        duration: 2500,
        gravity: "top",
        position: "center", 
        stopOnFocus: true, 
        style: {
          cursor:"default",
          fontSize:"14px",
          background: "#C9308C",
          borderRadius: "7px"
        },
        onClick: function(){} // Callback after click
      }).showToast();
      // containerOptions.innerHTML = ``
      // let div = document.createElement("div")
      // div.className = "crearButton"
      // div.innerHTML = `
      // <p>Crear</p>
      // <img src="./assets/svg/icons/mas.svg" alt="">
      // `
      // let div2 = document.createElement("div")
      // div2.className = 'inicioInfo'
      // div2.innerHTML = `
      // <p>Crea tu biblioteca de palabras para poder formar oraciones y reproducirlas.</p>
      // `

      // containerOptions.appendChild(div)
      // containerOptions.appendChild(div2)

      // let crearButton = document.querySelector('.crearButton')

      // crearButton.addEventListener("click", ()=>{
      //   createToggle.classList.add('createToggleON')
      //   createToggle.classList.add('createToggleONBackground')
    
      //   cancelButton.addEventListener("click",()=>{
      //     createToggle.classList.remove('createToggleON')
      //     createToggle.classList.remove('createToggleONBackground')
      //   })
        
    
        
      // })
    }
  }

  else{
    containerOptions = document.querySelector('.containerOptions')
  
    containerOptions.innerHTML = ``
    if(JSON.parse(localStorage.getItem('allOptions'))){
      let optionsLS = JSON.parse(localStorage.getItem('allOptions'))
      let optionsSearch = optionsLS.filter(el => el.includes(searcher.value))
      console.log(optionsSearch)

      containerOptions = document.querySelector('.containerOptions')
  
      containerOptions.innerHTML = ``

      if(!optionsSearch.length <= 0){
        let div = document.createElement("div")
        div.className = "crearButton"
        div.innerHTML = `
        <p>Crear</p>
        <img src="./assets/svg/icons/mas.svg" alt="">
        `
        containerOptions.appendChild(div)
        let pushedLS = JSON.parse(localStorage.getItem('allOptions'))
        pushedLS.forEach(el => {
          inicioInfo.style.display = 'none';
    
          let newDiv = document.createElement("div")
          newDiv.className = "optionWord optionWord" + el
    
          newDiv.innerHTML=
          `
          <p>${el}</p>
          `
          containerOptions.appendChild(newDiv)
  
          let crearButton = document.querySelector('.crearButton')
  
          crearButton.addEventListener("click", ()=>{
            createToggle.classList.add('createToggleON')
            createToggle.classList.add('createToggleONBackground')
        
            cancelButton.addEventListener("click",()=>{
              createToggle.classList.remove('createToggleON')
              createToggle.classList.remove('createToggleONBackground')
            })
            
        
            
          })
    
          let wordSelected = document.querySelector('.optionWord'+ el)
          wordSelected.addEventListener("click", ()=>{
            let stringWordSelected = wordSelected.textContent.replace(/\s+/g, '') 
            
    
            addFinalText(stringWordSelected)
    
    
    
          })
        })
      }else{
        containerOptions = document.querySelector('.containerOptions')

        containerOptions.innerHTML  = ``

      let div = document.createElement("div")
      div.className = "crearButton"
      div.innerHTML = `
      <p>Crear</p>
      <img src="./assets/svg/icons/mas.svg" alt="">
      `
      containerOptions.appendChild(div)
      let div2 = document.createElement("div")
      div2.className = 'inicioInfo'
      div2.innerHTML = `
      <p>Crea tu biblioteca de palabras para poder formar oraciones y reproducirlas.</p>
      `
      containerOptions.appendChild(div2)

      let crearButton = document.querySelector('.crearButton')

      crearButton.addEventListener("click", ()=>{
        createToggle.classList.add('createToggleON')
        createToggle.classList.add('createToggleONBackground')
    
        cancelButton.addEventListener("click",()=>{
          createToggle.classList.remove('createToggleON')
          createToggle.classList.remove('createToggleONBackground')
        })
        
    
        
      })
      }


    }else{

      containerOptions = document.querySelector('.containerOptions')

    
    containerOptions.innerHTML  = ``

      let div = document.createElement("div")
      div.className = "crearButton"
      div.innerHTML = `
      <p>Crear</p>
      <img src="./assets/svg/icons/mas.svg" alt="">
      `
      containerOptions.appendChild(div)
      let div2 = document.createElement("div")
      div2.className = 'inicioInfo'
      div2.innerHTML = `
      <p>Crea tu biblioteca de palabras para poder formar oraciones y reproducirlas.</p>
      `
      containerOptions.appendChild(div2)

      let crearButton = document.querySelector('.crearButton')

      crearButton.addEventListener("click", ()=>{
        createToggle.classList.add('createToggleON')
        createToggle.classList.add('createToggleONBackground')
    
        cancelButton.addEventListener("click",()=>{
          createToggle.classList.remove('createToggleON')
          createToggle.classList.remove('createToggleONBackground')
        })
        
    
        
      })


  
    
    
}}

  

  })

