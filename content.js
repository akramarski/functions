let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)

document.addEventListener('DOMContentLoaded', function() {
    const images = [
      'url("https://images-prod.anothermag.com/1050/azure/another-prod/440/5/445688.jpg")',
      'url("https://fordmodels.com/image/5160/20230802_0by4ftw0-t5f-5_M.JPG")',
      'url("https://www.interviewmagazine.com/wp-content/uploads/2024/02/MAR24-COVER-scaled.jpg")',
      'url("https://fordmodels.com/image/5160/20230802_0by4ftw0-t5f-5_M.JPG")',
      'url("https://fiu-original.b-cdn.net/fontsinuse.com/use-images/159/159718/159718.jpeg?filename=danskmagazine_275019610_496895768455942_1193739405413643336_n.jpg")',
      'url("https://cdn.wefolk.com/news/2022/03/replica-man-x-lakeith-stanfield/_largeImage/REPLICA-MAN-SAINT-LAURENT-LaKeith-Stanfield-COVER-1.jpg?mtime=20220301163557&focal=none&tmtime=20230125210820")',
      'url("https://www.vibe.com/wp-content/uploads/2015/08/willow-smith-id-mag-1.jpg?w=1200")',
      'url("https://media.hero-magazine.com/wp-content/uploads/2014/10/HERO12-COVER-HERO.jpg")',
    ];
  
    let currentIndex = 0;
  
    const carousel = document.getElementById('imageCarousel');
  
    setInterval(() => {
      carousel.style.backgroundImage = images[currentIndex];
      currentIndex++;
  
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
    }, 2000); 
  });

// Obtén los botones
var printModeButton = document.getElementById('printMode');
var digitalModeButton = document.getElementById('digitalMode');

// Agrega un evento de clic al botón de Modo Print
printModeButton.addEventListener('click', function() {
    this.classList.add('print-mode');
    this.classList.remove('digital-mode');
    digitalModeButton.classList.remove('print-mode');
    digitalModeButton.classList.add('digital-mode');
    // Aquí podrías agregar lógica adicional para cambiar el modo a "Print"
});

// Agrega un evento de clic al botón de Modo Digital
digitalModeButton.addEventListener('click', function() {
    this.classList.add('print-mode');
    this.classList.remove('digital-mode');
    printModeButton.classList.remove('print-mode');
    printModeButton.classList.add('digital-mode');
    // Aquí podrías agregar lógica adicional para cambiar el modo a "Digital"
});

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    // Función para cambiar el tamaño de la fuente de todo el texto
    const changeFontSize = (increase) => {
        const currentSize = parseInt(window.getComputedStyle(root).fontSize);
        if (increase) {
            root.style.fontSize = `${currentSize + 1}px`;
        } else {
            root.style.fontSize = `${currentSize - 1}px`;
        }
    };

    // Función para alternar entre modo claro y oscuro
    const toggleContrast = () => {
        root.classList.toggle('dark-mode');
    };

    // Eventos para los botones
    increaseFontBtn.addEventListener('click', () => changeFontSize(true));
    decreaseFontBtn.addEventListener('click', () => changeFontSize(false));
    toggleContrastBtn.addEventListener('click', toggleContrast);
});