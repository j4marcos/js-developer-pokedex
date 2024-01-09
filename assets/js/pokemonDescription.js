const pokemonDetails = document.querySelector("aside")
const btnBack = document.querySelector("aside header .buttons #btnBack")

btnBack.addEventListener("click", () => {
    pokemonDetails.classList.toggle("ativo")
})

function openDescription(id) {
    console.log(id)
    console.log(pokeList[id-1])
    pokemonDetails.classList.toggle("ativo")
}

