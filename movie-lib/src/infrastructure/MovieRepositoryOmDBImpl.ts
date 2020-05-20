import { MovieEntity, MovieRepository } from './../entities'

class MovieDTO {
  Title: string = '';
  Director: string = '';
  Genre: string = '';
  Poster: string = '';
}


export class MovieRepositoryOmDBImpl implements MovieRepository {

  constructor(private readonly apikey: string = 'a3169471') { }

  baseUrl = 'http://www.omdbapi.com/'

  async getMovie(title: string = ''): Promise<MovieEntity> {
    const res = await fetch(`${this.baseUrl}?apikey=${this.apikey}&t=${title}`)
    const resJson: MovieDTO = await res.json()
    return new MovieEntity(resJson.Title, resJson.Director, resJson.Genre, resJson.Poster)
  }
}
