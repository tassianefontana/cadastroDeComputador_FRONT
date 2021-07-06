import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computador } from 'src/models/computadores';

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {

  private baseUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) {}

  listar(): Observable <Computador[]>{
   return this.http.get<Computador[]>(`${this.baseUrl}computador/listar`)
  }

  cadastrar(computador:Computador): Observable<Computador>{
    return this.http.post<Computador>(`${this.baseUrl}computador/cadastrar`, computador)
  }

  deletar(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}computador/remover/${id}`);
  }
  
}
