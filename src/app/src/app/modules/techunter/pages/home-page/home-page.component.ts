import { Component } from '@angular/core';
import { PositionI } from '../../interface/PositionI';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public logoImgPath = "../../assets/img/logo3_nobg.png"
  public logoImgAlt = "Imagem logotipo escrito TECHUNTER"
  public menuButtonProfilePath = "../../assets/icon/profile-round.svg"
  public menuButtonExitPath = "../../assets/icon/exit.svg"



  public positions_list: Array<PositionI> = [
    {
      "id": 1,
      "type": "Desenvolvedor Java",
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
}
