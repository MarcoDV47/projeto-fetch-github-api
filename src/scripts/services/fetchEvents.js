import { baseURL, repositoriesQnt } from "../variables.js";

export async function fetchEvents(username) {
    const url = await fetch(`${baseURL}/${username}/events?per_page=${repositoriesQnt}`);
    return await url.json();
}
