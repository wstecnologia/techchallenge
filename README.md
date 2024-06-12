# Lanchonete WS

### Aplicação de Pedidos para Lanchonete WS

Este é um sistema de pedidos para uma lanchonete desenvolvido em NodeJs/TypeScript. Ele permite a identificação dos clientes, criação de pedidos, processamento de pagamento e acompanhamento da preparação e entrega ao cliente.

### Configuração do Ambiente

Clone este repositório https://github.com/wstecnologia/techchallenge para o seu computador (acessar a branch main).
Para iniciar a aplicação, execute o comando “docker compose up --build”. (É necessário que o docker esteja instalado na máquina para o correto funcionamento)
Após a execução do comando acima, o sistema será carregado, junto com suas dependências.
Uso
Acesse a documentação swagger da aplicação através do navegador web, digitando o endereço http://localhost:3000/api-docs/.

### Banco de Dados

Foi utilizado o banco de dados postgresql, a imagem do mesmo está configurada no docker-compose e vai subir junto da aplicação. Ao subir, o docker vai rodar o script de criação/inserção das tabelas.
Foi incluído no docker-compose uma ide chamada adminer, para possíveis consultas, caso necessário.
Link para acessar a ide do banco: http://localhost:8081/

#### Rota para novo pedido: `/api/order/new`

O Payload para criar o pedido é composto pelos dados do pedido, itens do pedido e pagamento (apenas o valor) considerando que no frontend, já vai ter uma conexão com a api de pagamento e retorno de sucesso ou falha. Estamos considerando que o pagamento foi realizado com sucesso e todos os dados estão sendo enviados para que a api crie o pedido. Abaixo um exemplo de payload para gerar um pedido para um cliente não identificado.

```
{
    "customerId": "",
    "observation": "Teste geração de pedido",
    "items": [
        {
            "productId":              "f9a20b1e-a926-42d7-85ff-91cde1b31a93",
            "productDescription": "Hambúrguer Clássico",
            "productPrice": 15.99,
            "quantity": 1
        },
        {
            "productId": "b877f159-814e-43e6-bf53-73ec63ca622a",
            "productDescription": "Refrigerante",
            "productPrice": 4.99,
            "quantity": 1
        }
    ],
    "payment": {
        "amount": 20.98
    }
}
```

Quando o pedido é gerado com sucesso, a situação inicial é “Recebido”. Para o checkout foi criado um timer, onde a cada 5 segundos (após um novo pedido ser gerado) é feito uma consulta para retornar o último pedido para iniciar a preparação.
Após a preparação um outro timer de 10 segundos e disparado para retornar o último pedido preparado para liberar para entrega (Situação = “Pronto”)
Todas as listas são paginadas, iniciando com a página 1. Caso digite um número de página que não existe, uma mensagem de erro vai ser emitida.

As demais rodas seguem o fluxo normal conforme payloads e parâmetros.

### Observação:

Na documentação é pedido que a identificação seja feita pelo CPF ou cadastro com nome e email. Porém, não vemos sentido a identificação pelo número do CPF se o mesmo não está no cadastro. Portanto colocamos como um item obrigatório.
