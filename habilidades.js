async function carregarHabilidades() {
    const container = document.getElementById("habilidades-container");
    try {
        const response = await fetch("json/habilidades.json");
        const data = await response.json();

        data.habilidades.forEach(grupo => {
            const card = document.createElement("div");
            card.classList.add("habilidade__card");

            const titulo = document.createElement("h2");
            titulo.textContent = grupo.categoria;
            card.appendChild(titulo);

            grupo.skills.forEach(skill => {
                const skillsContainer = document.createElement("div");
                skillsContainer.classList.add("skills__container");

                skillsContainer.innerHTML = `
                    <div class="habilidade__skills">
                        <div class="title__skills">
                            <p>${skill.nome}</p> <p>${skill.nivel}%</p>
                        </div>
                        <div class="habilidade__skill">
                            <span class="progress" style="width: ${skill.nivel}%;"></span>
                        </div>
                    </div>
                `;

                card.appendChild(skillsContainer);
            });

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Erro ao carregar habilidades:", error);
        container.innerHTML = "<p>Erro ao carregar habilidades.</p>";
    }
}

carregarHabilidades();
