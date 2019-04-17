import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// full pages
import { HomeComponent } from './pages/full/home/home.component';
import { WorkComponent } from './pages/full/work/work.component';
import { NotFoundComponent } from './pages/full/not-found/not-found.component';
import { BlogComponent } from './pages/full/blog/blog.component';

// partial pages
import { NavComponent } from './pages/partial/nav/nav.component';
import { GalleryPreviewComponent } from './pages/partial/gallery-preview/gallery-preview.component';
import { WorkPreviewComponent } from './pages/partial/work-preview/work-preview.component';

// components
import { GalleryComponent } from './components/gallery/gallery.component';
import { PreviewComponent } from './components/preview/preview.component';

// work previews
import { ClosetrComponent } from './pages/partial/work-preview/previews/closetr/closetr.component';
import { WafflyComponent } from './pages/partial/work-preview/previews/waffly/waffly.component';
import { SparknodesComponent } from './pages/partial/work-preview/previews/sparknodes/sparknodes.component';

// gallery previews
import { UofthacksVComponent } from './pages/partial/gallery-preview/previews/uofthacks-v/uofthacks-v.component';
import { PottedPlantsComponent } from './pages/partial/gallery-preview/previews/potted-plants/potted-plants.component';
import { AmacssGamingComponent } from './pages/partial/gallery-preview/previews/amacss-gaming/amacss-gaming.component';
import { AmacssPidayComponent } from './pages/partial/gallery-preview/previews/amacss-piday/amacss-piday.component';
import { GoIntroductionComponent } from './pages/partial/gallery-preview/previews/go-introduction/go-introduction.component';
import { FloralSeriesComponent } from './pages/partial/gallery-preview/previews/floral-series/floral-series.component';
import { AmacssCoffeehouseComponent } from './pages/partial/gallery-preview/previews/amacss-coffeehouse/amacss-coffeehouse.component';
import { AmacssOtherComponent } from './pages/partial/gallery-preview/previews/amacss-other/amacss-other.component';
import { WarmSeriesComponent } from './pages/partial/gallery-preview/previews/warm-series/warm-series.component';

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
    WorkPreviewComponent,
    SparknodesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
