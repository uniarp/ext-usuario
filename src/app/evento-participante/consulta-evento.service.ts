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

  async carregarEvento(cpf: string): Promise<Evento> {
    return this.http.get<Evento>(`${this.participanteUrl}/eventos/${cpf}`)
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
  codEvento: number;
  titulo: string;
  codArea: any[];
  periodoInicial: string;
  periodoFinal: string;
  inscricaoInicio: string;
  inscricaoFim: string;
  qtdMinInscrito: number;
  qtdMaxInscrito: number;
  modeloDoc: string;
  voluntario: any[];
  atividades: any[];
  validar: any[];
  motivo: string;
}