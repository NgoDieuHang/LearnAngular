import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  data: string[] = [];

  constructor() {
  }

  addMessage(mess: string): void {
    this.data.push(mess);
  }

  clearMessage(): void {
    this.data = [];
  }
}
