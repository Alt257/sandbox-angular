export interface StarWarsFilms {
  episode_id: number;
  title: string;
}

export interface StarWarsFilmsSwApiResponse {
  results: StarWarsFilms[];
}
