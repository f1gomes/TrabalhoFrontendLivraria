import React, { useEffect , useState } from 'react';
import Header from './Header';
import api from './api';

/*const livraria = [
{
codigo: 1,
titulo:"O Guia do Mochileiro das Galáxias",
autor:"Douglas Adams",
genero:"Aventura",
quantidade:5
},
{
codigo: 2,
titulo:"Harry Potter 1",
autor:"J.K. Rowling",
genero:"Aventura",
quantidade:3
},
]*/

function ListaPage(){

    const [livraria, setLivraria] = useState([]);

    async function loadData(){
        
        const response = await api.get('/');
        const livraria = response.data;
            setLivraria(livraria);
        
    }
    useEffect(loadData, []);

    return <div>
        <Header/> 
        <table>
            {
            livraria.map(item =>(
                <tr>
                    <td>{item.codigo}</td>
                    <td>{item.titulo}</td>
                    <td>{item.autor}</td>
                    <td>{item.genero}</td>
                    <td>{item.quantidade}</td>
                </tr>
            ) )
            }
        </table>
    </div>
};

export default ListaPage;