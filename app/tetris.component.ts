import {Component} from 'angular2/core';

@Component ({
    selector: 'tetris',
    template: `
        <div class="tetris-container">
            <img #t class="tetris-top" (load)="handleTop(t)" src="images/tetris-top.png">
            <img #b class="tetris-bottom" (load)="handleBottom(b)" src="images/tetris-bottom-small.jpg">
            
        </div>
    `
})
export class Tetris {
    t : any;
    b : any;
    constructor () {

    }

    handleTop (t) {
        this.t = t;
        var me = this;
        var start = (me.t.height + 40) * -1;
        if(me.t.style.top == "") {
            me.t.style.top = start + "px";
        }

        document.addEventListener("scroll", (e) => {
            //total height of the document
            var totalHeight = document.body.scrollHeight - document.body.clientHeight;
            //current scroll of the document
            var currentHeight = document.body.scrollTop;

            me.t.style.top = start + (document.body.clientHeight * (currentHeight * 1.0 / totalHeight)) + "px";
        })
    }

    handleBottom (b) {
        // this.b = b;
        // var me = this;
        // var top = me.b.offsetTop;
        // document.addEventListener("scroll", (e) => {
        //     if(me.b.style.top == "") {
        //         me.b.style.top = top + "px";
        //     }
        //     me.b.style.top = top + (window.pageYOffset) + "px";
        // });
    }
}
