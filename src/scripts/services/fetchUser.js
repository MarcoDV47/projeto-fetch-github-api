import { baseURL } from "../variables.js";

export async function fetchUser(username) {
    const url = await fetch(`${baseURL}/${username}`);
    return await url.json();
}
