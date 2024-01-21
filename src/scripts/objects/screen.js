export const screen = {
    userProfile: document.querySelector(".profile-data"),
    render(userData) {
        this.userProfile.innerHTML =
            `<div class="info">   
                <img src="${userData.avatarURL}" alt="Foto de perfil do GitHub do usuário">
                <div class="data">
                    <h1>${userData.name ?? "Não possui nome cadastrado 🤠"}</h1>
                    <h3>${userData.bio ?? "Não possui bio cadastrada 😎"}</h3>
                    <br>
                    <div class="followers">
                        <h4>Followers: ${userData.followers}</h4>
                        <h4>Following: ${userData.following}</h4>
                    </div>
                </div>
            </div>`

        let repositoriesItems = "";
        userData.repositories.forEach(repo =>
            repositoriesItems += 
            `<li>
                <div>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <ul>
                        <li>🍴 ${repo.forks_count}</li>
                        <li>⭐ ${repo.watchers_count}</li>
                        <li>👀 ${repo.stargazers_count}</li>
                        <li>💻 ${repo.language ?? "❌"}</li>
                    </ul>
                </div>
            </li>`
        );
        if (userData.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItems}</ul>
            </div>`
        }

        let eventsItems = "";
        for (let i = 0; i < 10; i++) {
            const basePath = userData.eventsList[i];
            eventsItems += `<li><a 
            href="https://github.com/${basePath.repo.name}" target="_blank">${basePath.repo.name}</a>
            <p>- ${basePath.payload.commits[0].message}</p></li>`;
        }

        this.userProfile.innerHTML +=
            `<div class="events">
            <h2>Eventos</h2>
            <br>
            <ul>${eventsItems}</ul>
            </div>`
    },
    renderError() {
        this.userProfile.innerHTML = `<h2>O usuário não foi encontrado</h2>`
    }
}