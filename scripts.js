document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const body = document.body;

    // Toggle dark mode function
    darkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Toggle dark mode image visibility
        const darkModeImage = document.getElementById('dark-mode-image');
        darkModeImage.style.display = body.classList.contains('dark-mode') ? 'flex' : 'none';
    });

    // Fetch GitHub repositories
    fetch('https://api.github.com/users/YashSoPro/repos')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item hvr-grow';
                listItem.innerHTML = `<i class="fas fa-code-branch"></i> <a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                projectList.appendChild(listItem);
            });
        });
});
