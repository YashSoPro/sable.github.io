$(document).ready(function(){
    const projects = [
        { name: "emuinabox", link: "https://github.com/YashSoPro/emuinabox" },
        { name: "MeowCraftServer", link: "https://github.com/YashSoPro/MeowCraftServer" },
        { name: "meowmc", link: "https://github.com/YashSoPro/meowmc" }
    ];
    
    // Function to display projects
    function displayProjects() {
        const projectContainer = $("#projects");
        projects.forEach(project => {
            const listItem = `
                <li class="project-box hvr-grow-shadow animate__animated animate__fadeInUp">
                    <a href="${project.link}" target="_blank" class="project-link">
                        <img src="https://i.ibb.co/kBCbD6y/github-icon.png" alt="GitHub">
                        <p>${project.name}</p>
                    </a>
                </li>`;
            projectContainer.append(listItem);
        });
    }
    
    displayProjects();
    
    // Initialize typewriter effects with delays
    setTimeout(function() {
        $("#name").typewriter({
            delay: 150,
            waitingTime: 1000,
            hide: 0,
            cursor: true
        });
    }, 1000);
    
    setTimeout(function() {
        $("#alias").typewriter({
            delay: 150,
            waitingTime: 2000,
            hide: 0,
            cursor: true
        });
    }, 8000);
    
    setTimeout(function() {
        $("#hobbies").typewriter({
            delay: 150,
            waitingTime: 3000,
            hide: 0,
            cursor: true
        });
    }, 15000);
});
