document.addEventListener('DOMContentLoaded', function() {
    // GitHub repositories fetching
    fetch('https://api.github.com/users/YashSoPro/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item hvr-grow';
                listItem.innerHTML = `<i class="fas fa-code-branch"></i> <a href="${repo.html_url}" target="_blank">${

