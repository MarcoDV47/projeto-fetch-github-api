import { baseURL } from "../variables.js";

export async function fetchEvents(username) {
    const url = await fetch(`${baseURL}/${username}/events`);
    return await url.json();
}
