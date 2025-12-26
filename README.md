# 🎨 Pixel Art Editor

![Pixel Art Editor](preview.png)

Um editor de pixel art simples e intuitivo desenvolvido em HTML, CSS e JavaScript puro. Crie suas próprias obras de arte pixeladas com uma interface limpa e fácil de usar.

🌐 **Acesse o projeto em:** [https://eduardonk9999.github.io/PixelArtLab/](https://eduardonk9999.github.io/PixelArtLab/)

## 📋 Sobre o Projeto

O **Pixel Art Editor** é uma aplicação web que permite criar arte pixelada em uma grade de 24x24 pixels. Com uma paleta de cores expandida e um seletor de cores personalizado, você tem total liberdade criativa para dar vida às suas ideias.

## ✨ Funcionalidades

### 🎨 Paleta de Cores
- **16 cores pré-definidas**: tan, green, white, black, red, blue, yellow, purple, orange, pink, cyan, brown, gray, lime, navy, maroon
- **Seletor de cores personalizado**: Escolha qualquer cor usando o color picker integrado
- **Interface responsiva**: Paleta adaptável com design moderno

### 🖼️ Grade de Pixels
- **Grade 24x24**: Total de 576 pixels para criar suas artes
- **Pintura intuitiva**: Clique para pintar, clique novamente para apagar
- **Visual limpo**: Bordas azuis claras para melhor visualização

### 💾 Exportação
- **Exportar como PNG**: Gere uma imagem PNG de alta qualidade da sua arte
- **Download automático**: A imagem é baixada automaticamente com timestamp único
- **Resolução**: Imagens exportadas em 480x480px (20px por pixel)

## 🚀 Como Usar

1. **Abrir o projeto**: Abra o arquivo `index.html` em qualquer navegador moderno
2. **Selecionar cor**: Clique em uma das cores da paleta ou use o color picker para escolher uma cor personalizada
3. **Pintar**: Clique nas células da grade para pintá-las com a cor selecionada
4. **Apagar**: Clique novamente em uma célula pintada para apagá-la (torná-la transparente)
5. **Exportar**: Clique no botão "Exportar PNG" para salvar sua criação

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilização e layout responsivo
- **JavaScript (Vanilla)**: Lógica e interatividade
- **Canvas API**: Geração de imagens PNG

## 📁 Estrutura do Projeto

```
PixelArteModel/
├── index.html          # Estrutura HTML principal
├── pixelartlab.js      # Lógica JavaScript da aplicação
├── style.css           # Estilos CSS
└── README.md           # Documentação do projeto
```

## 🎯 Características Técnicas

- **Grid CSS**: Utiliza `grid-template-columns: repeat(24, 1fr)` para criar a grade
- **Canvas API**: Renderização da imagem para exportação
- **Event Listeners**: Sistema de eventos para interatividade
- **Media Queries**: Preparado para responsividade (media query para 768px)

## 📱 Responsividade

O projeto está preparado para dispositivos móveis e tablets com uma media query configurada para telas de até 768px de largura.

## 📝 Licença

Este projeto é de código aberto e está disponível para uso livre.

## 👨‍💻 Desenvolvido com

Feito com ❤️ usando tecnologias web puras, sem dependências externas.

---

**Divirta-se criando suas artes pixeladas!** 🎨✨

