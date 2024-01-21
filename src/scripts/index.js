import { fetchUser } from "./services/fetchUser.js";
import { fetchRepos } from "./services/fetchRepos.js";
import { fetchEvents } from "./services/fetchEvents.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

const input = document.getElementById("input-search");

const button = document.getElementById("btn-search");
button.addEventListener("click", () => {
    const username = input.value.trim();
    if (isInputEmpty(username)) return;
    getUserData(username)
})


input.addEventListener("keyup", (e) => {
    const username = e.target.value.trim();
    if (e.key === "Enter") {
        if (isInputEmpty(username)) return;
        getUserData(username)
    }
})


async function getUserData(username) {
    const userResponse = await fetchUser(username);
    const repositoriesResponse = await fetchRepos(username);
    const eventsResponse = await fetchEvents(username);

    if (userResponse.message === "Not Found") {
        screen.renderError();
        return
    }
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setEvents(eventsResponse);
    screen.render(user);
}

function isInputEmpty(username) {
    if (username.length === 0) {
        alert("Por favor, preencha o campo com o nome do usuário(a) do GitHub");
        return true
    }
}