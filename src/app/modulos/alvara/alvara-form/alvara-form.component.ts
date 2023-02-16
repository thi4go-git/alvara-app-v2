import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlvaraService } from 'src/app/servicos/alvara.service';
import { Alvara } from '../alvara';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';




@Component({
  selector: 'app-alvara-form',
  templateUrl: './alvara-form.component.html',
  styleUrls: ['./alvara-form.component.css']
})
export class AlvaraFormComponent implements OnInit {

  id: number = 0;
  alvara: Alvara;
  tipo_doc: any[] = [];
  listaErros: string[] = [];


  constructor(
    private router: Router,
    private service: AlvaraService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar

  ) {
    this.alvara = new Alvara();
  }

  ngOnInit(): void {
    this.definirComboBox();
    this.listarPorId();
  }

  listarPorId() {

    this.activatedRoute.params.subscribe(parametro => {
      if (parametro && parametro['id'] != undefined) {

        this.id = parametro['id'];

        this.service
          .obterArquivoPorId(this.id).subscribe({
            next: (resposta) => {
              this.alvara = resposta;
            },
            error: (errorResponse) => {
              console.log(errorResponse);
            }
          });

      }
    });

  }

  definirComboBox() {
    this.service
      .obterListaTipoDoc()
      .subscribe({
        next: (resposta) => {
          this.tipo_doc = resposta;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      });
  }

  onSubmit() {
    console.log(this.alvara);
    this.atualizar();
  }

  atualizar() {



    this.service
      .atualizarArquivoPorId(this.alvara)
      .subscribe({
        next: (resposta) => {

          this.snackBar.open("SUCESSO Ao Atualizar Informações!", "SUCESSO!", {
            duration: 2000
          });

          this.router.navigate(['/alvara/lista'])

        },
        error: (errorResponse) => {

          this.snackBar.open("ERRO Ao Atualizar Informações!", "ERRO!", {
            duration: 2000
          });
          this.listaErros = errorResponse.error.erros

        }
      });
  }

  voltarLista() {
    this.router.navigate(['/alvara/lista/filter']);
  }

}
