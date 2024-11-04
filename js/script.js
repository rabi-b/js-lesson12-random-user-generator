const randomFolks = document.querySelector(".random-peeps");

const getData = async function() {
    const usersRequest = await fetch("https://randomuser.me/api/?results=5");
    const data = await usersRequest.json();
    //console.log(data) //check what data is returned
    const userResults = data.results;
    //console.log(userResults) //check if results array is being accessed
    displayUsers(userResults)
};

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "" //empty the element's contents to make sure there are no duplicates
    for (let user of userResults) {
        let country = user.location.country;
        let name = user.name.first;
        let imageUrl = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `<h3>${name}</h3><p>${country}</p><img src=${imageUrl} alt="User avatar">`;
        randomFolks.append(userDiv);
    };
}

getData()