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
}

window.onload = async () => {
  await displayLidia()
}

async function visualizeCards() {
  document.getElementById('container').innerHTML = '' 
  let fetchCharacters = await fetch('https://api.disneyapi.dev/character')
  let objectCharacters = await fetchCharacters.json()
  console.log(fetchCharacters)
  let arrayCharacters = objectCharacters.data
  console.log(arrayCharacters)
  for (const character of arrayCharacters) {
    let searchName = document.getElementById('searchBar').value
    console.log(searchName)
    if (character.name == searchName) {
      document.getElementById('container').innerHTML += `<div class="card">
      <div class="cardContainer">
      <img src=${character.imageUrl} class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <p class="card-text">
          ${character.name}
        </p>
      </div>
    </div>`
    } else if (searchName == "") {
      return await displayLidia()      
    }
  }
}