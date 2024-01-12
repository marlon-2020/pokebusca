import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.sass']
})
export class SuccessComponent {
  @Input() widthInput: string|null = null
  @Input() textInput: string|null = null
}
