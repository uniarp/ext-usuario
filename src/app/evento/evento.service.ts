import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  inscricaoUrl = 'https://uniarpextensao.herokuapp.com/public/eventos';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listarEvento(codEvento: number): Promise<Evento> {
    return this.http.get<Evento>(`${this.inscricaoUrl}/listar/${codEvento}`)
      .toPromise()
      .then(data => data[0]);
  }

  listarEventos(){
    return this.http.get<any>(`${this.inscricaoUrl}/listar`)
      .toPromise()
      .then(data => data);
  }

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

