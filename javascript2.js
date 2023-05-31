let infoApi = "https://striveschool-api.herokuapp.com/books/";
let div = document.getElementById("root");


    let params = new URLSearchParams(window.location.search);
    let id = params.get("id");
    
    fetch(infoApi + id)
    .then(response => response.json())
    .then(
        response => {
             dettagli(response);
            
        }
    )

function dettagli(libbro){
    let card = document.createElement("div");
    card.classList.add("card")
    let img = document.createElement("img");
    img.classList.add("h-100")
    img.src = libbro.img;
    let title = document.createElement("h2");
    title.innerText = libbro.title;

    card.appendChild(img)
    card.appendChild(title)
    div.appendChild(card)

}