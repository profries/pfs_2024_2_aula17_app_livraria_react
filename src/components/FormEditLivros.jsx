import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LivroService from "../service/LivroService";

export default function FormEditLivros(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        LivroService.buscarLivro(id).then(livro => {
            console.log("Livro",livro);
            setTitulo(livro.titulo);
            setPreco(parseInt(livro.preco));       
        })
    }, [])

    const editarLivro = (event) => {
        event.preventDefault();
        LivroService.atualizarLivro(id, {
            titulo: titulo,
            imagem:"pequenoprincipe.jpg", 
            preco: parseInt(preco)
        }).then(livro => {
                alert("Livro atualizado com sucesso!")
                console.log("Livro",livro);
        })            

    } 
    const voltar = () => {
        navigate(-1);
    }
    return (
        <form onSubmit= {editarLivro}>
            <label>Titulo:</label>
            <input type="text" name="titulo" value={titulo} 
                onChange={(ev) => setTitulo(ev.target.value)} />
            <br />
            <label>Preço:</label>
            <input type="number" name="preco" value={preco} 
                onChange={(ev) => setPreco(ev.target.value)} />
            <br />
            <input type="submit" value="Salvar"/>
            <input type="button" value="Voltar" onClick={voltar} />
        </form>
    )
}