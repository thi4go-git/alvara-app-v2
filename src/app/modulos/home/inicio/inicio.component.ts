import { Component } from '@angular/core';
import { AlvaraService } from 'src/app/servicos/alvara.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {


  totalDocumentos = 0;
  totalVencidos = 0;
  venceEm60dias = 0;
  venceApos60dias = 0;
  totaDocumentosSemInfo = 0;
  tipoConsulta: string = '';

  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { this.definirDashboard() }


  definirDashboard() {
    this.definirTotalArquivos();
    this.qtdeVencerApos60Dias();
    this.definirVencerEm60Dias();
    this.definirSemInformacoes();
    this.definirVencidos();
  }

  definirTotalArquivos() {

    this.service.totalArquivos()
      .subscribe({
        next: (response) => {
          this.totalDocumentos = response;
        },
        error: (errorResponse) => {
          this.snackBar.open("Erro ao Obter totalDocumentos!", "ERRO!", {
            duration: 2000
          });
          console.log(errorResponse);
        }
      });
  }

  definirVencidos() {

    this.service.totalArquivosVencidos()
      .subscribe({
        next: (response) => {
          this.totalVencidos = response;
        },
        error: (errorResponse) => {
          this.snackBar.open("Erro ao Obter totalVencidos!", "ERRO!", {
            duration: 2000
          });
          console.log(errorResponse);
        }
      });

  }

  definirVencerEm60Dias() {

    this.service.totalArquivosVencerEm60Dias()
      .subscribe({
        next: (response) => {
          this.venceEm60dias = response;
        },
        error: (errorResponse) => {
          this.snackBar.open("Erro ao Obter venceEm60dias!", "ERRO!", {
            duration: 2000
          });
          console.log(errorResponse);
        }
      });

  }

  qtdeVencerApos60Dias() {

    this.service.totalArquivosVencerApos60Dias()
      .subscribe({
        next: (response) => {
          this.venceApos60dias = response;
        },
        error: (errorResponse) => {
          this.snackBar.open("Erro ao Obter venceApos60dias!", "ERRO!", {
            duration: 2000
          });
          console.log(errorResponse);
        }
      });

  }

  definirSemInformacoes() {

    this.service.totalArquivosSemInformacoes()
      .subscribe({
        next: (response) => {
          this.totaDocumentosSemInfo = response;
        },
        error: (errorResponse) => {
          this.snackBar.open("Erro ao Obter totaDocumentosSemInfo!", "ERRO!", {
            duration: 2000
          });
          console.log(errorResponse);
        }
      });

  }

}
