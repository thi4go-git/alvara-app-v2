import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlvaraService } from 'src/app/servicos/alvara.service';
import { Alvara } from '../alvara';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-alvara-lista-filter',
  templateUrl: './alvara-lista-filter.component.html',
  styleUrls: ['./alvara-lista-filter.component.css']
})
export class AlvaraListaFilterComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'tipo_doc', 'nome_arquivo',
    'numero_alvara', 'nome_empresa',
    'cnpj_empresa', 'data_emissao', 'data_vencimento', 'expira', 'pdf', 'edit'];

  listaAlvaras: Alvara[] = [];
  ELEMENT_DATA: Alvara[] = [];
  mostraProgresso: boolean = false;
  dataSource: MatTableDataSource<Alvara> = new MatTableDataSource;
  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [10];

  //
  selection = new SelectionModel<Alvara>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.listarArquivos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private service: AlvaraService,
    private snackBar: MatSnackBar
  ) { }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarArquivos() {
    this.service.listarTodos(this.pagina, this.tamanho)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          this.ELEMENT_DATA = this.listaAlvaras;
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.totalElementos = resposta.totalElements;
          this.pagina = resposta.number;
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      });
  }


  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.listarArquivos();
  }



  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Alvara): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
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



}


