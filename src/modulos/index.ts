import { Personagem } from "./models/personagem";

let hulk = new Personagem('hulk', 'Heroi');
hulk.caminhar({ direcao: "direita", passos: 5 });

let loki = new Personagem('loki', 'Vilao');
loki.caminhar({ direcao: "direita", passos: 4 });