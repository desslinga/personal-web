import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WorkComponent } from './work/work.component';
import { ClosetrComponent } from './work/closetr/closetr.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/work', pathMatch: 'full'},
  {path: 'home', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'work', component: WorkComponent},
  {path: 'work/closetr', component: ClosetrComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
