/*
  <
   Crie uma classe para calcular o imposto de renda. 
  >
  <
   Crie uma classe Pai com os atributos nome e renda anual.
    Crie os getters e setters com as suas validações. 
  >
  <
   Crie uma classe filha Pessoa Física para herdar da classe Pai e com o atributo gastos com saúde. 
    Crie os getter e setter com a validação.
  > 
  <
   Crie uma classe filha Pessoa Jurídica para herdar da classe Pai e com o atributo número de funcionários. 
    Crie o getter e o setter com a validação.
  > 
  <
    Pessoa Física: 
      Pessoas cuja renda foi abaixo de 20.000,00 pagam 15% de imposto.
      Pessoas com renda maior ou igual a 20.000,00 pagam imposto de 25%. 
        Se a pessoa teve gastos com saúde, 50% destes gastos são abatidos no imposto.
          Exemplo: 
          Se uma pessoa cuja renda foi de 50.000,00 e teve 2.000,00 em gastos com saúde, o imposto fica:
        (50.000,00 * 25%) - (2000 * 50%) = 11.500,00
  >
  <
    Pessoa Jurídica: 
      Pessoas jurídicas pagam 16% de imposto.
        Se a empresa possuir mais de 10 funcionários, ela paga 14% de imposto. 
          Exemplo: 
            Uma empresa cuja renda foi de 400.000,00 e possui 25 funcionários, o imposto fica: 
              (400.000,00) * 14% = 56.000,00 
  >  
*/

//Classe Pai Contribuinte:
class Contribuinte {
  // Atributos da classe Contribuinte:
  constructor (
    public _nome: string,
    public _rendaAnual: number
  ) {}
   
  // Geterres e Seterres da classe Contribuinte:
  get nome() {
    return this._nome
  }

  get rendaAnual() {
    return this._rendaAnual
  }

  set nome(nome : string) {
    if(nome === '') {
      throw new Error('Campo nome vazio, por favor prenche-lo!')
    }
    this._nome = nome
  }

  set rendaAnual(rendaAnual : number) {
    if (rendaAnual < 0 ) {
      throw new Error('Valor de renda anual inválido, digite 0 ou mais!')
    }
    this._rendaAnual = rendaAnual
  }  

}

// Classe Filha "PessoaFisica" que herda os atributos da classe Pai "Contribuinte"
class PessoaFisica extends Contribuinte {
  // Atributo da classe filha Pessoa Fisica:
  public _gastosComSaude: number;

  // Atributos herdados da classe pai Contribuinte:
  constructor(nome: string, rendaAnual: number, gastosComSaude: number) {
    super(nome, rendaAnual )
    this._gastosComSaude = gastosComSaude
  }

  // Geterres e Seterres da classe filha Pessoa Fisica:
  get gastosComSaude(): number {
    return this._gastosComSaude
  }

  set gastosComSaude(gastosComSaude: number) {
    if (gastosComSaude < 0) {
      throw new Error('Valor de gastos com saúde inválido, digite 0 ou mais!')
    }
    this._gastosComSaude = gastosComSaude
  }

  // Metodo da classe Pessoa Fisica para calcular valor de IRF a ser pago:
  public calculoIRFpessoaFisica() {

    if (pessoaFisica._rendaAnual > 0) {

      if (pessoaFisica.rendaAnual < 20000) {
        return (pessoaFisica.rendaAnual * 0.15) - (pessoaFisica.gastosComSaude * 0.50)
  
      } else  {
        return (pessoaFisica.rendaAnual * 0.25) - (pessoaFisica.gastosComSaude * 0.50)
      }

    }else {
      return 0
    }
  }
  
}
// Objeto pessoaFisica instanciado na classe filha PessoaFisica:
const pessoaFisica = new PessoaFisica('', 0 , 0 )

// Classe Filha "PessoaJuridica" que herda os atributos da classe Pai "Contribuinte"
class PessoaJuridica extends Contribuinte {

  // Atributo da classe filha Pessoa Juridica:
  public _quantidadeDeFuncionarios: number;

  // Atributos herdados da classe pai Contribuinte:
  constructor(nome : string, rendaAnual: number, quantidadeDeFuncionarios: number) {
    super(nome, rendaAnual)
    this._quantidadeDeFuncionarios = quantidadeDeFuncionarios
  }

  // Geterres e Seterres da classe filha Pessoa Juridica:
  get quantidadeDeFuncionarios(): number {
    return this._quantidadeDeFuncionarios
  }

  set quantidadeDeFuncionarios(quantidadeDeFuncionarios: number) {
    if (quantidadeDeFuncionarios < 0) {
      throw Error('Valor de quantidade de funcionários inválida, digite 0 ou mais!')
    }
    this._quantidadeDeFuncionarios = quantidadeDeFuncionarios
  }
 
  // Metodo da classe Pessoa Juridica para calcular valor de IRF a ser pago:
  public calculoIRFpessoaJuridica() {

    if (pessoaJuridica._rendaAnual > 0) {

      if (pessoaJuridica.quantidadeDeFuncionarios > 10) {
        return pessoaJuridica.rendaAnual * 0.14
  
      } else  {
        return pessoaJuridica.rendaAnual * 0.16
      }

    }else {
      return 0
    }
  }

}
// Objeto pessoaJuridica instanciado na classe Contribuinte:
const pessoaJuridica = new PessoaJuridica('', 0, 0) 

// Retorna no console:
try {
  console.log()
  
  console.log('-------- PESSOA FÍSICA --------')
  pessoaFisica.nome = 'Biatriz'
  pessoaFisica.rendaAnual = 50000
  pessoaFisica.gastosComSaude = 2000
  console.log(pessoaFisica)
  console.log( `Total de IRF a pagar =  ${pessoaFisica.calculoIRFpessoaFisica().toFixed(2)}`)

  console.log()

  console.log('-------- PESSOA JURÍDICA --------')
  pessoaJuridica.nome = 'Cristina'
  pessoaJuridica.rendaAnual = 400000
  pessoaJuridica.quantidadeDeFuncionarios = 25
  console.log(pessoaJuridica)
  console.log(`Total de IRF a pagar = ${pessoaJuridica.calculoIRFpessoaJuridica().toFixed(2)}`)

  console.log()
  
} catch (err: any) {
  console.error(err.message)
  console.log()
}

















