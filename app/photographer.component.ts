import {Component, OnInit} from 'angular2/core';

@Component ({
    selector : 'photographer',
    template : `
        <div class="photographer-container viewport-size">
            <div class="photographer-inner-container">
                <div class="photographer-panel intro viewport-size">
                    <div class="brian-title">
                        <p>Photographer</p>
                    </div>
                </div>
                <div class="photographer-panel outro viewport-size">

                </div>
            </div>
        </div>
    `
})

export class Photographer implements OnInit {
    constructor () {

    }

    ngOnInit () {

    }
}
