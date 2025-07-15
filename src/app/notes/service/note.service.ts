import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../types/note.dto';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:5000/notes'
  constructor(private http: HttpClient){}

  private getAuthHeaders(){
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }

  getAll(): Observable<Note[]>{
    return this.http.get<Note[]>(this.apiUrl, this.getAuthHeaders());
  }

  getOne(id: string): Observable<Note>{
    return this.http.get<Note>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  create(data: { title: string, content?: string}): Observable<Note>{
    return this.http.post<Note>(this.apiUrl, data, this.getAuthHeaders());
  }

  update(id: string, data: {title: string, content?: string}): Observable<Note>{
    return this.http.patch<Note>(`${this.apiUrl}/${id}`, data, this.getAuthHeaders());
  }

  delete(id: string): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

}
