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

async function buscarLivro(id) {
    const response = await axios.get(BASE_URL+"/"+id);
    return response.data;
}

async function atualizarLivro(id, livro) {
    const response = await axios.put(BASE_URL+"/"+id, livro)
    return response.data;
}

export default {
    listarLivros,
    inserirLivro,
    buscarLivro,
    atualizarLivro
}