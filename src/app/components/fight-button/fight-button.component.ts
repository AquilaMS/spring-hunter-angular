import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-fight-button',
  templateUrl: './fight-button.component.html',
  styleUrls: ['./fight-button.component.css']
})
export class FightButtonComponent {
  constructor(private dialogRef : MatDialog){
    this.openDialog();
  }
  openDialog(){
    this.dialogRef.open(PopUpComponent);
  }
}
