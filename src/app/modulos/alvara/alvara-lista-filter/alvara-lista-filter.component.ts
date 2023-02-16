import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlvaraService } from 'src/app/servicos/alvara.service';
import { Alvara } from '../alvara';




@Component({
  selector: 'app-alvara-lista-filter',
  templateUrl: './alvara-lista-filter.component.html',
  styleUrls: ['./alvara-lista-filter.component.css']
})
export class AlvaraListaFilterComponent implements AfterViewInit {


  displayedColumns: string[] = ['id', 'tipo_doc', 'nome_arquivo',
    'numero_alvara', 'nome_empresa',
    'cnpj_empresa', 'data_emissao', 'data_vencimento', 'expira', 'pdf'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  dataSource: MatTableDataSource<Alvara>;

  listaAlvaras: Alvara[] = [];

  constructor(
    private service: AlvaraService,
  ) {
    this.listarAlvaras();
    const alvaras = Array.from(this.listaAlvaras);
    this.dataSource = new MatTableDataSource(alvaras);
  }


  ngAfterViewInit() {

  }




  listarAlvaras() {
    this.service.listarTodos(0, 10)
      .subscribe({
        next: (resposta) => {
          this.listaAlvaras = resposta.content;
          console.log(this.listaAlvaras);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
