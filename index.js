const soundOne = document.getElementById("soundOne")
const soundTwo = document.getElementById("soundTwo")
const soundThree = document.getElementById("soundThree")
const soundFour = document.getElementById("soundFour")
const soundFive = document.getElementById("soundFive")
const soundSix = document.getElementById("soundSix")
const soundSeven = document.getElementById("soundSeven")
const soundEight = document.getElementById("soundEight")
const soundNine = document.getElementById("soundNine")

let audio = new Audio()

audio.src = "1.mp3"
audio.volume = 1
audio.preload = "auto"


soundOne.onclick = () => {
    audio.play()
}

soundTwo.onclick = () => {
    audio.play()
}

soundThree.onclick = () => {
    audio.play()
}
soundFour.onclick = () => {
    audio.play()
}
soundFive.onclick = () => {
    audio.play()
}
soundSix.onclick = () => {
    audio.play()
}
soundSeven.onclick = () => {
    audio.play()
}
soundEight.onclick = () => {
    audio.play()
}
soundNine.onclick = () => {
    audio.play()
}



