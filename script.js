const cookie = document.querySelector(".cookie-img-container");
const cookieAmount = document.querySelector(".amount");
const power1 = document.querySelector(".ghost")
const power2 = document.querySelector(".fist")
const power3 = document.querySelector(".wand")

/* Start med at sætte count til 0 */


for (var i = 0; i > 0; i++) {
  i++
}

const amount = i


cookie.addEventListener("click", () =>{

/* +1 per click og skriv dataene i html */
console.log(i)
    i +=1;
        cookieAmount.innerHTML = i;

        cookie.classList.toggle("clicked");

        if(i == 15){
            power1.classList.add("active")
            power1.addEventListener("click",autoClick)
        }

        if(i == 30){
            power2.classList.add("active")
            power2.addEventListener("click",powerClick)

            
        }

        if(i == 45){
            power3.classList.add("active")
            power3.addEventListener("click",freeClick)

        }
    })

    function autoClick (){
        console.log("første power up here")
    }
    
    function powerClick(){
        console.log("anden power up here")
    }
    function freeClick(){
        console.log("sidste power up here")
    }