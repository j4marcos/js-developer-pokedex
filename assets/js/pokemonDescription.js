const pokemonDetails = document.querySelector("aside")
const pokeHeader = document.querySelector("aside header")
const btnBack = document.querySelector("aside header .buttons #btnBack")
const pokeTitle = document.querySelector("aside header h1")
const pokeId = document.querySelector("aside header .id")
const pokeImg = document.querySelector("aside header .pokemonImg")
const pokeTypes = document.querySelector("aside header .types")
const btnLike = document.querySelector("aside header #btnLike")


btnBack.addEventListener("click", () => {
    pokemonDetails.classList.toggle("ativo")
    
})

function openDescription(id) {
    const pokeDesc = pokeList.get(id)
    console.log(pokeDesc)
    const pokeTypesList = pokeDesc.types.map((typeSlot) => typeSlot.type.name)

    pokeTitle.innerHTML = pokeDesc.name
    pokeId.innerHTML = `#${pokeDesc.id}`
    pokeImg.style.backgroundImage = `url("${pokeDesc.sprites.other['official-artwork'] .front_default}")`
    pokeTypes.innerHTML = `${pokeTypesList.map((type) => `<li class="type ${type}">${type}</li>`).join('')}`
    pokemonDetails.classList.forEach((c)=> {if(c !== "ativo") pokemonDetails.classList.remove(c)})
    pokemonDetails.classList.add(pokeTypesList[0])



    pokemonDetails.classList.toggle("ativo")
}

