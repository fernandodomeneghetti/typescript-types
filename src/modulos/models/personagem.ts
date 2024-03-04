import { Movimento } from "../types/movimento";
import { TipoPersonagem } from "../types/tipoPersonagem";

export class Personagem {
    nome: string;
    tipo: TipoPersonagem;

    constructor(_nome: string, _tipo: TipoPersonagem) {
        this.nome = _nome;
        this.tipo = _tipo;
    }

    caminhar(movimento: Movimento){
        console.log(`o personagem andou ${movimento.passos} passos para ${movimento.direcao}`);
    }

}