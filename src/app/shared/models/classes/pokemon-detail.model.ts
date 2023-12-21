export class PokemonDetail {
  id: number;
  name: string;
  imagem: string;
  types?: Type[];

  abilities?: Ability[];
  height?: number;
  weight?: number;
  species?: Species;

  sprites?: Sprite;
  // order?: number;
  // stats?: Stat[];

  constructor(id: number, name: string, types: Type[], imagem: string) {
    this.id = id;
    this.name = name;
    this.imagem = imagem;
    this.types = types;

    // this.abilities = [];
    // this.height = 0;
    // this.weight = 0;
    // this.sprites: Sprite;
  }
}

class Ability {
  ability: {
    name: string;
  };

  constructor() {}
}

class Species {
  url: string;
}

class Type {
  slot: number;
  type: {
    name: string;
  };
  name: string;
}

class Sprite {
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

class Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}
