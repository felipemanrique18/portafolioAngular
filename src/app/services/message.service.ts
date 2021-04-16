import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  sendMessage(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body={ 
      name: data.nombre, 
      replyto: data.email, 
      message: data.mensaje 
    };

    return this.http.post('https://formspree.io/f/xdoykabz', body, httpOptions);
  }
}
