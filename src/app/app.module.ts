import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// full pages
import { HomeComponent } from './pages/full/home/home.component';
import { WorkComponent } from './pages/full/work/work.component';
import { NotFoundComponent } from './pages/full/not-found/not-found.component';
import { NotesComponent } from './pages/full/notes/notes.component';

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
import { NotesPreviewComponent } from './pages/partial/notes-preview/notes-preview.component';

// note previews
import { FrontendQuestionsHtmlComponent } from './pages/partial/notes-preview/previews/frontend-questions-html/frontend-questions-html.component';
import { FrontendQuestionsCssOneComponent } from './pages/partial/notes-preview/previews/frontend-questions-css-one/frontend-questions-css-one.component';
import { FrontendQuestionsCssTwoComponent } from './pages/partial/notes-preview/previews/frontend-questions-css-two/frontend-questions-css-two.component';
import { FrontendQuestionsCssThreeComponent } from './pages/partial/notes-preview/previews/frontend-questions-css-three/frontend-questions-css-three.component';
import { FrontendQuestionsJsOneComponent } from './pages/partial/notes-preview/previews/frontend-questions-js-one/frontend-questions-js-one.component';
import { FrontendQuestionsJsTwoComponent } from './pages/partial/notes-preview/previews/frontend-questions-js-two/frontend-questions-js-two.component';
import { FrontendQuestionsJsThreeComponent } from './pages/partial/notes-preview/previews/frontend-questions-js-three/frontend-questions-js-three.component';
import { FrontendQuestionsJsFourComponent } from './pages/partial/notes-preview/previews/frontend-questions-js-four/frontend-questions-js-four.component';
import { PersonalFirstPostComponent } from './pages/partial/notes-preview/previews/personal-first-post/personal-first-post.component';
import { Cscc69T1Component } from './pages/partial/notes-preview/previews/cscc69-t1/cscc69-t1.component';

// note components
import { DefnComponent } from './components/notes/defn.component';
import { LocComponent } from './components/notes/loc.component';
import { Cscc69T2Component } from './pages/partial/notes-preview/previews/cscc69-t2/cscc69-t2.component';

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
    NotesComponent,
    NotesPreviewComponent,
    FrontendQuestionsHtmlComponent,
    DefnComponent,
    LocComponent,
    FrontendQuestionsCssOneComponent,
    FrontendQuestionsCssTwoComponent,
    FrontendQuestionsCssThreeComponent,
    FrontendQuestionsJsOneComponent,
    FrontendQuestionsJsTwoComponent,
    FrontendQuestionsJsThreeComponent,
    FrontendQuestionsJsFourComponent,
    PersonalFirstPostComponent,
    Cscc69T1Component,
    Cscc69T2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
