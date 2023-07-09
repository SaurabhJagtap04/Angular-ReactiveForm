import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainformComponent } from './mainform/mainform.component';
import { EndpageComponent } from './endpage/endpage.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { CommuteService } from './commute.service';


@NgModule({
  declarations: [
    
    AppComponent,
    MainformComponent,
    EndpageComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule    
  ],
  providers: [CommuteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
