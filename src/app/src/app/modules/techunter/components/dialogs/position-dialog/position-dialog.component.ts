import { DatePipe } from '@angular/common';
import { Component, Inject, signal, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PositionI } from '../../../interface/PositionI';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-position-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatTooltip,
    DatePipe
  ]
    ,
  templateUrl: './position-dialog.component.html',
  styleUrl: './position-dialog.component.scss'
})
export class PositionDialogComponent{

  public isPositionOwner = signal(false)
  public isCandidate = signal(false)
  public noPreviousApplication = signal(false)

  constructor(
    public dialogRef: MatDialogRef<PositionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PositionI,
  ) {}

  ngOnInit(): void {
    var user = localStorage.getItem("UserToken");
    console.log(user)
  }

  onCloseClick(): void{
    this.dialogRef.close();
  }

  submit_application(): void{
    alert("Candidatura enviada! Boa sorte!")
  }
}
