const BASE_URL = "http://www.omdbapi.com/"
const API_GET_BY_TITLE_QUERY = "?t="
const API_KEY = "&apikey=b06899c"



export async function fetchMovies(movieTitles) {
    if (movieTitles === undefined)
        return

    const fetchedMovies = []
    for (let movieTitle of movieTitles) {
        await fetch(`${BASE_URL}${API_GET_BY_TITLE_QUERY}${movieTitle}${API_KEY}`)
            .then(res => res.json())
            .then((result) => {
                const { Title, Director, Genre, Year, Runtime } = result;

                const currentMovie = {
                    'title': Title,
                    'director': Director,
                    'genre': Genre,
                    'year': Year,
                    'runtime': Runtime,
                }
                fetchedMovies.push(currentMovie);
            });
    }
    return fetchedMovies;
}
