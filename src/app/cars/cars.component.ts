import { Component, OnInit } from '@angular/core';
import {AddComponent} from '../add/add.component';
import {MatTableDataSource, MatDialogModule, MatDialog, MatDialogConfig} from '@angular/material'
import { DataService } from '../data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
public car = [];
spinner= true;
dab: MatTableDataSource<any>

displayedColumns: string[] = ['car_brand', 'car_model', 'car_no', 'Assign Driver'];


  constructor(private dialog: MatDialog,
              private _dataservice: DataService
    
    ) { }

  ngOnInit() {
    this._dataservice.getCars()
     .subscribe( data =>{
       this.spinner = false;
       this.car = data;
        this.dab = new MatTableDataSource(this.car);
    

     })
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus  = true;
    dialogConfig.width = "50%";


   this.dialog.open(AddComponent, dialogConfig);
  }


}
