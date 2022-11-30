const link = document.querySelector("a")
const modal = document.querySelector("dialog")
const buttonX = document.querySelector("dialog button")

link.onclick = function () {
    modal.showModal()
}

buttonX.onclick = function () {
    modal.close()
}

/*
<div class="card-pokemon open pokemon ${pokemon.type}">
    <div class="card-top">
        <div class="details">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
        </div>
        <span class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        </span>
        <div class="card-image">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </div>
    <div class="card-info">
        <div class="status">
            <h3>Status</h3>
            <ul>
            <li>HP: 300</li>
            <li>Ataque: 300</li>
            <li>Defesa: 300</li>
            <li>Velocidade: 300</li>
            <li>Total: 1700</li>
            </ul>
        </div>
        <div class="abiliity">
            <h3>Habilidades</h3>
            <ul>
            <li>Choque do Trovão</li>
            <li>Cabeçada</li>
            </ul>
        </div>
    </div>
</div>


const cardsPokemon = document.getElementById('cardsPokemon')
(pokemon) => `
                <div class="card-top ${pokemon.type}">
                    <div class="details">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                    </div>
                    <span class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </span>
                    <div class="card-image">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </div>
                <div class="card-info">
                    <div class="status">
                        <h3>Status</h3>
                        <ul>
                        <li>HP: 300</li>
                        <li>Ataque: 300</li>
                        <li>Defesa: 300</li>
                        <li>Velocidade: 300</li>
                        <li>Total: 1700</li>
                        </ul>
                    </div>
                    <div class="abiliity">
                        <h3>Habilidades</h3>
                        <ul>
                        <li>Choque do Trovão</li>
                        <li>Cabeçada</li>
                        </ul>
                    </div>
                </div>
            `
            .join('')
            cardsPokemon.innerHTML += modalPokemon
*/