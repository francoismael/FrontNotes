import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../service/note.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CreateNote } from '../../types/note.dto';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
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
        this.noteService.create(data).subscribe(() => {
            alert('note créé');
            this.router.navigate(['/notes']);
        })
      }
    }


}
