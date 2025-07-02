// Dados dos filmes
const movies = {
    movie1: {
        title: "Filme Aventura",
        description: "Uma aventura épica por terras desconhecidas.",
        image: "https://via.placeholder.com/300x450"
    },
    movie2: {
        title: "Série Mistério",
        description: "Mistérios e reviravoltas em cada episódio.",
        image: "https://via.placeholder.com/300x450"
    },
    movie3: {
        title: "Filme de Terror",
        description: "Uma história assustadora que vai te deixar sem fôlego.",
        image: "https://via.placeholder.com/300x450"
    },
    movie4: {
        title: "Ação Radical",
        description: "Ação sem parar com cenas de tirar o fôlego.",
        image: "https://via.placeholder.com/300x450"
    }
};

// Função para mostrar os detalhes do filme
function showMovieDetails(movieId) {
    const movie = movies[movieId];

    document.getElementById('movieTitle').innerText = movie.title;
    document.getElementById('movieDescription').innerText = movie.description;
    document.getElementById('movieImage').src = movie.image;

    // Exibe os detalhes do filme
    document.getElementById('movieDetails').style.display = 'block';
}

// Função para fechar os detalhes
function closeDetails() {
    document.getElementById('movieDetails').style.display = 'none';
}
