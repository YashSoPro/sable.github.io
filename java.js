$(document).ready(function(){
    // Profile information
    $("#name").typewriter({
        text: "Yash Kumar",
        waitingTime: 1000,
        delay: 150,
        hide: 0,
        cursor: true,
    });
    
    $("#alias").typewriter({
        text: "Also known as Sable Meow",
        waitingTime: 2000,
        delay: 150,
        hide: 0,
        cursor: true,
    });
    
    $("#hobbies").typewriter({
        text: "Music and I.T",
        waitingTime: 3000,
        delay: 150,
        hide: 0,
        cursor: true,
    });

    // Fetch GitHub projects and display them
    const projects = [
        { name: "emuinabox", link: "https://github.com/YashSoPro/emuinabox" },
        { name: "MeowCraftServer", link: "https://github.com/YashSoPro/MeowCraftServer" },
        { name: "meowmc", link: "https://github.com/YashSoPro/meowmc" }
    ];
    
    const projectContainer = $("#projects");
    projects.forEach(project => {
        const listItem = `
            <li class="project-box">
                <a href="${project.link}" target="_blank" class="project-link">${project.name}</a>
            </li>`;
        projectContainer.append(listItem);
    });
});
