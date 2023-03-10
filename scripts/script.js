const urlPorjects = "https://ronaldcoe.github.io/sourcesportfolio/portfolio.json";

function displayProjects(projects) {
    let container = document.querySelector(".projects-container");
    let projectContainer = document.createElement("div");
    projectContainer.className = "project";
    let divText = document.createElement("div");
    let h3 = document.createElement("a");
    let p = document.createElement("p");
    let tech = document.createElement("p");
    let img = document.createElement("img");
    img.src = projects.img;

    h3.textContent = projects.name;
    h3.href = projects.link;
    h3.target = "_blank"
    p.textContent = projects.description;
    tech.textContent = projects.technologies;
    tech.className = "tech"

    divText.appendChild(h3);
    divText.appendChild(tech);
    divText.appendChild(p);

    projectContainer.appendChild(img);
    projectContainer.appendChild(divText)
    container.appendChild(projectContainer)
}
async function getProjects(url) {
    const response = await fetch(url);

    if(response.ok) {
        const jsObject = await response.json()
        let projects = jsObject["projects"]
        console.log(projects)
        projects.forEach(displayProjects);
    }
}


getProjects(urlPorjects)



function hideLeft() {
    let bar = document.querySelector(".left");
    let main = document.querySelector("main");
    let style = window.getComputedStyle(bar);
    let arrow = document.querySelector(".arrow");

    if (style.display == "flex") {
        bar.style.display = "none"
        main.style.gridTemplateColumns = "1fr"
        arrow.style.transform = "scaleX(1)"
        arrow.style.left = "10px"
    } else  {
        bar.style.display = "flex";
        main.style.gridTemplateColumns = "440px 1fr"
        arrow.style.transform = "scaleX(-1)"
        arrow.style.left = "400px"
    }
}


document.querySelector(".arrow").addEventListener("click", hideLeft)