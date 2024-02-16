import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider-videos',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './slider-videos.component.html',
  styleUrl: './slider-videos.component.css'
})
export class SliderVideosComponent {

  //Vector de prueba
  @Input() carouselExample: string = "";
  @Input() arrayVideosDetail1: any[] = []
  @Input() arrayVideosDetail2: any[] = [];
  @Input() location: string = "";
  @Input() videoTitle: string = "Videos"
  userRole: string = "--";

  //Constructor
  constructor(
    private router: Router
  ) { }

  //ngOnInit
  ngOnInit() {
    this.userRole = sessionStorage.getItem("role")!;
  }

  //Método que redirige al componente de ver reproductor de video
  goToVideoDetail(video: any) {
  }

  /*Icons to use*/
  iconVideo = iconos.faVideo;
}
