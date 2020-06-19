import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEventoService {

  participanteUrl = 'https://uniarpextensao.herokuapp.com/public/participantes';
  consultaEventoUrl: any;
  inscricaoUrl = 'https://uniarpextensao.herokuapp.com/public/eventos';

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

  // listarInscricao(codInscricao: any): Promise<Evento>{
  //   return this.http.get<Evento>(`${this.participanteUrl}/inscricao/${codInscricao}`)
  //   .toPromise();
  // }

  async listarIngresso(codEvento: any): Promise<Evento>{
    console.log("w")
    return this.http.get<Evento>(`${this.participanteUrl}/qrCode/${codEvento}`)
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
  codparticipante: number;
  nome: string;
  presente: boolean;
  titulo: string;
  codEvento: number
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