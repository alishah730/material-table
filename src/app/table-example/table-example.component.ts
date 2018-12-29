import { Observable } from 'rxjs';
import { TableDataService } from './../services/table-data.service';
import { Component, OnInit, ViewChild, Predicate } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PeriodicElement } from './periodicElement';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  // dataSource = new MatTableDataSource(this.tableDataService);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private tableDataService: TableDataService ) {}

  ngOnInit() {
     this.tableDataService.getTableData()
     .subscribe(data => {
       this.dataSource.data = data;
     });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
