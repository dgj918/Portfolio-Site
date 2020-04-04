import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HeadachesService } from '../services/headaches.service';

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
  @Output() headacheFormClosed = new EventEmitter

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNewHeadacheDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.headacheFormClosed.emit()
    });
  }

}

export interface headache {
  HeadAche_Date: string,
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
  headacheFormData: headache;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private headacheServ: HeadachesService) {
      this.headacheForm = this.fb.group({
        HA_Date: '',
        Intensity: 0, 
        Trigger: '',
        Medicine: ''
      })

    this.headacheFormData = {
      HeadAche_Date: '',
      Intensity: 0,
      Trigger: '',
      Medicine: ''
    }

    this.headacheForm.valueChanges.subscribe((formValues) =>{
      this.headacheFormData.HeadAche_Date = formValues.HA_Date
      this.headacheFormData.Intensity = formValues.Intensity
      this.headacheFormData.Trigger = formValues.Trigger
      this.headacheFormData.Medicine = formValues.Medicine
    })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveData(){
    this.headacheServ.postHeadache(this.headacheFormData).subscribe((data) => {
      this.dialogRef.close()
    })
  }

}
