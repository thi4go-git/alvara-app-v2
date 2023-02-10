import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modulos/usuario/usuario';
import { UsuarioDTO } from '../modulos/usuario/usuarioDTO';
import { UsuarioPaginator } from '../modulos/usuario/usuarioPaginator';


const API_URL = 'http://cloudtecnologia.dynns.com:8081/api/usuarios';


@Injectable({ providedIn: 'root' })
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarTodos(page: number, size: number): Observable<UsuarioPaginator> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
    return this.http.get<UsuarioPaginator>(API_URL + "?" + params.toString());
  }

  salvarUsuario(usuarioDt: UsuarioDTO): Observable<Usuario> {
    return this.http.post<Usuario>(API_URL + '/novo', usuarioDt);
  }

  uploadFoto(id: number, formData: FormData): Observable<any> {
    return this.http.put(API_URL + '/foto/' + id, formData, { responseType: 'blob' });
  }

  ativarUsuario(id: number): Observable<any> {
    return this.http.patch(API_URL + "/ativar/" + id, null);
  }

  ativarUsuarioAdm(id: number): Observable<any> {
    return this.http.patch(API_URL + "/ativardesativaradm/" + id, null);
  }

  deletarporId(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + "/delete/" + id);
  }


}
