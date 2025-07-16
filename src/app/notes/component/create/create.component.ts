import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../service/note.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateNote } from '../../types/note.dto';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule, PopupComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  showPopup = false;
  popupMessage = '';
    form: FormGroup;
    constructor(private fb: FormBuilder, private noteService: NoteService, private router: Router){
      this.form = this.fb.group({
        title: [''],
        content: [''],
      });
    }


    onSubmit(){
      if(this.form.valid){
        const data: CreateNote = this.form.getRawValue();
        this.noteService.create(data).subscribe({
            next: () =>{
                this.popupMessage = 'Création du note réussie';
                this.showPopup = true;
            },
            error: () => {
                this.popupMessage = 'Erreur de création';
                this.showPopup = true;
            }

      });

    }
  }

  closePopup(){
    this.showPopup = false;
    this.router.navigate(['/notes']);
  }
}
