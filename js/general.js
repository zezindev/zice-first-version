let icon = document.getElementById("icon") 
let logo = document.getElementById("img-logo")

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light")
}

let localData  = localStorage.getItem("theme")

if(localData == "light"){
        icon.src = "./imgs/moon.png"
        document.body.classList.remove("dark-theme")
    }
    else {
        icon.src = "./imgs/sun.png"
        logo.src = "./imgs/zice2.png"
        document.body.classList.add("dark-theme")
    }


    icon.onclick = function(){
        document.body.classList.toggle("dark-theme")
        if(document.body.classList.contains("dark-theme")){
            icon.src = "./imgs/sun.png" 
            logo.src = "./imgs/zice2.png"
            localStorage.setItem("theme", "dark")
        }
        else{
            icon.src = "./imgs/moon.png"
            logo.src = "./imgs/zice.png"
            localStorage.setItem("theme", "light")
        }
    }