const produtos = {
  "123": { nome: "bisteca", preco: 25.30 },
  "147": { nome: "miolo de alcatra", preco: 30.00 },
  "456": { nome: "carvão P", preco: 50.99 },
  "654": { nome: "sal grosso", preco: 5.99 },
  "789": { nome: "picanha", preco: 40.30 },
  "466": { nome: "grelha", preco: 70.00 },
  "321": { nome: "tulipinha", preco: 5.99 }
};

let carrinho = [];
const audio = new Audio("bip.mp3");
window.onload = function () {
  document.getElementById("codValue").focus();
};

function addproduto() {
  const codValue = document.getElementById("codValue").value;

  if (!produtos[codValue]) {
    alert("Produto não encontrado");
    return;
  }

  const produto = produtos[codValue];

  const item = {
    nome: produto.nome,
    preco: produto.preco,
    quantidade: 1,
    subtot: produto.preco
  };
  audio.currentTime = 0;
  audio.play();	
  carrinho.push(item);

  atualizarTela();

  document.getElementById("codValue").value = "";
  document.getElementById("codValue").focus();
}

function atualizarTela() {
  const lista = document.getElementById("lista");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";

  let total = 0;

  carrinho.forEach(item => {
    total += item.subtot;

    const li = document.createElement("li");
    li.className = "list-group-item";

    li.textContent =
      item.nome +
      " - " +
      item.quantidade +
      " x R$ " +
      item.preco.toFixed(2) +
      " = R$ " +
      item.subtot.toFixed(2);

    lista.appendChild(li);
  });

  totalSpan.textContent = total.toFixed(2);
}
