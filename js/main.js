let sneakersPopularContainer = document.querySelector('.sneakersPopularContainer')
let sneakerSelected = document.querySelector('.sneakerSelected')
let closeSneakerCard = document.querySelector('.closeSneakerCard')
let logoHeader = document.querySelector('.logoHeader')
let myCartButton = document.querySelector(".myCartButton")
let sectionCart = document.querySelector(".sectionCart")
let allSneakersCon = document.querySelector('.allSneakers')
let homeButton = document.querySelector('.homeButton')
let catalogButton = document.querySelector('.catalogButton')
let mainSneakers = document.querySelector('.mainSneakers')
let body = document.querySelector('.body')
let main = document.querySelector('.main')
let clearButton = document.querySelector('.clearButton')
let purSecondStp = document.querySelector('.buttonPurchase-SecondStep')
let sectionCartSecondStep = document.querySelector('.sectionCartSecondStep')
let buttonBTSSecondStep = document.querySelector('.buttonBTS-SecondStep')
let buttonDiscount = document.querySelector('.buttonDiscount')
let priceAndCart = document.querySelector('.priceAndCart')
let buttonPurchase = document.querySelector('.buttonPurchase')
let navBarMobile = document.querySelector('.navBarMobile')


if (window.matchMedia("(max-width: 800px)").matches) {
    
    
  }
if (window.matchMedia("(max-width: 600px)").matches) {
    homeButton = document.querySelector('.homeButtonMobile')
    catalogButton = document.querySelector('.sneakerSectionMobile')
    myCartButton = document.querySelector('.myCartMobile')

    window.addEventListener("scroll", ()=>{
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            navBarMobile.classList.remove('navBarMobileON')
        }
    })
  
    }
let cart = []

clearButton.addEventListener("click", ()=>{
    if(JSON.parse(localStorage.getItem('cartAdd'))){
        
        
        if (JSON.parse(localStorage.getItem('cartAdd')).length > 0 ){
            if (window.matchMedia("(max-width: 800px)").matches) {
                Toastify({
                    text: "Cart successfully emptied",
                    duration: 1500,
                    position: "center",
                    stopOnFocus: true, 
                    style: {
                      background: "#5E5E5E",
                      borderRadius: "15px",
                      color: "#DDDDDD",
                      fontSize: "14px",
                      zIndex: "101",
                      fontWeight: "500",
                      paddingInline: "30px",
                      boxShadow: "0px 0px 0px 0px"
                    },
                    onClick: function(){} 
                  }).showToast();
            }else{
                Toastify({
                    text: "Cart successfully emptied",
                    duration: 1500,
                    position: "center",
                    stopOnFocus: true, 
                    style: {
                      background: "#5E5E5E",
                      borderRadius: "15px",
                      color: "#DDDDDD",
                      fontSize: "15px",
                      zIndex: "101",
                      fontWeight: "500",
                      paddingInline: "30px",
                      boxShadow: "0px 0px 0px 0px"
                    },
                    onClick: function(){} 
                  }).showToast();
            }

              localStorage.setItem('cartAdd',JSON.stringify([]))
              let MyCartObjets = document.querySelector('.MyCartObjets')

              MyCartObjets.innerHTML = `
              <p style="text-align: center; position: relative; top: 40%; color: #aaa;">The cart is empty</p>
              `

        }else{
            if (window.matchMedia("(max-width: 800px)").matches) {
                Toastify({
                    text: "There is nothing to clean",
                    duration: 1500,
                    position: "center",
                    stopOnFocus: true, 
                    style: {
                      background: "#5E5E5E",
                      borderRadius: "15px",
                      color: "#DDDDDD",
                      fontSize: "14px",
                      zIndex: "101",
                      fontWeight: "500",
                      paddingInline: "30px",
                      boxShadow: "0px 0px 0px 0px"
                    },
                    onClick: function(){} 
                  }).showToast();
            }else{
                Toastify({
                    text: "There is nothing to clean",
                    duration: 1500,
        
                    position: "center",
                    stopOnFocus: true, 
                    style: {
                      background: "#5E5E5E",
                      borderRadius: "15px",
                      color: "#DDDDDD",
                      fontSize: "15px",
                      zIndex: "101",
                      fontWeight: "500",
                      paddingInline: "30px",
                      boxShadow: "0px 0px 0px 0px"
                    },
                    onClick: function(){} 
                  }).showToast();
            }


            localStorage.setItem('cartAdd',JSON.stringify([]))
            let MyCartObjets = document.querySelector('.MyCartObjets')

            MyCartObjets.innerHTML = `
            <p style="text-align: center; position: relative; top: 40%; color: #aaa;">The cart is empty</p>
            `
        }

        
    }else if (JSON.parse(localStorage.getItem('cartAdd')) == []){
        if (window.matchMedia("(max-width: 800px)").matches) {
            Toastify({
                text: "There is nothing to clean",
                duration: 1500,
                position: "center",
                stopOnFocus: true, 
                style: {
                  background: "#5E5E5E",
                  borderRadius: "15px",
                  color: "#DDDDDD",
                  fontSize: "14px",
                  zIndex: "101",
                  fontWeight: "500",
                  paddingInline: "30px",
                  boxShadow: "0px 0px 0px 0px"
                },
                onClick: function(){} 
              }).showToast();
        }else{
            Toastify({
                text: "There is nothing to clean",
                duration: 1500,
                position: "center",
                stopOnFocus: true, 
                style: {
                  background: "#5E5E5E",
                  borderRadius: "15px",
                  color: "#DDDDDD",
                  fontSize: "15px",
                  zIndex: "101",
                  fontWeight: "500",
                  paddingInline: "30px",
                  boxShadow: "0px 0px 0px 0px"
                },
                onClick: function(){} 
              }).showToast();
        }

              let MyCartObjets = document.querySelector('.MyCartObjets')

              MyCartObjets.innerHTML = `
              <p style="text-align: center; position: relative; top: 40%; color: #aaa;">The cart is empty</p>
              `
        
    }else{
        let MyCartObjets = document.querySelector('.MyCartObjets')

        MyCartObjets.innerHTML = `
        <p style="text-align: center; position: relative; top: 40%; color: #aaa;">The cart is empty</p>
        `
        if (window.matchMedia("(max-width: 800px)").matches) {
            Toastify({
                text: "There is nothing to clean",
                duration: 1500,
                position: "center",
                stopOnFocus: true, 
                style: {
                  background: "#5E5E5E",
                  borderRadius: "15px",
                  color: "#DDDDDD",
                  fontSize: "14px",
                  zIndex: "101",
                  fontWeight: "500",
                  paddingInline: "30px",
                  boxShadow: "0px 0px 0px 0px"
    
                },
    
                onClick: function(){} 
              }).showToast();
        }else{
            Toastify({
                text: "There is nothing to clean",
                duration: 1500,
                position: "center",
                stopOnFocus: true, 
                style: {
                  background: "#5E5E5E",
                  borderRadius: "15px",
                  color: "#DDDDDD",
                  fontSize: "15px",
                  zIndex: "101",
                  fontWeight: "500",
                  paddingInline: "30px",
                  boxShadow: "0px 0px 0px 0px"
    
                },
    
                onClick: function(){} 
              }).showToast();
        }

    }

})
    setInterval(() => {

        if(JSON.parse(localStorage.getItem('cartAdd'))){
        let cartCompleteLS = JSON.parse(localStorage.getItem('cartAdd'))
        
        let MyCartObjets = document.querySelector('.MyCartObjets')
        let totalText = document.querySelector('.totalText')
        
        MyCartObjets.innerHTML = ``
            if (JSON.parse(localStorage.getItem('cartAdd')).length == 0){
                MyCartObjets.innerHTML = `
                <p style="text-align: center; position: relative; top: 40%; color: #aaa;">The cart is empty</p>
                `
            }

        let totalPrice = 0;


        cartCompleteLS.forEach(el => {
            let newDiv = document.createElement("div")
            newDiv.className = "sneakerObjet"

            newDiv.innerHTML = `
            <div class="sneakerDataCart">
            <div class="imageSneakerCart">
                <img src="${el.img}" alt="">
            </div>   
            <div class="sneakerCartName">
                <h3>${el.name}</h3>
                <p>${el.model}</p>
            </div>
        </div>
        <div class="ObjectDataCart">
            <div class="dataCart">
                <p>Amount</p>
                <p class="dataBold">${el.amount}</p>
            </div>
            <div class="dataCart">
                <p>Price</p>
                <p class="dataBold">$${Number(`${(el.price)}`).toLocaleString()}.00</p>
            </div>
            <div class="dataCart">
                <p>Total</p>
                <p class="dataBoldYellow">$${(el.price * el.amount).toLocaleString()}.00</p>
            </div>
        </div>
            `
            MyCartObjets.appendChild(newDiv)

            totalPrice += Number(`${el.price * el.amount}`);
            totalProduct(totalPrice)

        });
        totalText.textContent ='$' + totalPrice.toLocaleString() + '.00'

    }else{
        let MyCartObjets = document.querySelector('.MyCartObjets')

        MyCartObjets.innerHTML = `
        <p style="text-align: center; position: relative; top: 40%; color: #aaa;">The cart is empty</p>
        `
    }

      }, 000);

let totalProductSummary = ""      

function totalProduct(total){
    totalProductSummary = parseInt(total)
}  

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header")
    let liNavbar = document.querySelectorAll(".liNavbar")
    let myCartButton = document.querySelector(".myCartButton")
    let catalogButton = document.querySelector(".catalogButton")
    let homeButton = document.querySelector(".homeButton")
    let logoContainer = document.querySelector(".logoContainer")


    if (window.scrollY>50){
        if (window.matchMedia("(max-width: 600px)").matches) {
            homeButton = document.querySelector('.homeButtonMobile')
            catalogButton = document.querySelector('.sneakerSectionMobile')
            myCartButton = document.querySelector('.myCartMobile')
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                navBarMobile.classList.remove('navBarMobileON')
            }else{
                navBarMobile.classList.add('navBarMobileON')

            }


            header.classList.add('hideHeader')

            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
            `
            myCartButton.innerHTML= `
            <img src="./assets/svg/icons/cartWhite.svg" alt="">
            `
          }else{        
            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
            `
            myCartButton.innerHTML= `
            My Cart 
            `
}
    }else{
        navBarMobile.classList.remove('navBarMobileON')

    }
    if (window.scrollY>100) {
        if (window.matchMedia("(max-width: 600px)").matches) {
            setTimeout(()=>{
                header.style.backgroundColor="#1E1E1E";
                header.style.boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.1)";
                catalogButton.style.color="#fff"
                homeButton.style.color="#fff"
                liNavbar.forEach(el => {
                    el.style.color="#fff";
                });
            },1000)

        }else{

            header.style.backgroundColor="#1E1E1E";
            header.style.boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.1)";
            catalogButton.style.color="#fff"
            homeButton.style.color="#fff"
            liNavbar.forEach(el => {
                el.style.color="#fff";
            });
        }


    }else{
        if (window.matchMedia("(max-width: 600px)").matches) {
            header.style.backgroundColor="#FCEA1C";
            header.style.boxShadow=" 0px 4px 10px rgba(0, 0, 0, 0.0)";
            liNavbar.forEach(el => {
                el.style.color="#373737";
            });
            catalogButton.style.color="#373737"
            homeButton.style.color="#373737"
    
            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/sneakyLogo.svg" alt="">
            `

        }else{
            header.style.backgroundColor="#FCEA1C";
            header.style.boxShadow=" 0px 4px 10px rgba(0, 0, 0, 0.0)";
            liNavbar.forEach(el => {
                el.style.color="#373737";
            });
            catalogButton.style.color="#373737"
            homeButton.style.color="#373737"
    
            myCartButton.innerHTML= `
            My Cart 
            `
            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/sneakyLogo.svg" alt="">
            `

        }


    }
})
homeButton.addEventListener("click", ()=>{
    let header = document.querySelector(".header")
    let liNavbar = document.querySelectorAll(".liNavbar")
    let myCartButton = document.querySelector(".myCartButton")
    let catalogButton = document.querySelector(".catalogButton")
    let homeButton = document.querySelector(".homeButton")
    let logoContainer = document.querySelector(".logoContainer")
    let sneakerSelectedRemove = document.querySelector(".sneakerSelected")



    if(sneakerSelectedRemove.classList.contains("showSneakerSelected")){
        body.style.overflowY='auto'
        sneakerSelectedRemove.classList.remove("showSneakerSelected")

    }
        header.style.backgroundColor="#1E1E1E";
        header.style.boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.1)";
        catalogButton.style.color="#fff"
        homeButton.style.color="#fff"
        liNavbar.forEach(el => {
            el.style.color="#fff";
        });
        if (window.matchMedia("(max-width: 600px)").matches) {
            homeButton = document.querySelector('.homeButtonMobile')
            catalogButton = document.querySelector('.sneakerSectionMobile')
            myCartButton = document.querySelector('.myCartMobile')

            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
            `
            myCartButton.innerHTML= `
            <img src="./assets/svg/icons/cartWhite.svg" alt="">
            `
        }else{        
            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
            `
            myCartButton.innerHTML= `
            My Cart 
            `
}

        mainSneakers.classList.add('mainSneakersOn')
        main.classList.add('mainOn')
        body.style.overflowY='hidden'

    homeButton.addEventListener("click", ()=>{
        let sneakerSelectedRemove = document.querySelector(".sneakerSelected")

        mainSneakers.classList.remove('mainSneakersOn')
        body.style.overflowY='auto'
        main.classList.remove('mainOn')
        if(!sneakerSelectedRemove.classList.contains("showSneakerSelected")){

            body.style.overflowY='auto'
            sneakerSelectedRemove.classList.remove("showSneakerSelected")
    
        }

        if (window.scrollY>100) {
            header.style.backgroundColor="#1E1E1E";
            header.style.boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.1)";
            catalogButton.style.color="#fff"
            homeButton.style.color="#fff"
            liNavbar.forEach(el => {
                el.style.color="#fff";
            });
            if (window.matchMedia("(max-width: 600px)").matches) {
                homeButton = document.querySelector('.homeButtonMobile')
                catalogButton = document.querySelector('.sneakerSectionMobile')
                myCartButton = document.querySelector('.myCartMobile')
    
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
                `
                myCartButton.innerHTML= `
                <img src="./assets/svg/icons/cartWhite.svg" alt="">
                `
            }else{        
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
                `
                myCartButton.innerHTML= `
                My Cart 
                `
    }
        }else{
            header.style.backgroundColor="#FCEA1C";
            header.style.boxShadow=" 0px 4px 10px rgba(0, 0, 0, 0.0)";
            liNavbar.forEach(el => {
                el.style.color="#373737";
            });
            catalogButton.style.color="#373737"
            homeButton.style.color="#373737"
    
            if (window.matchMedia("(max-width: 600px)").matches) {
                homeButton = document.querySelector('.homeButtonMobile')
                catalogButton = document.querySelector('.sneakerSectionMobile')
                myCartButton = document.querySelector('.myCartMobile')
    
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
                `
                myCartButton.innerHTML= `
                <img src="./assets/svg/icons/cartWhite.svg" alt="">
                `
            }else{        
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
                `
                myCartButton.innerHTML= `
                My Cart 
                `
    }
        }
        })

})
catalogButton.addEventListener("click", ()=>{
    let header = document.querySelector(".header")
    let liNavbar = document.querySelectorAll(".liNavbar")
    let myCartButton = document.querySelector(".myCartButton")
    let catalogButton = document.querySelector(".catalogButton")
    let homeButton = document.querySelector(".homeButton")
    let logoContainer = document.querySelector(".logoContainer")
    let sneakerSelectedRemove = document.querySelector(".sneakerSelected")

    if (window.matchMedia("(max-width: 600px)").matches) {
        homeButton = document.querySelector('.homeButtonMobile')
        catalogButton = document.querySelector('.sneakerSectionMobile')
        myCartButton = document.querySelector('.myCartMobile')
      }

    if(sneakerSelectedRemove.classList.contains("showSneakerSelected")){
        body.style.overflowY='auto'
        sneakerSelectedRemove.classList.remove("showSneakerSelected")

    }
        header.style.backgroundColor="#1E1E1E";
        header.style.boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.1)";
        catalogButton.style.color="#fff"
        homeButton.style.color="#fff"
        liNavbar.forEach(el => {
            el.style.color="#fff";
        });
        if (window.matchMedia("(max-width: 600px)").matches) {
            homeButton = document.querySelector('.homeButtonMobile')
            catalogButton = document.querySelector('.sneakerSectionMobile')
            myCartButton = document.querySelector('.myCartMobile')

            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
            `
            myCartButton.innerHTML= `
            <img src="./assets/svg/icons/cartWhite.svg" alt="">
            `
        }else{        
            logoContainer.innerHTML = `
            <div class="closeSneakerCard"></div>
    
            <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
            `
            myCartButton.innerHTML= `
            My Cart 
            `
}

        mainSneakers.classList.add('mainSneakersOn')
        main.classList.add('mainOn')
        body.style.overflowY='hidden'

    homeButton.addEventListener("click", ()=>{
        let sneakerSelectedRemove = document.querySelector(".sneakerSelected")

        mainSneakers.classList.remove('mainSneakersOn')
        body.style.overflowY='auto'
        main.classList.remove('mainOn')
        if(!sneakerSelectedRemove.classList.contains("showSneakerSelected")){

            body.style.overflowY='auto'
            sneakerSelectedRemove.classList.remove("showSneakerSelected")
    
        }

        if (window.scrollY>100) {
            header.style.backgroundColor="#1E1E1E";
            header.style.boxShadow=" 0px 2px 10px rgba(0, 0, 0, 0.1)";
            catalogButton.style.color="#fff"
            homeButton.style.color="#fff"
            liNavbar.forEach(el => {
                el.style.color="#fff";
            });
            if (window.matchMedia("(max-width: 600px)").matches) {
                homeButton = document.querySelector('.homeButtonMobile')
                catalogButton = document.querySelector('.sneakerSectionMobile')
                myCartButton = document.querySelector('.myCartMobile')
    
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
                `
                myCartButton.innerHTML= `
                <img src="./assets/svg/icons/cartWhite.svg" alt="">
                `
            }else{        
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/yellowSneaky.svg" alt="">
                `
                myCartButton.innerHTML= `
                My Cart 
                `
    }
        }else{
            header.style.backgroundColor="#FCEA1C";
            header.style.boxShadow=" 0px 4px 10px rgba(0, 0, 0, 0.0)";
            liNavbar.forEach(el => {
                el.style.color="#373737";
            });
            catalogButton.style.color="#373737"
            homeButton.style.color="#373737"

    
            if (window.matchMedia("(max-width: 600px)").matches) {
                homeButton = document.querySelector('.homeButtonMobile')
                catalogButton = document.querySelector('.sneakerSectionMobile')
                myCartButton = document.querySelector('.myCartMobile')
    
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/sneakyLogo.svg" alt="">
                `
                myCartButton.innerHTML= `
                <img src="./assets/svg/icons/cartWhite.svg" alt="">
                `
            }else{        
                logoContainer.innerHTML = `
                <div class="closeSneakerCard"></div>
        
                <img class="logoHeader" src="./assets/svg/logo/sneakyLogo.svg" alt="">
                `
                myCartButton.innerHTML= `
                My Cart 
                `
    }
        }
        })
})
function randomNumber() {
    return Math.random() * (13 - 7) + 7;
  }
  
  function randomNumberWithHalves() {
    let number = Math.random() * (13 - 7) + 7;
    number = (number % 1 < 0.5) ? Math.floor(number) : Math.ceil(number);
    return parseFloat(number.toFixed(1));
  }
  
  function randomSizes(){
    for (let i = 0; i < 5; i++) {
        let newArray = [randomNumberWithHalves(),randomNumberWithHalves(),randomNumberWithHalves(),randomNumberWithHalves()];
        return(newArray)
      }
  }
  function eliminaDuplicados(arr) {
    return arr.filter((valor, indice) => arr.indexOf(valor) === indice);
  }
let allSneakers = [

    {   
        id: 1 ,
        brand:'Nike',
        name:'Air Max 1/97',
        model:'Sean Watherspoon',
        img: './assets/img/catalog/97SW.webp',
        price: 1050,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  2,
        brand:'Nike',
        name:'Air Max 270',
        model:'Travis Scott Cactus',
        img: './assets/img/catalog/270Travis.webp',
        price: 6000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  3,
        brand:'Jordan',
        name:'Air Jordan Retro 6',
        model:"'Olive' Sample",
        img: './assets/img/catalog/travisJordan6.webp',
        price: 470,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  4,
        brand:'Nike',
        name:'Jordan 1 Low',
        model:'Fragment x Travis Scott',
        img: './assets/img/catalog/jordan1LowTravis.webp',
        price: 1240,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  5,
        brand:'Nike',
        name:'SB Dunk Low',
        model:"'Cactus Jack - Special Box'",
        img: './assets/img/catalog/dunkTravis.webp',
        price: 2100,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id: 6 ,
        brand:'Nike',
        name:'Jordan 1 Retro High',
        model:"Travis Scott 'Mocha' Sample",
        img: './assets/img/catalog/jordan1Travis.webp',
        price: 1900,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  7,
        brand:'Nike',
        name:'Air Force 1 Low',
        model:'Travis Scott Cactus Jack',
        img: './assets/img/catalog/airForce1Travis.webp',
        price: 455,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id: 8,
        brand:'Nike',
        name:'Air More Uptempo',
        model:'University Blue',
        img: './assets/img/catalog/uptempoUni.webp',
        price: 683,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  9,
        brand:'Nike',
        name:'Dunk Low',
        model:'Off-White Lot 1',
        img: './assets/img/catalog/dunkOff.webp',
        price: 1520,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  10,
        brand:'Nike',
        name:'Air Max 97',
        model:'GS',
        img: './assets/img/catalog/97GS.webp',
        price: 110,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  11,
        brand:'Nike',
        name:'Air Max 97',
        model:"Off-White 'The Ten' Sample",
        img: './assets/img/catalog/97ow.webp',
        price: 850,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  12,
        brand:'Nike',
        name:'Jordan 1 Retro High',
        model:'Off-White Chicago',
        img: './assets/img/catalog/j1chicago.webp',
        price: 4000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  13,
        brand:'Nike',
        name:'Jordan 1 Retro High',
        model:'Off-White White',
        img: './assets/img/catalog/j1whiteOW.webp',
        price: 3800,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  14,
        brand:'Nike',
        name:'Jordan 1 Retro High',
        model:'Off-White University Blue',
        img: './assets/img/catalog/j1owub.webp',
        price: 3700,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  15,
        brand:'Nike',
        name:'Blazer Mid 77',
        model:'Vintage Reverse Logo',
        img: './assets/img/catalog/blazerR.webp',
        price: 400,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  16,
        brand:'Nike',
        name:'Blazer Mid',
        model:'Off-White',
        img: './assets/img/catalog/blazerow.webp',
        price: 1140,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  17,
        brand:'Nike',
        name:'Blazer Mid',
        model:'Off-White Serena Queen',
        img: './assets/img/catalog/blazerowgsq.webp',
        price: 1000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  18,
        brand:'Adidas',
        name:'Yeezy Boost 350 V2',
        model:'Static Black (Reflective)',
        img: './assets/img/catalog/yzySB.webp',
        price: 320,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  19,
        brand:'Adidas',
        name:'Yeezy Boost 350 V2',
        model:"'Beluga' Sample",
        img: './assets/img/catalog/beluga.webp',
        price: 420,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  20,
        brand:'Nike',
        name:'Dunk Low SB',
        model:'Off-White x Futura',
        img: './assets/img/catalog/dunkOW.webp',
        price: 2000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  21,
        brand:'Nike',
        name:'Dunk Low SB',
        model:'Off-White x Futura',
        img: './assets/img/catalog/dunkOW2.webp',
        price: 2000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  22,
        brand:'Nike',
        name:'SB Dunk Low',
        model:"Ben & Jerry's Chunky Dunky",
        img: './assets/img/catalog/dunkBJ.webp',
        price: 5000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  23,
        brand:'Jordan',
        name:'Jordan 4 Retro',
        model:'Off-White Sail',
        img: './assets/img/catalog/j4OW.webp',
        price: 700,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  24,
        brand:'Jordan',
        name:'Jordan 4 Retro',
        model:'Taupe Haze',
        img: './assets/img/catalog/j4haze.webp',
        price: 360,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  25,
        brand:'Jordan',
        name:'Jordan 4 Retro',
        model:"'Guava Ice' Sample",
        img: './assets/img/catalog/j4GI.webp',
        price: 615,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  26,
        brand:'Adidas',
        name:'Yeezy Boost 700',
        model:"'Inertia' Sample",
        img: './assets/img/catalog/yzy700.webp',
        price: 300,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  27,
        brand:'Adidas',
        name:'Yeezy 700 V3',
        model:"'Azael' Sample",
        img: './assets/img/catalog/yzy700v3.webp',
        price: 550,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  28,
        brand:'Adidas',
        name:'Forum Low',
        model:'Bad Bunny',
        img: './assets/img/catalog/FBBMARRON.webp',
        price: 1080,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  29,
        brand:'Adidas',
        name:'Forum Low',
        model:'Bad Bunny Easter Egg',
        img: './assets/img/catalog/BBR.webp',
        price: 450,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  30,
        brand:'Adidas',
        name:'Forum Low',
        model:'Bad Bunny Blue Tint',
        img: './assets/img/catalog/BBCE.png',
        price: 550,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  31,
        brand:'Converse',
        name:'Chuck Taylor',
        model:'Garcons',
        img: './assets/img/catalog/converseGG.webp',
        price: 125,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  33,
        brand:'Converse',
        name:'Chuck Taylor',
        model:'Garcons White',
        img: './assets/img/catalog/cnvW.webp',
        price: 145,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },   
    {   
        id:  34,
        brand:'Converse',
        name:'Chuck Taylor',
        model:'Garcons Brown',
        img: './assets/img/catalog/cnvBrown.webp',
        price: 213,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  35,
        brand:'Converse',
        name:'Chuck Taylor',
        model:'Off-White',
        img: './assets/img/catalog/cnvOffWhite.webp',
        price: 1500,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  36,
        brand:'Nike',
        name:'Air Force',
        model:'Skeleton (2018)',
        img: './assets/img/catalog/skeleton.webp',
        price: 450,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  37,
        brand:'Nike',
        name:'MAG',
        model:'Back to the Future',
        img: './assets/img/catalog/MAG.webp',
        price: 150000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  38,
        brand:'Nike',
        name:'Dunk Low',
        model:"Disrupt 2 'Panda'",
        img: './assets/img/catalog/panda.webp',
        price: 130,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  39,
        brand:'Adidas',
        name:'Forum 84 High',
        model:'Sun Devils',
        img: './assets/img/catalog/sunde.webp',
        price: 85,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  40,
        brand:'Adidas',
        name:'Ozweego',
        model:'Pride (2019)',
        img: './assets/img/catalog/ozpride.webp',
        price: 250,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  41,
        brand:'Adidas',
        name:'Stan Smith',
        model:'Marimekko Unikko',
        img: './assets/img/catalog/unikko.webp',
        price: 95,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  42,
        brand:'Nike',
        name:'Zoom Vomero 5',
        model:'Dark Grey',
        img: './assets/img/catalog/vomero.webp',
        price: 335,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  43,
        brand:'Adidas',
        name:'Yeezy Boost 350',
        model:'V2 Slate',
        img: './assets/img/catalog/slate.webp',
        price: 210,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  44,
        brand:'Nike',
        name:'sacai x Blazer Mid',
        model:"'Black Blue'",
        img: './assets/img/catalog/sacaiBlz.webp',
        price: 195,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  45,
        brand:'Nike',
        name:'Vaporwaffle sacai',
        model:'Black Gum',
        img: './assets/img/catalog/gum.webp',
        price: 295,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  46,
        brand:'Adidas',
        name:'Forum High',
        model:'Prada White',
        img: './assets/img/catalog/adPrada.webp',
        price: 3200,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  47,
        brand:'Nike',
        name:'Air Force 1 x LV',
        model:"'Monogram Damier'",
        img: './assets/img/catalog/luivi.webp',
        price: 7000,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  48,
        brand:'Nike',
        name:'Jordan 1 Retro High',
        model:"J Balvin",
        img: './assets/img/catalog/balvin.webp',
        price: 1300,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  49,
        brand:'Adidas',
        name:'Forum 84',
        model:"'Pigeon Lady'",
        img: './assets/img/catalog/for84.webp',
        price: 330,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  50,
        brand:'Adidas',
        name:'Samba Classic OG',
        model:"White Black",
        img: './assets/img/catalog/samba.webp',
        price: 330,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  51,
        brand:'Nike',
        name:'Air VaporMax',
        model:"Off-White",
        img: './assets/img/catalog/vpmx.webp',
        price: 950,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  52,
        brand:'Nike',
        name:'Air VaporMax',
        model:"Plus Obsidian",
        img: './assets/img/catalog/vpmxPlus.webp',
        price: 310,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
    {   
        id:  53,
        brand:'Nike',
        name:'Air Force 1',
        model:"Off-White Volt",
        img: './assets/img/catalog/a1OW.webp',
        price: 570,
        sizes: eliminaDuplicados(randomSizes()),
        allName: function(){
            let nameSneaker = this.brand +" "+ this.name+ " " + this.model
            return nameSneaker
        }
    },
]

let sneakersRandom = allSneakers.sort(() => Math.random() - 0.5);

let popularSneakers


if (window.matchMedia("(max-width: 1000px)").matches) {
    popularSneakers = sneakersRandom.slice(4,8)
} else {
    popularSneakers = sneakersRandom.slice(4,7)
}

createCards(popularSneakers, sneakersPopularContainer)

createCards(allSneakers, allSneakersCon)

let searcher = document.querySelector('.searcher')
let brandFilter = document.querySelector('.filterByBrand')
let filterByPrice = document.querySelector('.filterByPrice')

searcher.addEventListener('input', ()=>{
    brandFilter.value = 'all'
    filterByPrice.value = ''

    let searcherValue = searcher.value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      })
    let searchResult = allSneakers.filter(el => el.allName().includes(searcherValue))
    allSneakersCon.innerHTML = ``
    if(searchResult.length == 0 ){
        brandFilter.value = 'all'
        filterByPrice.value = ''

        allSneakersCon.innerHTML = `
            <p class= "noResultSearch">No results found
            </p>
        `
    }
    createCards(searchResult,allSneakersCon)
})
brandFilter.addEventListener('input',()=>{
    let brandFilterValue = brandFilter.value
    searcher.value = ''
    filterByPrice.value = ''

    if(brandFilterValue == 'all'){
        allSneakersCon.innerHTML = ``
        createCards(allSneakers, allSneakersCon)

    }else{
        let brandResult = allSneakers.filter(el => el.brand.includes(brandFilterValue))
        allSneakersCon.innerHTML = ``
        if(brandResult.length == 0 ){

            filterByPrice.value = ''
            searcher.value = ''
            allSneakersCon.innerHTML = `
                <p class= "noResultSearch">No results found
                </p>
            `
        }
        createCards(brandResult,allSneakersCon)
    }

})

filterByPrice.addEventListener('input',()=>{
    let filterByPriceValue = filterByPrice.value
    searcher.value = ''
    brandFilter.value = 'all'

    if(filterByPriceValue == ''){
        allSneakersCon.innerHTML = ``
        createCards(allSneakers, allSneakersCon)

    }else{
        let priceResult = allSneakers.filter(el => el.price < parseInt(filterByPriceValue))
        allSneakersCon.innerHTML = ``
        if(priceResult.length == 0 ){
            brandFilter.value = 'all'            
            searcher.value = ''
            allSneakersCon.innerHTML = `
                <p class= "noResultSearch">No results found
                </p>
            `
        }
        // console.log(priceResult);
        createCards(priceResult,allSneakersCon)
    }

})

function createCards(array,location){
    array.forEach(el => {
    
        let newDiv = document.createElement("div")
        newDiv.className = "sneakerCard"
    
        newDiv.innerHTML=
        `
        <div class="sneakerImage" style="background-image:url(${el.img}) ;">
        <button class="buttonAddToCart buttonAddToCart${el.id}" > SEE MORE <img src="./assets/svg/icons/arrowRight.svg" alt=""></button>
    
    </div>
    <div class="cardContent">
        <p class="sellerName">${el.brand}</p>
        <p class="sneakerName sneakerName${el.id}">${el.name}</p>
        <p class="sneakerPrice">$ ${Number(el.price).toLocaleString()}.00</p>
    </div>
        `
        location.appendChild(newDiv)

        let buttonAddToCart = document.querySelector('.buttonAddToCart' + `${el.id}`)
        let sneakerName = document.querySelector('.sneakerName' + `${el.id}`)
        
        buttonAddToCart.addEventListener("click", ()=>{
            if (window.matchMedia("(max-width: 800px)").matches) {
                let header = document.querySelector('.header')
                header.classList.add('hideHeader')
    
            }
            navBarMobile.classList.remove('navBarMobileON')
            let closeSneakerCard = document.querySelector('.closeSneakerCard')
            let logoHeader = document.querySelector('.logoHeader')
            closeSneakerCard.classList.add('showHeaderCloseButton')
            logoHeader.classList.add('showHeaderCloseLogo')

            let body = document.querySelector('body')
            body.style.overflowY='hidden'

            closeSneakerCard.addEventListener("click", ()=>{
                if(!main.classList.contains("mainOn")){
                    body.style.overflowY='auto'

                }
                closeSneakerCard.classList.remove('showHeaderCloseButton')
                logoHeader.classList.remove('showHeaderCloseLogo')
                sneakerSelected.classList.remove('showSneakerSelected')

            })
            if (window.matchMedia("(max-width: 800px)").matches) {
                sneakerSelected.innerHTML = `
                <div class="imageSneakerSelected">
                <img src="${el.img}" alt="">
            </div>
            <div class="sectionInfoSneaker">
                <div class="infoSneakerSelected">
                    <div class="nameComplete">
                        <p class="brandName">${el.brand}</p>
                        <h3>${el.name}</h3>
                        <p class="modelName">${el.model}</p>
                    </div>
                    <div class="rateStars">
                        <img src="./assets/svg/icons/4stars.svg" alt="">
                    </div>
                    <div class="priceSneaker">
                        <p>$ ${Number(el.price).toLocaleString()}.00</p>
                    </div>
                    <div class="sizeSneaker">
                        <p>Size</p>
                        <ul class="ulSize">
    
                        </ul>
                    </div>
                    <div class="amountSneaker">
                        <p>Amount</p>
                        <div class="amountComplete">
                            <button class="reduceAmount">-</button>
                            <input class="amount" step="1" type="number" value="1" min="1" max="5" maxlength="1">
                            <button class="increaseAmount">+</button>
                        </div>
                    </div>
                    
                </div>
                <div class="addButtonCartSneakerSelected">
                    <button class="BTSSneakerSelected"> <img src="./assets/svg/icons/arrowLeftSneakerSelected.svg" alt=""></button>
                    <button class="buttonATC">ADD TO CART</button>
    
                </div>
            </div>
                `
              }else{
                sneakerSelected.innerHTML = `
            <div class="imageSneakerSelected">
            <img src="${el.img}" alt="">
        </div>
        <div class="sectionInfoSneaker">
            <div class="infoSneakerSelected">
                <div class="nameComplete">
                    <p class="brandName">${el.brand}</p>
                    <h3>${el.name}</h3>
                    <p class="modelName">${el.model}</p>
                </div>
                <div class="rateStars">
                    <img src="./assets/svg/icons/4stars.svg" alt="">
                </div>
                <div class="priceSneaker">
                    <p>$ ${Number(el.price).toLocaleString()}.00</p>
                </div>
                <div class="sizeSneaker">
                    <p>Size</p>
                    <ul class="ulSize">

                    </ul>
                </div>
                <div class="amountSneaker">
                    <p>Amount</p>
                    <div class="amountComplete">
                        <button class="reduceAmount">-</button>
                        <input class="amount" step="1" type="number" value="1" min="1" max="5" maxlength="1">
                        <button class="increaseAmount">+</button>
                    </div>
                </div>
                
            </div>
            <div class="addButtonCartSneakerSelected">
                <button class="buttonATC">ADD TO CART</button>
            </div>
        </div>
            `

              }
            if(document.querySelector('.BTSSneakerSelected')){
                let backSS = document.querySelector('.BTSSneakerSelected')
                backSS.style.width = `${backSS.offsetHeight}px`;
                
                let header = document.querySelector('.header')
                let buttonAddToCart = document.querySelector('.buttonATC')
                let addButtonCartSneakerSelected = document.querySelector('.addButtonCartSneakerSelected')
                
                buttonAddToCart.style.width = `${addButtonCartSneakerSelected.offsetWidth - backSS.offsetWidth -10}px`;
                buttonAddToCart.style.marginLeft = '10px'

                backSS.addEventListener('click', ()=>{
                    if(!main.classList.contains("mainOn")){
                        body.style.overflowY='auto'
    
                    }
                    closeSneakerCard.classList.remove('showHeaderCloseButton')
                    logoHeader.classList.remove('showHeaderCloseLogo')
                    sneakerSelected.classList.remove('showSneakerSelected')
                    if (window.matchMedia("(max-width: 600px)").matches) {
                        navBarMobile.classList.add('navBarMobileON')
                    }else{
                        header.classList.remove('hideHeader')

                    }

                
                })
            }
            let ulSize = document.querySelector('.ulSize')
            let amountContainer = document.querySelector('.amount')
            let reduceAmount = document.querySelector('.reduceAmount')
            let increaseAmount = document.querySelector('.increaseAmount')
            let buttonATC = document.querySelector('.buttonATC')
            let sizeSneak = 0

            increaseAmount.addEventListener("click", ()=>{
                let amountValue = amountContainer.value

                if(amountValue < 6){
                    amountValue = parseInt(amountValue) + 1 

                    amountContainer.setAttribute('value', amountValue);
                }
            })
            reduceAmount.addEventListener("click", ()=>{
                let amountValue = amountContainer.value

                if(amountValue > 1){
                    amountValue = parseInt(amountValue) - 1 

                    amountContainer.setAttribute('value', amountValue);
                }
            })
            let arraySort = el.sizes.sort((a, b) => a - b);

            arraySort.forEach((element,indice) => {
                let li = document.createElement('li')
                li.innerHTML = `
                <button class= "buttonsSize positionSize${indice}">${element}</button>
                `
                ulSize.appendChild(li)

                let positionSize = document.querySelector('.positionSize' + indice)
                activeButtonSize(positionSize)

                let valueSize = document.querySelector('.positionSize' + `${indice}`)
                valueSize.addEventListener("click", ()=>{
                    
                    sizeSneak = parseInt(valueSize.textContent)
                    console.log(valueSize.textContent);

                     
                
            })
            

            });
            let buttonsSize = document.querySelectorAll('.buttonsSize')

            function activeButtonSize(query){
                query.addEventListener("click", ()=>{

                    let newbuttonsSize = Array.from(buttonsSize)
    
                    newbuttonsSize.forEach(ele => {
                        ele.classList.remove('buttonSizeOn')
                    })

                    query.classList.add('buttonSizeOn')
                })
            }


            sneakerSelected.classList.add('showSneakerSelected')

            buttonATC.addEventListener("click",()=>{
                console.log(sizeSneak);
                if(JSON.parse(localStorage.getItem('cartAdd'))){
                    let checkLS = JSON.parse(localStorage.getItem('cartAdd'))
                    if(checkLS.some(ele => ele.id === `${el.id}`)){
                        if (window.matchMedia("(max-width: 800px)").matches) {
                            Toastify({
                                text: "It's already in your cart",
                                duration: 1500,
                                gravity: "top", 
                                position: "center",
                                stopOnFocus: true, 
                                style: {
                                  background: "#5E5E5E",
                                  borderRadius: "15px",
                                  color: "#DDDDDD",
                                  fontSize: "14px",
                                  zIndex: "100",
                                  fontWeight: "500",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
                                },
                                onClick: function(){} 
                              }).showToast();
    
                        }else{
                            Toastify({
                                text: "It's already in your cart",
                                duration: 1500,
                                gravity: "top", 
                                position: "right",
                                stopOnFocus: true, 
                                style: {
                                  background: "#5E5E5E",
                                  borderRadius: "15px",
                                  color: "#DDDDDD",
                                  fontSize: "15px",
                                  zIndex: "100",
                                  fontWeight: "500",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
    
                                },
                                offset: {
                                    y: 75 
                                  },
                                onClick: function(){} 
                              }).showToast();
                        }

                    }else{
                        if(sizeSneak == 0 ){
                            if (window.matchMedia("(max-width: 800px)").matches) {
                                Toastify({
                                    text: "Select a size",
                                    duration: 1500,
                                    gravity: "top", 
                                    position: "center",
                                    stopOnFocus: true, 
                                    style: {
                                      background: "#2D2D2D",
                                      borderRadius: "15px",
                                      color: "#FFEC0C",
                                      fontSize: "14px",
                                      paddingInline: "30px",
                                      boxShadow: "0px 0px 0px 0px"
                                    },
                                    onClick: function(){} 
                                  }).showToast();
                            }
                            else{
                                Toastify({
                                    text: "Select a size",
                                    duration: 1500,
                                    gravity: "bottom", 
                                    position: "center",
                                    stopOnFocus: true, 
                                    style: {
                                      background: "#2D2D2D",
                                      borderRadius: "15px",
                                      color: "#FFEC0C",
                                      fontSize: "15px",
                                      paddingInline: "30px",
                                      boxShadow: "0px 0px 0px 0px"
                                    },
                                    onClick: function(){} 
                                  }).showToast();
                            }

                        }else{
                            if (window.matchMedia("(max-width: 800px)").matches) {
                                Toastify({
                                    text: "Added to your cart!",
                                    duration: 1500,
                                    gravity: "top", 
                                    position: "center",
                                    stopOnFocus: true, 
                                    style: {                    
                                      background: "#2d2d2d",
                                      borderRadius: "15px",
                                      color: "#FFEC0C",
                                      fontSize: "14px",
                                      zIndex: "100",
                                      fontWeight: "500",
                                      paddingInline: "30px",
                                      boxShadow: "0px 0px 0px 0px"
                                    },
                                    onClick: function(){} 
                                  }).showToast();
                            }else{
                                Toastify({
                                    text: "Added to your cart!",
                                    duration: 1500,
                                    gravity: "top", 
                                    position: "right",
                                    stopOnFocus: true, 
                                    style: {                    
                                      background: "#FFEC0C",
                                      borderRadius: "15px",
                                      color: "#2d2d2d",
                                      fontSize: "15px",
                                      zIndex: "100",
                                      fontWeight: "500",
                                      paddingInline: "30px",
                                      boxShadow: "0px 0px 0px 0px"
    
                                    },
                                    offset: {
                                        y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                                      },
                                    onClick: function(){} 
                                  }).showToast();
                            }

                              
                              let amountElement = document.querySelector('.amount')
        
                                let elementForAdd = {
                                    id:  `${el.id}`,
                                    brand:`${el.brand}`,
                                    name:`${el.name}`,
                                    model:`${el.model}`,
                                    img: `${el.img}`,
                                    price: `${el.price}`,
                                    amount: amountElement.value,
                                    //total:
                                }
                                cart.push(elementForAdd)
                    
                                let noDuplicates = cart.filter(function(item, index) {
                                    let ids = cart.map(function(i) { return i.id });
                                    return ids.indexOf(item.id) === index;
                                });
                    
                                cart = noDuplicates
                                        
                                if(JSON.parse(localStorage.getItem('cartAdd'))){
                                    let cartLS =  JSON.parse(localStorage.getItem('cartAdd'))
                    
                                    cartLS.push(elementForAdd)
                    
                                    let noDuplicatesLS = cartLS.filter(function(item, index) {
                                        let ids = cartLS.map(function(i) { return i.id });
                                        return ids.indexOf(item.id) === index;
                                    });
                    
                                    cartLS = noDuplicatesLS
                                    localStorage.setItem('cartAdd',JSON.stringify(cartLS))
                    
                                }else{
                                    localStorage.setItem('cartAdd',JSON.stringify(cart))
                                }
                        }
                    }
                }else{
                    if(sizeSneak == 0 ){
                        if (window.matchMedia("(max-width: 800px)").matches) {
                            Toastify({
                                text: "Select a size",
                                duration: 1500,
                                gravity: "top", 
                                position: "center",
                                stopOnFocus: true, 
                                style: {
                                  background: "#2D2D2D",
                                  borderRadius: "15px",
                                  color: "#FFEC0C",
                                  fontSize: "14px",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
                                },
                                onClick: function(){} 
                              }).showToast();
                        }else{
                            Toastify({
                                text: "Select a size",
                                duration: 1500,
                                gravity: "bottom", 
                                position: "center",
                                stopOnFocus: true, 
                                style: {
                                  background: "#2D2D2D",
                                  borderRadius: "15px",
                                  color: "#FFEC0C",
                                  fontSize: "15px",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
                                },
                                onClick: function(){} 
                              }).showToast();
                        }

                    }else{
                        if (window.matchMedia("(max-width: 800px)").matches) {
                            Toastify({
                                text: "Added to your cart!",
                                duration: 1500,
                                gravity: "top", 
                                position: "center",
                                stopOnFocus: true, 
                                style: {
                                  background: "#2d2d2d",
                                  borderRadius: "15px",
                                  color: "#FFEC0C",
                                  fontSize: "14px",
                                  zIndex: "100",
                                  fontWeight: "500",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
    
                                },
                                onClick: function(){} 
                              }).showToast();
                        }else{
                            Toastify({
                                text: "Added to your cart!",
                                duration: 1500,
                                gravity: "top", 
                                position: "right",
                                stopOnFocus: true, 
                                style: {
                                  background: "#FFEC0C",
                                  borderRadius: "15px",
                                  color: "#2d2d2d",
                                  fontSize: "15px",
                                  zIndex: "100",
                                  fontWeight: "500",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
    
                                },
                                offset: {
                                    y: 75 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                                  },
                                onClick: function(){} 
                              }).showToast();
                        }

                          
                          let amountElement = document.querySelector('.amount')
    
                            let elementForAdd = {
                                id:  `${el.id}`,
                                brand:`${el.brand}`,
                                name:`${el.name}`,
                                model:`${el.model}`,
                                img: `${el.img}`,
                                price: `${el.price}`,
                                amount: amountElement.value
                                                        }
                            cart.push(elementForAdd)
                
                            let noDuplicates = cart.filter(function(item, index) {
                                let ids = cart.map(function(i) { return i.id });
                                return ids.indexOf(item.id) === index;
                            });
                
                            cart = noDuplicates
                                    
                            if(JSON.parse(localStorage.getItem('cartAdd'))){
                                let cartLS =  JSON.parse(localStorage.getItem('cartAdd'))
                
                                cartLS.push(elementForAdd)
                
                                let noDuplicatesLS = cartLS.filter(function(item, index) {
                                    let ids = cartLS.map(function(i) { return i.id });
                                    return ids.indexOf(item.id) === index;
                                });
                
                                cartLS = noDuplicatesLS
                                localStorage.setItem('cartAdd',JSON.stringify(cartLS))
                
                            }else{
                                localStorage.setItem('cartAdd',JSON.stringify(cart))
                            }
                    }
                }

                

    
                console.log(cart);
    
                })
        })
        
    }
    
    )}

    myCartButton.addEventListener("click", ()=>{
        sectionCart.classList.add('cartON')
        let body = document.querySelector('body')
        body.style.overflowY='hidden'        
        let buttonsCartContainer = document.querySelector('.buttonsCartContainer')
        buttonsCartContainer.addEventListener('click', ()=>{
            sectionCart.classList.remove('cartON')
            if(!main.classList.contains("mainOn")){
                body.style.overflowY='auto'

            }       


        })
    })
        
    buttonPurchase.addEventListener('click', ()=>{
    let body = document.querySelector('body')
    let method = document.querySelectorAll('.method')
    let summaryPrice1 = document.querySelector('.summaryPrice1')
    let summaryPrice2 = document.querySelector('.summaryPrice2')
    let summaryPrice3 = document.querySelector('.summaryPrice3')
    let totalTextSecondStep = document.querySelector('.totalTextSecondStep')
    document.querySelector('.cartContainerSecondStep').scrollTop = 0;
    if(JSON.parse(localStorage.getItem('cartAdd'))){

        if(JSON.parse(localStorage.getItem('cartAdd')).length > 0 ){
            sectionCartSecondStep.classList.add('sectionCartSecondStepON')
            
            setTimeout(()=>{
                let body = document.querySelector('body')
                body.style.overflowY='hidden'

            },00)
            


            let payMeth = ""
            summaryPrice1.textContent = '$' + totalProductSummary.toLocaleString() + ".00"
            summaryPrice2.textContent = '$' + parseInt(totalProductSummary*0.10).toLocaleString() + ".00"
            console.log(totalProductSummary)
            let totalFinish = (totalProductSummary + parseInt(totalProductSummary*0.10) + 10).toLocaleString()
            totalTextSecondStep.textContent = '$' + totalFinish + '.00'
            method.forEach(el => {
                el.addEventListener('click',()=>{
                    payMeth = el.textContent.trim()

                    method.forEach(ele => {
                        ele.style.boxShadow = "0px 0px 0px 0px"

                    })
                    
                    el.style.boxShadow = "0px 0px 0px 3px  #FCEA1C"
                        
                    
            })
            });

            buttonDiscount.addEventListener('click',()=>{
                let totalFinish = (totalProductSummary + parseInt(totalProductSummary*0.10))
                let discountInput = (document.querySelector('.discountInput').value).toUpperCase()
                if (discountInput == "NEHUEN" || discountInput == "MESSI" || discountInput == "SNEAKY"){
                    let discount25 = totalFinish * 0.25 
                    let discountApply = totalFinish - discount25
                    console.log(discountApply);
                    totalTextSecondStep.textContent = '$' + parseInt(discountApply).toLocaleString()  + '.00'

                    let discountButtonDisabled = document.querySelector('.discount')

                    discountButtonDisabled.innerHTML = `
                    <p>Add a discount coupon</p>
                    <input type="text" name="" id="" class="discountInput" >
                    <button class="buttonDiscount" disabled>APPLY</button>
                    `

                    let div = document.createElement("div")
                    div.className = "discount25Apply"



                    let summaryContainer = document.querySelector('.summaryContainer')

                    summaryContainer.innerHTML = `
                    <div>
                    <p>Product</p>
                    <p><strong class="summaryPrice1">$350.00</strong></p>
                </div>
                <div>
                    <p>Taxes (10%)</p>
                    <p><strong class="summaryPrice2">$35.00</strong></p>
                </div>
                <div>
                    <p>Shipment</p>
                    <p><strong class="summaryPrice3">$10.00</strong></p>
                </div>
                    `
                    summaryPrice1 = document.querySelector('.summaryPrice1')
                    summaryPrice2 = document.querySelector('.summaryPrice2')
                    summaryPrice3 = document.querySelector('.summaryPrice3')

                    summaryPrice1.textContent = '$' + totalProductSummary.toLocaleString() + ".00"
                    summaryPrice2.textContent = '$' + parseInt(totalProductSummary*0.10).toLocaleString() + ".00"
        

                    div.innerHTML = `
                    <p>Discount (25%)</p>
                    <p><strong class="summaryPrice4">$${parseInt(discount25).toLocaleString()}.00</strong></p>

                    `
                    summaryContainer.appendChild(div)
                }
            })

            purSecondStp.addEventListener('click', ()=>{
                let discountInput = document.querySelector('.discountInput')
                let emailStep2 = document.querySelector('.emailStep2')
                if(emailCheck(emailStep2.value)){
                    if(payMeth != ""){
                        let finishBuy = document.querySelector('.finishBuy')
                        let textFinish = document.querySelector('.textFinish')
                        sectionCartSecondStep.classList.remove('sectionCartSecondStepON')
                        payMeth = ""

                        discountInput.value = ""
                        if(document.querySelector('.discount25Apply')){
                            let discount25Apply = document.querySelector('.discount25Apply')
                            discount25Apply.innerHTML = ``
                        }
                        let discountButtonDisabled = document.querySelector('.discount')
                        
                        discountButtonDisabled.innerHTML = `
                        <p>Add a discount coupon</p>
                        <input type="text" name="" id="" class="discountInput" >
                        <button class="buttonDiscount" >APPLY</button>
                        `
                        method.forEach(ele => {
                            ele.style.boxShadow = "0px 0px 0px 0px"
    
                        })
                        localStorage.setItem('cartAdd',JSON.stringify([]))

                        buttonDiscount = document.querySelector('.discount')




                        setTimeout(()=>{
                            // emailStep2 = emailStep2.value
                            finishBuy.classList.add('showFinishBuy')

                            finishBuy.innerHTML = `
                            <div class="modalFinish">
            
                            <img src="./assets/svg/icons/checkFinish.svg" alt="">
                            <h1>Thank you!</h1>
                            <p class="textFinish">We send the receipt and shipping data to <br>${emailStep2.value}</p>
                            <button class="buttonFinish">OK</button>
                        </div>
                            `
                            let buttonFinish = document.querySelector('.buttonFinish')
                            buttonFinish.addEventListener('click', ()=>{
                                finishBuy.classList.remove('showFinishBuy')
    
                            })

                            emailStep2.value = ""
                        },700)
                        let sneakerSelectedFinish = document.querySelector('.sneakerSelected')
                        let body = document.querySelector('.body')
                        if(body.style.overflowY= 'hidden'){
                            body.style.overflowY= 'auto'
                        }
                        //showSneakerSelected
                        
                        if(sneakerSelectedFinish.classList.contains('showSneakerSelected')){
                            sneakerSelected.classList.remove('showSneakerSelected')
                        }
                        


                    }else{
                        if (window.matchMedia("(max-width: 800px)").matches) {
                            Toastify({
                                text: "Choose a payment method",
                                duration: 1500,
                                position: "center",
                                stopOnFocus: true, 
                                style: {
                                  background: "#C21515",
                                  borderRadius: "15px",
                                  color: "#fff",
                                  fontSize: "14px",
                                  zIndex: "102",
                                  fontWeight: "500",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
                                },
                    
                                onClick: function(){} 
                              }).showToast();
                        }else{
                            Toastify({
                                text: "Choose a payment method",
                                duration: 1500,
                                position: "center",
                                stopOnFocus: true, 
                                style: {
                                  background: "#C21515",
                                  borderRadius: "15px",
                                  color: "#fff",
                                  fontSize: "15px",
                                  zIndex: "102",
                                  fontWeight: "500",
                                  paddingInline: "30px",
                                  boxShadow: "0px 0px 0px 0px"
                                },
                    
                                onClick: function(){} 
                              }).showToast();
                        }

                    }

                }else{
                    if (window.matchMedia("(max-width: 800px)").matches) {
                        Toastify({
                            text: "Check the email",
                            duration: 1500,
                            position: "center",
                            stopOnFocus: true, 
                            style: {
                              background: "#C21515",
                              borderRadius: "15px",
                              color: "#fff",
                              fontSize: "14px",
                              zIndex: "102",
                              fontWeight: "500",
                              paddingInline: "30px",
                              boxShadow: "0px 0px 0px 0px"
                            },
                
                            onClick: function(){} 
                          }).showToast();
                    }
                    else{
                        Toastify({
                            text: "Check the email",
                            duration: 1500,
                            position: "center",
                            stopOnFocus: true, 
                            style: {
                              background: "#C21515",
                              borderRadius: "15px",
                              color: "#fff",
                              fontSize: "15px",
                              zIndex: "102",
                              fontWeight: "500",
                              paddingInline: "30px",
                              boxShadow: "0px 0px 0px 0px"
                            },
                
                            onClick: function(){} 
                          }).showToast();
                    }

                }

            })


            
        }else{
            if (window.matchMedia("(max-width: 800px)").matches) {
                Toastify({
                    text: "Add sneakers to your cart!",
                    duration: 1500,
                    position: "center",
                    stopOnFocus: true, 
                    style: {
                      background: "#C21515",
                      borderRadius: "15px",
                      color: "#fff",
                      fontSize: "14px",
                      zIndex: "102",
                      fontWeight: "500",
                      paddingInline: "30px",
                      boxShadow: "0px 0px 0px 0px"
                    },
                    onClick: function(){} 
                  }).showToast();
            }else{
                Toastify({
                    text: "Add sneakers to your cart!",
                    duration: 1500,
                    position: "center",
                    stopOnFocus: true, 
                    style: {
                      background: "#C21515",
                      borderRadius: "15px",
                      color: "#fff",
                      fontSize: "15px",
                      zIndex: "102",
                      fontWeight: "500",
                      paddingInline: "30px",
                      boxShadow: "0px 0px 0px 0px"
                    },
                    onClick: function(){} 
                  }).showToast();
            }


        }
    }else{
        if (window.matchMedia("(max-width: 800px)").matches) {
            Toastify({
                text: "Add sneakers to your cart!",
                duration: 1500,
                position: "center",
                stopOnFocus: true, 
                style: {
                  background: "#C21515",
                  borderRadius: "15px",
                  color: "#fff",
                  fontSize: "14px",
                  zIndex: "102",
                  fontWeight: "500",
                  paddingInline: "30px",
                  boxShadow: "0px 0px 0px 0px"
                },
    
                onClick: function(){} 
              }).showToast();
        }else{
            Toastify({
                text: "Add sneakers to your cart!",
                duration: 1500,
                position: "center",
                stopOnFocus: true, 
                style: {
                  background: "#C21515",
                  borderRadius: "15px",
                  color: "#fff",
                  fontSize: "15px",
                  zIndex: "102",
                  fontWeight: "500",
                  paddingInline: "30px",
                  boxShadow: "0px 0px 0px 0px"
                },
    
                onClick: function(){} 
              }).showToast();
        }

    }
})
priceAndCart.addEventListener('click', ()=>{
    
})
buttonBTSSecondStep.addEventListener('click',()=>{
    let discountInput = document.querySelector('.discountInput')
    let emailStep2 = document.querySelector('.emailStep2')
    let method = document.querySelectorAll('.method')
    if(document.querySelector('.discount25Apply')){
        let discount25Apply = document.querySelector('.discount25Apply')
        discount25Apply.innerHTML = ``
    }
    let discountButtonDisabled = document.querySelector('.discount')

    discountButtonDisabled.innerHTML = `
    <p>Add a discount coupon</p>
    <input type="text" name="" id="" class="discountInput" >
    <button class="buttonDiscount" >APPLY</button>
    `
    sectionCartSecondStep.classList.remove('sectionCartSecondStepON')
    body.style.overflowY='auto'
    sectionCartSecondStep.classList.remove('sectionCartSecondStepON')
    payMeth = ""
    emailStep2.value = ""
    discountInput.value = ""
    method.forEach(ele => {
        ele.style.boxShadow = "0px 0px 0px 0px"

    })

})
function emailCheck(string){
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(string);


}

