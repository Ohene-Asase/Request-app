import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'
import { Type } from '../Type';






@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.scss']
})
export class BookedComponent implements OnInit {
  disableSelect = new FormControl(false);

  public booked = [];
  public drivers = [];
  public softDrivers = [];

  toggle = true;
  status = 'pending';
  spinner = true;
  Matdata: MatTableDataSource<any>

  trippy = true;
  trip = 'ongoing'



  displayedColumns: string[] = ['Name', 'Location', 'Reason', 'Number', 'Date Requested', 'Assign Driver', 'approve', 'reject']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private _dataservice: DataService

  ) { }

  book: FormGroup = new FormGroup({
    ongoing: new FormControl(''),
    endTrip: new FormControl(''),
    approved: new FormControl('')

  });

  ngOnInit() {

   
  
    
    this._dataservice.getHis()
      .subscribe(
        (data:any) => {
        this.spinner = false;
        this.booked = data.sort((a,b) =>b.id-a.id);
           
        console.log(data);
        console.log(data[0].id);
     localStorage.setItem('column_id', data[0].id)


        this.Matdata = new MatTableDataSource(this.booked)
        this.Matdata.paginator = this.paginator
       
        
        this._dataservice.getDrivers()
          
          .subscribe(data => {
            this.drivers = data;
            this.Matdata.data.forEach((res: any) => {
              res.drivers = this.drivers;
            
            });


          });
      })
    

    
  }

  approve(driverId) {

  if (!driverId) { return; }

   let hr_id = localStorage.getItem('id')
    let data = [driverId,hr_id];
    let parsed= {
      "driver_id": data[0],
      "approved_by": data[1]
    }
    let lastData = parsed;
    console.log(lastData)

   this._dataservice.approved(lastData)
   .subscribe(
     (res: any) =>{
       console.log(res)
     }
   )

  
    
    
  
  
  
  }


  reject() {
   
    let Hr_id = localStorage.getItem('id')
    let data = Hr_id
    let parsed = {"approved_by": data};
    let finalData = parsed;
    console.log(finalData)
  
    
    this._dataservice.reject(finalData)
    .subscribe(
      (res: any) =>{

        console.log(res)
      }
    )
    
    
   
  
      }

  

    
  }

