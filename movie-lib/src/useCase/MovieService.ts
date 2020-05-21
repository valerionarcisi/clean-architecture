import { MovieEntity, MovieRepository } from '../entities'

export interface MovieService {
  getMovie(title: string): Promise<MovieEntity>
}

export class MovieServiceImpl implements MovieService {
  movieRepo: MovieRepository

  constructor(movie: MovieRepository) {
    this.movieRepo = movie
  }

  async getMovie(title:string) {
    return this.movieRepo.getMovie(title)
  }
}
