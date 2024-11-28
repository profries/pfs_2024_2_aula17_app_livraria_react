import listaLivros from "../data/Livros.json"
import CardLivro from "./CardLivro"


export default function ListCardLivros() {
    console.log(listaLivros);
    return (
        listaLivros.map(livro => 
            <CardLivro key={livro.id} livro={livro} />
        )    
    )
}