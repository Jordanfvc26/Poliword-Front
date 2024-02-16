import { Component } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { UserLoginI } from '../../auth/interfaces/login';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    SpinnerComponent,
    FontAwesomeModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  //Variables
  spinnerStatus: boolean = false;
  infoUser: UserLoginI = {} as UserLoginI;

  //constructor
  constructor(
  ){}

  //ngOnInit
  ngOnInit(){
    this.spinnerStatus = true;
    this.infoUser = JSON.parse(sessionStorage.getItem('infoUser') || '{}');
    console.log(this.infoUser);
  }

  //Icons to use
  iconMyProfile = iconos.faUserAlt;
  iconVerified = iconos.faCircleCheck;
  iconInformation = iconos.faList;
}
