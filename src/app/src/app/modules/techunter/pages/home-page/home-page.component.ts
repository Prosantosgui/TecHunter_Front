import { Component, Inject, OnInit, inject } from '@angular/core';
import { PositionI } from '../../interface/PositionI';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PositionDialogComponent } from '../../components/dialogs/position-dialog/position-dialog.component';
import { PositionService } from 'app/services/position/position.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  #dialog = inject(MatDialog);
  #positionService = inject(PositionService)

  public logoImgPath = "../../assets/img/logo3_nobg.png"
  public logoImgAlt = "Imagem logotipo escrito TECHUNTER"
  public menuButtonProfilePath = "../../assets/icon/profile-round.svg"
  public menuButtonExitPath = "../../assets/icon/exit.svg"


  public positions_list = this.#positionService.getListTask;


  ngOnInit(): void {
    this.#positionService.httpGetPositions$().subscribe()
  }

  openDialog(position: PositionI): void{
    const dialogRef = this.#dialog.open(PositionDialogComponent, {
      data: position,
      minWidth: '650px',
      maxWidth: '900px',
    });

  }
}
