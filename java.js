$(document).ready(function() {
    // Hide loader overlay after page load
    $(".loader-overlay").fadeOut(500);

    // Typewriter Effect for Profile Information
    const typewriterSettings = {
        waitingTime: 1000,
        delay: 150,
        hide: 0,
        cursor: true
    };

    $("#name").typewriter({ 
        ...typewriterSettings,
        text: "Yash Kumar"
    });

    $("#alias").typewriter({
        ...typewriterSettings,
        text: "Also known as Sable Meow",
        waitingTime: 2000 // Overriding waitingTime for alias
    });

    $("#hobbies").typewriter({
        ...typewriterSettings,
        text: "Music and I.T",
        waitingTime: 3000 // Overriding waitingTime for hobbies
    });

    // Fetch GitHub Projects and Display Them
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

    // Using GSAP for Smooth Animations
    gsap.from(".project-box", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3
    });
});
