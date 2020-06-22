import React from 'react';
import Header from './Header';

const livraria = [
{
codigo: 1,
titulo:"O Guia do Mochileiro das Galáxias",
autor:"Douglas Adams",
gemero:"Aventura",
quantidade:5
},
{
codigo: 2,
titulo:"Harry Potter 1",
autor:"J.K. Rowling",
gemero:"Aventura",
quantidade:3
},
]

function ListaPage(){
    return <div>
        <Header/> 
        <table></table>
    </div>
};

export default ListaPage;