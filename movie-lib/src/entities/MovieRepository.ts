import { MovieEntity } from './MovieEntity'

export interface MovieRepository {
  getMovie(title:string): Promise<MovieEntity>
}
