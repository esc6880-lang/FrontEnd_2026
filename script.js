const produto ={
	"123":{"nome:"bisteca do 7 ","preco": 25.30 },
	"147":{"nome:"miolo de alcatar","preco": 30.00 },
	"456":{"nome":"carvão/P","preco":50.99},
	"654":{"nome":"sal grosso","preco":5.99},
	"789":{"nome":"picanha","preco":40.30},
	"466":{"nome":"grelha","preco":70.00},
	"321":{"nome:"tulipinha","preco": 5.99 },
	};
let carinho=[];
const audio = new Audio("bip.mp3");
window.onload=()=> {
	document.getElementeById("cod").focus();

}
function addproduto(){
	const codElemento = document.getElementeById("cod");
	const qtdElemento= document.getElementeById("qtd");
	cons codValue= codElemento.Vaule;
	cons qtdValue=qtdElemento.Value;
	if (!produto[codValue]){
		alert("produto não encontrado");
		return;
       }
	const produtoBase = produtos[codValue];
	const item ={ 
	nome: produtoBase.nome,preco:produtoBase.preco,produtoBase.qntValue,
	subtot: produtoBase.preco*qtdValue
	
	};
	carrinho.push(item);
	audio.correnTime=0;
	audio.play();
	atualizaTela();
	
};
funtion atualizaTela(){
	let total =0;
	const list = document.getElementoBTId("lista");
	li.classeName = "list-group-item"
	li.innerHTML = `<div>${item.nome} ---- 
	${item.quantidade} X ${item.preco}=${item.subtot} </div>`;
	lista.appendChhild(li);
}