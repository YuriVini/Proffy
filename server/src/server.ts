import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());

//GET: Buscar ou listar uma informacao
//POST: Criar alguma nova informacao
//PUT: Atualizar uma informacao existente
//DELETE: Deletar uma informacao existente

// Corpo (Request Body): Dados para criacao ou atualizacao de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginacao, filtros, ordenacao

app.use(cors());

app.use(routes);

app.listen(3333);