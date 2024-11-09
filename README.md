# Product Store

Aplicação full stack para cadastro e gerenciamento de produtos, permitindo **criar**, **editar** e **excluir** itens.

## Tecnologias

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Vite, Chakra UI, Zustand

## Como Executar

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/eoivo/product-store
   cd product-store
   ```

2. Instale as dependências do backend e frontend:

   ```bash
   npm install
   npm install --prefix frontend
   ```

3. Configure as variáveis de ambiente criando um arquivo `.env` com:

   ```env
   PORT=5000
   MONGO_URI=sua-string-de-conexão-do-mongodb
   ```

4. Execute o projeto em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Para produção:
   ```bash
   npm run build
   npm run start
   ```

## Estrutura do Projeto

- `backend/` - Código do servidor e rotas de API
- `frontend/` - Interface do usuário e gerenciamento de estado
