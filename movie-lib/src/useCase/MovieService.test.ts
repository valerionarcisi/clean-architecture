import { MovieEntity, MovieRepository } from './../entities'
import { MovieServiceImpl } from './MovieService'

describe('#MovieServiceImpl', () => {

  const movieMockEntity = new MovieEntity(
    'No Country For Old Man',
    'Coen Brothers',
    'Drama',
    'fooposter'
  )

  class MockMovieRepo implements MovieRepository {
    getMovie(title:string) {
      return Promise.resolve(movieMockEntity)
    }
  }


  describe('#useCase #getMovie', () => {
    test(('should be return a Promise<MovieEntity>'), async () => {
      const movieMockRepo = new MockMovieRepo()
      const movieSerice = new MovieServiceImpl(movieMockRepo)
      const movie = await movieSerice.getMovie('foo')
      expect(movie).toBeInstanceOf(MovieEntity);
      expect(movie).toBe(movieMockEntity);
    })

  })
})
