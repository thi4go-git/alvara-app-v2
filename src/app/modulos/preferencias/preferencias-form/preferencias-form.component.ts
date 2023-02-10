import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlvaraService } from 'src/app/servicos/alvara.service';

@Component({
  selector: 'app-preferencias-form',
  templateUrl: './preferencias-form.component.html',
  styleUrls: ['./preferencias-form.component.css']
})
export class PreferenciasFormComponent {

  constructor(
    private router: Router,
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }

  contSucessUp: number = 0;
  mostraProgresso: boolean = false;
  listaArquivos: File[] = [];
  percentProgress: number = 0;
  descProgresso: string = "";


  onFileSelected(event: any) {
    this.listaArquivos = event.target.files;
    for (let cont = 0; cont < this.listaArquivos.length; cont++) {
      console.log(this.listaArquivos[cont].name);
    }

  }


  onUpload() {
    if (this.listaArquivos) {
      this.mostraProgresso = true;
      for (let index = 0; index < this.listaArquivos.length; index++) {
        const pdf = this.listaArquivos[index];
        const formData: FormData = new FormData();
        formData.append("pdf", pdf);
        this.upload(formData);
      }
    } else {
      this.snackBar.open("Selecione os Arquivos para UPLOAD!", "INFO!", {
        duration: 3000
      });
    }
  }

  upload(formData: FormData) {
    this.service
      .uploadPdf(formData)
      .subscribe({
        next: (response) => {
          this.contSucessUp = this.contSucessUp + 1;
          this.percentProgress = (this.contSucessUp / this.listaArquivos.length) * 100;
          this.descProgresso = "Aguarde, processando ( " + this.contSucessUp + " de " + this.listaArquivos.length + " ) " +
            " - " + (this.percentProgress).toFixed(2) + "%";
          if (this.contSucessUp == this.listaArquivos.length) {
            this.mostraProgresso = false;
            this.listaArquivos = [];
            this.snackBar.open("Processo Concluído! (" + this.contSucessUp + ") Arquivos processados com Sucesso!", "Sucesso!", {
              duration: 4000
            });
            this.contSucessUp = 0;
            this.percentProgress = 0;
          }
        },
        error: (errorResponse) => {
          console.log("ERRO");
          console.log(errorResponse);
          this.snackBar.open("Erro ao Fazer upload!", "ERRO!", {
            duration: 3000
          });
        }
      });

  }

}
