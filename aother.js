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
    const brandsData = [
        {
            name: "Tiffany & Co.",
            image: "https://press.tiffany.com/wp-content/uploads/Sclumberger_ATJ_4x5_5.jpg"
        },
        {
            name: "Chanel",
            image: "https://images.squarespace-cdn.com/content/v1/55f45174e4b0fb5d95b07f39/a966f310-33c8-435f-998c-26fb30e17bf2/Chanel-SS-2024-Campaign-by-Inez-Vinoodh-9.jpg"
        },
        {
            name: "Louis Vuitton",
            image: "https://images2.imgbox.com/5c/df/z5HrxHsx_o.jpg"
        },
        {
            name: "Prada",
            image: "https://images.squarespace-cdn.com/content/v1/52c0509ae4b0330e4569351f/d7e477e3-2ffd-487e-bf58-abbf6f6ff69f/PRADA_WOMEN%E2%80%99S+SS24+CAMPAIGN_05+LE+MILE+Magazine+lemilestudios+WOMEN"
        }
        ,
        {
            name: "Gucci",
            image: "https://i.mdel.net/i/db/2024/1/2129290/2129290-800w.jpg"
        }
        ,
        {
            name: "Miu Miu",
            image: "https://i.mdel.net/i/db/2024/1/2149392/2149392-800w.jpg"
        }
        ,
        {
            name: "Saint Laurent",
            image: "https://i0.wp.com/grungecake.com/wp-content/uploads/2024/01/diana-ross-yves-saint-laurent-spring-2024-campaign-grungecake-thumbnail.jpg?fit=1440%2C1800&ssl=1"
        } ,
        {
            name: "Dsquared2 ",
            image: "https://crfashionbook.com/wp-content/uploads/2024/01/Dsquared2-FW24-ADV-Campaign_Image-2-1.jpg"
        }
        
    ];

    const logosContainer = document.getElementById('logos-container');
    const modal = document.getElementById('modal');
    const expandedImg = document.getElementById('expanded-img');
    const closeButton = document.getElementById('close-btn');

    brandsData.forEach(brand => {
        const brandElement = document.createElement('p');
        brandElement.className = 'brand-name';
        brandElement.textContent = brand.name;
        brandElement.setAttribute('data-img', brand.image);
        brandElement.addEventListener('click', function() {
            expandedImg.src = this.getAttribute('data-img');
            modal.style.display = 'block';
        });
        logosContainer.appendChild(brandElement);
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('masthead.json')
      .then(response => response.json())
      .then(mastheadData => {
        Object.keys(mastheadData).forEach(section => {
          const sectionDiv = document.getElementById(section.toLowerCase());
          if (sectionDiv) {
            mastheadData[section].forEach(person => {
              const roleElement = document.createElement('div');
              roleElement.className = 'role';
              roleElement.textContent = person.role;
              const nameElement = document.createElement('div');
              nameElement.className = 'name';
              nameElement.textContent = person.name;
              
              sectionDiv.appendChild(roleElement);
              sectionDiv.appendChild(nameElement);
            });
          }
        });
      })
      .catch(error => {
        console.error('Error fetching the masthead data:', error);
      });
  });