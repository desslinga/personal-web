import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WorkComponent } from './work/work.component';
import { ClosetrComponent } from './work/closetr/closetr.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'home', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'work', component: WorkComponent},
  {path: 'work/closetr', component: ClosetrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
