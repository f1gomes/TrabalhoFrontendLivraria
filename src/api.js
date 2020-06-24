import axios from 'axios';

const api = axios.create({
    baseURL:'https://trabalho-livraria-backend.herokuapp.com'
//no baseURL preencher endereço da aplicação banco de dados no heroku
})



export default api;