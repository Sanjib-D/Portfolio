document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  // 1. Fetch the data from the JSON file
  fetch("data/projects.json")
    .then((response) => response.json())
    .then((projects) => {
      projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        // Generate the Tags HTML
        // Note: Ensure tags in JSON do not contain special characters like < or >
        const tagsHtml = project.tags
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join("");

        // 3. Set the inner HTML
        // SECURITY FIX: Added rel="noopener noreferrer" to the target="_blank" link
        card.innerHTML = `
                    <div class="card-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="tags-container">
                            ${tagsHtml}
                        </div>
                        <div class="card-buttons">
                            <a href="${project.liveLink}" class="btn btn-primary btn-sm">Live Demo</a>
                            
                            <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                                <i class="fab fa-github"></i> Code
                            </a>
                        </div>
                    </div>
                `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading projects:", error));
});