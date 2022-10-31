let crearButton = document.querySelector('.crearButton')
let playButton = document.querySelector('.playButton')
let createToggle = document.querySelector('.createToggle')
let cancelButton = document.querySelector('.cancelButton')
let addButtonWord = document.querySelector('.addButtonWord')
let containerPalabras = document.querySelector('.containerPalabras')
let inicioInfo = document.querySelector('.inicioInfo')


let optionsWords = []

////////////cargar voces


const IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];

vocesDisponibles = [];

  let posibleIndice = 0

  const cargarVoces = () => {
    if (vocesDisponibles.length > 0) {
      console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
      return;
    }
    vocesDisponibles = speechSynthesis.getVoices();
    console.log({ vocesDisponibles })
    posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
    if (posibleIndice === -1) posibleIndice = 0;

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
    
    function duplicateWord (word){
      optionsWords.forEach(el => {
        if(el == word){

          console.log(true);;
          
  
        }else{
          console.log(false);
  
        }
      });
    }
    duplicateWord(wordForAdd)


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
        let stringWordSelected = wordSelected.textContent
        addFinalText(stringWordSelected)
      })
      
      

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

      textPrevious.textContent = textPrevious.textContent + " " + string
    
  }
  function playText(){
    let textPrevious = document.querySelector('.textPrevious')

    let checked = document.getElementsByName('genderVoice')

    let message = new SpeechSynthesisUtterance();
    checked.forEach(el => {
      if(el.checked){
      message.voice= window.speechSynthesis.getVoices()[parseInt(el.value)]
        console.log(el.value)
      }else{
        return 108;
      }
    })
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
      onClick: function(){} // Callback after click
    }).showToast();
  }else{
    playText()
  }


})

let genderVoiceButton = document.querySelector('.saveButton')
let menuGenderBackground = document.querySelector('.menuGenderBackground')
let closeGenderSelector = document.querySelector('.closeGenderSelector')

genderVoiceButton.addEventListener('click',()=>{
  menuGenderBackground.classList.add('menuGenderBackgroundON')
  closeGenderSelector.addEventListener('click', ()=>{
    menuGenderBackground.classList.remove('menuGenderBackgroundON')
  })
  let checkedGender = document.getElementsByName('genderVoice')
  checkedGender.forEach(el => {

  });
})


  let checked = document.getElementsByName('genderVoice')
  checked.forEach(el => {
    if(el.checked){
      voiceGender(el.value)
    }else{
      return;
    }
  });


  function voiceGender(num){
    return(num)
  }



  // function CreteOptions(){
  //   let lastOption = optionsWords[optionsWords.length - 1]
  //   lastOption.forEach(el => {
  //     let newDiv = document.createElement("div")
  //     newDiv.className = "optionWord"
  //     newDiv.innerHTML=
  //     `
  //     <p>${el}</p>
  //     `
  //     containerPalabras.appendChild(newDiv)
  //   });
  // };