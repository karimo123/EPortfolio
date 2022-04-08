
let mailBtn = document.querySelector(".mail__btn")
mailBtn.addEventListener("click", toggleModal)
let isModalOpen = false
const scaleFactor = 1/20
let boolInt = 0

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX *scaleFactor
    const y = event.clientY *scaleFactor

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0
        if(isOdd){
            boolInt = -1
        } else {
            boolInt = 1
        }
        
        shapes[i].style.transform =`translate(${x * boolInt}px, ${y *boolInt}px)`
    }
}



let contrastToggle = false
function toggleContrast(){
    contrastToggle = !contrastToggle
    if(contrastToggle){
        document.body.classList += " dark-theme"
    } else{
        document.body.classList.remove("dark-theme")
    }
}




function toggleModal(){
    if(isModalOpen){
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    document.body.classList += " modal--open"
    isModalOpen = true;

}


function contact() {
    event.preventDefault()
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"


    emailjs.sendForm(
        'service_xouludd',
        'template_4vivwlf',
        event.target,
        '7Mt7t5efQ8MOl-Snd'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is currently unavailable. Please contact me directly at karimogheriano@gmail.com"
        )
    })
}