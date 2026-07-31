// ===== LIVRO 1 =====
const livro1 = {
  titulo: "Clean Code",
  autor: "Robert C. Martin",
  preco: 89.9,
  estoque: 12,
};

// ===== LIVRO 2 — TROQUE os quatro valores abaixo =====
const livro2 = {
  titulo: "Escolha o título do seu livro",
  autor: "Nome do autor",
  preco: 35.0,
  estoque: 5,
};

// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2 };