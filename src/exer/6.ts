/*
    -Crie uma interface chamado IEndereço com os seguintes atributos rua, numero, bairro e cidade. 
    -Crie um variável do endereço que seja do tipo da interface endereço. 
    -Atribua um endereço uma rua, numero, bairro e cidade para a variável endereço que é do mesmo tipo da interface. 
    -Utilize o console.log para exibir o conteúdo da variável endereço.
*/

// Atributos da interface IEndereca:
interface IEndereco {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
}

// Objeto endereço recebe os atributos da interface IEndereco:
const endereco: IEndereco = {
    rua: 'Amaral Peixoto',
    numero: '3184',
    bairro: 'Centro',
    cidade: 'Volta Redonda'
}

// Retorno no console:
console.log()

console.log('-- DESCRIÇÃO DO ENDEREÇO: -------------------------------------------')
console.log(endereco)

console.log()



