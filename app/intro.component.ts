import {Component, OnInit} from 'angular2/core';


@Component({
    selector : 'intro',
    template : `
        <img #image (load)="imageLoaded(image)" class="intro-image" src="images/image1.jpg">
        <div class="intro-box">
            <p class="intro-box-header">Inspire Individuality</p>
        </div>
        <div class="intro-box">
            <p class="intro-box-header">Always Be Learning</p>
        </div>
        <div class="intro-box">
            <p class="intro-box-header">Change the World</p>
        </div>
    `
})

export class Intro implements OnInit {
    image : HTMLElement;
    constructor () {

    }

    ngOnInit () {

    }

    imageLoaded(image) {
        //Parallax implementation
        this.image = image;
        var me = this;
        document.addEventListener("scroll", (e) => {
            me.image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
        });
    }
}
