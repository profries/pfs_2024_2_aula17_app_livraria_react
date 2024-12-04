import axios from "axios";

const BASE_URL = "http://localhost:3000/livros"
async function listarLivros() {
    const response = await axios.get(BASE_URL);
    return response.data;
}

async function inserirLivro(livro) {
    const response = await axios.post(BASE_URL, livro)
    return response.data;
}

export default {
    listarLivros,
    inserirLivro
}