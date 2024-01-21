export const user = {
    avatarURL: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    eventsList: "",
    repositories: [],
    setInfo(gitHubUserData) {
        this.avatarURL = gitHubUserData.avatar_url;
        this.name = gitHubUserData.name;
        this.bio = gitHubUserData.bio;
        this.userName = gitHubUserData.login;
        this.followers = gitHubUserData.followers;
        this.following = gitHubUserData.following;

    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
    setEvents(eventsData) {
        this.eventsList = eventsData;
    },
}