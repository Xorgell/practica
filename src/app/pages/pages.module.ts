import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AccountSettinsComponent } from './account-settins/account-settins.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettinsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettinsComponent,
  ],
  imports: [
    CommonModule, SharedModule, RouterModule, FormsModule, ComponentsModule]
})
export class PagesModule { }
