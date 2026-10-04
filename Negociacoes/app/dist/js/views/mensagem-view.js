import { View } from './view.js';
export class MensagemView extends View {
    template(model) {
        return `
      <p class="alert ${model.tipo}">${model.texto}</p>
    `;
    }
}
