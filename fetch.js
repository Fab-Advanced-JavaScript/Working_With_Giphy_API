
// my apiKey 6QYLjX0549AdzTxRwYumNPL4iAyhtJj8
const init = () => {
    let searchBtn = document.querySelector("#searchBtn");
    let clearBtn = document.querySelector("#clearBtn");
    searchBtn.addEventListener("click",searchTerm);
    clearBtn.onclick = clearField;
}

const searchTerm = async() => {
    let search = document.querySelector("#clear");
    let searchTerm = search.value;
    let apiKey = "6QYLjX0549AdzTxRwYumNPL4iAyhtJj8";
    let limit = 10;
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=${apiKey}`;

    let settings = {
        method: 'get'
    }

    let term = fetch(url, settings);
    return await term.then(terms => terms.json())
                                            .then(search => {
                                                console.log(search);
                                                let divParent = document.querySelector(".divParent");
                                                if (!divParent) {
                                                    divParent = document.createElement("div");
                                                    divParent.className = "divParent";
                                                    return mapItem = search.data.map(items => {
                                                        let url =  `https://media1.giphy.com/media/${items.id}/200.gif`
                                                        let imgChild = document.createElement("img");
                                                        imgChild.setAttribute("src", `${url}`);
                                                        console.log(imgChild);
                                                        divParent.appendChild(imgChild);
                                                        document.body.appendChild(divParent);
                                                    })
                                                }
                                                // } else {
                                                //     console.log(divParent);
                                                //     return mapItem = search.data.map(elements => {
                                                //         let url =  `https://media1.giphy.com/media/${elements.id}/200.gif`
                                                //         let newImg = document.createElement("img");
                                                //         newImg.setAttribute("src", `${url}`);
                                                //         console.log(newImg);
                                                //         divParent.replaceWith(newImg)
                                                //     })
                                                // }
                                            }).catch(err => {
                                                    console.error("Data were not found " + err);
                                            });

}

// this the term in the box
const clearField = () => {
    let clearInput = document.querySelector("#clear");
    clearInput.value = "";
    let divTerm = document.querySelectorAll(".divParent");
    divTerm.forEach(item => item.remove())
}

window.addEventListener("load", init);
