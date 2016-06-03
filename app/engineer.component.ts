
import {Component, OnInit} from 'angular2/core';



@Component ({
    selector : 'engineer',
    template : `
        <div class="engineer-container viewport-size">
            <div class="engineer-inner-container">
                <div class="engineer-panel intro viewport-size">
                    <div class="left">
                        <div class="title">
                            <h2>Brian</h2>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div class="right">

                    </div>
                </div>
                <div class="engineer-panel outro viewport-size">

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
    }
}
>>>>>>> b3000e21f44fe0a5ef5ec8f222ffe367e5f1dd35
