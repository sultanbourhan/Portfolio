
let colorLo = localStorage.getItem("color")

if(colorLo){
    document.body.className = colorLo
}

let Home = document.querySelector(".nav-Home")
let About = document.querySelector(".nav-About")
let Services = document.querySelector(".nav-Services")
let Portfolio = document.querySelector(".nav-Portfolio")
let Contact = document.querySelector(".nav-Contact")
let tops = document.querySelector(".top")

let navbar = document.querySelectorAll(".navbar a")



tops.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

Home.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    navbar.forEach(navb =>{
        navb.classList.remove("active")
    })
    this.classList.add("active")
}

About.onclick = function(){
    window.scrollTo({
        top: 545,
        behavior: "smooth",
    })
    navbar.forEach(navb =>{
        navb.classList.remove("active")
    })
    this.classList.add("active")
}

Services.onclick = function(){
    window.scrollTo({
        top: 1087,
        behavior: "smooth",
    })
    navbar.forEach(navb =>{
        navb.classList.remove("active")
    })
    this.classList.add("active")
}

Portfolio.onclick = function(){
    window.scrollTo({
        top: 1666,
        behavior: "smooth",
    })
    navbar.forEach(navb =>{
        navb.classList.remove("active")
    })
    this.classList.add("active")
}

Contact.onclick = function(){
    window.scrollTo({
        top: 2714,
        behavior: "smooth",
    })
    navbar.forEach(navb =>{
        navb.classList.remove("active")
    })
    this.classList.add("active")
}




let colorblock = document.querySelector("body header .container .Portfolio .color .block")
let colornone = document.querySelector("body header .container .Portfolio .color .none")

colorblock.onclick = function (){
    if(colornone.style.display === "flex"){
        colornone.style.display = "none"
    }else{
        colornone.style.display = "flex"
    }
    
}

let colorblue = document.querySelector("body header .container .Portfolio .color .none div:nth-child(1)")
let colorgreen = document.querySelector("body header .container .Portfolio .color .none div:nth-child(2)")
let colorplum = document.querySelector("body header .container .Portfolio .color .none div:nth-child(3)")
let colorred = document.querySelector("body header .container .Portfolio .color .none div:nth-child(4)")
let coloryellow = document.querySelector("body header .container .Portfolio .color .none div:nth-child(5)")

colorblue.onclick= function(){
    document.body.className = "blue"
    colornone.style.display = "none"
    localStorage.setItem("color" , "blue")
}
colorgreen.onclick= function(){
    document.body.className = "green"
    colornone.style.display = "none"
    localStorage.setItem("color" , "green")
}
colorplum.onclick= function(){
    document.body.className = "plum"
    colornone.style.display = "none"
    localStorage.setItem("color" , "plum")
}
colorred.onclick= function(){
    document.body.className = "red"
    colornone.style.display = "none"
    localStorage.setItem("color" , "red")
}
coloryellow.onclick= function(){
    document.body.className = "yellow"
    colornone.style.display = "none"
    localStorage.setItem("color" , "yellow")
}


// ----------------------------------------------

let icon = document.querySelector("body header .container nav .icon")

let nav = document.querySelector("body header .container nav .navbar")

icon.onclick = function(){
    if(nav.style.display === "flex"){
        nav.style.display = "none"
        this.classList.remove("close")
    }else{
        nav.style.display = "flex"
        this.classList.add("close")
    }
    
}


let scroll_img =document.querySelector(".About .container .img")
let scroll_text =document.querySelector(".About .container .text")

let Services_p =document.querySelector(".Services .container > p")
let Services_box =document.querySelectorAll(".Services .container .flex .box")

let project_p =document.querySelector(".project .container > p")
let project_box =document.querySelectorAll(".project .container .flex .box")

window.onscroll = function(){
    if(this.scrollY >= 0 && this.scrollY <= 175){
        navbar.forEach(navb =>{
            navb.classList.remove("active")
        })
        Home.classList.add("active")
    }

    if(this.scrollY >= 175 && this.scrollY <= 981){
        scroll_img.classList.add("scroll")
        scroll_text.classList.add("scroll")
        navbar.forEach(navb =>{
            navb.classList.remove("active")
        })
        About.classList.add("active")
    }else{
        scroll_img.classList.remove("scroll")
        scroll_text.classList.remove("scroll")
    }

    if(this.scrollY >= 730 && this.scrollY <= 1666){
        Services_p.classList.add("scroll")
        Services_box.forEach(box =>{
            box.classList.add("scroll")
        })
        navbar.forEach(navb =>{
            navb.classList.remove("active")
        })
        Services.classList.add("active")
    }else{
        Services_p.classList.remove("scroll")
        Services_box.forEach(box =>{
            box.classList.remove("scroll")
        })
    }

    if(this.scrollY >= 1257 && this.scrollY <= 2600){
        project_p.classList.add("scroll")
        project_box.forEach(box=>{
            box.classList.add("scroll")
        })
        navbar.forEach(navb =>{
            navb.classList.remove("active")
        })
        Portfolio.classList.add("active")
    }else{
        project_p.classList.remove("scroll")
        project_box.forEach(box=>{
            box.classList.remove("scroll")
        })
    }

    if(this.scrollY >= 2507){
        navbar.forEach(navb =>{
            navb.classList.remove("active")
        })
        Contact.classList.add("active")
    }
}
