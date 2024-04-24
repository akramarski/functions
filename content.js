let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js'
document.head.appendChild(markdownIt)

// Aplicar ajuste al cargar
document.addEventListener('DOMContentLoaded', function() {
    const images = [
      'url("https://images-prod.anothermag.com/1050/azure/another-prod/440/5/445688.jpg")',
      'url("https://fordmodels.com/image/5160/20230802_0by4ftw0-t5f-5_M.JPG")',
      'url("https://www.interviewmagazine.com/wp-content/uploads/2024/02/MAR24-COVER-scaled.jpg")',
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

// FUNCTION FONT-DISPLAY TOGGLE
  document.addEventListener('DOMContentLoaded', () => {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const toggleContrastBtn = document.getElementById('toggle-contrast');

    const changeFontSize = (increase) => {
        document.querySelectorAll('.dynamic-content').forEach(element => {
            const currentSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));
            const newSize = increase ? currentSize + 1 : currentSize - 1;
            element.style.fontSize = `${newSize}px`;
    
            let parent = element.parentElement;
            while (parent && !parent.classList.contains('container-adjustable')) {
                parent = parent.parentElement;
            }
            if (parent) {
                adjustContainerSize(parent);
            }
        });
    };
    // IMMPORTANT - container adjusted for function 
    const adjustContainerSize = (container) => {
        const children = Array.from(container.children);
        const totalHeight = children.reduce((total, child) => {
            return total + child.scrollHeight;
        }, 0);
        container.style.height = `${totalHeight}px`; 
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.container-adjustable').forEach(adjustContainerSize);
    });

    

    increaseFontBtn.addEventListener('click', () => changeFontSize(true));
    decreaseFontBtn.addEventListener('click', () => changeFontSize(false));
    toggleContrastBtn.addEventListener('click', toggleContrast);
});

const toggleContrast = () => {
    document.body.classList.toggle('dark-mode');
};

 // FUNCTION REVEAL ELEMENTS 
    document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, {
            root: null, 
            threshold: 0.1 
        });
    
        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });
    });


//EDITOR ACCESS

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form'); 
    if (form) {
      form.addEventListener('submit', validateForm);
    }
  });
  
  function validateForm(event) {
    event.preventDefault(); 
  
    const fullNameInput = document.querySelector('[name="full_name"]');
    const emailInput = document.querySelector('[name="email"]');
    const passwordInput = document.querySelector('[name="password"]');
    const errorMessageDiv = document.querySelector('#error-message'); 

    fetch('data.json')
      .then(response => response.json())
      .then(users => {
        const userExists = users.some(user => 
          user.fullName.toLowerCase() === fullNameInput.value.toLowerCase() &&
          user.email.toLowerCase() === emailInput.value.toLowerCase() &&
          user.password === passwordInput.value 
        );
  
        if (userExists) {
          window.location.href = 'logarticle.html'; 
        } else {
          showErrorMessage(errorMessageDiv, "Sorry, you're not an authorized editor");
        }
      })
      .catch(error => {
        console.error('Error fetching the user data:', error);

        showErrorMessage(errorMessageDiv, "Error fetching data. Please try again later.");
      });
  }
  
  function showErrorMessage(element, message) {
    if (element) {
      element.textContent = message;
      element.style.display = 'block'; 
    }
  }
  

 // ADD ARTCICLE... FOR THE NEXT TIME (FUNCTION NOT WORKING YET)


