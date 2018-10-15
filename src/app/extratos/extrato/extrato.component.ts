import { Component, Input } from "@angular/core";

@Component({
    selector: 'ex-extrato',
    templateUrl: 'extrato.component.html'
})

export class ExtratoComponent {
    @Input() dataDoLancamento = ''
    @Input() descricao = ''
    @Input() numero = ''
    @Input() dataDeConfirmacao = ''
    @Input() dadosBancarios = ''
    @Input() valorFinal = ''
}