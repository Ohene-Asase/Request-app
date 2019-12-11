import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  public history= [];
  spinner= true;
  Dab: MatTableDataSource<any>

   displayedColumns: string[] = ['Name', 'Location', 'Reason', 'Number', 'Date Requested'];
   @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this._dataservice.getHistory()
    .subscribe(data => {
      this.spinner= false;
      this.history = data;
      this.Dab = new MatTableDataSource(this.history)
      this.Dab.paginator = this.paginator

    }
        
    )
      
    }
  

}
