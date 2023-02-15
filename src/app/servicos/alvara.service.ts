import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alvara } from '../modulos/alvara/alvara';
import { AlvaraPaginator } from '../modulos/alvara/alvaraPaginator';


// const API_URL = 'http://cloudtecnologia.dynns.com:8081/api/alvara';
// http://192.168.1.254:8081

const API_URL = 'http://192.168.1.254:8081/api/alvara';

@Injectable({ providedIn: 'root' })
export class AlvaraService {

  constructor(private http: HttpClient) { }

  uploadPdf(formData: FormData): Observable<any> {
    return this.http.post(API_URL + '/pdf', formData, { responseType: 'blob' });
  }

  baixarArquivo(id: number): Observable<any> {
    return this.http.get<any>(API_URL + "/download/" + id);
  }


  listarTodos(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<AlvaraPaginator>(API_URL + "?" + params.toString());
  }


  listarTodosPorNome(page: number, size: number, nome: string): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('nome', nome)
    return this.http.get<AlvaraPaginator>(API_URL + "/listarpornome?" + params.toString());
  }

  listarVencidos(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(API_URL + "/vencidos?" + params.toString());
  }




  listarVencerEmAte60Dias(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(API_URL + "/vencerate60dias?" + params.toString());
  }

  listarDocumentosSemInfo(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(API_URL + "/seminfo?" + params.toString());
  }

  listarVencerApos60Dias(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(API_URL + "/vencerapos60dias?" + params.toString());
  }

  obterArquivoPorId(id: number): Observable<Alvara> {
    return this.http.get<Alvara>(API_URL + "/" + id);
  }


  atualizarArquivoPorId(alvara: Alvara): Observable<any> {
    return this.http.put<any>(API_URL + "/atualizar", alvara);
  }

  obterListaTipoDoc(): Observable<any> {
    return this.http.get<Alvara>(API_URL + "/tipodocumento");
  }

  //-------------------------------------

  totalArquivos(): Observable<number> {
    return this.http.get<number>(API_URL + "/totalarquivos");
  }

  totalArquivosVencidos(): Observable<number> {
    return this.http.get<number>(API_URL + "/totalvencidos");
  }

  totalArquivosVencerEm60Dias(): Observable<number> {
    return this.http.get<number>(API_URL + "/totalvencerem60dias");
  }

  totalArquivosSemInformacoes(): Observable<number> {
    return this.http.get<number>(API_URL + "/totalseminformacoes");
  }

  totalArquivosVencerApos60Dias(): Observable<number> {
    return this.http.get<number>(API_URL + "/totalvencerapos60dias");
  }


}
