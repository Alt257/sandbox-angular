export interface StarWarsFilms {
  episode_id: number;
  title: string;
}

export interface SwApiFilmsGetAllResponse {
  results: StarWarsFilms[];
}
