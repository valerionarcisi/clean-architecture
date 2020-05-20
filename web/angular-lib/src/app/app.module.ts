import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
// import { movieReducer } from 'movie-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.provideStore({ movies: movieReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
