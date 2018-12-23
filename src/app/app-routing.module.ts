import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'home', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
