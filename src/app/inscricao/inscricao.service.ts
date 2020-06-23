import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  inscricaoUrl = 'https://uniarpextensao.herokuapp.com/public/eventos';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  cadastrar(inscricao: any): Promise<any> {
    console.log(inscricao);
    return this.http.post<any>(`${this.inscricaoUrl}/inscrever`, inscricao)
      .toPromise()
      .then();
  }

}

