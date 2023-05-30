let cerca = document.getElementById("cerca");
// console.log(cerca);
let carrello = document.getElementById("carrello")
let libri = document.getElementById("album-container");
let totale = 0;
let totaleCarrello = document.getElementById("totale");

const getAlbum = () => {

    fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => response.json())
        .then(data => {

            let row = document.createElement("div")
            row.classList.add("row")
            libri.appendChild(row)

            let counter = 0;


            data.forEach(element => {
                let titolo = element.title;
                let immagine = element.img;
                let prezzo = element.price;

                // Creo le col 
                let col = document.createElement("div")
                col.classList.add("col-sm-6", "mb-2", "col-lg-2", "col-md-4")

                // Creo la card
                let card = document.createElement("card")
                card.classList.add("card", "h-100")
                card.id = "book" + counter;
                //cinserico l'immagine nella card
                let img = document.createElement("img");
                img.classList.add("img-fluid");
                img.src = immagine;
                card.appendChild(img)

                // Aggiungi un paragrafo
                let paragrafo = document.createElement("p");
                paragrafo.classList.add("fw-bold", "p-1", "mt-3")
                paragrafo.textContent = titolo;
                card.appendChild(paragrafo);

                //Aggiungi prezzo
                let prezzoBook = document.createElement("p");
                prezzoBook.textContent = (prezzo + " " + "Euro");
                prezzoBook.classList.add("fw-bold")
                card.appendChild(prezzoBook);

                // Aggiungi un bottone
                let bottone = document.createElement("button");
                bottone.textContent = "Acquista";
                bottone.classList.add("bg-primary", "rounded-3", "text-light", "mt-auto");
                card.appendChild(bottone);

                // evento per mettere il bordo colorato
                bottone.addEventListener("click", () => {

                    card.classList.toggle("border-danger")
                    card.classList.toggle("border-3")
                    bottone.classList.toggle("selezionato");

                    if (card.classList.contains("border-danger")) {
                        let elCarrello = col.cloneNode(true);
                        elCarrello.id = card.id + "carrello"
                        // carrello.innerHTML += (elCarrello.outerHTML)
                        carrello.appendChild(elCarrello)
                        bottone.textContent = "Rimuovi";
                        totale += prezzo;

                    } else {
                        bottone.textContent = "Acquista";

                        document.getElementById(card.id + "carrello").remove();
                        totale -= prezzo;
                    }
                  totaleCarrello.textContent = "€" + Number((totale).toFixed(2));;
                });


                col.appendChild(card)
                row.appendChild(col)

                counter++;
            });

            console.log(data);
        })
        .catch((err) => { console.log("Hai un errore:" + err) });;

}

getAlbum();



let clearButton = document.getElementById("svuota");

clearButton.addEventListener("click", () => {
    
    let items = document.querySelectorAll(".selezionato");
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }

});




