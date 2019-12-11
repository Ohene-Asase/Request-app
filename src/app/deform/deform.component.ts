import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material'
@Component({
  selector: 'app-deform',
  templateUrl: './deform.component.html',
  styleUrls: ['./deform.component.scss']
})
export class DeformComponent implements OnInit {
 

  constructor(public dialogRef: MatDialogRef<DeformComponent>) { }

  ngOnInit() {
  }
    onClose(){
      this.dialogRef.close();
    }
}
