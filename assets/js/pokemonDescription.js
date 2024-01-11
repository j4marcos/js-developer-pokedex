const pokemonDetails = document.querySelector("aside")
const pokeHeader = document.querySelector("aside header")
const btnBack = document.querySelector("aside header .buttons #btnBack")
const pokeTitle = document.querySelector("aside header h1")
const pokeId = document.querySelector("aside header .id")
const pokeImg = document.querySelector("aside header .pokemonImg")
const pokeTypes = document.querySelector("aside header .types")
const btnLike = document.querySelector("aside header #btnLike")
const buttonsAreas = document.querySelectorAll(".buttonsAreas button")
const areas = document.querySelectorAll(".areasDescription .area")
const baseStats = document.querySelectorAll(".baseStats li div")

//baseStats

const speciesInfo = document.getElementById("species")
const heightInfo = document.getElementById("height")
const weightInfo = document.getElementById("weight")
const abilitiesInfo = document.getElementById("abilities")
const genderInfo = document.getElementById("species")
const eggGrupsInfo = document.getElementById("eggGrups")
const eggCycleInfo = document.getElementById("eggCycle")





buttonsAreas.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
        console.log("click")
        buttonsAreas.forEach(b => b.classList.remove("ativo"))
        btn.classList.add("ativo")

        areas.forEach(a => a.classList.remove("ativo"))
        areas[idx].classList.add("ativo")

    })
})

btnBack.addEventListener("click", () => {
    pokemonDetails.classList.toggle("ativo")
})

function openDescription(id) {
    const pokeDesc = pokeList.get(id)
    const pokeTypesList = pokeDesc.types.map((typeSlot) => typeSlot.type.name)

    pokeTitle.innerHTML = pokeDesc.name
    pokeId.innerHTML = `#${pokeDesc.id}`
    pokeImg.style.backgroundImage = `url("${pokeDesc.sprites.other['official-artwork'].front_default}")`
    pokeTypes.innerHTML = `${pokeTypesList.map((type) => `<li class="type ${type}">${type}</li>`).join('')}`
    pokemonDetails.classList.forEach((c) => { if (c !== "ativo") pokemonDetails.classList.remove(c) })
    pokemonDetails.classList.add(pokeTypesList[0])

    speciesInfo.innerHTML = pokeDesc.species.name
    heightInfo.innerHTML = pokeDesc.height
    weightInfo.innerHTML = pokeDesc.weight
    abilitiesInfo.innerHTML = pokeDesc.abilities.map((idx) => idx.ability.name).join(", ")


    /////////// provisorio texto abaixo
    const containerImgs = document.querySelector(".containerImgs")
    const pokeImgsVariants = document.querySelector(".area .evolution .pokeImgs")
    // console.log(pokeImgsVariants)

    imgsLinks = []
    for (let i in pokeDesc.sprites) {
        if (typeof (pokeDesc.sprites[i]) == "string") imgsLinks.push(pokeDesc.sprites[i])
        else {
            for (let j in pokeDesc.sprites[i]) {
            const pasta = pokeDesc.sprites[i]
            
             for(let k in pasta)  {
                for (let z in pasta[k]) {
                 
                    
                }
                
             }

            }
        }
    }


    console.log(imgsLinks)

    /// texto acima provisorio


    pokeDesc.stats.forEach((num, idx) => {
        baseStats[idx].innerHTML = num.base_stat
    })



    pokemonDetails.classList.toggle("ativo")
}

