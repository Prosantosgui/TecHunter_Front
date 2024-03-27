import { MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LandingPageComponent } from './src/app/modules/techunter/pages/landing-page/landing-page.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent,HttpClientModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
}
)
export class AppComponent {
  title = 'techunter-front';
}
