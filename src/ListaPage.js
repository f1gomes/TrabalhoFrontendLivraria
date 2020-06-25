import React, { useState, useEffect } from 'react';
import Header from './Header';
import api from './api';
import { useMemo } from 'react';

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
        setLivraria(response.data);        
    }

    useMemo(loadData, []);
    return <div>
        <Header/> 
        {/*<button onClick= {loadData}> Carregar dados</button>*/}
        
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