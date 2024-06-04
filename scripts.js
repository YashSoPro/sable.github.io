document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/your-github-username/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item hvr-grow';
                listItem.innerHTML = `<i class="fas fa-code-branch"></i> <a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                projectList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching GitHub repos:', error));
});
