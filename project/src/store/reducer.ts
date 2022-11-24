import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, loadPromoFilm, setGenre} from './action';
import {FilmInfo} from '../types/FilmInfo';

const initialState : {
  selectedGenre: string;
  films: FilmInfo[];
  promoFilm: FilmInfo | null;
  genres: Set<string>;
} = {
  selectedGenre: 'All Genres',
  films: [],
  promoFilm: null,
  genres: new Set<string>(['All Genres']),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      const genres = new Set<string>(['All Genres']);
      for (const film of state.films){
        genres.add(film.genre);
      }
      state.genres = genres;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});
