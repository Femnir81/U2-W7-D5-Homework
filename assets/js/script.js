async function displayLidia() {
    let apiDisney = await fetch('https://api.disneyapi.dev/characters')
    let disneyObject = await apiDisney.json()
    let arrayDisney = disneyObject.data
    console.log(arrayDisney)
    for (const disneyCard of arrayDisney) {
        document.getElementById('container').innerHTML += `<div class="card">
        <div class="cardContainer">
        <img src=${disneyCard.imageUrl} class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <p class="card-text">
            ${disneyCard.name}
          </p>
        </div>
      </div>`
    }
    // document.getElementById('container').innerHTML += `<div class="card" style="width: 18rem">
    //     <div class="cardContainer">
    //     <img src=${arrayDisney[0].imageUrl} class="card-img-top" alt="..." />
    //     </div>
    //     <div class="card-body">
    //       <p class="card-text">
    //         Ssssssssssss
    //       </p>
    //     </div>
    //   </div>`
    // document.getElementById('container').innerHTML += `<div class="card" style="width: 18rem">
    // <div class="cardContainer">
    //   <img src=${arrayDisney[1].imageUrl} class="card-img-top" alt="..." />
    //   </div>
    //   <div class="card-body">
    //     <p class="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //   </div>
    // </div>`
    // document.getElementById('container').innerHTML += `<div class="card" style="width: 18rem">
    // <div class="cardContainer">
    //   <img src=${arrayDisney[2].imageUrl} class="card-img-top" alt="..." />
    //   </div>
    //   <div class="card-body">
    //     <p class="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //   </div>
    // </div>`
}




window.onload = async () => {
    await displayLidia()
  }