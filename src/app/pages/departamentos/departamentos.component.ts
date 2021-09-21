import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Departamento } from 'src/app/_model/Departamento';
import { DepartamentosService } from 'src/app/_service/departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  ELEMENT_DATA: Departamento[] = [];
  displayedColumns: string[] = ['idDepartamento', 'nombre', 'getdetails'];
  dataSource = new MatTableDataSource<Departamento>(this.ELEMENT_DATA);
  isLoading = false;

  constructor(private service: DepartamentosService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getAllDepartamentos();
  }

  // tslint:disable-next-line: typedef
  public getAllDepartamentos(){
    let resp = this.service.departamentosreport();
    resp.subscribe(report => this.dataSource.data = report as Departamento[]);
  }

  // getRecordCiudades
  // tslint:disable-next-line: typedef
  getRecordCiudades(){
    alert('prueba');
  }

  // tslint:disable-next-line: typedef
  /*cargadatos(){
    this.isLoading = true;

    setTimeout(() => {
      this.dataSource = this.ELEMENT_DATA((item) => {
        console.log(Math.floor(item.weight));
        return Math.floor(item.weight) > 10;
      });
      this.isLoading = false;
    }, 2000);
  }
  */
}
