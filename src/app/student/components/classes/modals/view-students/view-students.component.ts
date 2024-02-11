import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as iconos from '@fortawesome/free-solid-svg-icons';
import { SpinnerComponent } from '../../../../../shared-components/spinner/spinner.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatedByI } from '../../../../interfaces/modules';
import { ClassesService } from '../../../../services/classes.service';
import { MyClassComponent } from '../../my-class/my-class.component';
import { ApiResponseListsStudentsI } from '../../../../interfaces/classes';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { environment } from '../../../../../../environments/environment';
import { SweetAlertsConfirm } from '../../../../../shared-components/alerts/confirm-alerts.component';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [
    FontAwesomeModule,
    SpinnerComponent,
    MatPaginatorModule
  ],
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.css'
})
export class ViewStudentsComponent {

  //Variables
  static classID: number = 0;
  spinnerStatus: boolean = false;
  arrayStudents: CreatedByI[] = [];
  itemsForPage: number = environment.ITEMS_FOR_PAGE;
  initialPage: number = 0;
  finalPage: number = environment.ITEMS_FOR_PAGE;

  //Constructor
  constructor(
    public modal: NgbModal,
    private classesService: ClassesService,
    private classesComponent: MyClassComponent,
  ) { }

  //ngOnInit
  ngOnInit() {
    this.spinnerStatus = true;
    this.getStudents();
  }

  //Mètodo que consume el servicio para obtener el listado de estudiantes de la clase
  getStudents() {
    this.spinnerStatus = false;
    this.classesService.getStudents(this.classesComponent.getHeaders(), ViewStudentsComponent.classID)
      .subscribe({
        next: (data: ApiResponseListsStudentsI) => {
          this.arrayStudents = data.students;
          this.spinnerStatus = true;
        },
        error: (error: any) => {
          alert(error);
        }
      })
  }

  //Método que cambia las páginas de la tabla
  changePage(e: PageEvent) {
    this.itemsForPage = e.pageSize;
    this.initialPage = e.pageIndex * this.itemsForPage;
    this.finalPage = this.initialPage + this.itemsForPage;
    if (this.finalPage > this.arrayStudents.length) {
      this.finalPage = this.arrayStudents.length;
    }
  }

  //Icons to use
  codeClass = iconos.faChalkboardUser;
}
