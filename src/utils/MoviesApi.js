class MoviesApi {
  constructor({ url }) {
    this._url = url;
  }
  getMovies() {
    return fetch(this._url)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(res.status)
      })
  }
}

export const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies/"
})