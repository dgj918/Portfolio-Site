import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewHeadacheDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

export interface headache {
  Date: Date,
  Intensity: number, 
  Trigger: string,
  Medicine: string
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'new-headache-dialog.html',
})
export class DialogOverviewExampleDialog {
  headacheForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder) {
      this.headacheForm = this.fb.group({
        Date: new Date().toDateString(),
        Intensity: 0, 
        Trigger: '',
        Medicine: ''
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveData(animal: string){
    console.log(animal)
    this.dialogRef.close()
  }

}
