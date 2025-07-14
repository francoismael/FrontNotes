import { NoteSchema } from './../../../../../BackNotes/src/modules/notes/infrastructure/schema/note.schema';
import { Component } from '@angular/core';
import { Note } from '../types/note.dto';
import { NoteService } from '../note.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
      notes: Note[] = [];
      message = '';
      constructor(private noteService: NoteService){
        this.loadNotes();
      }

      loadNotes() {
        this.noteService.getAll().subscribe({
          next: (res) => this.notes = res,
          error: (err) => console.error(err),
        });
      }

      deleteNote(id: string) {
        this.noteService.delete(id).subscribe({
          next: () => {
            this.message = 'Note supprimer avec succés';
            this.loadNotes();
          },

          error: (err) => {
            console.error(err);
            this.message = 'Erreur lors de la suppresion de la note'
          }
        })
      }
}
