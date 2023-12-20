export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_shiny: string;
    front_default: string;
  };
  stats: { base_stat: number; stat: { name: string } }[];
};

export type PokemonEntry = {
  name: string;
  url: string;
};
