export type Response<T> = {
  results: T[];
  previous?: string;
  next?: string;
};
