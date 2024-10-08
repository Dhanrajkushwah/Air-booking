import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
  { path: 'booking', component: BookingformComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
