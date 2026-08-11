Aqui está uma documentação dos endpoints necessários para a aplicação de e-commerce (menina-chick-store), considerando funcionalidades de autenticação, produtos, carrinho e pedidos.

---

# Documentação dos Endpoints da API

## Autenticação

## Produtos

### GET `/products`
- **Descrição:** Lista todos os produtos.
- **Resposta:**  
  ```json
  [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": 0,
      "imageUrl": "string",
      "category": "string",
      "stock": 0
    }
  ]
  ```

---

### GET `/products/:id`
- **Descrição:** Detalhes de um produto.
- **Resposta:**  
  ```json
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "price": 0,
    "imageUrl": "string",
    "category": "string",
    "stock": 0
  }
  ```

---

## Carrinho

### GET `/cart`
- **Descrição:** Retorna o carrinho do usuário autenticado.
- **Headers:**  
  `Authorization: Bearer <token>`
- **Resposta:**  
  ```json
  {
    "items": [
      {
        "productId": "string",
        "quantity": 0
      }
    ]
  }
  ```

---

### POST `/cart/add`
- **Descrição:** Adiciona um produto ao carrinho.
- **Headers:**  
  `Authorization: Bearer <token>`
- **Body:**  
  ```json
  {
    "productId": "string",
    "quantity": 1
  }
  ```
- **Resposta:**  
  ```json
  {
    "success": true
  }
  ```

---

### POST `/cart/remove`
- **Descrição:** Remove um produto do carrinho.
- **Headers:**  
  `Authorization: Bearer <token>`
- **Body:**  
  ```json
  {
    "productId": "string"
  }
  ```
- **Resposta:**  
  ```json
  {
    "success": true
  }
  ```

---

### POST `/cart/clear`
- **Descrição:** Limpa o carrinho do usuário.
- **Headers:**  
  `Authorization: Bearer <token>`
- **Resposta:**  
  ```json
  {
    "success": true
  }
  ```

---

## Pedidos

### POST `/orders`
- **Descrição:** Cria um novo pedido a partir do carrinho.
- **Headers:**  
  `Authorization: Bearer <token>`
- **Body:**  
  ```json
  {
    "items": [
      {
        "productId": "string",
        "quantity": 1
      }
    ],
    "address": "string",
    "paymentMethod": "string"
  }
  ```
- **Resposta:**  
  ```json
  {
    "orderId": "string",
    "status": "string"
  }
  ```

---

### GET `/orders`
- **Descrição:** Lista os pedidos do usuário autenticado.
- **Headers:**  
  `Authorization: Bearer <token>`
- **Resposta:**  
  ```json
  [
    {
      "orderId": "string",
      "status": "string",
      "createdAt": "string",
      "items": [
        {
          "productId": "string",
          "quantity": 1
        }
      ]
    }
  ]
  ```

---

Se precisar de endpoints para administração (CRUD de produtos, categorias, usuários), posso complementar!