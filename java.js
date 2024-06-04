const projects = [
    { name: "emuinabox", link: "https://github.com/YashSoPro/emuinabox" },
    { name: "MeowCraftServer", link: "https://github.com/YashSoPro/MeowCraftServer" },
    { name: "meowmc", link: "https://github.com/YashSoPro/meowmc" }
];

// Function to display projects
function displayProjects() {
    const projectContainer = document.getElementById("projects");
    projectContainer.innerHTML = projects.map(project => `
        <li class="project-box">
            <a href="${project.link}" target="_blank">
                <img src="https://i.ibb.co/kBCbD6y/github-icon.png" alt="GitHub">
                <p>${project.name}</p>
            </a>
        </li>
    `).join('');
}

displayProjects();

// Typed.js typewriter effect for different sections
const nameTyped = new Typed("#name", {
    strings: ["Yash Kumar"],
    typeSpeed: 100,
    backSpeed: 60,
    startDelay: 1000,
    backDelay: 2000,
    showCursor: false
});

const aliasTyped = new Typed("#alias", {
    strings: ["Also known as Sable Meow"],
    typeSpeed: 100,
    backSpeed: 60,
    startDelay: 5000,
    backDelay: 2000,
    showCursor: false
});

const hobbiesTyped = new Typed("#hobbies", {
    strings: ["Music and I.T", "Coding and Gaming", "Exploring new technologies"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    backDelay: 3000,
    startDelay: 9000,
    showCursor: false
});

// Introducing typos randomly in the strings
function introduceTypos(strings) {
    return strings.map(string => {
        if (Math.random() < 0.3) { // 30% chance to introduce a typo
            const typoIndex = Math.floor(Math.random() * string.length);
            const typoChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
            return string.substring(0, typoIndex) + typoChar + string.substring(typoIndex + 1);
        }
        return string;
    });
}

hobbiesTyped.strings = introduceTypos(hobbiesTyped.strings);
