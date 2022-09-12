    const welcome = document.getElementById("welcome")
    const codeDisplay = document.getElementById("codeResult")
    const whichDisplay = document.getElementById("whichResult")
    
    
    document.addEventListener("keydown", (event) => {
    welcome.textContent = `Key Selected: ${event.key}` 
    codeDisplay.textContent = `${event.code}`
    whichDisplay.textContent = `${event.which}`
    document.getElementById("output").appendChild(welcome)
})