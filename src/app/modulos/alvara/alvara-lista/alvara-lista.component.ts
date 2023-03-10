import { Component, OnInit } from '@angular/core';
import { AlvaraService } from 'src/app/servicos/alvara.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alvara } from '../alvara';
import { PageEvent } from '@angular/material/paginator';
import { CnpjFormatPipe } from 'src/app/pipes/cnpj-format.pipe';


@Component({
  selector: 'app-alvara-lista',
  templateUrl: './alvara-lista.component.html',
  styleUrls: ['./alvara-lista.component.css'],
  template: '{{ cnpj | cnpjFormat }}'
})
export class AlvaraListaComponent implements OnInit {

  mostraProgresso: boolean = false;
  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [10];
  qtdeRegistros: number = 0;
  nome: string = "";
  tipoConsulta: string = '';
  listaAlvaras: Alvara[] = [];

  pageEv: PageEvent | undefined;

  colunas = ['id', 'tipoDoc', 'nomeArquivo',
    'numeroAlvara', 'nomeEmpresa',
    'cnpjEmpresa', 'dataEmissao', 'dataVencimento', 'expira', 'pdf'];

  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro => {

      if (parametro && parametro['tipoConsulta'] != undefined) {
        console.log("listarPersonalizado");
        this.listarPersonalizado();
      } else {
        console.log("listarArquivos");
        this.listarArquivos();
      }
    });
  }


  listarArquivos() {
    this.mostraProgresso = true;
    this.service.listarTodos(this.pagina, this.tamanho)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
          this.qtdeRegistros = this.listaAlvaras.length;
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Lista Vazia!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
            duration: 2000
          });
        }
      });
  }


  listarPersonalizado() {
    this.activatedRoute.params.subscribe(parametro => {
      let consultaParam = parametro['tipoConsulta'];
      if (parametro && consultaParam != undefined) {
        if (consultaParam == 'totalVencidos') {
          this.listarVencidos();
        } else {
          if (consultaParam == 'venceEm60dias') {
            this.listarVencerEmAte60Dias();
          } else {
            if (consultaParam == 'totaDocumentosSemInfo') {
              this.listarDocumentosSemInfo();
            } else {
              if (consultaParam == 'venceApos60dias') {
                this.listarVencerApos60Dias();
              }
            }
          }
        }
      }
    });
  }


  listarVencidos() {
    this.mostraProgresso = true;


    this.service.listarVencidos(this.pagina, this.tamanho)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
          this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
          this.qtdeRegistros = this.listaAlvaras.length;
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Lista Vazia!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (responseError) => {
          console.log(responseError);
          this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
            duration: 2000
          });
        }
      });
  }


  listarVencerEmAte60Dias() {
    this.mostraProgresso = true;


    this.service.listarVencerEmAte60Dias(this.pagina, this.tamanho)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
          this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
          this.qtdeRegistros = this.listaAlvaras.length;
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Lista Vazia!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
            duration: 2000
          });
        }
      });

  }

  listarDocumentosSemInfo() {
    this.mostraProgresso = true;

    this.service.listarDocumentosSemInfo(this.pagina, this.tamanho)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
          this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
          this.qtdeRegistros = this.listaAlvaras.length;
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Lista Vazia!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
            duration: 2000
          });
        }
      });

  }

  listarVencerApos60Dias() {
    this.mostraProgresso = true;

    this.service.listarVencerApos60Dias(this.pagina, this.tamanho)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
          this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
          this.qtdeRegistros = this.listaAlvaras.length;
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Lista Vazia!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.snackBar.open("Erro ao Obter Lista!", "ERRO!", {
            duration: 2000
          });
        }
      });

  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.listarArquivos();
  }

  baixar(alvara: Alvara) {
    this.mostraProgresso = true;

    this.service.obterArquivoPorId(alvara.id)
      .subscribe({
        next: (resposta) => {
          var sampleArr = this.base64ToArrayBuffer(resposta.pdf);
          this.saveByteArray("ARQUIVO.pdf", sampleArr);
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Arquivo BAIXADO!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.snackBar.open("Erro ao BAIXAR Arquivo!", "ERRO!", {
            duration: 2000
          });
        }
      });

  }

  base64ToArrayBuffer(base64: any) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  saveByteArray(reportName: any, byte: any) {
    var blob = new Blob([byte], { type: "application/pdf" });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  }

  consultarAlvaraPorNome() {
    this.mostraProgresso = true;

    this.service.listarTodosPorNome(this.pagina, this.tamanho, this.nome)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
          this.listaAlvaras.sort((a, b) => (a.expira < b.expira) ? -1 : 1);
          this.qtdeRegistros = this.listaAlvaras.length;
          if (this.listaAlvaras.length == 0) {
            this.snackBar.open("Lista Vazia!", "Info!", {
              duration: 2000
            });
          }
          this.mostraProgresso = false;
        },
        error: (errorResponse) => {
          this.snackBar.open("Erro ao Listar por nome!", "Erro!", {
            duration: 2000
          });
        }
      });

    this.mostraProgresso = false;
  }

}
