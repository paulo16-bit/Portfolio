async function carregarProjetos() {
    try {
        const response = await fetch("json/projetos.json");
        const data = await response.json();
        const container = document.getElementById("projetos__container");

        data.portfolio.forEach(projeto => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${projeto.image}" alt="${projeto.title}">
                <div class="card-content">
                    <h2>${projeto.title}</h2>
                    <p>${projeto.description}</p>
                    <p class="tech">${projeto.technologies.join(", ")}</p>
                    <div class="projetos__links">
                        <a href="${projeto.links.repository}" target="_blank">Código</a>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar os projetos:", error);
    }
}

carregarProjetos();