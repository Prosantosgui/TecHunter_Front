import { Component, Inject, inject } from '@angular/core';
import { PositionI } from '../../interface/PositionI';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PositionDialogComponent } from '../../components/dialogs/position-dialog/position-dialog.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  #dialog = inject(MatDialog);

  public logoImgPath = "../../assets/img/logo3_nobg.png"
  public logoImgAlt = "Imagem logotipo escrito TECHUNTER"
  public menuButtonProfilePath = "../../assets/icon/profile-round.svg"
  public menuButtonExitPath = "../../assets/icon/exit.svg"

  public positions_list: Array<PositionI> = [
    {
      "id": 1,
      "type": "Desenvolvedor Java",
      "workDuration": "Tempo integral",
      "description": "Lorem ipsum dolor sit amet. Id totam accusamus sed internos ipsum qui minima Lorem ipsum dolor sit amet. Id totam accusamus sed internos ipsum qui minima  Lorem ipsum dolor sit amet. Id totam accusamus sed internos ipsum qui minima  Lorem ipsum dolor sit amet. Id totam accusamus sed internos ipsum qui minima   ",
      "stacks": [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Docker",
        "PostgreSQL",
        "Postman",
        "Docker",
        "Microsserviços",
        "Microsserviços",
        "Microsserviços",
        "Microsserviços",
        "Postman"

      ],
      "employmentType": "CLT",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Brasil",
      "state": "São Paulo",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "OPEN"
    },
    {
      "id": 2,
      "type": "Java Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "California",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "OPEN"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    },
    {
      "id": 1,
      "type": "Desenvolvedor Java",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "CLT",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Brasil",
      "state": "São Paulo",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "OPEN"
    },
    {
      "id": 2,
      "type": "Java Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Docker",
        "PostgreSQL",
        "Postman",
        "Microsserviços"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "California",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "OPEN"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot",
        "AWS",
        "Azure"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    },
    {
      "id": 3,
      "type": "C# Developer",
      "workDuration": "Tempo integral",
      "description": "Descrição da position",
      "stacks": [
        "Java",
        "Spring Boot"
      ],
      "employmentType": "PJ",
      "benefits": [
        "Plano de saúde",
        "Vale-refeição"
      ],
      "salaryRanges": [
        "5000",
        "6000"
      ],
      "requiredEducation": "Superior completo",
      "country": "Estados Unidos",
      "state": "New York",
      "date": "2024-03-09T16:30:17.384532Z",
      "positionStatus": "CLOSED"
    }
  ];

  openDialog(position: PositionI): void{
    const dialogRef = this.#dialog.open(PositionDialogComponent, {
      data: position,
      minWidth: '650px',
      maxWidth: '900px',
    });

  }
}
