const options = document.querySelectorAll(".opt")
const btn = document.querySelector(".btn-rate")

options.forEach(e => {
    e.addEventListener("click", () => {
        options.forEach(element => {
            if(element.classList.contains("selected")){
                element.classList.remove("selected")
            }
        })
        e.classList.add("selected")
    })
})

btn.addEventListener("click", () => {
    const opt = document.querySelector(".selected")
    console.log(opt.innerHTML)
    
})

