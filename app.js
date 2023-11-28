console.log("Let's get this party started!");
const searchForm = document.querySelector("#formSearch");
const gifContainer = document.querySelector("#gifArea");
const removeButton = document.querySelector("#clearButton");
const API = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

async function getGIF(searchText) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=${API}`);
    const num = res.data.data.length;/*I parsed Giphy API Jason using Rested Chrome extension and found res.data.data 
    represents each GIF. res.data is an array of GIFs, res.data.data is one single GIF*/
    if (num) {
        let randomIndex = Math.floor(Math.random() * num);
        let newGIF = document.createElement("img");
        newGIF.src = res.data.data[randomIndex].images.original.url;/*res.data.data represents each GIF. res.data[randomIndex] won't work.*/
        gifContainer.append(newGIF);
    }
}

searchForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    let searchTerm = document.querySelector("#searchTerm").value;
    getGIF(searchTerm);
    document.querySelector("#searchTerm").value = "";
});

removeButton.addEventListener("click", function(event) {
    gifContainer.innerHTML = "";
});
