document.addEventListener("keydown", (event) => {
    const welcome = document.getElementById("welcome")
    const codeDisplay = document.getElementById("codeResult")
    const whichDisplay = document.getElementById("whichResult")
    welcome.textContent = `${event.key}` 
    codeDisplay.textContent = `${event.code}`
    whichDisplay.textContent = `${event.which}`
    document.getElementById("output").appendChild(welcome)
})