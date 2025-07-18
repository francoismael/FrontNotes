import { Search } from 'lucide-angular';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
    searchTerm: string = '';
    @Output() search = new EventEmitter<string>;

    onSearch(){
        this.search.emit(this.searchTerm.trim());
    }
}
