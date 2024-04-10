document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('imageCarousel');
    if (carousel) {
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
      
        setInterval(() => {
          carousel.style.backgroundImage = images[currentIndex];
          currentIndex++;
      
          if (currentIndex >= images.length) {
            currentIndex = 0;
          }
        }, 2000);
    }
  });

var printModeButton = document.getElementById('printMode');
var digitalModeButton = document.getElementById('digitalMode');

printModeButton.addEventListener('click', function() {
    this.classList.add('print-mode');
    this.classList.remove('digital-mode');
    digitalModeButton.classList.remove('print-mode');
    digitalModeButton.classList.add('digital-mode');

});


digitalModeButton.addEventListener('click', function() {
    this.classList.add('print-mode');
    this.classList.remove('digital-mode');
    printModeButton.classList.remove('print-mode');
    printModeButton.classList.add('digital-mode');

});

document.addEventListener('DOMContentLoaded', () => {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    const changeFontSize = (increase) => {
        document.querySelectorAll('p, a').forEach(element => {
            const currentSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
            if (increase) {
                element.style.fontSize = `${currentSize + 1}px`;
            } else {
                element.style.fontSize = `${currentSize - 1}px`;
            }
        });
    };

    const toggleContrast = () => {
        document.body.classList.toggle('dark-mode');
    };

    increaseFontBtn.addEventListener('click', () => changeFontSize(true));
    decreaseFontBtn.addEventListener('click', () => changeFontSize(false));
    toggleContrastBtn.addEventListener('click', toggleContrast);
});