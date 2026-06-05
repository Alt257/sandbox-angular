export interface StarWarsFilm {
  episode_id: number;
  title: string;
}

export interface SwApiFilmsGetAllResponse {
  results: StarWarsFilm[];
}
