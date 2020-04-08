import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HeadachesService } from '../services/headaches.service';

export interface DialogData {
  recordID: string;
  date_and_time: string;
  intensity: number;
  headache_trigger: string;
  medicine: string;

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

  openNewHeadacheDialog(headacheData): void {
    headacheData ? headacheData : null
    console.log(headacheData)

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: headacheData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.headacheFormClosed.emit()
    });
  }

}

export interface headache {
  recordID: string,
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
    @Inject(MAT_DIALOG_DATA) public headacheData: DialogData,
    private fb: FormBuilder,
    private headacheServ: HeadachesService) {
      if (this.headacheData == null) {
        this.headacheForm = this.fb.group({
          HA_Date: '',
          Intensity: 0, 
          Trigger: '',
          Medicine: ''
        })

        this.headacheFormData = {
          recordID: null,
          HeadAche_Date: '',
          Intensity: 0,
          Trigger: '',
          Medicine: ''
        }
      } else {
        this.headacheForm = this.fb.group({
          HA_Date: this.headacheData.date_and_time,
          Intensity: this.headacheData.intensity, 
          Trigger: this.headacheData.headache_trigger,
          Medicine: this.headacheData.medicine
        })

        this.headacheFormData = {
          recordID: this.headacheData.recordID,
          HeadAche_Date: this.headacheData.date_and_time,
          Intensity: this.headacheData.intensity,
          Trigger: this.headacheData.headache_trigger,
          Medicine: this.headacheData.medicine
        }
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
    if (!this.headacheFormData.recordID){ 
      this.headacheServ.logHeadache(this.headacheFormData).subscribe((data) => {
        this.dialogRef.close()
      })
    } else {
      this.headacheServ.updateHeadache(this.headacheData.recordID, this.headacheFormData).subscribe((data) => {
        this.dialogRef.close()
      })
    }
  }

  deleteData(){
    this.headacheServ.deleteData(this.headacheData.recordID).subscribe((Data) =>{
      this.dialogRef.close()
    })
  }

}
