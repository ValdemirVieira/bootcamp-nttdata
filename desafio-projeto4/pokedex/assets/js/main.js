const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemon(offset, limit).then((listPokemon = []) => {
        const newHtml = listPokemon.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <a href="#cards-pokemon" data-toggle="modal">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </a>
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml

        const link = document.querySelector("a")
        const modalPokemon = document.querySelector("dialog")
        // const buttonX = document.querySelector("dialog button")

        link.onclick = function () {
            modalPokemon.showModal()
        } // Não consegui fazer o modal aparecer dinamicamente por aqui, com as informações diretamente da API. Só aparece a versão estática que está no index, e só tá aparecendo clicando na primeira imagem.

        /* Não consegui fazer funcionar, mas o modal fecha clicando no Esc.
        buttonX.onclick = function () {
            modal.close()
        }
        */
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})