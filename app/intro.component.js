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
                    this.loadedCount = 0;
                    this.imageCount = 4;
                }
                Intro.prototype.ngOnInit = function () {
                };
                Intro.prototype.introImageLoaded = function (image) {
                    //Get rid of app loading mask
                    document.getElementById("app-loading-mask").style.display = "none";
                    //Parallax implementation
                    this.introImage1 = image;
                    var me = this;
                    if (image.style.bottom == "") {
                        image.style.bottom = '0px';
                    }
                    var intro;
                    if (intro == null) {
                        intro = document.getElementsByClassName("intro-container")[0];
                        this.introContainer = intro;
                    }
                    intro.style.height = window.innerHeight + "px";
                    image.style.height = window.innerHeight + "px";
                    document.addEventListener("scroll", function (e) {
                        if (intro && me.scrollingService.isInViewport(intro)) {
                            image.style.bottom = (-1 * window.pageYOffset * .3) + "px";
                        }
                    });
                    this.loadedCount++;
                    if (this.loadedCount == this.imageCount) {
                        this.allLoaded();
                    }
                };
                Intro.prototype.outroImageLoaded = function (image, dreamImage, moon) {
                    if (this.loaded)
                        return;
                    this.outroImage1 = image;
                    this.outroImage2 = dreamImage;
                    this.moon = moon;
                    this.loadedCount++;
                    if (this.loadedCount == this.imageCount) {
                        this.allLoaded();
                    }
                };
                Intro.prototype.allLoaded = function () {
                    if (this.loaded)
                        return;
                    this.loaded = true;
                    var inspireImage = this.outroImage1;
                    var dreamImage = this.outroImage2;
                    var moon = this.moon;
                    if (!inspireImage || !dreamImage)
                        return;
                    dreamImage.style.opacity = 0;
                    var moonBottom = 0;
                    moon.style.bottom = "0px";
                    var inspireImageTop = 0, inspireImageLeft = 0;
                    var me = this;
                    if (inspireImage.style.top == "") {
                        inspireImage.style.top = '0px';
                        inspireImage.style.left = "0px";
                    }
                    var ycheck = inspireImage.y;
                    var orgYCheck = ycheck;
                    var outro;
                    var inspire = document.getElementsByClassName("outro-inner-panel")[0];
                    var dream = document.getElementsByClassName("outro-inner-panel")[1];
                    var change = document.getElementsByClassName("outro-inner-panel")[2];
                    var isInViewport = this.scrollingService.isInViewport;
                    var focus = inspire;
                    var prevOffset = 0;
                    var scroll = "";
                    var viewportSize = window.innerHeight;
                    var outropanels = document.getElementsByClassName("outro-panel");
                    for (var i = 0; i < outropanels.length; i++) {
                        var panel = outropanels[i];
                        panel.style.height = viewportSize + "px";
                    }
                    // window.addEventListener("resize", (e) => {
                    //     var multiplier = window.innerHeight / viewportSize;
                    //     ycheck = orgYCheck * multiplier;
                    //     this.introContainer.style.height = viewportSize*multiplier + "px";
                    //     this.introImage1.style.height = viewportSize*multiplier + "px";
                    //     for (let i = 0; i < outropanels.length; i++) {
                    //         let panel:any = outropanels[i];
                    //         panel.style.height = viewportSize*multiplier + "px";
                    //     }
                    // });
                    document.addEventListener("scroll", function (e) {
                        //var rect = inspireImage.getBoundingClientRect();
                        if (window.pageYOffset > prevOffset) {
                            scroll = "down";
                        }
                        else {
                            scroll = "up";
                        }
                        prevOffset = window.pageYOffset;
                        if (outro == null) {
                            outro = document.getElementsByClassName("outro-container")[0];
                        }
                        if (outro && isInViewport(outro)) {
                            if (outro.getBoundingClientRect().bottom < window.innerHeight) {
                                inspireImage.style.position = "absolute";
                                dreamImage.style.position = "absolute";
                                inspireImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                                dreamImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                            }
                            else if (window.pageYOffset > ycheck) {
                                // inspireImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                                // dreamImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                                inspireImage.style.position = "fixed";
                                dreamImage.style.position = "fixed";
                                inspireImage.style.top = "0px";
                                dreamImage.style.top = "0px";
                            }
                            else if (window.pageYOffset < ycheck) {
                                inspireImage.style.position = "absolute";
                                dreamImage.style.position = "absolute";
                                inspireImage.style.top = "0px";
                                dreamImage.style.top = "0px";
                            }
                            inspireImage.style.left = inspireImageLeft - (window.pageYOffset * .1) + 'px';
                            dreamImage.style.left = inspireImageLeft - (window.pageYOffset * .1) + 'px';
                        }
                        if (scroll == "up") {
                            if (isInViewport(inspire) && focus != inspire) {
                                focus = inspire;
                                inspireImage.style.opacity = 1;
                                dreamImage.style.opacity = 0;
                            }
                        }
                        else {
                            if (isInViewport(dream) && focus != dream) {
                                focus = dream;
                                inspireImage.style.opacity = 0;
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
                        template: "\n        <div class=\"intro-container viewport-size\">\n            <div #image class=\"intro-image-container\" style=\"background-image: url('images/brian.jpg');\">\n                <img (load)=\"introImageLoaded(image)\" src='images/brian.jpg' style=\"display:none;\">\n            </div>\n            <div class=\"intro-icon-container\">\n\n                <img class=\"intro-icon\" src=\"images/brian-icon.png\">\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro1.jpg\">\n            <img #image3 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro2.jpg\">\n            <img #moon class=\"outro-image moon\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/moon.png\">\n            <div class=\"outro-panel first viewport-size\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire Individuality</h2>\n                        <p>Stand out from the rest of the crowd.</p>\n                        <p>Be the black sheep of the pack.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel viewport-size\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Dream Big</h2>\n                        <p>Aim high, and soar among the stars.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel viewport-size\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                        <p>The smallest ideas can have the biggest impact.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQWVJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFaeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixnQkFBVyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztnQkFXZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIsNkJBQTZCO29CQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ25FLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FB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QUFHLEtBQUssQ0FBQztnQ0FDZCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0NBQy9CLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQzs0QkFDakMsQ0FBQzt3QkFDTCxDQUFDO3dCQUVELEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDcEYsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFJUCxDQUFDO2dCQWxPTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixRQUFRLEVBQUcscS9EQTJDVjtxQkFDSixDQUFDOzt5QkFBQTtnQkFzTEYsWUFBQztZQUFELENBQUMsQUFwTEQsSUFvTEM7WUFwTEQseUJBb0xDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2ludHJvJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWNvbnRhaW5lciB2aWV3cG9ydC1zaXplXCI+XG4gICAgICAgICAgICA8ZGl2ICNpbWFnZSBjbGFzcz1cImludHJvLWltYWdlLWNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYnJpYW4uanBnJyk7XCI+XG4gICAgICAgICAgICAgICAgPGltZyAobG9hZCk9XCJpbnRyb0ltYWdlTG9hZGVkKGltYWdlKVwiIHNyYz0naW1hZ2VzL2JyaWFuLmpwZycgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1pY29uLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImludHJvLWljb25cIiBzcmM9XCJpbWFnZXMvYnJpYW4taWNvbi5wbmdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyAjaW1hZ2UyIGNsYXNzPVwib3V0cm8taW1hZ2VcIiAobG9hZCk9XCJvdXRyb0ltYWdlTG9hZGVkKGltYWdlMiwgaW1hZ2UzLCBtb29uKVwiIHNyYz1cImltYWdlcy9vdXRybzEuanBnXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZTMgY2xhc3M9XCJvdXRyby1pbWFnZVwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL291dHJvMi5qcGdcIj5cbiAgICAgICAgICAgIDxpbWcgI21vb24gY2xhc3M9XCJvdXRyby1pbWFnZSBtb29uXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvbW9vbi5wbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbCBmaXJzdCB2aWV3cG9ydC1zaXplXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWludHJvXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RhbmQgb3V0IGZyb20gdGhlIHJlc3Qgb2YgdGhlIGNyb3dkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJlIHRoZSBibGFjayBzaGVlcCBvZiB0aGUgcGFjay48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWwgdmlld3BvcnQtc2l6ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RHJlYW0gQmlnPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFpbSBoaWdoLCBhbmQgc29hciBhbW9uZyB0aGUgc3RhcnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsIHZpZXdwb3J0LXNpemVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2hhbmdlIHRoZSBXb3JsZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgc21hbGxlc3QgaWRlYXMgY2FuIGhhdmUgdGhlIGJpZ2dlc3QgaW1wYWN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEludHJvIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbnRyb0ltYWdlO1xuICAgIG91dHJvSW1hZ2U7XG4gICAgbG9hZGVkID0gZmFsc2U7XG5cbiAgICBsb2FkZWRDb3VudCA9IDA7XG4gICAgaW1hZ2VDb3VudCA9IDQ7XG5cbiAgICBpbnRyb0NvbnRhaW5lcjtcblxuICAgIGludHJvSW1hZ2UxO1xuICAgIG91dHJvSW1hZ2UxO1xuICAgIG91dHJvSW1hZ2UyO1xuICAgIG1vb247XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxuXG4gICAgaW50cm9JbWFnZUxvYWRlZChpbWFnZSkge1xuICAgICAgICAvL0dldCByaWQgb2YgYXBwIGxvYWRpbmcgbWFza1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvL1BhcmFsbGF4IGltcGxlbWVudGF0aW9uXG4gICAgICAgIHRoaXMuaW50cm9JbWFnZTEgPSBpbWFnZTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYoaW1hZ2Uuc3R5bGUuYm90dG9tID09IFwiXCIpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRybztcbiAgICAgICAgaWYoaW50cm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgaW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50cm8tY29udGFpbmVyXCIpWzBdO1xuICAgICAgICAgICAgdGhpcy5pbnRyb0NvbnRhaW5lciA9IGludHJvO1xuICAgICAgICB9XG4gICAgICAgIGludHJvLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihpbnRybyAmJiBtZS5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydChpbnRybykpIHtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSAoLTEgKiB3aW5kb3cucGFnZVlPZmZzZXQgKiAuMykgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcblxuICAgICAgICBpZih0aGlzLmxvYWRlZENvdW50ID09IHRoaXMuaW1hZ2VDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5hbGxMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UsIGRyZWFtSW1hZ2UsIG1vb24pIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLm91dHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHRoaXMub3V0cm9JbWFnZTIgPSBkcmVhbUltYWdlO1xuICAgICAgICB0aGlzLm1vb24gPSBtb29uO1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XG5cbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxMb2FkZWQgKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIGluc3BpcmVJbWFnZSA9IHRoaXMub3V0cm9JbWFnZTE7XG4gICAgICAgIHZhciBkcmVhbUltYWdlID0gdGhpcy5vdXRyb0ltYWdlMjtcbiAgICAgICAgdmFyIG1vb24gPSB0aGlzLm1vb247XG5cbiAgICAgICAgaWYoIWluc3BpcmVJbWFnZSB8fCAhZHJlYW1JbWFnZSkgcmV0dXJuO1xuXG5cbiAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdmFyIG1vb25Cb3R0b20gPSAwO1xuICAgICAgICBtb29uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgIHZhciBpbnNwaXJlSW1hZ2VUb3AgPSAwLCBpbnNwaXJlSW1hZ2VMZWZ0PTA7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPT0gXCJcIikge1xuICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB5Y2hlY2sgPSBpbnNwaXJlSW1hZ2UueTtcbiAgICAgICAgdmFyIG9yZ1lDaGVjayA9IHljaGVjaztcbiAgICAgICAgdmFyIG91dHJvO1xuICAgICAgICB2YXIgaW5zcGlyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVswXTtcbiAgICAgICAgdmFyIGRyZWFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzFdO1xuICAgICAgICB2YXIgY2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzJdO1xuICAgICAgICB2YXIgaXNJblZpZXdwb3J0ID0gdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydDtcbiAgICAgICAgdmFyIGZvY3VzID0gaW5zcGlyZTtcbiAgICAgICAgdmFyIHByZXZPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgc2Nyb2xsID0gXCJcIjtcbiAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICB2YXIgb3V0cm9wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8tcGFuZWxcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cm9wYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5lbDphbnkgPSBvdXRyb3BhbmVsc1tpXTtcbiAgICAgICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSArIFwicHhcIjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gICAgIHZhciBtdWx0aXBsaWVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gdmlld3BvcnRTaXplO1xuICAgICAgICAvLyAgICAgeWNoZWNrID0gb3JnWUNoZWNrICogbXVsdGlwbGllcjtcbiAgICAgICAgLy8gICAgIHRoaXMuaW50cm9Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplKm11bHRpcGxpZXIgKyBcInB4XCI7XG4gICAgICAgIC8vICAgICB0aGlzLmludHJvSW1hZ2UxLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSptdWx0aXBsaWVyICsgXCJweFwiO1xuICAgICAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRyb3BhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgICAgIGxldCBwYW5lbDphbnkgPSBvdXRyb3BhbmVsc1tpXTtcbiAgICAgICAgLy8gICAgICAgICBwYW5lbC5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUqbXVsdGlwbGllciArIFwicHhcIjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuXG4gICAgICAgICAgICAvL3ZhciByZWN0ID0gaW5zcGlyZUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4gcHJldk9mZnNldCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCA9IFwiZG93blwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gXCJ1cFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGlmKG91dHJvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG91dHJvICYmIGlzSW5WaWV3cG9ydChvdXRybykpIHtcbiAgICAgICAgICAgICAgICBpZihvdXRyby5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gaW5zcGlyZUltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiB5Y2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBpbnNwaXJlSW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYod2luZG93LnBhZ2VZT2Zmc2V0IDwgeWNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUubGVmdCA9IGluc3BpcmVJbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjEpICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLmxlZnQgPSBpbnNwaXJlSW1hZ2VMZWZ0IC0gKHdpbmRvdy5wYWdlWU9mZnNldCAqIC4xKSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzY3JvbGwgPT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGluc3BpcmUpICYmIGZvY3VzICE9IGluc3BpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXMgPSBpbnNwaXJlO1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGRyZWFtKSAmJiBmb2N1cyAhPSBkcmVhbSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1cyA9IGRyZWFtO1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc0luVmlld3BvcnQoY2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIG1vb24uc3R5bGUuYm90dG9tID0gbW9vbkJvdHRvbSArICgod2luZG93LnBhZ2VZT2Zmc2V0LW1vb24ueC1tb29uLmhlaWdodCkgKiAuNCk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0pO1xuXG5cblxuICAgIH1cblxufVxuIl19