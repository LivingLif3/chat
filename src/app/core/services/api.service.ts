import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDialogMessages(id: string) {
    return this.http.get(`http://localhost:5000/history/get/${id}`);
  }
}
