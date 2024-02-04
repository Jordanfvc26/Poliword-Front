import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlertsConfirm } from '../../../../shared-components/alerts/confirm-alerts.component';
import * as iconos from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theory',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  providers: [
    SweetAlertsConfirm
  ],
  templateUrl: './theory.component.html',
  styleUrl: './theory.component.css'
})
export class TheoryComponent {

  //constructor
  constructor(
    private router: Router,
    private sweetAlerts: SweetAlertsConfirm
  ){}

  //ngOnInit
  ngOnInit(){
  }

  //Método que ejecuta un alert para confirmar si desea abandonar la práctica
  leavePractice(){
    this.sweetAlerts.alertConfirmCancelQuestion("Abandonar práctica", "¿Estás seguro de abandonar tu práctica del módulo \"" +  + "\"?").then(respuesta => {
      if (respuesta.value == true) {
        this.router.navigateByUrl('student/home/learn/modules');
      }
    });
  }

  //Método que redirecciona a las actividades
  goToActivities(){
    this.router.navigateByUrl('student/home/activities');
  }

  //Icons to use
  iconExit = iconos.faXmark;
  iconNext = iconos.faArrowRight;
}
