const optionImage = document.querySelectorAll(".option-image")
const container = document.querySelector(".container")
const resultText = document.querySelector(".result-text")
const botReults = document.querySelector(".bot-result img")
const userReults = document.querySelector(".user-result img")


const resultImgs = [
    'img/rock.png', 
    'img/paper.png', 
    'img/scissors.png'
]

const winner = {
    RR:'Draw',
    RP:'Bot',
    RS:'You',
    PP:'Draw',
    PR:'You',
    PS:'Bot',
    SS:'Draw',  
    SR:'Bot',
    SP:'You',
}



function handleOptionClick(event) {
    const clickedImage = event.currentTarget
    const userIndex = Array.from(optionImage).indexOf(clickedImage)

    botReults.src = userReults.src = "img/rock.png"

    container.classList.add("start")
    resultText.textContent = "3..2..1"

    setTimeout(() => {
        container.classList.remove("start")

        const randomNumber = Math.floor(Math.random() * resultImgs.length)
        botReults.src = resultImgs[randomNumber]

        userReults.src = resultImgs[userIndex]

        const userValue = ['R', 'P', 'S'][userIndex]
        const botValue = ['R', 'P', 'S'][randomNumber]
        const combinedResult = userValue + botValue
        const finalResult = winner[combinedResult]

        console.log(finalResult)

        resultText.textContent = userValue === botValue ? "Draw" : finalResult + " Won"
    }, 3000)
}



optionImage.forEach( img => {
    img.addEventListener("click", handleOptionClick)
})