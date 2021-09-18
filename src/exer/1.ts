
/*
    -Crie uma classe Pessoa com os atributos nome, sexo e idade. 
    -Crie os getters e setters. 
    -No setters valide: 
        Se o nome for em branco retorne uma mensagem de nome inválido. 
        Se o sexo for diferente de Masculino ou Feminino retorne uma mensagem inválida. 
        Se a idade for 0 retorne uma mensagem de idade inválida. 
    -Crie um método para receber a idade.
    -Se a idade for maior ou igual a 18 exibir a mensagem pessoa maior de idade, 
        caso contrário exibir a mensagem pessoa menor de idade.
*/

// classe Pai Pessoa:
class Pessoa {
    // Atributos:
    static SEXO = ['Masculino', 'Feminino']
    constructor(
        public _nome: string,
        public _sexo: string,
        public _idade: number
    ) {}

    // Geterres e Seterres dos atributos da classe Pessoa:
    get nome() {
        return this._nome;
    }

    get sexo() {
        return this._sexo;
    }

    get idade() {
        return this._idade;
    }

    set nome(nome:string){
        if(nome.length === 0) {
            throw new Error('O CAMPO NOME ESTÁ VAZIO!!! '); 
        }
       this._nome = nome;
    }

    set sexo(sexo:string) {
        if(!Pessoa.SEXO.includes(sexo)) {
            throw new Error('SEXO NÃO EXISTENTE!!!!'); 
        } 
        this._sexo = sexo;
    }

    set idade(idade:number) {
        if(idade <= 0 ) {
            throw new Error('IDADE NÃO É VÁLIDA!!!'); 
        }
        this._idade = idade;
    }
    
    // Método da classe Pessoa para retornar se a pessoa é maior ou menor de idade:
    public verificaMaiorIdade() {
        if(this.idade >= 18) {
           return ' MAIOR DE IDADE.'
        } else {
            return ' MENOR DE IDADE'
        }
    }

}
// Objeto pessoa instanciado na classe Pessoa:
const pessoa = new Pessoa('', '', 1)

// Retorno no console:
try {
    console.log()

    console.log('-- DESCRIÇÃO DA PESSOA: -------------------------------------------')
    pessoa.nome = 'Fabiana'
    pessoa.sexo = 'Feminino'
    pessoa.idade = 17
    console.log(pessoa)
    console.log(` ${pessoa.nome} é ${pessoa.verificaMaiorIdade()}`)

    console.log()

} catch (err: any) { 
    console.error(err.message)

    console.log()
}





