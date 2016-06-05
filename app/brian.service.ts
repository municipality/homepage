import {Injectable} from 'angular2/core';

@Injectable()
export class BrianService {

    constructor () {

    }

    toNextPanel (component) {
        var left;
        if (component.style.left == "") {
            left = 0;
        }
        else {
            var s = component.style.left;
            left = Number(s.substring(0, s.length - 2));
        }
        var parent = component.parentElement;
        var width = parent.offsetWidth;
        var scrollAmt = 50;
        var scroll = (amtToScroll) => {
            if (amtToScroll > 0) {
                if (amtToScroll < 50) {
                    setTimeout(() => {
                        component.style.left = left - amtToScroll;
                    }, .1);

                }
                else {
                    setTimeout(() => {
                        component.style.left = left - scrollAmt + "px";
                        left = left - scrollAmt;
                        scroll(amtToScroll - scrollAmt);
                    }, .1);
                }
            }
        }

        scroll(width);
    }

    toPrevPanel (component) {
        var left;
        if (component.style.left == "") {
            left = 0;
        }
        else {
            var s = component.style.left;
            left = Number(s.substring(0, s.length - 2));
        }
        var parent = component.parentElement;
        var width = parent.offsetWidth;
        var scrollAmt = 50;
        var scroll = (amtToScroll) => {
            if (amtToScroll > 0) {
                if (amtToScroll < 50) {
                    setTimeout(() => {
                        component.style.left = left + amtToScroll;
                    }, .1);

                }
                else {
                    setTimeout(() => {
                        component.style.left = left + scrollAmt + "px";
                        left = left + scrollAmt;
                        scroll(amtToScroll - scrollAmt);
                    }, .1);
                }
            }
        }

        scroll(width);
    }
}
