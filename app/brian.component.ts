import {Component, OnInit} from 'angular2/core';

import {Engineer} from './engineer.component';
import {Photographer} from './photographer.component';
import {ScrollingService} from './scrolling.service';

@Component ({
    selector : 'brian',
    directives : [Engineer, Photographer],
    template : `
        <div class="brian-name-tag viewport-size">
            <h2 class="brian-name-tag-text">Brian</h2>
        </div>
        <engineer></engineer>
        <photographer></photographer>


    `
})
export class Brian implements OnInit {
    brianContainer;
    startPosition;
    nameTag;
    constructor (private scrollingService:ScrollingService) {

    }

    ngOnInit () {
        this.brianContainer = document.getElementsByTagName("brian")[0];
        this.nameTag = document.getElementsByClassName("brian-name-tag")[0];
        document.addEventListener("scroll", this.onScroll.bind(this));
    }

    onScroll (e) {
        var isInViewport = this.scrollingService.isInViewport;
        var rect = this.brianContainer.getBoundingClientRect();
        if (rect.top < 0 && rect.bottom > window.innerHeight) {
            this.nameTag.style.position = "fixed";
        }
        else {
            this.nameTag.style.position = "absolute";
            if(rect.bottom < window.innerHeight) {
                this.nameTag.style.bottom = "0px";
                this.nameTag.style.top = "";
            }
            else {
                this.nameTag.style.bottom = "";
                this.nameTag.style.top = "0px";
            }

        }
    }
}
