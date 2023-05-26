let cerca = document.getElementById("cerca");
// console.log(cerca);
let libriContainer = document.getElementById("album-container");
let card = document.getElementById("main")



// const getAlbum = () =>{

//  fetch('https://striveschool-api.herokuapp.com/books')
//   .then(response => response.json())
//   .then(data => {
    
//     console.log(data);
//   })
//   .catch((err) =>{console.log("Hai un errore:" + err)});;

// }


const getAlbum = () => {
    return fetch("https://striveschool-api.herokuapp.com/books", {
        
    })
        .then((res) => {
            return res.json()
    })
        .then((res2) => {
            albumCard(res2.photos)
            console.log(res2)
        })
        .catch((err) => {console.error("Hai un errore: " + err)});
}
getAlbum();

const albumCard = (photos) => {
    let row = document.createElement("div")
    row.classList.add("row")
    libriContainer.appendChild(row)
   
    
    
   photos.forEach(photo => {
    let col = document.createElement("div")
    col.classList.add("col-md-3")
    let card = document.createElement("card")
    card.classList.add("card")

    let img = document.createElement("img");
        img.src = photo.src.small;
        card.appendChild(img)
        col.appendChild(card)
        row.appendChild(col)
   });   
    

}

