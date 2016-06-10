import {Component, OnInit} from 'angular2/core';

import {Engineer} from './engineer.component';
import {Photographer} from './photographer.component';
import {Designer} from './designer.component';
import {ScrollingService} from './scrolling.service';
import {BrianService} from './brian.service';


@Component ({
    selector : 'brian',
    directives : [Engineer, Photographer, Designer],
    providers : [BrianService],
    template : `
        <div class="quote">
            <h2 align="center" style="color: #3498db;">{{quote}}</h2>

        </div>
        <div class="brian-container">
            <div class="brian-name-tag panel-size">
                <h2 class="brian-name-tag-text">Brian</h2>
            </div>
            <engineer></engineer>
            <designer></designer>
        </div>


    `
})
export class Brian implements OnInit {
    brianContainer;
    startPosition;
    nameTag;
    quote;
    quoteAuthor;
    constructor (private scrollingService:ScrollingService) {
        this.quote = "\"Take the world out for a ride.\"";
        this.quoteAuthor;
    }

    ngOnInit () {
        this.brianContainer = document.getElementsByClassName("brian-container")[0];
        this.nameTag = document.getElementsByClassName("brian-name-tag")[0];
        document.addEventListener("scroll", this.onScroll.bind(this));
        window.addEventListener("resize", this.onScroll.bind(this));
    }

    onScroll (e) {
        var isInViewport = this.scrollingService.isInViewport;
        var rect = this.brianContainer.getBoundingClientRect();
        var nameTagRect = this.nameTag.getBoundingClientRect();
        //600 is the size of brian panels
        if (rect.top < 0 && rect.bottom > 600) {
            this.nameTag.style.position = "fixed";
            this.nameTag.style.bottom = "";
            this.nameTag.style.top = "0px";
        }
        else {
            this.nameTag.style.position = "absolute";

            if(rect.bottom <= 600) {
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
