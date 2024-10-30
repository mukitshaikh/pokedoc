function togglePopup() {
    const popup = document.getElementById("sort-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function sortGallery(type) {
    const gallery = document.getElementById("pokedex-gallery");
    const cards = Array.from(gallery.getElementsByClassName("pokemon-card"));
    
    cards.sort((a, b) => {
        if (type === "alphabetical") {
            return a.getAttribute("data-name").localeCompare(b.getAttribute("data-name"));
        }
        return 0; // Add more sorting logic if necessary
    });

    cards.forEach(card => gallery.appendChild(card));
    togglePopup();
}

function showPokemonDetails(name) {
    // Pokémon data
    const pokemonData = {
        Bulbasaur: {
            id: "#001",
            weight: "6.9 kg",
            height: "0.7 m",
            moves: "Tackle, Growl, Leech Seed",
            image: "img/bulbasaur.jpg"
        },
        Charmander: {
            id: "#004",
            weight: "8.5 kg",
            height: "0.6 m",
            moves: "Scratch, Growl, Ember",
            image: "img/charmander.jpg"
        },
        Squirtle: {
            id: "#007",
            weight: "9.0 kg",
            height: "0.5 m",
            moves: "Tackle, Tail Whip, Water Gun",
            image: "img/squirtle.jpg"
        },
        Pikachu: {
            id: "#025",
            weight: "6.0 kg",
            height: "0.4 m",
            moves: "Thunder Shock, Growl, Quick Attack",
            image: "img/pikachu.png"
        }
    };

    const details = document.getElementById("pokemon-details");
    const data = pokemonData[name];

    document.getElementById("pokemon-name").innerText = name;
    document.getElementById("pokemon-id").innerText = data.id;
    document.getElementById("pokemon-weight").innerText = data.weight;
    document.getElementById("pokemon-height").innerText = data.height;
    document.getElementById("pokemon-moves").innerText = data.moves;
    document.getElementById("pokemon-image").src = data.image;

    details.style.display = "block";
}

function closePokemonDetails() {
    const details = document.getElementById("pokemon-details");
    details.style.display = "none";
}

function searchPokemon() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const cards = document.querySelectorAll(".pokemon-card");

    cards.forEach(card => {
        const name = card.getAttribute("data-name").toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
}