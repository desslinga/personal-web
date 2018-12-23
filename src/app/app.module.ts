import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScreenChangeService } from './services/screen-change.service';
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GalleryComponent,
    GalleryPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScreenChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
