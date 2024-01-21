import { baseURL, repositoriesQnt } from "../variables.js";

export async function fetchRepos(username) {
    const url = await fetch(`${baseURL}/${username}/repos?per_page=${repositoriesQnt}`);
    return await url.json();
}
