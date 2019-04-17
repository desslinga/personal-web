import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { NavComponent } from './pages/partial/nav/nav.component';
import { HomeComponent } from './pages/full/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryPreviewComponent } from './pages/partial/gallery-preview/gallery-preview.component';
import { WorkPreviewComponent } from './pages/partial/work-preview/work-preview.component';
import { WorkComponent } from './pages/full/work/work.component';
import { NotFoundComponent } from './pages/full/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WorkComponent},
  {path: 'about', component: HomeComponent},
  {path: 'gallery/:id', component: GalleryPreviewComponent},
  {path: 'work/:id', component: WorkPreviewComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404', pathMatch: 'prefix'}
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
