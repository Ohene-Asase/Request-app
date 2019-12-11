import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }
form:FormGroup = new FormGroup({
  destination: new FormControl('', Validators.required),
  date: new FormControl('',Validators.required),
  reason: new FormControl('', Validators.required),
  number: new FormControl ('' , Validators.required),
  time: new FormControl ('')
});


  ngOnInit() {
  }
     async schedule(formdata: any){
      console.log(formdata);
     }
}
