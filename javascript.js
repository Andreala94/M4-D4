let cerca = document.getElementById("cerca");
// console.log(cerca);

// let card = document.getElementById("main")

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
                // console.log(titolo);
                // console.log(immagine);
                // console.log(prezzo);

                let col = document.createElement("div")
                col.classList.add("col-md-3")
                let card = document.createElement("card")
                card.classList.add("card")
                let img = document.createElement("img");
                img.src = element.src;
                card.appendChild(img)
                col.appendChild(card)
                row.appendChild(col)


            });
            console.log(data);
        })
        .catch((err) => { console.log("Hai un errore:" + err) });;

}

getAlbum();





