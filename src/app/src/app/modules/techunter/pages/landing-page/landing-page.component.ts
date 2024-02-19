import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  public logoImgPath = "../../assets/img/logo3_nobg.png"
  public logoImgAlt = "Imagem logotipo escrito TECHUNTER"
  public mainImgPath = "../../assets/img/hand-shake.jpg"
  public menuButtonPath = "../../assets/icon/hamburger-menu.svg"

  public isDesktop = false;

}
