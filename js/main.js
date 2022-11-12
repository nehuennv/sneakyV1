let crearButton = document.querySelector('.crearButton')
let playButton = document.querySelector('.playButton')
let createToggle = document.querySelector('.createToggle')
let cancelButton = document.querySelector('.cancelButton')
let addButtonWord = document.querySelector('.addButtonWord')
let containerPalabras = document.querySelector('.containerPalabras')
let inicioInfo = document.querySelector('.inicioInfo')
let removeOption = document.querySelector('.removeOption')
let saveButton = document.querySelector('.saveButton')
let buttonFrases = document.querySelector('.buttonFrases')
let containerFrases = document.querySelector('.containerFrases')
let containerMain = document.querySelector('.containerMain')
let buttonPalabras = document.querySelector('.buttonPalabras')
let main = document.querySelector('main')



let optionsWords = []

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




//////////////////////buscar localstorage y crear opciones
//optionsWords.forEach(el => {
 // console.log(el)
//});
////////////////////////prueba speacher



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
      optionsWords.push(wordForAdd)
      JSON.stringify(localStorage.setItem('allOptions',optionsWords))


      inicioInfo.style.display = 'none';

      let newDiv = document.createElement("div")
      newDiv.className = "optionWord optionWord" + optionsWords[optionsWords.length - 1]

      newDiv.innerHTML=
      `
      <p>${optionsWords[optionsWords.length - 1]}</p>
      `
      containerPalabras.appendChild(newDiv)

      let wordSelected = document.querySelector('.optionWord'+ optionsWords[optionsWords.length - 1])
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
    message.rate = 1;
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
  menuGenderBackground.classList.add('menuGenderBackgroundON')
  closeGenderSelector.addEventListener('click', ()=>{
    menuGenderBackground.classList.remove('menuGenderBackgroundON')
  })

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

  // let heightPalabras = window.getComputedStyle(containerPalabras);
  // let containerPalabrasHeight = heightPalabras.getPropertyValue('height');
  // main.style.height = "max-content"

  // let heightFrases = window.getComputedStyle(containerFrases);
  // let containerFrasesHeight = heightFrases.getPropertyValue('height');
  // console.log(containerFrasesHeight);

  // containerFrases.style.height = containerFrasesHeight

  buttonFrases.classList.add('headerFrasesOn')
  buttonPalabras.classList.remove('headerPalabrasOn')
  saveButton.style.opacity="0"
  saveButton.style.pointerEvents="none"
  main.classList.add('containerFrasesOn')
  containerFrases.classList.remove('overYHidden')
  containerPalabras.classList.add('overYHidden')

  let textPrevious = document.querySelector('.textPrevious')

  textPrevious.textContent = "Tu frase aparecera aqui"
  textPrevious.style.color ="rgba(255, 255, 255, 0.45)"
  textPrevious.style.fontWeight ="300"

  if(textPrevious.textContent != "Tu frase aparecera aqui"){
    textPrevious.textContent= ""
  }
})
buttonPalabras.addEventListener("click",()=>{


  // let heightFrases = window.getComputedStyle(containerFrases);
  // let containerFrasesHeight = heightFrases.getPropertyValue('height');
  // console.log(containerFrasesHeight);

  // main.style.height = "max-content"

  // let heightPalabras = window.getComputedStyle(containerPalabras);
  // let containerPalabrasHeight = heightPalabras.getPropertyValue('height');
  // containerPalabras.style.height = containerPalabrasHeight
  buttonFrases.classList.remove('headerFrasesOn')
  buttonPalabras.classList.add('headerPalabrasOn')
  saveButton.style.opacity="1"
  saveButton.style.pointerEvents="all"
  main.classList.remove('containerFrasesOn')
  containerFrases.classList.add('overYHidden')
  containerPalabras.classList.remove('overYHidden')



  let textPrevious = document.querySelector('.textPrevious')

  textPrevious.textContent = "Tu frase aparecera aqui"
  textPrevious.style.color ="rgba(255, 255, 255, 0.45)"
  textPrevious.style.fontWeight ="300"

  if(textPrevious.textContent != "Tu frase aparecera aqui"){
    textPrevious.textContent= ""
  }

})