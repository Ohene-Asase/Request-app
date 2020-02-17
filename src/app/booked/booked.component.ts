import { Component, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {FormControl,FormGroup, FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs'
import {Type} from '../Type';

const typeColumn = ['Emma', 'Dave', 'Jullian', 'Stephen'];




@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.scss']
})
export class BookedComponent implements OnInit {
  disableSelect = new FormControl(false);
 
  public booked = [];
  
 toggle = true;
 status = 'pending';
 spinner= true;
Can: MatTableDataSource<any>

trippy= true;
trip= 'ongoing'

  displayedColumns: string[] = ['Name', 'Location', 'Reason', 'Number', 'Date Requested','Assign Driver', 'approve','end']
  @ViewChild(MatPaginator )  paginator: MatPaginator;
  constructor(private _dataservice: DataService
    
    ) { }

    book:FormGroup = new FormGroup({
    ongoing: new FormControl(''),
    endTrip: new FormControl(''),
    approved: new FormControl('')

    });

  ngOnInit() {
    this._dataservice.getHistory()
     . subscribe( data => {
       this.spinner = false;
       this.booked = data;
        this.Can = new  MatTableDataSource(this.booked)
        this.Can.paginator = this.paginator
     }

     )
    
  }
  
  
  okay(){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'pending' : 'confirmed';
  }
    
 
}
