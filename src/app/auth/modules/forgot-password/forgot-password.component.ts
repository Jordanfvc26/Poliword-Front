import { ApiResponseForgotPasswordI } from './../../interfaces/forgot-password';
import { ForgotPasswordService } from './../../services/forgot-password.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastAlertsService } from '../../services/toast-alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import * as AOS from 'aos';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    ToastrModule
  ],
  providers: [
    ForgotPasswordService
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../login/login.component.css']
})
export class ForgotPasswordComponent {
  //Variables
  forgotPasswordForm!: FormGroup;

  //Constructor
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private forgotPasswordService: ForgotPasswordService,
    private toastr: ToastAlertsService
  ){}

  //ngOnInit()
  ngOnInit(){
    AOS.init();
    this.createForgotPasswordForm();
  }

  //Método que crea el formulario de registro de usuario
  createForgotPasswordForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.pattern(/^(?!.*([._-]{2,}))[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        ],
      ],
    });
  }

  //Método que consume el servicio para enviar correo de recuperación
  forgotPassword(){
    this.forgotPasswordService.sendEmailRecoveryPassword(this.forgotPasswordForm.value)
    .subscribe({
      next: (res: ApiResponseForgotPasswordI) => {
        if (res.status == "success") {
          this.toastr.showToastSuccess("Revise su correo electrónico", "Éxito")
          this.router.navigateByUrl("auth/login");
        }
      },
      error: (error: ApiResponseForgotPasswordI) => {
        this.toastr.showToastError("Error", error.message);
      }
    })
    
  }

  //Método que redirige al formulario de iniciar sesión
  goToLoginForm(){
    this.router.navigateByUrl("auth/login");
  }
}
