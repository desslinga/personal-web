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
import { ClosetrComponent } from './work/previews/closetr/closetr.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WafflyComponent } from './work/previews/waffly/waffly.component';
import { UofthacksVComponent } from './gallery-preview/previews/uofthacks-v/uofthacks-v.component';
import { PottedPlantsComponent } from './gallery-preview/previews/potted-plants/potted-plants.component';
import { AmacssGamingComponent } from './gallery-preview/previews/amacss-gaming/amacss-gaming.component';
import { AmacssPidayComponent } from './gallery-preview/previews/amacss-piday/amacss-piday.component';
import { GoIntroductionComponent } from './gallery-preview/previews/go-introduction/go-introduction.component';
import { FloralSeriesComponent } from './gallery-preview/previews/floral-series/floral-series.component';
import { AmacssCoffeehouseComponent } from './gallery-preview/previews/amacss-coffeehouse/amacss-coffeehouse.component';
import { AmacssOtherComponent } from './gallery-preview/previews/amacss-other/amacss-other.component';
import { WarmSeriesComponent } from './gallery-preview/previews/warm-series/warm-series.component';
import { PreviewComponent } from './preview/preview.component';
import { WorkPreviewComponent } from './work-preview/work-preview.component';

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
    WafflyComponent,
    UofthacksVComponent,
    PottedPlantsComponent,
    AmacssGamingComponent,
    AmacssPidayComponent,
    GoIntroductionComponent,
    FloralSeriesComponent,
    AmacssCoffeehouseComponent,
    AmacssOtherComponent,
    WarmSeriesComponent,
    PreviewComponent,
    WorkPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ScreenChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
