document.addEventListener("DOMContentLoaded", function() {
    const colors = document.querySelectorAll(".color")
    const gridElement = document.querySelector(".grid")
    const colorPicker = document.getElementById("colorPicker")

    let currentColor = "black"

    const activate = (event) => {
        if (event.target.style.backgroundColor && event.target.style.backgroundColor !== 'transparent') {
            event.target.style.backgroundColor = 'transparent'
        } else {
            event.target.style.backgroundColor = currentColor
        }
    }

    const changeColor = (event) => {
        if (event.target.attributes["data-color"]) {
            currentColor = event.target.attributes["data-color"].value;
            // Atualiza o color picker para mostrar a cor selecionada
            if (colorPicker) {
                const rgb = getComputedStyle(event.target).backgroundColor;
                if (rgb && rgb !== 'rgba(0, 0, 0, 0)') {
                    colorPicker.value = rgbToHex(rgb);
                }
            }
        }
    }

    // Função para converter RGB para HEX
    const rgbToHex = (rgb) => {
        const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (!match) return "#000000";
        
        const r = parseInt(match[1]).toString(16).padStart(2, '0');
        const g = parseInt(match[2]).toString(16).padStart(2, '0');
        const b = parseInt(match[3]).toString(16).padStart(2, '0');
        
        return `#${r}${g}${b}`;
    }

    // Event listener para o color picker
    if (colorPicker) {
        colorPicker.addEventListener("input", (event) => {
            currentColor = event.target.value;
        });
    }

    colors.forEach(color => {
        color.addEventListener("click", changeColor)
    })

    for (let i = 0; i < 24 * 24; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")

        gridElement.appendChild(cell)
    }

    const cells = document.querySelectorAll(".cell")

    cells.forEach(cell => {
        cell.addEventListener("click", activate);
    })

    // Função para exportar a imagem como PNG
    const exportToPNG = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const gridSize = 24;
        const cellSize = 20; // Tamanho de cada pixel na imagem exportada
        
        canvas.width = gridSize * cellSize;
        canvas.height = gridSize * cellSize;
        
        // Preenche o fundo com branco
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Desenha cada célula
        cells.forEach((cell, index) => {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            
            const bgColor = getComputedStyle(cell).backgroundColor;
            
            // Se a célula tem cor (não é transparente), desenha ela
            if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
                ctx.fillStyle = bgColor;
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        });
        
        // Converte para PNG e faz o download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `pixel-art-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, "image/png");
    };
    
    // Adiciona o event listener ao botão de exportar
    const exportBtn = document.getElementById("exportBtn");
    if (exportBtn) {
        exportBtn.addEventListener("click", exportToPNG);
    }

})