import { Component, OnInit } from '@angular/core';
import { MovieRepositoryOmDBImpl, MovieServiceImpl, MovieService, MovieRepository } from 'movie-lib';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  movie;
  repo: MovieRepository;
  service: MovieService;

  constructor() {
    this.repo = new MovieRepositoryOmDBImpl();
    this.service = new MovieServiceImpl(this.repo);
  }


  async ngOnInit() {
      this.movie = await this.service.getMovie('No Country');
  }

}
