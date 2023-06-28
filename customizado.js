class Produto {

    constructor() { //construtor /onde colocar os atributos
        this.id = 1;//this significa dentro dessa class
        this.arreyProdutos = [];//inicializando um atributo arrey vazio
    }

    salvar() { //metodo adicionar
        let produto = this.lerDados(); //chamando a função ler dados
        // armazenar os dados do metodo lerDados em uma variavel chamada let produtos

       if(this.validaCampo(produto) == 0){
        this.adicionar(produto); // se o usuario preencher tds os campos ele chama o metodo adicionar
       }

        this.listaTabela();//metodo para pecorrer tds os nosos elementos do nosso arrey e cria nossas linhas e colunas
        this.cancelar();//limpa as barras
    } // funçoes

    listaTabela() {//metodo para pecorrer tds os nosos elementos do nosso arrey e cria nossas linhas e colunas
        let tbody = document.getElementById('tbody');//pegar os elementos dentro de tbody
        tbody.innerText = ''; //toda vez que o usuario apertar ele vai ter que vir vazio, se ele nao estevir vazia, vai refazer tds produtos criados antes

        for(let i = 0; i < this.arreyProdutos.length; i++){// o .length fala a quantidade de elementos que existem dentro do arrey 
            let tr = tbody.insertRow();//essa função cria uma nova linha dentro da nossa tabela
            // tr minhas linhas da tabela
            // td minhas colunas da tabela
            let td_id = tr.insertCell();//essa função ela vai inserir um nova coluna a atribuir essa nova coluna a essa variavel
            let td_produto = tr.insertCell();//essa função ela vai inserir um nova coluna a atribuir essa nova coluna a essa variavel
            let td_valor = tr.insertCell();//essa função ela vai inserir um nova coluna a atribuir essa nova coluna a essa variavel
            let td_acoes = tr.insertCell();//essa função ela vai inserir um nova coluna a atribuir essa nova coluna a essa variavel

            td_id.innerText = this.arreyProdutos[i].id;//para colocra um informação dentro de uma coluna basta usar o .innertext
            // colcar dentro da td_id this.arreyProdutos[i].id . id é o campus no começo do construtor
            td_produto.innerText = this.arreyProdutos[i].nomeProduto;
            td_valor.innerText = this.arreyProdutos[i].precoProduto;

            td_id.classList.add('centralizadora');//esse .classList.add('centralizadora') serve para chamar uma class dentro do js

            

            let lixeira = document.createElement('img');
            lixeira.src = 'lixeirinha.png'
            lixeira.setAttribute("onclick", "produto.deletar("+ this.arreyProdutos[i].id +")");//isso vai ajudar a pegar o valor certo para deletar

            td_acoes.appendChild(lixeira);
            
        }
    }

    adicionar(produto) {// novo metodo para que qundo o usuario apertar em salvar ele adicionar esse elemento
        this.arreyProdutos.push(produto);//função para adicioar um elemnto no final da lista
        this.id++; //sempre que ele rodar o id soma mais um
    }

    lerDados() {//ler os campos e depois devolver para o nosso salvar
        let produto = {}//essa variavel sera um obj, por causa do {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('model').value; //isso ir pegar o valor do produto e salvar no campo "nomeProduto"
        produto.precoProduto = document.getElementById('color').value; //isso ir pegar o valor do produto e salvar no campo "nomeProduto"
        // produto.precoProduto é um papriedade chamada de precoProduto dentro do nosso objeto produto
        //produto.acao = '🗑️';

        return produto;
    }
    validaCampo(produto){ //Essa função vai apenas validar se os nossos campos estão ou não vazios
        let msg = '';
        if(produto.nomeProduto == '') {
            msg += '- informe o nome do Produto \n';
        }
        if(produto.precoProduto == '') {
            msg += '- informe o Preço do Produto \n';
        }
        if(msg != ''){
            alert(msg);
            return 1
        }

        return 0;
    }

    cancelar() { //metodo excluir 
        document.getElementById('model').value = '';//esta limpando os documentos em produto
        document.getElementById('color').value = '';
    }
    deletar(id) { //deletar o elemendo do id escolhido

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arreyProdutos.length; i++){ //procuarar o id
            if(this.arreyProdutos[i].id == id) {//achar o id
                this.arreyProdutos.splice(i, 1);//.splice(qual elemento do arrey quer deletar?, quasntos elementos quer deletar?)
                tbody.deleteRow(i)//inserteRow insire uma linha, deleteRow apaga uma linha
                //nao esqueca de indicar qual linha qur apagar (i)
            }
        }
    }
}

var produto = new Produto(); //para instaciar o objeto, criar u obj do tipo produto
// o nome da variavel é sempre o nome da class com a primaira letra menuscula