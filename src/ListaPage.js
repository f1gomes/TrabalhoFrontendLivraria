import React, { useState, useMemo } from 'react';
import Header from './Header';
import api from './api';
import {Table, TableRow, TableCell } from '@material-ui/core';

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
    const [loading, setLoading] = useState(true);

    async function loadData(){
        
        const response = await api.get('/');
        setLivraria(response.data);  
        setLoading (false);
    }

    useMemo(loadData, []);
    return <div>
        <Header/> 
    {loading == true 
        ? <span>Carregando Lista...</span> 

        : <Table style = {{marginTop:'80px'}}>
            {
            livraria.map(item =>(
                <TableRow>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell>{item.titulo}</TableCell>
                    <TableCell>{item.autor}</TableCell>
                    <TableCell>{item.genero}</TableCell>
                    <TableCell>{item.quantidade}</TableCell>
                </TableRow>
            ) )
            }
        </Table>
    }
    </div>
}

export default ListaPage;