import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
      @Input() message: string = '';
      @Output() close = new EventEmitter<void>();

      closePopup(){
        this.close.emit();
      }

}
