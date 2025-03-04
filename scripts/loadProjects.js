async function loadProjects() {
    try {
        const response = await fetch('/data/projects.json');
        const data = await response.json();
        
        const portfolioContainer = document.querySelector('.portfolio-boxes');
        portfolioContainer.innerHTML = ''; // Clear existing content
        
        data.projects.forEach(item => {
            const projectBox = document.createElement('div');
            projectBox.className = 'box';
            
            let content = `<h2>${item.title}</h2>`;
            item.content.forEach(paragraph => {
                content += `<p>${paragraph}</p>`;
            });

            if (item.image) {
                content += `<img src="${item.image}" alt="image of ${item.title}">`;
            }
            content += `<p></p>`;
            if (item.link) {
                content += `<a href="${item.link}">Visa projekt</a><br>`;
            }
            if (item.github) {
                content += `<a href="${item.github}">GitHub</a>`;
            }

            content += `<p class="proglang">Gjort i: ${item.language}</p>`
            content += `<p class="date">inlagd: ${item.date} <br> updaterad: ${item.updated}</p>`;

            projectBox.innerHTML = content;
            portfolioContainer.appendChild(projectBox);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);