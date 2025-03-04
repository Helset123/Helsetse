async function loadNews() {
    try {
        const response = await fetch('/data/news.json');
        const data = await response.json();
        
        const newsContainer = document.querySelector('.news');
        newsContainer.innerHTML = ''; // Clear existing content
        
        data.news.slice(0,3).forEach(item => {
            const newsBox = document.createElement('div');
            newsBox.className = 'box';
            
            let content = `<h2>${item.title}</h2>`;
            item.content.forEach(paragraph => {
                content += `<p>${paragraph}</p>`;
            });
            content += `<p class="date">${item.date}</p>`;
            
            newsBox.innerHTML = content;
            newsContainer.appendChild(newsBox);
        });
    } catch (error) {
        console.error('Error loading news:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadNews);