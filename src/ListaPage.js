import React, { useState, useMemo } from 'react';
import Header from './Header';
import api from './api';
import {Table,
        TableRow,
        TableCell,
        Button,
        Dialog, 
        DialogTitle,
        DialogContent,
        DialogContentText,
        DialogActions,
        TextField
        } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
    const [open, setOpen] = useState(false);
    const [titulo, setTitulo]= useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [quantidade, setQuantidade] = useState(null);
    

    async function loadData(){
        
        const response = await api.get('/');
        setLivraria(response.data);  
        setLoading (false);
    }

    useMemo(loadData, []);

    function openDialog(){
        setOpen(true);
    }
    function closeDialog(){
        setOpen(false);
    }
    async function salvar(){
        await api.post('/',{titulo, autor, genero, quantidade});
        loadData();
        setTitulo('');
        setAutor('');
        setGenero('');
        setQuantidade();
        closeDialog();
    }

    return <div>
        <Header/> 
    {loading == true 
        ? <span>Carregando Lista...</span> 

        : <Table style = {{marginTop:'80px', marginBottom:'20PX'}}>
            {
            livraria.map(item =>(
                <TableRow>
                    <TableCell>{item.codigo}</TableCell>
                    <TableCell style={{width:'45%'}}>{item.titulo}</TableCell>
                    <TableCell style={{width:'25%'}}>{item.autor}</TableCell>
                    <TableCell>{item.genero}</TableCell>
                    <TableCell>{item.quantidade}</TableCell>
                    <TableCell>
                        <Button variant="outlined" color="secodary" size="small">
                            <DeleteIcon/>Apagar
                        </Button>
                    </TableCell>
                </TableRow>
            ) )
            }
        </Table>
    }
            <Button 
            onClick={openDialog}
            variant="contained" 
            color="primary">
                Adicionar
            </Button>

            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle>Adicionar Livro </DialogTitle>
                <DialogContent>
                <DialogContentText> Preencha os dados para cadastrar um novo livro</DialogContentText>
                <TextField
                autoFocus
                margin="dense"
                id="titulo"
                label="Título"
                type="text"
                fullWidth
                value={titulo}
                onChange={e => setTitulo(e.target.value)} 
                />
                <TextField
                margin="dense"
                id="autor"
                label="Autor"
                type="text"
                fullWidth
                value={autor}
                onChange={e => setAutor(e.target.value)} 
                />
                <TextField
                margin="dense"
                id="genero"
                label="Gênero"
                type="text"
                fullWidth
                value={genero}
                onChange={e => setGenero(e.target.value)} 
                />
                <TextField
                margin="dense"
                id="quantidade"
                label="Quantidade"
                type="number"
                fullWidth
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)} 
                />


                </DialogContent>
                <DialogActions>
                    <Button onClick={salvar}>Salvar</Button>
                    <Button onClick={closeDialog}>Cancelar</Button>
                </DialogActions>
                </Dialog>
    </div>
}

export default ListaPage;