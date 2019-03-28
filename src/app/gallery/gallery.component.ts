import { Component, OnInit, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ScreenChangeService } from '../services/screen-change.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imageList : Array<Array<string>>;
  imageListPrev : Array<any>;
  imageListFull: Array<any>;
  previewedProject: Object;
  screenChangeService: ScreenChangeService;

  openPreview(i): void {
    this.previewedProject = "uofthacks_v";
    this.router.navigate(['/work/uofthacks_v']);

  }

  handlePrevEmit(event): void {
    switch (event) {
      case 'close':
        this.previewedProject = "";
        break;
      default:
        break;
    }
    console.log(this.previewedProject);
  }

  constructor(
    private router: Router,
    private screenchangeservice: ScreenChangeService
  ) {
    this.imageList = [
      ["image-01.png",
       "uoft_hacks_tower.png",
       "U of T Hacks - CN Tower",
       `Concept art for U of T Hacks VI, created as a request.
       This design was not eventually used for the event, but
       it was still fun making it! This features the CN Tower.
       Designed on Adobe Illustrator, with some finishing touches
       on ProCreate (iPad Pro).`,
      'Adobe Illustrator, ProCreate (with iPad Pro)',
      `blue`],
      ["image-02.png",
       "transitassets-01.png",
       "Toronto Transit",
       `Buses and Trains for TTC, MiWay, and GO Transit. Created
        as part of a brochure design during an internship with
        GO Transit. Designed on Adobe Illustrator.`,
       'Adobe Illustrator',
       `red`],
      ["image-03.png",
       "plants_v2.png",
       "Potted Plants - Leafy Greens",
       `Part of an ongoing study of leafy plants and pots.
        Illustration made with ProCreate on iPad Pro.`,
       'ProCreate (with iPad Pro)',
       `green`],
      ["image-04.png",
       "uoft_hacks_skyline.png",
       "U of T Hacks - Skyline",
       `Concept art for U of T Hacks VI, created as a request.
       This design was not eventually used for the event, but
       it was still fun making it! This features the Toronto
       Skyline. Designed on Adobe Illustrator, with some finishing
       touches on ProCreate (iPad Pro).`,
      'Adobe Illustrator, ProCreate (with iPad Pro)',
      `yellow`],
      ["image-05.png",
       "plants_v1.png",
       "Potted Plants - Succulents",
       `Part of an ongoing study of leafy plants and pots.
        Illustration made with ProCreate on iPad Pro.`,
       'ProCreate (with iPad Pro)',
       `alice-blue`],
      ["image-06.png",
       "go_no_brainer_savings.png",
       "GO Transit Back to School",
       `Poster design for 'GO Back to School' promotional event
       for GO Transit. Created during an internship with GO
       Transit. Designed on Adobe Illustrator.`,
      'Adobe Illustrator',
      `brown`],
      ["image-07.png",
       "go_introduction_3.png",
       "GO Introduction Brochure",
       `Inner pages of brochure designed for 'GO Introduction'
       brochure, as a concept. Created during an internship with
       GO Transit. Designed on Adobe Illustrator.`,
      'Adobe Illustrator',
      `orange`],
      ["image-17.png",
       "amacss_coffeehouse.png",
       "AMACSS Coffee House",
       `Marketing assets: social media posts, invites, posters
       that were created for a casual networking event for
       AMACSS. For this, I decided to go for a coffee-themed
       palette full of warm tones.`,
      'Procreate (with iPad Pro), Adobe Illustrator',
      `purple`],
      ["image-09.png",
       "girl_with_cats.PNG",
       "Playing with Cats",
       `Illustration made with ProCreate on iPad Pro. I really like
       cats so I made this one!`,
      'Procreate (with iPad Pro)',
      `white`],
      ["image-08.png",
       "go_introduction_2.png",
       "GO Introduction Brochure",
       `Inner pages (History) of brochure designed for 'GO Introduction'
       brochure, as a concept. Created during an internship with
       GO Transit. Designed on Adobe Illustrator.`,
      'Adobe Illustrator',
      `red`],
      ["image-10.png",
       "amacss_gaming_night_2.PNG",
       "AMACSS Gaming Night 2 Poster",
       `Poster created for AMACSS' Gaming Night. Illustrated on iPad Pro,
       and designed on Adobe Illustrator.`,
      'Adobe Illustrator, ProCreate (with iPad Pro)',
      `blue`],
      ["image-11.png",
       "uoft_hacks_title.png",
       "U of T Hacks - Title",
       `Concept art for U of T Hacks VI, created as a request.
       This design was not eventually used for the event, but
       it was still fun making it! This features the title.
       Designed on Adobe Illustrator, with some finishing
       touches on ProCreate (iPad Pro).`,
      'Adobe Illustrator, ProCreate (with iPad Pro)',
      `brown`],
      ["image-12.png",
       "go_introduction_1.png",
       "GO Introduction Brochure",
       `Cover of brochure designed for 'GO Introduction'
       brochure, as a concept. Created during an internship with
       GO Transit. Designed on Adobe Illustrator.`,
      'Adobe Illustrator',
      `teal`],
      ["image-13.png",
       "amacss_quiz_night.png",
       "AMACSS Quiz Night",
       `Poster created for AMACSS' Quiz Night. Illustrated on iPad Pro,
       and designed on Adobe Illustrator.`,
      'Adobe Illustrator, ProCreate (with iPad Pro)',
      `black`],
      ["image-14.png",
       "amacss_gaming_night_1.png",
       "AMACSS Gaming Night 1 Poster",
       `Poster created for AMACSS' Gaming Night. Illustrated on iPad Pro,
       and designed on Adobe Illustrator.`,
      'Adobe Illustrator, ProCreate (with iPad Pro)',
      `green`],
     ["image-15.png",
      "weekly1_flowergirl.PNG",
      "Flower Girl",
      `Portrait of girl with decorative flowers. Part 1 of some quick studies
       I am trying to do every week or so.`,
      'ProCreate (with iPad Pro)',
      `blue`],
    ["image-16.png",
     "weekly2_flowerbranch.PNG",
     "White Orchid",
     `Study using the one of the original photographs (Orchid) in 'Mapplethorpe
     Flora: The Complete Flowers' by Robert Mapplethorpe. Part 2 of some quick
     studies I'm trying to do every week or so.`,
     'ProCreate (with iPad Pro)',
     'orange']
    ];

    this.screenChangeService = screenchangeservice;

    this.imageListPrev = [];
    for (let i = 0; i < this.imageList.length; i++) {
       this.imageListPrev[i] = {};
       this.imageListPrev[i].imgUrl = "./assets/images/gallery/" + this.imageList[i][0];
       this.imageListPrev[i].title = this.imageList[i][2];
       this.imageListPrev[i].bgColor = this.imageList[i][5];
    }

    this.imageListFull = [];
    for (let i = 0; i < this.imageList.length; i++) {
       this.imageListFull[i] = {
         'url': "./assets/images/gallery/archives/" + this.imageList[i][1],
         'title': this.imageList[i][2],
         'description': this.imageList[i][3],
         'tools': this.imageList[i][4]
       };
    }

    this.previewedProject = "";

  }

  ngOnInit() {
  }
}
