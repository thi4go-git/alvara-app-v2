import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alvara } from '../modulos/alvara/alvara';
import { AlvaraPaginator } from '../modulos/alvara/alvaraPaginator';



@Injectable({ providedIn: 'root' })
export class AlvaraService {

  apiAlvara: string = environment.apiUrl + '/api/alvara';

  constructor(private http: HttpClient) { }

  uploadPdf(formData: FormData): Observable<any> {
    return this.http.post(this.apiAlvara + '/pdf', formData, { responseType: 'blob' });
  }

  baixarArquivo(id: number): Observable<any> {
    return this.http.get<any>(this.apiAlvara  + "/download/" + id);
  }


  listarTodos(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<AlvaraPaginator>(this.apiAlvara  + "?" + params.toString());
  }


  listarTodosPorNome(page: number, size: number, nome: string): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('nome', nome)
    return this.http.get<AlvaraPaginator>(this.apiAlvara  + "/listarpornome?" + params.toString());
  }

  listarVencidos(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiAlvara  + "/vencidos?" + params.toString());
  }


  listarVencerEmAte60Dias(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiAlvara  + "/vencerate60dias?" + params.toString());
  }

  listarDocumentosSemInfo(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiAlvara  + "/seminfo?" + params.toString());
  }

  listarVencerApos60Dias(page: number, size: number): Observable<AlvaraPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<any>(this.apiAlvara  + "/vencerapos60dias?" + params.toString());
  }

  obterArquivoPorId(id: number): Observable<Alvara> {
    return this.http.get<Alvara>(this.apiAlvara  + "/" + id);
  }


  atualizarArquivoPorId(alvara: Alvara): Observable<any> {
    return this.http.put<any>(this.apiAlvara  + "/atualizar", alvara);
  }

  obterListaTipoDoc(): Observable<any> {
    return this.http.get<Alvara>(this.apiAlvara  + "/tipodocumento");
  }

  //-------------------------------------

  totalArquivos(): Observable<number> {
    return this.http.get<number>(this.apiAlvara  + "/totalarquivos");
  }

  totalArquivosVencidos(): Observable<number> {
    return this.http.get<number>(this.apiAlvara  + "/totalvencidos");
  }

  totalArquivosVencerEm60Dias(): Observable<number> {
    return this.http.get<number>(this.apiAlvara  + "/totalvencerem60dias");
  }

  totalArquivosSemInformacoes(): Observable<number> {
    return this.http.get<number>(this.apiAlvara  + "/totalseminformacoes");
  }

  totalArquivosVencerApos60Dias(): Observable<number> {
    return this.http.get<number>(this.apiAlvara  + "/totalvencerapos60dias");
  }


}
