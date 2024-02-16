import { Component, Output } from '@angular/core';
import { SliderVideosComponent } from '../../../../shared-components/slider-videos/slider-videos.component';

@Component({
  selector: 'app-list-videos-help',
  standalone: true,
  imports: [
    SliderVideosComponent
  ],
  templateUrl: './list-videos-help.component.html',
  styleUrl: './list-videos-help.component.css'
})
export class ListVideosHelpComponent {
  @Output() title1: string = "Videos de ayuda para módulo de tareas"
  @Output() title2: string = "Videos de ayuda para módulo de recursos"
  @Output() title3: string = "Videos de ayuda para módulo de pacientes"

  @Output() carouselExample1: string = "carouselExample1";
  @Output() carouselExample2: string = "carouselExample2";
  @Output() carouselExample3: string = "carouselExample3";

  /*Títulos y videos para módulo de tareas*/
  @Output() arrayVideosDetail1: any[] = [
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
  ];
  @Output() arrayVideosDetail2: any[] = [
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
  ];

  /*Títulos y videos para módulo de recursos*/
  @Output() arrayVideosDetail3: any[] = [
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
  ];
  @Output() arrayVideosDetail4: any[] = [
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
    {
      picture: "https://www.omiorumsadecv.com/wp-content/uploads/2020/08/manteniemto.jpg",
      title: "Video de prueba",
      url: "https://www.youtube.com",
      time: "1:08 minutos",
      descripcion: "Este es un video explicativo de prueba"
    },
  ];
}
