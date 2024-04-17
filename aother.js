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
        const content = btn.nextElementSibling.nextElementSibling; 
        btn.classList.toggle('active'); 
  
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          document.querySelectorAll('.dropdown-content').forEach(otherContent => {
            otherContent.style.maxHeight = null;
          });
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
            window.location.href = article.articleUrl; // Esto asumirá que el JSON tiene una URL válida para el artículo
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

          let currentIndex = 0; // Variable global para rastrear el índice del artículo actual

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
        currentIndex = index; // Actualiza el índice actual
      } else {
        console.log('No more articles available.');
      }
    })
    .catch(error => {
      console.error('Error fetching article data:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  loadArticle(currentIndex); // Carga el primer artículo

  // Botón para cargar el artículo siguiente
  document.getElementById('next-article').addEventListener('click', () => {
    loadArticle(currentIndex + 1);
  });

  // Botón para cargar el artículo anterior
  document.getElementById('prev-article').addEventListener('click', () => {
    if (currentIndex > 0) {
      loadArticle(currentIndex - 1);
    }
  });
});


        