import { BASE_URL, DATA_URL } from "./config";

class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  getUserMovies(token) {
    return fetch(this._url + '/movies', {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(this._checkResponse)
  }

  saveMovie(movie, token) {
    return fetch(this._url + '/movies', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: DATA_URL + movie.image.url,
        trailer: movie.trailerLink,
        thumbnail: DATA_URL + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._checkResponse)
  }

  deleteMovie(filmId, token) {
    return fetch(this._url + '/movies/' + filmId, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResponse)
  }

  editUser(name, email, token) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email })
    })
      .then(this._checkResponse)
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return res.json()
      .then(err => Promise.reject(err))
  }

}

export const mainApi = new MainApi({
  url: BASE_URL
})