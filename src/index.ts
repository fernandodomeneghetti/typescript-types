let nome = "Fernando";
let sobrenome = "Domeneghetti";

console.log("o tipo eh", typeof nome)
console.log(nome + " " + sobrenome);

let idade = 37;
let numeroDecimal = 10.5;
console.log("o tipo da idade eh", typeof idade);
console.log("O resultado numerico eh", idade + numeroDecimal);

let verdade: boolean = true;
let falso = false;

if (verdade == true) {
    console.log("O tipo eh verdadeiro");
}

console.log("O tipo verdade eh", typeof verdade);



let valorum;
let valordois = 2;

valorum = 1;
valorum + valordois;

/////// array
let notas: number[] = [];
let paises: Array<string>;

let cidades = [
    'Sao Paulo',
    'Jundiai',
    'Itupeva'
]
console.log("a cidade eh:", cidades[0])
console.log("o tamanho do array cidades eh", cidades.length);
notas.push(10);
notas.push(20);
notas.push(30);
console.log("notas possui o valor na posicao 0", notas[2])


cidades.forEach(c =>  console.log("O valor de c eh", c));

/// Object - Tipos Complexos

const aluno = {
    nome: "aluno sem lista",
    nota: 3,
    ativo: true
}

console.log("auno", aluno);

const aluno2 = {
    nome: "aluno sem lista",
    nota: 3,
    ativo: true,
    escola: {
        nome: "Unianchieta",
        materia: ['desenv framework III']
    }
}


let alunoTipo: {
    nome: string,
    nota: number,
    ativo: boolean,
    
} = { nome: "aluno", nota: 1, ativo: false}

alunoTipo.ativo = true;
alunoTipo.nome = "aluno tipo";
alunoTipo.nota = 10;

console.log("aluno complexo", alunoTipo)

/////////////////// any

let variavelAny: any;

variavelAny = "um texto";
variavelAny = 1;
variavelAny = { id: 1 }

variavelAny = () => {
    console.log("valor variavel any")
}

variavelAny();

// null e undefined

let variavelSemTipo = null;
console.log("valor de variavelSemTipo", variavelSemTipo);

if (variavelSemTipo === null) {
    console.log("variavel eh null")
}

if (variavelSemTipo === undefined) {
    console.log("variavel eh undefined")
}


