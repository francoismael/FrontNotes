import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../../service/note.service';
import { CommonModule } from '@angular/common';
import { updateNote } from '../../types/note.dto';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, ReactiveFormsModule, PopupComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
    form: FormGroup;
    showPopup = false;
    popupMessage = '';
    noteId: string = '';

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private noteService: NoteService,
      private router: Router
    ){
      this.noteId = this.route.snapshot.paramMap.get('id')!;
      this.form = this.fb.group({
        title: [''],
        content: [''],
      });
      this.loadNote();
    }

    loadNote() {
      this.noteService.getOne(this.noteId).subscribe((note) => {
        this.form.patchValue({
          title: note.title,
          content: note.content,
        });
      });
    }


    onSubmit() {
      if (this.form.valid) {
        const data: updateNote = this.form.getRawValue();
        this.noteService.update(this.noteId, data).subscribe({
            next: () => {
                this.showPopup = true;
                this.popupMessage = 'modification effectuer';
            },
            error: () => {
              this.showPopup = true;
              this.popupMessage = 'erreur pendant la modification'
            }
        });
      }
    }


    closePopup() {
      this.showPopup = false;
      this.router.navigate(['/notes']);

    }
}
