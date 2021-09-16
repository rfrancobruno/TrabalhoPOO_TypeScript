/*
  -Crie uma classe Veiculos com os atributos modelo, marca, ano, valorLocacao e quantidade de dias. 
  -Crie os getters e setters.
  -No setters crie validações para não aceitar:
    modelo, marca, ano, valorLocacao e quantidade em branco ou com valor zero.
  -Crie um método passeio para receber a quantidade de dias e o valor da locação. 
  -O sistema calcule o total que será a multiplicação da quantidade de dias pelo valor da locação.
*/

// Classe Pai Veiculos:
class Veiculos {
  // Atributos da classe Veiculos:
  constructor (
    public _modelo: string,
    public _marca: string,
    public _ano: string,
    public _valorLocacao: number,
    public _quatidadeDeDias: number
  ) {}

  // Geterres e Seterres dos atributos da classe Veiculos:
  get modelo(): string {
    return this._modelo;
  }

  get marca(): string {
    return this._marca;
  }

  get ano(): string {
    return this._ano;
  }

  get valorLocacao(): number {
    return this._valorLocacao;
  }

  get quatidadeDeDias(): number {
    return this._quatidadeDeDias;
  }

  set modelo(modelo: string) {
    if(modelo === '') {
      throw new Error('CAMPO MODELO VAZIO ! '); 
    }
    this._modelo = modelo;
  }

  set marca(marca: string) {
    if(marca === '') {
      throw new Error('CAMPO MARCA VAZIO ! '); 
    }
    this._marca = marca;
  }

  set ano(ano: string) {
    if(ano === '') {
      throw new Error('CAMPO ANO VAZIO !')
    }
    this._ano = ano;
  }

  set valorLocacao(valorLocacao: number) {
    if(valorLocacao === 0) {
      throw new Error('VALOR LOCAÇÃO 0 !')
    }
    this._valorLocacao = valorLocacao;
  }

  set quatidadeDeDias(quatidadeDeDias: number) {
    if(quatidadeDeDias === 0) {
      throw new Error('QUANTIDADE DE DIAS 0 !')
    }
    this._quatidadeDeDias = quatidadeDeDias;
  }

  // Metodo da classe Veiculo para retornar o valor do aluguel:
  public passeio(){
    return this._quatidadeDeDias * this._valorLocacao
  }
}
// Objeto veiculo instanciado na classe Veiculos:
const veiculo = new Veiculos('', '', '', 0, 0)

// retorno no conssole:
try {
  console.log()

  console.log('-- DESCRIÇÃO DO VEÍCULO: -------------------------------------------')
  veiculo.modelo = 'Kicks'
  veiculo.marca = 'Nissan'
  veiculo.ano = '2021'
  veiculo.valorLocacao = 100
  veiculo.quatidadeDeDias = 7
  console.log(veiculo)
  console.log(`Valor total da locação = R$ ${veiculo.passeio().toFixed(2)}`)

  console.log()

} catch (err: any) { 
  console.error(err.message)
}

