import {Component, OnInit} from 'angular2/core';


import {Instagram} from './instagram.component';
import {Projects} from './projects.component';

import {Intro} from './intro.component';

import {ScrollingService} from './scrolling.service';


@Component({
    selector : 'wall',
    directives : [Instagram, Projects, Intro],
    template : `
            <intro id="intro"></intro>
            <div class="blank-block"></div>
            <projects></projects>
            <instagram></instagram>
    `
})
export class Wall implements OnInit {
    intro;
    constructor (private scrollingService : ScrollingService) {

    }
    /*
      Called right after the directive's data-bound properties have been checked
      for the first time
     */
    ngOnInit () {
        var me = this;
        document.addEventListener("scroll", (e) => {
            if(this.intro == null ) {
                this.intro = document.getElementById("intro");
            }
            if(this.intro && me.scrollingService.isInViewport(this.intro)) {
                let image:any = document.getElementsByClassName("intro-image")[0];
                image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
                console.log("scrolling");
            }

        });
    }
}
