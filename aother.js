document.addEventListener('DOMContentLoaded', () => {
  loadLogos();
  loadrMasthead();
  loadGallery();
  loadArticle();
  doModal();
  dorScroll();
  dorLoadDImages();

  // MOVE TO OTHER ARTICLE FUNCTION 
  const nextArticleBtn = document.getElementById('next-article');
  const prevArticleBtn = document.getElementById('prev-article');
  if (nextArticleBtn && prevArticleBtn) {
      nextArticleBtn.addEventListener('click', () => {
        loadArticle(currentIndex + 1);
      });

      prevArticleBtn.addEventListener('click', () => {
          if (currentIndex > 0) {
              loadArticle(currentIndex - 1);
          }
      });
  }
});
// lOGOS JSON
function loadLogos() {
  fetch('logos.json')
      .then(response => response.json())
      .then(logosData => {
          const logosContainer = document.getElementById('logos-container');
          if (logosContainer) {
              logosContainer.innerHTML = ''; 
              logosData.forEach(brand => {
                  const brandElement = document.createElement('p');
                  brandElement.className = 'brand-name';
                  brandElement.textContent = brand.name;
                  brandElement.setAttribute('data-img', brand.image);
                  brandElement.addEventListener('click', function() {
                      const expandedImg = document.getElementById('expanded-img');
                      const modal = document.getElementById('modal');
                      if (expandedImg && modal) {
                          expandedImg.src = this.getAttribute('data-img');
                          modal.style.display = 'block';
                      }
                  });
                  logosContainer.appendChild(brandElement);
              });
          }
          const closeButton = document.querySelector('.close-btn');
          if (closeButton) {
              closeButton.addEventListener('click', function() {
                  const modal = document.getElementById('modal');
                  if (modal) {
                      modal.style.display = 'none';
                  }
              });
          }
      })
      .catch(error => console.error('Error loading logos:', error));
}

document.addEventListener('DOMContentLoaded', loadLogos);

// MASTERHEAD JSON
function loadrMasthead() {
  fetch('masthead.json')
      .then(response => response.json())
      .then(mastheadData => {
          Object.keys(mastheadData).forEach(section => {
              const sectionDiv = document.querySelector(`#${section} .dropdown-content`);
              const button = document.querySelector(`#${section} .dropdown-btn `);
              if (sectionDiv && button) {
                  mastheadData[section].forEach(person => {
                      const roleElement = document.createElement('div');
                      roleElement.className = 'role dynamic-content ';
                      roleElement.textContent = `${person.role}: ${person.name}`;
                      sectionDiv.appendChild(roleElement);
                  });

                  button.addEventListener('click', () => toggleDropdown(sectionDiv, button));
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
      }}
}

// DROPDOWN CREDITS - MASTERHEAD
function toggleDropdown(contentDiv, button) {
  if (contentDiv.style.maxHeight) {
      contentDiv.style.maxHeight = null;
      button.classList.remove('active'); 
  } else {
     
      document.querySelectorAll('.dropdown-content dynamic-content').forEach(div => {
          div.style.maxHeight = null;
      });
      document.querySelectorAll('.dropdown-btn').forEach(btn => {
          btn.classList.remove('active'); 
      });

      contentDiv.style.maxHeight = contentDiv.scrollHeight + "px";
      button.classList.add('active'); 
  }
}

// GALLERY DESKTOP
function loadGalleryDesktop() {
  console.log("Cargando galería para desktop");
  fetch('gallery.json')
      .then(response => response.json())
      .then(articles => {
          const galleryContainer = document.getElementById('gallery-container');
          galleryContainer.innerHTML = ''; 

          articles.forEach(article => {
              const articleElement = document.createElement('div');
              articleElement.className = 'gallery-item';

              const imageElement = document.createElement('img');
              imageElement.src = article.image;
              imageElement.alt = article.title;
              imageElement.className = 'gallery-image';

              articleElement.appendChild(imageElement);
              galleryContainer.appendChild(articleElement);

              imageElement.onmouseover = () => {
                  const titleOverlay = document.getElementById('gallery-title-overlay');
                  titleOverlay.textContent = article.title;
                  titleOverlay.style.display = 'block'; 
              };

              imageElement.onmouseleave = () => {
                  const titleOverlay = document.getElementById('gallery-title-overlay');
                  titleOverlay.textContent = '';
                  titleOverlay.style.display = 'none'; 
              };

              imageElement.onclick = () => {
                  window.location.href = article.articleUrl; 
              };
          });
      })
      .catch(error => console.error('Error fetching gallery data:', error));
}

// GALLERY MOBILE
function loadGalleryMobile() {
  console.log("Cargando galería para móvil");
  fetch('gallery.json')
      .then(response => response.json())
      .then(articles => {
          const galleryContainer = document.getElementById('gallery-container');
          galleryContainer.innerHTML = ''; 

          articles.forEach(article => {
              const articleElement = document.createElement('div');
              articleElement.className = 'gallery-item';

              const imageElement = document.createElement('img');
              imageElement.src = article.image;
              imageElement.alt = article.title;
              imageElement.className = 'gallery-image';

              const infoToggleButton = document.createElement('button');
              infoToggleButton.className = 'info-toggle';
              infoToggleButton.textContent = '+';

              const infoContainer = document.createElement('div');
              infoContainer.className = 'image-info-container';
              infoContainer.style.display = 'none';

              const titleElement = document.createElement('div');
              titleElement.className = 'image-info-title';
              titleElement.textContent = article.title;

              const readMoreButton = document.createElement('a');
              readMoreButton.className = 'image-info-read-more';
              readMoreButton.textContent = 'READ MORE';
              readMoreButton.href = article.articleUrl;
              readMoreButton.target = '_blank'; 

              infoContainer.appendChild(titleElement);
              infoContainer.appendChild(readMoreButton);

              articleElement.appendChild(imageElement);
              articleElement.appendChild(infoToggleButton);
              articleElement.appendChild(infoContainer);

              infoToggleButton.addEventListener('click', function() {
                  const isInfoVisible = infoContainer.style.display === 'block';
                  infoContainer.style.display = isInfoVisible ? 'none' : 'block';
                  this.textContent = isInfoVisible ? '+' : '-';
              });

              galleryContainer.appendChild(articleElement);
          });
      })
      .catch(error => console.error('Error fetching gallery data:', error));
}

// FUNCTION DIFFERENT GALLERY FOR MOBILE AND DESKTOP
function applyLoadGallery() {
  if (window.innerWidth <= 768) {
      loadGalleryMobile(); 
  } else {
      loadGalleryDesktop(); 
  }
}

document.addEventListener('DOMContentLoaded', applyLoadGallery);
window.addEventListener('resize',  applyLoadGallery);

let currentIndex = 0; 

// GALLERY PHOTOGRAPHY

document.addEventListener('DOMContentLoaded', () => {
  fetch('images.json')
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
              info.style.display = 'none'; 

              const p = document.createElement('p');
              p.textContent = item.info;
              info.appendChild(p);

              container.appendChild(img);
              container.appendChild(button);
              container.appendChild(info);
              wrapper.appendChild(container);
              button.addEventListener('click', function() {
                  const isInfoVisible = info.style.display === 'block';
                  info.style.display = isInfoVisible ? 'none' : 'block';
                  button.textContent = isInfoVisible ? '+' : '-';
              });
          });
      })
      .catch(error => {
          console.error('Error fetching the image data:', error);
      });
});


// ARTCICLES - ANTOHER MAGAZINE

// ARTICLES JSON WITH DYNAMIC-CONTENT TO APPLY FONT DISPLAY TOGGLE
function loadArticle(index) {
  console.log(`Load article with index: ${index}`);
  fetch('articles.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(articles => {
      if (index >= 0 && index < articles.length) {
        const article = articles[index];
        const title = document.getElementById('article-title');
        title.innerHTML = article.title;
        title.classList.add('dynamic-content');
        
        const author = document.getElementById('article-author');
        author.textContent = article.author;
        author.classList.add('dynamic-content');

        const text1 = document.getElementById('article-text1');
        text1.innerHTML = article.text1;
        text1.classList.add('dynamic-content');

        const text2 = document.getElementById('article-text2');
        text2.innerHTML = article.text2;
        text2.classList.add('dynamic-content');

        document.getElementById('article-image').src = article.imageUrl;
        
        const footer = document.getElementById('article-footer');
        footer.innerHTML = article.footer;
        footer.classList.add('dynamic-content');

        currentIndex = index;
      } else {
        console.log('No more articles available.');
      }
    })
    .catch(error => {
      console.error('Error fetching article data:', error);
    });
}  

// CONNECT ARTICLES WITH ID NOT WORKING COMPLEATLY 
fetch('gallery.json')
  .then(response => response.json())
  .then(data => {
    const galleryContainer = document.getElementById('gallery-container');
    data.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.className = 'gallery-item';

      const imageElement = document.createElement('img');
      imageElement.src = article.image;
      imageElement.alt = article.title;

      const titleElement = document.createElement('h3');
      titleElement.textContent = article.title;

      const readMoreButton = document.createElement('a');
      readMoreButton.href = `articles.html?articleId=${article.id}`;  
      readMoreButton.textContent = 'Read More';
      readMoreButton.className = 'read-more-button';

      articleElement.appendChild(imageElement);
      articleElement.appendChild(titleElement);
      articleElement.appendChild(readMoreButton);
      galleryContainer.appendChild(articleElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  function getArticleIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('articleId'); 
  }
  
  function loadArticleById(articleId) {
    fetch('articles.json')
      .then(response => response.json())
      .then(articles => {
        const article = articles.find(a => a.id === parseInt(articleId)); 
        if (article) {
          document.getElementById('article-title').textContent = article.title;
          document.getElementById('article-author').textContent = article.author;
          document.getElementById('article-text1').innerHTML = article.text1;
          document.getElementById('article-text2').innerHTML = article.text2;
          document.getElementById('article-image').src = article.imageUrl;
          document.getElementById('article-footer').textContent = article.footer;
        } else {
          console.log('Article not found');
        }
      })
      .catch(error => console.error('Error loading article data:', error));
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const articleId = getArticleIdFromUrl();
    if (articleId) {
      loadArticleById(articleId);
    }
  });
  

// REDEFINE FUNCTION ARTICLE NAVEGATION
document.addEventListener('DOMContentLoaded', () => {
  loadArticle(currentIndex); 

  const nextArticleButton = document.getElementById('next-article');
  const prevArticleButton = document.getElementById('prev-article');

  if (nextArticleButton) {
    nextArticleButton.addEventListener('click', () => {
      if (currentIndex < Infinity) { 
        loadArticle(currentIndex + 1);
      }
    });
  } else {
    console.error('Button next-article not found');
  }

  if (prevArticleButton) {
    prevArticleButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        loadArticle(currentIndex - 1);
      }
    });
  } else {
    console.error('Button prev-article not found');
  }
});

