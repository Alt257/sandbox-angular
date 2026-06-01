export interface VideoGame {
  episode_id: number;
  title: string;
}

export type VideoGameResponse = {
  results: VideoGame[];
}
