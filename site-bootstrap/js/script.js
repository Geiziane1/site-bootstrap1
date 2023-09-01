// declaraçaçao das constantes
const form = document.querySelector('form');
const pesquisaCep = document.querySelector('#cep');
// invalida a submisão de dados do formulário

// limpar formulario
const limpaForm = () => {

    // limpar os valores do endereço do formulário
    document.querySelector('#uf').value = '';
    document.querySelector('cidade').value = '';
    document.querySelector('#bairro').value = '';
    document.querySelector('logradouro').value = '';

};

// calback
 const meuCallbak = (conteudo) => {

    if(!('erro in conteudo')){
    document.querySelector('#uf').value   = (conteudo.uf);
    document.querySelector('#cidade').value   = (conteudo.localidade);
    document.querySelector('#bairro').value   = (conteudo.bairro);
    document.querySelector('#logradouro').value   = (conteudo.logradouro);
 }
 else{ 

// cep não encontrado
limpaForm();
alert('CEP não encontado.');

 }

 };

//  invalidade a submisão de dados do formulário
form.onsubmit = () => false;

// evento que preenche automaticamente o endereço de acordo com o CEP preenchido
pesquisaCep.addEventListener('blur' , () => {

// eliminar caracteres especiais deixando somente números
let cep = pesquisaCep.value.replace(/\D/g, '');
// verifica se o campo cep possue valor informado
if (cep != ''){

//    valida o cep
    let calidaCep = /^[0-9]{8}$/;
  if (validaCep,test(cep)){


    let script = document.createElement('script');

   script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meucallback';

//    insere o script no documento e carrega o conteudo
 document.body.appendChild(script);

  }
    else {
// cep invalido
limpaForm()
arlert('CEP invalido.');

 }
    
}  



})