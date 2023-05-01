class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }

    descrever() {
        return `meu nome é ${this.nome}, tenho ${this.idade} anos`;
    }
}


const pessoa = new Pessoa("Gabriel", 24);
console.log(pessoa.descrever())

const alguem = new Pessoa("Ferreira", 32)
console.log(alguem.descrever())