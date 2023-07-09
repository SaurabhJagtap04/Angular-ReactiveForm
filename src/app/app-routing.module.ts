import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainformComponent } from './mainform/mainform.component';
import { EndpageComponent } from './endpage/endpage.component';

const routes: Routes = [

  { path: '', component: MainformComponent },
  { path: 'mainform', component: MainformComponent },
  { path: 'endpage', component: EndpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
