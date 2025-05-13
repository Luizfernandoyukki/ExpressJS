var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusProdutos = [
    { id: 1, nome: 'Camiseta Básica', descricao: 'Camiseta 100% algodão, confortável para o dia a dia.', preco: 49.99 },
    { id: 2, nome: 'Tênis Esportivo', descricao: 'Ideal para caminhadas e corridas leves.', preco: 129.99 },
    { id: 3, nome: 'Mochila Escolar', descricao: 'Espaçosa e resistente, com vários compartimentos.', preco: 89.59 },
    { id: 4, nome: 'Jaqueta Corta-Vento', descricao: 'Resistente à água, perfeita para dias chuvosos.', preco: 159.90 },
    { id: 5, nome: 'Relógio Digital', descricao: 'Display em LED com pulseira em silicone.', preco: 99.90 },
    { id: 6, nome: 'Fone de Ouvido Bluetooth', descricao: 'Conexão rápida e bateria de longa duração.', preco: 149.50 },
    { id: 7, nome: 'Boné Estampado', descricao: 'Com design moderno e ajuste regulável.', preco: 39.99 },
    { id: 8, nome: 'Calça Legging Feminina', descricao: 'Confortável e ideal para atividades físicas.', preco: 69.90 },
    { id: 9, nome: 'Chinelo Slide', descricao: 'Modelo unissex com sola antiderrapante.', preco: 44.90 },
    { id: 10, nome: 'Carteira de Couro', descricao: 'Compacta, elegante e com várias divisórias.', preco: 79.90 },
    { id: 11, nome: 'Óculos de Sol', descricao: 'Proteção UV400 e armação leve.', preco: 89.99 },
    { id: 12, nome: 'Camisa Polo Masculina', descricao: 'Estilo casual e tecido respirável.', preco: 59.99 },
    { id: 13, nome: 'Vestido Longo Estampado', descricao: 'Toque suave e estampa floral.', preco: 109.00 },
    { id: 14, nome: 'Tênis Casual Branco', descricao: 'Versátil e fácil de combinar.', preco: 139.99 },
    { id: 15, nome: 'Blusa Tricot Feminina', descricao: 'Ideal para dias frios com estilo.', preco: 89.90 },
    { id: 16, nome: 'Shorts Masculino Dry Fit', descricao: 'Secagem rápida e tecido leve.', preco: 54.50 },
    { id: 17, nome: 'Bolsa Transversal', descricao: 'Compacta, prática e moderna.', preco: 74.90 },
    { id: 18, nome: 'Cinto de Couro Sintético', descricao: 'Acabamento elegante com fivela metálica.', preco: 34.99 },
    { id: 19, nome: 'Sandália Rasteira', descricao: 'Leve, confortável e com tiras ajustáveis.', preco: 59.00 },
    { id: 20, nome: 'Camisa Xadrez', descricao: 'Ideal para looks despojados e confortáveis.', preco: 64.90 },
    { id: 21, nome: 'Touca de Lã', descricao: 'Aquece bem e tem ótimo caimento.', preco: 29.90 },
    { id: 22, nome: 'Tênis de Corrida Avançado', descricao: 'Amortecimento superior e solado em gel.', preco: 199.99 },
    { id: 23, nome: 'Regata Dry Fit', descricao: 'Ideal para treinos intensos.', preco: 39.90 }
];

  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Mes Produtos',
      ProdutosParaView: meusProdutos // Passando o array para a view
    });
  });

  module.exports = router;
