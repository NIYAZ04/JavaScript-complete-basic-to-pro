const username = "google";

function fetchData(url, callback) {
    const xhr = new XMLHttpRequest()  
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(null, JSON.parse(xhr.responseText)); 
            } else {
                callback(`Request failed with status: ${xhr.status}`, null);
            }
        }
    };

    xhr.onerror = function () {
        callback("Network error occurred", null);
    };

    xhr.send();
}

fetchData(`https://api.github.com/users/${username}`, (err, userData) => {
    if (err) {
        console.error("Error fetching user data:", err);
        return;
    }

    console.log("User Data:", userData);
    console.log("Username:", userData.login);
    console.log("Followers:", userData.followers);
    console.log("Public Repositories:", userData.public_repos);

    fetchData(`https://api.github.com/users/${username}/repos`, (err, repos) => {
        if (err) {
            console.error("Error fetching repositories:", err);
            return;
        }

        console.log("Repositories:", repos);
        console.log("First Repo Name:", repos[0]?.name || "No Repositories");
        console.log("First Repo URL:", repos[0]?.html_url || "No Repositories");
    });
});
