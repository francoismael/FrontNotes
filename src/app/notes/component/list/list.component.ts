import { Component } from '@angular/core';
import { Note } from '../../types/note.dto';
import { NoteService } from '../../service/note.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LucideAngularModule, FilePlus } from 'lucide-angular';


@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PopupComponent, LucideAngularModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   FilePlus = FilePlus
      notes: Note[] = [];
      messagePopup = '';
      showPopup = false;
      constructor(private noteService: NoteService, private router: Router){
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
            this.showPopup = true;
            this.messagePopup = 'Note supprimer avec succés';
            this.loadNotes();
          },

          error: (err) => {
            this.showPopup = true;
            this.messagePopup = 'Erreur lors de la suppresion de la note'
          }
        })
      }

      closePopup(){
        this.showPopup = false;
        this.router.navigate(['/notes'])
      }

}
