import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource, MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material';
import { DeformComponent } from '../deform/deform.component';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
 
  searchKey:string;
 public drivers= [];
 isClicked = false;
 spinner= true;

 Dab: MatTableDataSource<any>
 
displayedColumns: string[] = [ 'id','name', 'contact',  'address', 'actions'];

constructor(private _dataservice: DataService,
            private dialog: MatDialog) { 
 
}

 

ngOnInit() {
   
  this._dataservice.getDrivers()
  .subscribe(data => {
    this.spinner = false;
    this.drivers = data;
    
    this.Dab =  new MatTableDataSource(this.drivers);
    // console.log(this.drivers);
   }
    
   )
}

 onClear(){
   this.searchKey="";
  this.applyFilter();

 }
 
 applyFilter(){
  this.Dab.filter=this.searchKey.trim().toLowerCase();
     
 }

 OnCreate(){
   const dialogConfig =  new MatDialogConfig();
   dialogConfig.disableClose =  true;
   dialogConfig.autoFocus = true;
   dialogConfig.width= "50%";

   this.dialog.open(DeformComponent, dialogConfig);
 }





 
}

