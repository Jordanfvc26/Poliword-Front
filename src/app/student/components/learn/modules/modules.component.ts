import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from '../../../../shared-components/spinner/spinner.component';
import { SweetAlertsConfirm } from '../../../../shared-components/alerts/confirm-alerts.component';
import { ToastAlertsService } from '../../../../shared-components/services/toast-alerts.service';
import { ModulesService } from '../../../services/modules.service';
import { SubscribedModulesService } from '../../../services/subscribed-modules.service';
import { ApiResponseAllModulesI } from '../../../interfaces/modules';
import { ApiResponseSubscribedModulesI } from '../../../interfaces/subscribed-modules';
import { environment } from '../../../../../environments/environment';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { SubscribeToModuleComponent } from '../../modals/subscribe-to-module/subscribe-to-module.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule,
    SpinnerComponent,
    SubscribeToModuleComponent
  ],
  providers: [
    ModulesService,
    SubscribedModulesService,
    SweetAlertsConfirm
  ],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {
  //Variables
  arrayModules: ApiResponseAllModulesI = {} as ApiResponseAllModulesI;
  spinnerStatus: boolean = false;
  arrayPaginator: number[] = [];
  totalPage: number = environment.TOTAL_PAGES;
  currentPage: number = 1;
  itemsForPage: number = environment.ITEMS_FOR_PAGE;
  orderBy: string = environment.ORDER_BY;
  modeOrder: string = environment.MODE_ORDER;
  statusFilter: string = "all";

  //Constructor
  constructor(
    private allModulesService: ModulesService,
    private modulesSuscribedStudent: SubscribedModulesService,
    private toastr: ToastAlertsService,
    private sweetAlerts: SweetAlertsConfirm,
    private modal: NgbModal
  ) { }

  //ngOnInit()
  ngOnInit() {
    this.spinnerStatus = true;
    this.getAllModules(this.currentPage, this.itemsForPage, this.orderBy, this.modeOrder);
  }

  /*Método que obtiene los headers*/
  getHeaders() {
    let headers = new Map();
    headers.set("token", sessionStorage.getItem("token"));
    headers.set("typeUser", sessionStorage.getItem("typeUser"));
    return headers;
  }

  //Método que consume el servicio para obtener todos los módulos de la plataforma
  getAllModules(page: number, limit: number, sort: string, order: string) {
    this.spinnerStatus = false;
    this.allModulesService.getAllModulesStudent(this.getHeaders(), page, limit, sort, order)
      .subscribe({
        next: (data: ApiResponseAllModulesI) => {
          this.arrayModules = data;
          this.totalPage = data.details.total_page;
          this.setPaginator();
          this.spinnerStatus = true;
        },
        error: (error) => {
          this.spinnerStatus = true;
          this.toastr.showToastError("Error", "No se pudo cargar el listado de módulos generales");
        }
      });
  }

  //Método que consume el servicio para obtener los módulos a los que el estudiante está suscrito
  getModulesSubscribed(page: number, limit: number, sort: string, order: string) {
    this.spinnerStatus = false;
    this.modulesSuscribedStudent.getModulesSubscribedStudent(this.getHeaders(), page, limit, sort, order)
      .subscribe({
        next: (data: ApiResponseSubscribedModulesI) => {
          if (Object.keys(data).length != 0) {
            this.arrayModules = data;
          }
          else {
            this.toastr.showToastInformation("Información", "Actualmente no te encuentras suscrito a ningún módulo");
          }
          this.totalPage = data.details.total_page;
          this.setPaginator();
          this.spinnerStatus = true;
        },
        error: (error) => {
          this.spinnerStatus = true;
          this.toastr.showToastError("Error", "No se pudo cargar el listado de módulos suscritos");
        }
      });
  }

  //Método que cambia el filtro entre todos lo módulos y los módulos suscritos
  onFilterChange(event: any) {
    const value = event.target.value;
    if (value === "subscribed") {
      this.arrayModules = {} as ApiResponseSubscribedModulesI;
      this.statusFilter = "subscribed";
      this.getModulesSubscribed(1, this.itemsForPage, this.orderBy, this.modeOrder);
    }
    else if (value === "all") {
      this.arrayModules = {} as ApiResponseAllModulesI;
      this.statusFilter = "all";
      this.getAllModules(1, this.itemsForPage, this.orderBy, this.modeOrder);
    }
  }

  //Para la paginación
  setPaginator() {
    this.arrayPaginator = [];
    for (let i = 0; i < this.totalPage; i++) {
      this.arrayPaginator.push(i + 1);
    }
  }

  // Método para manejar el cambio de página
  pageChanged(page: number) {
    this.currentPage = page;
    if (this.statusFilter === "subscribed") 
      this.getModulesSubscribed(this.currentPage, this.itemsForPage, this.orderBy, this.modeOrder);
    else if (this.statusFilter === "all") 
      this.getAllModules(this.currentPage, this.itemsForPage, this.orderBy, this.modeOrder);
  }

  //Método que muestra un alert para preguntar si desea practiar en el módulo
  showAlertPractice(nameModule: string) {
    this.sweetAlerts.alertConfirmCancelQuestion("Nueva práctica", "¿Deseas practicar ahora en el módulo \"" + nameModule + "\"?").then(respuesta => {
      if (respuesta.value == true) {
        this.spinnerStatus = false;
        //Redirigir al componente de teoría
      }
    });
  }

  //Método que muestra un alert para preguntar si desea suscribirse a un curso
  showAlertSuscribe(nameModule: string, subscribeToModule: any) {
    this.sweetAlerts.alertConfirmCancelInformation("Módulo disponible", "Actualmente no te encuestras suscrito en el módulo de \"" + nameModule + "\" ¿Deseas suscribirte ahora?").then(respuesta => {
      if (respuesta.value == true) {
        this.openModalSubscribeToModule(subscribeToModule);
      }
    });
  }

  // Método que abre un modal para suscribirse a un módulo
  openModalSubscribeToModule(subscribeToModule: any) {
    this.modal.open(subscribeToModule, { size: 'md', centered: true });
  }

  //Icons to use
  iconModules = iconos.faCubes;
  iconAdd = iconos.faPlusCircle;
  iconTitle = iconos.faCube;
  iconBack = iconos.faArrowLeft;
  iconNext = iconos.faArrowRight;
}
