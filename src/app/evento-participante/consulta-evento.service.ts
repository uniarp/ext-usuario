import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEventoService {

  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/participantes';
  consultaEventoUrl: any;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  async carregarEvento(codParticipante: any): Promise<Evento> {
    return this.http.get<Evento>(`${this.participanteUrl}/eventos/${codParticipante}`)
      .toPromise();
  }

  listar(): Promise<Participante> {
    return this.http.get<Participante>(this.participanteUrl + `/listar`, this.httpOptions)
      .toPromise();
  }

}

export class Participante {
  codParticipante: number;
  nome: string;
  cpf: string;
  ra: number;
  senha: string;
  telefone: string;
  email: string;
}

export class Evento {
  codevento: number;
  codparticipante: number;
  nome: string;
  presente: boolean;
  titulo: string;
}