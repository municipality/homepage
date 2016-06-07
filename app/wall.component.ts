import {Component, OnInit} from 'angular2/core';


import {Instagram} from './instagram.component';
import {Projects} from './projects.component';

import {Intro} from './intro.component';
import {Brian} from './brian.component';
import {Footer} from './footer.component';



@Component({
    selector : 'wall',
    directives : [Instagram, Projects, Intro, Brian, Footer],
    template : `
            <intro id="intro"></intro>
            <brian></brian>
            <!-- <projects id="projects" class="white-bg section"></projects>
            <instagram id="instagram" class="blue-bg section" style="background-image: url('images/plaid.jpg');"></instagram> -->
            <footer></footer>
    `
})
export class Wall implements OnInit {
    elementArray;
    constructor () {

    }
    /*
      Called right after the directive's data-bound properties have been checked
      for the first time
     */
    ngOnInit () {
        this.elementArray = document.getElementsByClassName("viewport-size");
        this.resizeElements();
        window.addEventListener("resize", (e) => {
            this.resizeElements();
        });


    }

    resizeElements () {
        for(let i = 0; i < this.elementArray.length; i++) {
            //this.elementArray[i].style.width = window.innerWidth + "px";
            this.elementArray[i].style.height = window.innerHeight + "px";
        }
    }
}
