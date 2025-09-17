export const TMDB_CONFİG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: "Bearer ${process.env.EXPO_MOVIE_API_KEY}"
    }
}

export const fetchPopularMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? "${TMDB_CONFİG:BASE_URL}/search/movie?query=${encodeURIComponent(query)}"
        : "${TMDB_CONFİG:BASE_URL}/discover/movie?sort_by=popularity.desc"

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFİG.headers,

    })

    if (!response.ok) {
        // throw new Error("Failed to Fetch Movies", response.statusText)
        throw new Error(`Failed to Fetch Movies: ${response.statusText}`);
    }
    const data = await response.json();

    return data.results
}

// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODAzNDgxY2Q4MDhlYjhmMmI1MDIzZDA2YzliOTQ4YyIsIm5iZiI6MTc1Mzg4MDYwOS44MjMsInN1YiI6IjY4OGExODIxYjEzZGY1MTZkNmIyNmJmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BjVcSGLkzgFGe3IV0IZW9tDB14pXL43RAGX_fY9_gIc'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));