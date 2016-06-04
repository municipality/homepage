
import {Component, OnInit} from 'angular2/core';



@Component ({
    selector : 'engineer',
    template : `
        <div class="container engineer-container panel-size">
            <div class="inner-container engineer-inner-container">
                <div class="panel engineer-panel intro panel-size">
                    <div class="title">
                        <p>Software Engineer</p>
                    </div>
                    <div class="flex left">

                    </div>
                    <div class="flex right">

                    </div>
                </div>
                <div class="panel outro panel-size">

                </div>
            </div>
        </div>
    `
})

export class Engineer implements OnInit {
    innerContainer;
    panels;
    constructor () {

    }

    ngOnInit () {
        this.panels = document.getElementsByClassName("engineer-panel");
        this.innerContainer = document.getElementsByClassName("engineer-inner-container")[0];
        this.innerContainer.style.width = window.innerWidth * this.panels.length + "px";
        window.addEventListener("resize", (e) => {
            this.innerContainer.style.width = window.innerWidth * this.panels.length + "px";
        });

        document.addEventListener("scroll", this.onScroll);
    }

    onScroll (event) {

    };
}
