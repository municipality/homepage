System.register(['angular2/core', './scrolling.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, scrolling_service_1;
    var Intro;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            }],
        execute: function() {
            Intro = (function () {
                function Intro(scrollingService) {
                    this.scrollingService = scrollingService;
                    this.loaded = false;
                }
                Intro.prototype.ngOnInit = function () {
                };
                Intro.prototype.imageLoaded = function (image) {
                    //Parallax implementation
                    var me = this;
                    if (image.style.bottom == "") {
                        image.style.bottom = '0px';
                    }
                    var intro;
                    this.introImage = image;
                    document.addEventListener("scroll", function (e) {
                        if (intro == null) {
                            intro = document.getElementsByClassName("intro-container")[0];
                        }
                        if (intro && me.scrollingService.isInViewport(intro)) {
                            image.style.bottom = -1 * window.pageYOffset * .2 + "px";
                        }
                    });
                };
                Intro.prototype.outroImageLoaded = function (image, dreamImage, moon) {
                    if (!image || !dreamImage)
                        return;
                    if (this.loaded)
                        return;
                    this.loaded = true;
                    dreamImage.style.opacity = 0;
                    var moonBottom = 0;
                    moon.style.bottom = "0px";
                    var imageTop = 0, imageLeft = 0;
                    var me = this;
                    if (image.style.top == "") {
                        image.style.top = '0px';
                        image.style.left = "0px";
                    }
                    var ycheck = image.y;
                    var outro;
                    var inspire = document.getElementsByClassName("outro-inner-panel")[0];
                    var dream = document.getElementsByClassName("outro-inner-panel")[1];
                    var change = document.getElementsByClassName("outro-inner-panel")[2];
                    var isInViewport = this.scrollingService.isInViewport;
                    var focus = inspire;
                    var prevOffset = 0;
                    var scroll = "";
                    document.addEventListener("scroll", function (e) {
                        if (window.pageYOffset > prevOffset) {
                            scroll = "down";
                        }
                        else {
                            scroll = "up";
                        }
                        prevOffset = window.pageYOffset;
                        console.log(scroll);
                        if (outro == null) {
                            outro = document.getElementsByClassName("outro-container")[0];
                        }
                        if (outro && isInViewport(outro)) {
                            if (window.pageYOffset > ycheck) {
                                image.style.top = imageTop + (window.pageYOffset - ycheck) + 'px';
                                dreamImage.style.top = imageTop + (window.pageYOffset - ycheck) + 'px';
                            }
                            else if (window.pageYOffset < ycheck) {
                                image.style.top = "0px";
                                dreamImage.style.top = "0px";
                            }
                            image.style.left = imageLeft - (window.pageYOffset * .1) + 'px';
                            dreamImage.style.left = imageLeft - (window.pageYOffset * .05) + 'px';
                        }
                        if (scroll == "up") {
                            if (isInViewport(inspire) && focus != inspire) {
                                focus = inspire;
                                image.style.opacity = 1;
                                dreamImage.style.opacity = 0;
                            }
                        }
                        else {
                            if (isInViewport(dream) && focus != dream) {
                                focus = dream;
                                image.style.opacity = 0;
                                dreamImage.style.opacity = 1;
                            }
                        }
                        if (isInViewport(change)) {
                            moon.style.bottom = moonBottom + ((window.pageYOffset - moon.x - moon.height) * .4);
                        }
                    });
                };
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <div class=\"intro-container\">\n            <img #image (load)=\"imageLoaded(image)\" class=\"intro-image\" src=\"images/image1.jpg\">\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Inspire Individuality</p>\n            </div>\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Always Be Learning</p>\n            </div>\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Change the World</p>\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro1.jpg\">\n            <img #image3 class=\"outro-image\" src=\"images/outro2.jpg\">\n            <img #moon class=\"outro-image moon\" src=\"images/moon.png\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire Individuality</h2>\n                        <p>Stand out from the rest of the crowd.</p>\n                        <p>Be the black sheep of the pack.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Dream Big</h2>\n                        <p>Aim high, and soar among the stars.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                        <p>The smallest ideas can have the biggest impact.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0RBO2dCQUlJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFEeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztnQkFHZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCwyQkFBVyxHQUFYLFVBQVksS0FBSztvQkFDYix5QkFBeUI7b0JBRXpCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNsQyxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDZixLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNsRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7d0JBQzdELENBQUM7b0JBRUws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QUFDO3dCQUNMLENBQUM7d0JBRUQsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUNwRixDQUFDO29CQUlMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBMUpMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFFBQVEsRUFBRyx1OERBOENWO3FCQUNKLENBQUM7O3lCQUFBO2dCQTJHRixZQUFDO1lBQUQsQ0FBQyxBQXpHRCxJQXlHQztZQXpHRCx5QkF5R0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW50cm8nLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZSAobG9hZCk9XCJpbWFnZUxvYWRlZChpbWFnZSlcIiBjbGFzcz1cImludHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2ltYWdlMS5qcGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5BbHdheXMgQmUgTGVhcm5pbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5DaGFuZ2UgdGhlIFdvcmxkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZTIgY2xhc3M9XCJvdXRyby1pbWFnZVwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL291dHJvMS5qcGdcIj5cbiAgICAgICAgICAgIDxpbWcgI2ltYWdlMyBjbGFzcz1cIm91dHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL291dHJvMi5qcGdcIj5cbiAgICAgICAgICAgIDxpbWcgI21vb24gY2xhc3M9XCJvdXRyby1pbWFnZSBtb29uXCIgc3JjPVwiaW1hZ2VzL21vb24ucG5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWwgZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW50cm9cIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc3BpcmUgSW5kaXZpZHVhbGl0eTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGFuZCBvdXQgZnJvbSB0aGUgcmVzdCBvZiB0aGUgY3Jvd2QuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmUgdGhlIGJsYWNrIHNoZWVwIG9mIHRoZSBwYWNrLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RHJlYW0gQmlnPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFpbSBoaWdoLCBhbmQgc29hciBhbW9uZyB0aGUgc3RhcnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSB0aGUgV29ybGQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHNtYWxsZXN0IGlkZWFzIGNhbiBoYXZlIHRoZSBiaWdnZXN0IGltcGFjdC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnRybyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW50cm9JbWFnZTtcbiAgICBvdXRyb0ltYWdlO1xuICAgIGxvYWRlZCA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICB9XG5cbiAgICBpbWFnZUxvYWRlZChpbWFnZSkge1xuICAgICAgICAvL1BhcmFsbGF4IGltcGxlbWVudGF0aW9uXG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYoaW1hZ2Uuc3R5bGUuYm90dG9tID09IFwiXCIpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRybztcbiAgICAgICAgdGhpcy5pbnRyb0ltYWdlID0gaW1hZ2U7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGludHJvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpbnRybyAmJiBtZS5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydChpbnRybykpIHtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSAtMSAqIHdpbmRvdy5wYWdlWU9mZnNldCAqIC4yICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UsIGRyZWFtSW1hZ2UsIG1vb24pIHtcbiAgICAgICAgaWYoIWltYWdlIHx8ICFkcmVhbUltYWdlKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubG9hZGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICBkcmVhbUltYWdlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB2YXIgbW9vbkJvdHRvbSA9IDA7XG4gICAgICAgIG1vb24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgdmFyIGltYWdlVG9wID0gMCwgaW1hZ2VMZWZ0PTA7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGltYWdlLnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB5Y2hlY2sgPSBpbWFnZS55O1xuICAgICAgICB2YXIgb3V0cm87XG4gICAgICAgIHZhciBpbnNwaXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzBdO1xuICAgICAgICB2YXIgZHJlYW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMV07XG4gICAgICAgIHZhciBjaGFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMl07XG4gICAgICAgIHZhciBpc0luVmlld3BvcnQgPSB0aGlzLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0O1xuICAgICAgICB2YXIgZm9jdXMgPSBpbnNwaXJlO1xuICAgICAgICB2YXIgcHJldk9mZnNldCA9IDA7XG4gICAgICAgIHZhciBzY3JvbGwgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiBwcmV2T2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gXCJkb3duXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSBcInVwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2T2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2Nyb2xsKTtcblxuICAgICAgICAgICAgaWYob3V0cm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3V0cm8gJiYgaXNJblZpZXdwb3J0KG91dHJvKSkge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHljaGVjaykge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50b3AgPSBpbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBpbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYod2luZG93LnBhZ2VZT2Zmc2V0IDwgeWNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5sZWZ0ID0gaW1hZ2VMZWZ0IC0gKHdpbmRvdy5wYWdlWU9mZnNldCAqIC4xKSArICdweCc7XG4gICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5sZWZ0ID0gaW1hZ2VMZWZ0IC0gKHdpbmRvdy5wYWdlWU9mZnNldCAqIC4wNSkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2Nyb2xsID09IFwidXBcIikge1xuICAgICAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChpbnNwaXJlKSAmJiBmb2N1cyAhPSBpbnNwaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzID0gaW5zcGlyZTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGRyZWFtKSAmJiBmb2N1cyAhPSBkcmVhbSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1cyA9IGRyZWFtO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChjaGFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBtb29uQm90dG9tICsgKCh3aW5kb3cucGFnZVlPZmZzZXQtbW9vbi54LW1vb24uaGVpZ2h0KSAqIC40KTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=