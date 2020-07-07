import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/participantes';
  documentoUrl = 'https://uniarpextensao.herokuapp.com/public/documento';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  dadosParaDoc(codInscricao: number): Promise<any> {
    return this.http.get<any>(`${this.participanteUrl}/inscricao/${codInscricao}`)
      .toPromise();
  }

  gerarDocumento(codInscricao: number): Promise<any> {
    console.log(codInscricao);
    return this.http.post<any>(`${this.documentoUrl}/gerarcertificado/` + codInscricao, {})
      .toPromise();
  }
}