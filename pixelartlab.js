document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll(".color")
    const gridElement = document.querySelector(".grid")

    let currentColor = "black"

    for (let i = 0; i < 24 * 24; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")

        gridElement.appendChild(cell)
    }

})


console.log("teste")