let cerca = document.getElementById("cerca");
// console.log(cerca);

// let card = document.getElementById("main")
let carrello = document.getElementById("carrello")
let libri = document.getElementById("album-container");

const getAlbum = () => {

    fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => response.json())
        .then(data => {

            let row = document.createElement("div")
            row.classList.add("row")
            libri.appendChild(row)

            data.forEach(element => {
                let titolo = element.title;
                let immagine = element.img;
                let prezzo = element.price;
                
                // Creo la card
                let col = document.createElement("div")
                col.classList.add("col-md-2")
                col.classList.add("col-sm-6")
                let card = document.createElement("card")
                card.classList.add("card")
                let img = document.createElement("img");
                img.src = immagine;
                
                card.appendChild(img)

                // Aggiungi un paragrafo
                let paragrafo = document.createElement("p");
                paragrafo.textContent = titolo;
                card.appendChild(paragrafo);

                // Aggiungi un bottone
                let bottone = document.createElement("button");

                bottone.textContent = "Acquista";
                bottone.classList.add("bg-primary");
                bottone.classList.add("rounded-3");
                card.appendChild(bottone);
                // evento per mettere il bordo colorato
                bottone.addEventListener("click", () => {
                    carrello.innerHTML += (col.outerHTML)
                   card.classList.add("border-danger")
                   card.classList.add("border-3")

                });


                col.appendChild(card)
                row.appendChild(col)


            });
            console.log(data);
        })
        .catch((err) => { console.log("Hai un errore:" + err) });;

}

getAlbum();






