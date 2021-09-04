import express, { request, response } from "express";

// @types/express
const app = express();

/**
 * GET => Busca uma informação
 * POST => Inserir (Criar) uma informação
 * PUT => Alterar uma informação 
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica 
 */
/**
* Tipos de parâmetros:
* Routes Params => http://localhost:3000/produtos/123456789
* Query Params => http://localhost:3000/produtos?name=teclado&description=tecladobom 
*
* Body Params =>
*/

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Hello Word!");
});

app.post("/test-post", (request, response) => {
    return response.send("Hello NLW metodo POST");
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));