import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScreenChangeService } from './services/screen-change.service';
import { GalleryPreviewComponent } from './gallery-preview/gallery-preview.component';
import { WorkComponent } from './work/work.component';
import { ClosetrComponent } from './work/closetr/closetr.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WafflyComponent } from './work/waffly/waffly.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GalleryComponent,
    GalleryPreviewComponent,
    WorkComponent,
    ClosetrComponent,
    NotFoundComponent,
    WafflyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ScreenChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
