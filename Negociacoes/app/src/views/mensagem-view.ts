import { TipoMensagem } from '../enums/tipo-mensagem.js';
import { View } from './view.js';

interface Mensagem {
  texto: string;
  tipo: TipoMensagem;
}

export class MensagemView extends View<Mensagem> {
  protected template(model: Mensagem): string {
    return `
      <p class="alert ${model.tipo}">${model.texto}</p>
    `;
  }
}
