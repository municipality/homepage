import {Component, OnInit} from 'angular2/core';


import {Instagram} from './instagram.component';
import {Projects} from './projects.component';

import {Intro} from './intro.component';
import {Objectives} from './objectives.component';
import {Footer} from './footer.component';
import {Faces} from './faces.component';
import {Social} from './media.component';

@Component({
    selector : 'wall',
    directives : [Instagram, Projects, Intro, Footer, Objectives, Faces, Social],
    template : `
            <intro id="intro"></intro>
            <objectives id="objectives"></objectives>
            <faces id="faces"></faces>
            <social id="media"></social>
            <!-- <projects id="projects" class="white-bg section"></projects>
            <instagram id="instagram" class="blue-bg section" style="background-image: url('images/plaid.jpg');"></instagram> -->
            <footer id="footer"></footer>
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
            //this.elementArray[i].style.height = window.innerHeight + "px";
        }
    }
}
