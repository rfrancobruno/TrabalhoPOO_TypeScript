/*
    -Crie uma classe chamada Vendedores com os atributos nome, salario e valor da venda.
    -Crie os getters e setters e as validações. 
    -Crie um método desconto para calcular 8% do salário. 
    -Crie uma classe filha chamada Vendedor de Pessoa Física com o atributo região,
       crie o getter e setter com validação para aceitar somente as regiões sul, sudeste,
       centro-oeste, norte e nordeste. 
    -Crie um método para calcular a comissão. 
        Se a região for sul a comissão será de 10% sobre o valor da venda. 
        Se a região for sudeste a comissão será de 12% sobre o valor da venda.
        Se a região for centro-oeste a comissão será de 14% sobre o valor da venda.  
        Se a região for norte a comissão será de 15% sobre o valor da venda. 
        Se a região for nordeste a comissão será de 17% sobre o valor da venda. 
    -Crie o método para calcular o salário total que será o salario mais a comissão.

    -Crie uma classe filha chamada Pessoa Jurídica com os atributos nome da empresa, total de funcionários.
        crie os getters, setters e as suas validações. 
    -Crie um método para calcular a comissão. 
        Se o valor da venda for menor que 5.000,00 o valor da comissão será de 2% sobre o valor da venda. 
        Se o valor da venda for maior ou igual a 5.000,00 e menor que 10.000,00 o valor da comissão será de 4% sobre o valor da venda. 
        Se o valor da venda for maior ou igual a 10.000,00 o valor da comissão será de 6% sobre o valor da venda.
    -Crie um método salario Total que:
         será a soma do salario mais comissão e  
            mais R$ 200,00: 
                se o número de funcionários for menor que 100 ou
            mais R$ 300,00 
                se o número de funcionários for maior ou igual a 100.

*/

// Classe pai Vendedores:
class Vendedores {

    // Atributos da classe pai Vendedores:
    constructor (
        public _nome1: string,
        public _salario1: number,
        public _valorDeVenda1: number
        
    ){}
    
    // Geterre e Seterres da classe paa Vendedores:
    get nome1() {
        return this._nome1
    }

    get salario1() {
        return this._salario1
    }

    get valorDeVenda1() {
        return this._valorDeVenda1
    }

    set nome1(nome1 : string) {
        if (nome1 === '') {
            throw Error('Campo nome vazio, por favor prencher!')
        }
        this._nome1 = nome1
    }
    
    set salario1(salario1 : number) {
        if (salario1 < 0) {
            throw Error("Valor de salario não válido, preencher novamente!")
        }
        this._salario1 = salario1
    }

    set valorDeVenda1(valorDeVenda1 : number) {
        if (valorDeVenda1 < 0) {
            throw Error("Valor de venda não válido, preencher novamente!")
        }
        this._valorDeVenda1 = valorDeVenda1
    }

    public desconto() {
        return vendedor._salario1 * 0.08
    }

}

// Classe filha vendedor que herda da classe pai Vendendores
class VendedorPessoaFisica extends Vendedores {

    public _regiao: string
    static REGIOES = ['sul', 'sudeste', 'centro-oeste', 'norte', 'nordeste']
    
    constructor(nome1: string, salario1: number ,valorDeVenda1: number, regiao: string){
        super(nome1, salario1, valorDeVenda1)
        this._regiao = regiao
    }
     
    get regiao() : string {
        return this._regiao
    }

    set regiao(regiao: string) { 
        if(!VendedorPessoaFisica.REGIOES.includes(regiao)) {
            throw new Error('Região inválido!')  
        }
        this._regiao = regiao
    }

    // Método para calcular a comissão do vendedor
    public calcularComissaoVendedor() {
        if (vendedor.regiao === 'sul') {
             return vendedor._valorDeVenda1 * 0.10
        }else if (vendedor.regiao === 'sudeste') {
            return vendedor._valorDeVenda1 * 0.12
        }else if (vendedor.regiao === 'centro-oeste') {
            return vendedor._valorDeVenda1 * 0.14
        }else if (vendedor.regiao === 'norte') {  
            return vendedor._valorDeVenda1 * 0.15
        }else  if (vendedor.regiao === 'nordeste') {
            return vendedor._valorDeVenda1 * 0.17
        }else {
            return 0
        }
    }

    public salarioTotal() {
        return vendedor.salario1 + vendedor.calcularComissaoVendedor()
    }

}
const vendedor = new VendedorPessoaFisica('' ,0 ,0 ,'')

class LojaPessoaJuridica {

    constructor (
        public _nomeLoja: string,
        public _totalFuncionarios: number,
        public _vendasLoja: number
    ) {}
    
    get nomeLoja() {
        return this._nomeLoja
    }

    get totalFuncionarios() {
        return this._totalFuncionarios
    }

    get vendasLoja() {
        return this._vendasLoja
    }

    set nomeLoja(nomeLoja : string) {
        if (nomeLoja === '') {
            throw Error('Atenção: Loja sem nome!')
        }
        this._nomeLoja = nomeLoja
    }

    set totalFuncionarios(totalFuncionarios: number) {
        if (totalFuncionarios < 0) {
            throw Error('Numero de funcionarios não é valido!')
        }
        this._totalFuncionarios = totalFuncionarios
    }

    set vendasLoja(vendasLoja : number) {
        if (vendasLoja < 0) {
            throw Error('Atenção! A loja está com débitos')
        }
        this._vendasLoja = vendasLoja
    }

    public comissaoLoja() {
        if (loja.vendasLoja < 5000) {
            return loja.vendasLoja * 0.02
        } else if (loja.vendasLoja >= 5000 && loja.vendasLoja < 10000) {
            return loja.vendasLoja * 0.04
        } else {
            return loja.vendasLoja * 0.06
        }

    }

    public salarioTotalLoja () {
        if (loja.totalFuncionarios < 100) {
           return loja.vendasLoja + loja.comissaoLoja() + 200
        } else {
            return loja.vendasLoja + loja.comissaoLoja() + 300
        }
    }
 
}
const loja = new LojaPessoaJuridica('', 0, 0)

try {

    console.log()
    console.log(' ------ INFORMAÇÕES DO VENDEDOR ------ ')
    vendedor.nome1 = 'Roberta'
    vendedor.salario1 = 1000
    vendedor.valorDeVenda1 = 1000
    vendedor.regiao = 'sul'
    console.log(vendedor)
    console.log(`Desconto do salário de ${vendedor.nome1} = R$ ${vendedor.desconto().toFixed(2)}`)
    console.log('Comissão pessoa física: Sul = 10% | Sudeste = 12% | Centro-oeste = 14% | Norte = 15% | Nordeste = 17%')
    console.log(`Comissão de ${vendedor.nome1} = R$ ${vendedor.calcularComissaoVendedor().toFixed(2)}`)
    console.log(`Salário total de ${vendedor.nome1} = R$ ${vendedor.salarioTotal().toFixed(2)}`)
    console.log()

} 
catch (err: any) {
    console.error(err.message)
    console.log()
}

try {

    console.log(' ------ INFORMAÇÕES DA LOJA ------ ')
    loja.nomeLoja = 'New System'
    loja.totalFuncionarios = 100
    loja.vendasLoja = 4000
    console.log(loja)
    console.log('Comissão loja: Vendas < 5000 = 2% | Vendas <= 5000 &&  Vendas < 10000 = 4% | Vendas > 10000 = 6%')
    console.log(`Comissão da loja ${loja.nomeLoja} = R$ ${loja.comissaoLoja()?.toFixed(2)}`)
    console.log('Salario total loja: Inferior a 100 funcionarios, vendas + comissão + R$ 200,00 ')
    console.log('                    Igual ou superior a 100 funcionarios, vendas + comissão + R$ 300,00 ')
    console.log(`Salaro total da loja = R$ ${loja.salarioTotalLoja().toFixed(2)}`)
    console.log()

} 
catch (err: any) {

    console.error(err.message)
    console.log()  
}
