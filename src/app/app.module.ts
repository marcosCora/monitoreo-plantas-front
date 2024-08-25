import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GlobalReadingsComponent } from './components/global-readings/global-readings.component';
import { BoardComponent } from './components/board/board.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { HeaderComponent } from './components/header/header.component';
import { CreatePlantComponent } from './components/create-plant/create-plant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyPlantComponent } from './components/modify-plant/modify-plant.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    GlobalReadingsComponent,
    BoardComponent,
    IndicatorsComponent,
    HeaderComponent,
    CreatePlantComponent,
    ModifyPlantComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
