import { Negociacao } from './models/negociacoes.js';
const negociacao = new Negociacao(new Date(), 10, 1000);
console.log(negociacao.volume);
