document.addEventListener('DOMContentLoaded', (event) => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
        function scrollRight() {
            scrollContainer.scrollBy({left: 200, behavior: 'smooth'});
        }

        function scrollLeft() {
            scrollContainer.scrollBy({left: -200, behavior: 'smooth'});
        }

    
    }

});
document.addEventListener('DOMContentLoaded', () => {
    fetch('logos.json')
      .then(response => response.json())
      .then(logosData => {
        const logosContainer = document.getElementById('logos-container');
        logosData.forEach(brand => {
          const brandElement = document.createElement('p');
          brandElement.className = 'brand-name';
          brandElement.textContent = brand.name;
          brandElement.setAttribute('data-img', brand.image);
          brandElement.addEventListener('click', function() {
            const expandedImg = document.getElementById('expanded-img');
            const modal = document.getElementById('modal');
            expandedImg.src = this.getAttribute('data-img');
            modal.style.display = 'block';
          });
          logosContainer.appendChild(brandElement);
        });
      })
      .catch(error => console.error('Error loading logos:', error));
  
    fetch('masthead.json')
      .then(response => response.json())
      .then(mastheadData => {
        Object.keys(mastheadData).forEach(section => {
          const sectionDiv = document.getElementById(section.toLowerCase());
          if (sectionDiv) {
            mastheadData[section].forEach(person => {
              const roleElement = document.createElement('div');
              roleElement.className = 'role';
              roleElement.textContent = `${person.role}: ${person.name}`;
              sectionDiv.appendChild(roleElement);
            });
          }
        });
      })
      .catch(error => console.error('Error loading masthead data:', error));
  
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', () => {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    });
  
    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  });

  document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  
    dropdownButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling.nextElementSibling; // Obtiene el contenido que está después de la línea
        btn.classList.toggle('active'); // Alterna la clase para rotar la flecha
  
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          // Asegúrate de cerrar todos los demás contenidos desplegables
          document.querySelectorAll('.dropdown-content').forEach(otherContent => {
            otherContent.style.maxHeight = null;
          });
          // Expande el contenido seleccionado
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    fetch('gallery.json')
      .then(response => response.json())
      .then(articles => {
        const galleryContainer = document.getElementById('gallery-container');
  
        articles.forEach(article => {
          const articleElement = document.createElement('div');
          articleElement.className = 'gallery-item';
  
          const imageElement = document.createElement('img');
          imageElement.src = article.image;
          imageElement.alt = article.title;
          imageElement.className = 'gallery-image';
  
          const titleElement = document.createElement('div');
          titleElement.className = 'gallery-title';
          titleElement.textContent = article.title;
  
          articleElement.appendChild(imageElement);
          articleElement.appendChild(titleElement);
  
          articleElement.addEventListener('click', () => {
            window.location.href = article.articleUrl; 
          });
  
          galleryContainer.appendChild(articleElement);
        });
      })
      .catch(error => {
        console.error('Error fetching gallery data:', error);
      });
  });


          // ARTICLES
          document.addEventListener('DOMContentLoaded', () => {
            fetch('articles.json')
              .then(response => response.json())
              .then(articles => {
                const article = articles[0];
                document.getElementById('article-title').innerHTML = article.title;
                document.getElementById('article-author').textContent = article.author;
                document.getElementById('article-text1').innerHTML = article.text1;
                document.getElementById('article-text2').innerHTML = article.text2;
                document.getElementById('article-image').src = article.imageUrl;
                document.getElementById('article-footer').innerHTML = article.footer;
              })
              .catch(error => {
                console.error('Error fetching article data:', error);
              });
          });

          let currentIndex = 0; 

function loadArticle(index) {
  fetch('articles.json')
    .then(response => response.json())
    .then(articles => {
      if (index >= 0 && index < articles.length) {
        const article = articles[index];
        document.getElementById('article-title').innerHTML = article.title;
        document.getElementById('article-author').textContent = article.author;
        document.getElementById('article-text1').innerHTML = article.text1;
        document.getElementById('article-text2').innerHTML = article.text2;
        document.getElementById('article-image').src = article.imageUrl;
        document.getElementById('article-footer').innerHTML = article.footer;
        currentIndex = index; 
      } else {
        console.log('No more articles available.');
      }
    })
    .catch(error => {
      console.error('Error fetching article data:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadArticle(currentIndex); 

  document.getElementById('next-article').addEventListener('click', () => {
    loadArticle(currentIndex + 1);
  });


  document.getElementById('prev-article').addEventListener('click', () => {
    if (currentIndex > 0) {
      loadArticle(currentIndex - 1);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const images = document.querySelectorAll('.gallery-image');
  
    function handleScroll() {
      const windowHeight = window.innerHeight;
      images.forEach(img => {
        const imageTop = img.getBoundingClientRect().top;
        if (imageTop < windowHeight - 100) { // 100px antes de que la imagen entre completamente en la vista
          img.style.opacity = 1; // Cambia la opacidad a 1 cuando la imagen está en la vista
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama a handleScroll al cargar la página para ajustar cualquier imagen inicialmente visible
  });

  document.addEventListener('DOMContentLoaded', () => {
    fetch('images.json') // Actualiza esta ruta al archivo JSON
        .then(response => response.json())
        .then(data => {
            const wrapper = document.querySelector('.scroll-wrapper2');
            data.forEach(item => {
                const container = document.createElement('div');
                container.className = 'image-container';

                const img = document.createElement('img');
                img.src = item.imageUrl;

                const button = document.createElement('button');
                button.className = 'info-toggle';
                button.textContent = '+';

                const info = document.createElement('div');
                info.className = 'image-info';

                const p = document.createElement('p');
                p.textContent = item.info;

                info.appendChild(p);
                container.appendChild(img);
                container.appendChild(button);
                container.appendChild(info);
                wrapper.appendChild(container);
            });
        })
        .catch(error => {
            console.error('Error fetching the image data:', error);
        });
});