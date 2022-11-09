const cookie = document.querySelector(".cookie-img-container");
const cookieAmount = document.querySelector(".amount");
const power1 = document.querySelector(".ghost")
const power2 = document.querySelector(".fist")
const power3 = document.querySelector(".wand")

/* Start med at sætte count til 0 */

let i = 0;  

const powerUP = [
    {
        "cost" : 15,
        "name" : "Auto clicker",
        "icon" : "ghost" 
    },
    {
        "cost" : 30,
        "name" : "Auto clicker",
        "icon" : "fist" 
    },
    {
        "cost" : 45,
        "name" : "Auto clicker",
        "icon" : "ghost" 
    }
]



cookie.addEventListener("click", () =>{
    i +=1;
    let total = i;

/* +1 per click og skriv dataene i html */

        cookieAmount.innerHTML = `${total} Cookies`;

        /* cookie.classList.toggle("clicked"); */

    /* Første power Up */
        if(total > powerUP[0].cost){
            let clicked =  false;
            
            console.log("PRE CLICKED  "+clicked);

            power1.classList.add("active");

            /* Check om vi har klassen så vi kan ak */
            if(power1.classList.contains("active")){
                i+=1;


                /* tilføj mulighed for at clicke på upgrades */
                power1.addEventListener("click", () => {
                    power1.classList.remove("active");
                    clicked = true;

                    /* Skriv data hvis du clicker */
                    if(clicked = true){
                        cookieAmount.innerHTML = `${i-powerUP[0].cost} Cookies`;
                        console.log(cookieAmount.innerHTML = `${i-powerUP[0].cost}`)
                        total =  i-powerUP[0].cost 
                        i+=1;                                 
                    }
                })                
            }            
        }

   /*      /* Auto click powerUp */
        if(total > powerUP[1].cost){
            power2.classList.add("active")
            if(power2.classList.contains("active")){


                 power2.addEventListener("click", () => {
                    total=i-powerUP[1].cost;
                    cookieAmount.innerHTML = `${total} Cookies`;

                    i+=1
                    power2.classList.remove("active");
                    total = i-powerUP[1].cost;
                    setInterval(autoClick, 1000);
                    
                    function autoClick(){
                        total+=1;
                        cookieAmount.innerHTML = `${total} Cookies`;
                
                    } 
                })
            }        
        }


    if(total > 45){
        power3.classList.add("active")
        if(power3.classList.contains("active")){
            console.log(total+=i*2)

            power3.addEventListener("click", () => {
                total=i-powerUP[2].cost;
                cookieAmount.innerHTML = `${total*2} Cookies`;
                power2.classList.remove("active");

            })
        }        
    }
})
 


 
    function autoClick(){
        total+=1;
        cookieAmount.innerHTML = `${total} Cookies`;

    } 
    

    function powerClick(){
        console.log("anden power up here")
    }
    function freeClick(){
        console.log("sidste power up here")
    }