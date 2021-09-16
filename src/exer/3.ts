/*
    -Crie uma classe Fatura com os atributos números, descrição, quantidade Comprada e preço.
    -Crie um método valor da Fatura para multiplicar a quantidade comprada pelo preço.
*/

// Classe pai Fatura:
class Fatura {
    // Atributos da classe Fatura:
    constructor ( 
        public _numero: string,
        public _descricao: string,
        public _quatdaDeCompras: number,
        public _precoDeCompras: number
    ) {}
    
    // Metodo da classe Fatura para informar valor da fatura a ser pago:
    public valorDaFatura() {
      return this._quatdaDeCompras * this._precoDeCompras
    }
}
// Objeto fatura instanciado na classe Fatura:
const fatura = new Fatura('1', 'Cartão ****-****-****-3578', 5, 250)

// retorno no conssole:
console.log()

console.log('-- DESCRIÇÃO DA FATURA: -------------------------------------------')
console.log(fatura)
console.log(`Valor total da fatura = R$ ${fatura.valorDaFatura().toFixed(2)}`)

console.log()