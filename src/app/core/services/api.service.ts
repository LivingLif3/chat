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

  sendMessage(dialogId: any, text: string, my: boolean) {
    return this.http.post(`http://localhost:5000/answer`, {
      dialogId,
      message: text,
      state: my,
      date: new Date(),
    });
  }

  deleteMessages(dialogId: any) {
    return this.http.delete(`http://localhost:5000/history/delete/${dialogId}`);
  }

  updateMessages(dialogId: any, messageId: any, text: string) {
    return this.http.put(`http://localhost:5000/history/put`, {
      dialogId,
      messageId,
      message: text,
    });
  }

  getDialogs() {
    return this.http.get(`http://localhost:5000/getDialogs`);
  }
}
