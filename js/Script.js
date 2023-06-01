// Variáveis para armazenar o email e a senha
let nome = '';
let email = '';
let senha = '';

// Função para salvar os dados
function salvarDados() {
  nome = document.getElementById('nameInput').value;
  email = document.getElementById('emailInput').value;
  senha = document.getElementById('senhaInput').value;
  console.log('Dados salvos:' ,nome, email, senha);
}

// Função para executar quando o formulário for enviado
function handleSubmit(event) {
  event.preventDefault();
  salvarDados();
}

// Adiciona um ouvinte de evento para o formulário
document.getElementById('meuForm').addEventListener('submit', handleSubmit);