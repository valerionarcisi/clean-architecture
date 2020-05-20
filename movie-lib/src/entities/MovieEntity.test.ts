import { MovieEntity } from './MovieEntity';

test('#MovieEntity', () => {
  const title = 'No Country of Old Man'
  const director = 'Coen Brothers'
  const genre = 'drama'
  const poster = 'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg'

  const noCountryForOldMan = new MovieEntity(
    title,
    director,
    genre,
    poster
  )

  expect(noCountryForOldMan instanceof MovieEntity).toBe(true)
  expect(noCountryForOldMan.title).toBe(title)
  expect(noCountryForOldMan.director).toBe(director)
  expect(noCountryForOldMan.genre).toBe(genre)
  expect(noCountryForOldMan.poster).toBe(poster)

});
