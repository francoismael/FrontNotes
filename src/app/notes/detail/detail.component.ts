import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../types/note.dto';

@Component({
  standalone: true,
  selector: 'app-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './detail.component.html',
})
export class DetailComponent {
  note?: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.noteService.getOne(id).subscribe({
      next: (res) => (this.note = res),
      error: (err) => console.error(err),
    });
  }
}
