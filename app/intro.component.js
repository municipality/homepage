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
                            image.style.bottom = (-1 * Math.floor(window.pageYOffset * .3)) + "px";
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
                    var _this = this;
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
                    window.addEventListener("resize", function (e) {
                        var multiplier = window.innerHeight / viewportSize;
                        ycheck = orgYCheck * multiplier;
                        _this.introContainer.style.height = viewportSize * multiplier + "px";
                        _this.introImage1.style.height = viewportSize * multiplier + "px";
                        for (var i = 0; i < outropanels.length; i++) {
                            var panel = outropanels[i];
                            panel.style.height = viewportSize * multiplier + "px";
                        }
                    });
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
                        if (outro) {
                            if (isInViewport(outro)) {
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
                        template: "\n        <div class=\"intro-container\">\n            <div #image class=\"intro-image-container\" style=\"background-image: url('images/brian.jpg');\">\n                <img (load)=\"introImageLoaded(image)\" src='images/brian.jpg' style=\"display:none;\">\n            </div>\n            <div class=\"intro-icon-container\">\n\n                <img class=\"intro-icon\" src=\"images/brian-icon.png\">\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro1.jpg\">\n            <img #image3 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro2.jpg\">\n            <img #moon class=\"outro-image moon\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/moon.png\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire Individuality</h2>\n                        <p>Stand out from the rest of the crowd.</p>\n                        <p>Be the black sheep of the pack.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Dream Big</h2>\n                        <p>Aim high, and soar among the stars.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                        <p>The smallest ideas can have the biggest impact.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQWVJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFaeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixnQkFBVyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztnQkFXZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIsNkJBQTZCO29CQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ25FLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FB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LFFBQVEsRUFBRyw2N0RBMkNWO3FCQUNKLENBQUM7O3lCQUFBO2dCQXdMRixZQUFDO1lBQUQsQ0FBQyxBQXRMRCxJQXNMQztZQXRMRCx5QkFzTEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdpbnRybycsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgI2ltYWdlIGNsYXNzPVwiaW50cm8taW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9icmlhbi5qcGcnKTtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgKGxvYWQpPVwiaW50cm9JbWFnZUxvYWRlZChpbWFnZSlcIiBzcmM9J2ltYWdlcy9icmlhbi5qcGcnIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWljb24tY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImludHJvLWljb25cIiBzcmM9XCJpbWFnZXMvYnJpYW4taWNvbi5wbmdcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW1nICNpbWFnZTIgY2xhc3M9XCJvdXRyby1pbWFnZVwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL291dHJvMS5qcGdcIj5cclxuICAgICAgICAgICAgPGltZyAjaW1hZ2UzIGNsYXNzPVwib3V0cm8taW1hZ2VcIiAobG9hZCk9XCJvdXRyb0ltYWdlTG9hZGVkKGltYWdlMiwgaW1hZ2UzLCBtb29uKVwiIHNyYz1cImltYWdlcy9vdXRybzIuanBnXCI+XHJcbiAgICAgICAgICAgIDxpbWcgI21vb24gY2xhc3M9XCJvdXRyby1pbWFnZSBtb29uXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvbW9vbi5wbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsIGZpcnN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW50cm9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGFuZCBvdXQgZnJvbSB0aGUgcmVzdCBvZiB0aGUgY3Jvd2QuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CZSB0aGUgYmxhY2sgc2hlZXAgb2YgdGhlIHBhY2suPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRyZWFtIEJpZzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFpbSBoaWdoLCBhbmQgc29hciBhbW9uZyB0aGUgc3RhcnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2hhbmdlIHRoZSBXb3JsZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBzbWFsbGVzdCBpZGVhcyBjYW4gaGF2ZSB0aGUgYmlnZ2VzdCBpbXBhY3QuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEludHJvIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGludHJvSW1hZ2U7XHJcbiAgICBvdXRyb0ltYWdlO1xyXG4gICAgbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgbG9hZGVkQ291bnQgPSAwO1xyXG4gICAgaW1hZ2VDb3VudCA9IDQ7XHJcblxyXG4gICAgaW50cm9Db250YWluZXI7XHJcblxyXG4gICAgaW50cm9JbWFnZTE7XHJcbiAgICBvdXRyb0ltYWdlMTtcclxuICAgIG91dHJvSW1hZ2UyO1xyXG4gICAgbW9vbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpIHtcclxuICAgICAgICAvL0dldCByaWQgb2YgYXBwIGxvYWRpbmcgbWFza1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWxvYWRpbmctbWFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy9QYXJhbGxheCBpbXBsZW1lbnRhdGlvblxyXG4gICAgICAgIHRoaXMuaW50cm9JbWFnZTEgPSBpbWFnZTtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGlmKGltYWdlLnN0eWxlLmJvdHRvbSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW50cm87XHJcbiAgICAgICAgaWYoaW50cm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnRyby1jb250YWluZXJcIilbMF07XHJcbiAgICAgICAgICAgIHRoaXMuaW50cm9Db250YWluZXIgPSBpbnRybztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW50cm8uc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGludHJvICYmIG1lLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0KGludHJvKSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYm90dG9tID0gKC0xICogTWF0aC5mbG9vcih3aW5kb3cucGFnZVlPZmZzZXQgKiAuMykpICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcclxuXHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxMb2FkZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3V0cm9JbWFnZUxvYWRlZChpbWFnZSwgZHJlYW1JbWFnZSwgbW9vbikge1xyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMub3V0cm9JbWFnZTEgPSBpbWFnZTtcclxuICAgICAgICB0aGlzLm91dHJvSW1hZ2UyID0gZHJlYW1JbWFnZTtcclxuICAgICAgICB0aGlzLm1vb24gPSBtb29uO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcclxuXHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxMb2FkZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWxsTG9hZGVkICgpIHtcclxuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGluc3BpcmVJbWFnZSA9IHRoaXMub3V0cm9JbWFnZTE7XHJcbiAgICAgICAgdmFyIGRyZWFtSW1hZ2UgPSB0aGlzLm91dHJvSW1hZ2UyO1xyXG4gICAgICAgIHZhciBtb29uID0gdGhpcy5tb29uO1xyXG5cclxuICAgICAgICBpZighaW5zcGlyZUltYWdlIHx8ICFkcmVhbUltYWdlKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBkcmVhbUltYWdlLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHZhciBtb29uQm90dG9tID0gMDtcclxuICAgICAgICBtb29uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XHJcbiAgICAgICAgdmFyIGluc3BpcmVJbWFnZVRvcCA9IDAsIGluc3BpcmVJbWFnZUxlZnQ9MDtcclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIGlmKGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPT0gXCJcIikge1xyXG4gICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gJzBweCc7XHJcbiAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHljaGVjayA9IGluc3BpcmVJbWFnZS55O1xyXG4gICAgICAgIHZhciBvcmdZQ2hlY2sgPSB5Y2hlY2s7XHJcbiAgICAgICAgdmFyIG91dHJvO1xyXG4gICAgICAgIHZhciBpbnNwaXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzBdO1xyXG4gICAgICAgIHZhciBkcmVhbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVsxXTtcclxuICAgICAgICB2YXIgY2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzJdO1xyXG4gICAgICAgIHZhciBpc0luVmlld3BvcnQgPSB0aGlzLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0O1xyXG4gICAgICAgIHZhciBmb2N1cyA9IGluc3BpcmU7XHJcbiAgICAgICAgdmFyIHByZXZPZmZzZXQgPSAwO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBcIlwiO1xyXG4gICAgICAgIHZhciB2aWV3cG9ydFNpemUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIHZhciBvdXRyb3BhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1wYW5lbFwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHJvcGFuZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwYW5lbDphbnkgPSBvdXRyb3BhbmVsc1tpXTtcclxuICAgICAgICAgICAgcGFuZWwuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gdmlld3BvcnRTaXplO1xyXG4gICAgICAgICAgICB5Y2hlY2sgPSBvcmdZQ2hlY2sgKiBtdWx0aXBsaWVyO1xyXG4gICAgICAgICAgICB0aGlzLmludHJvQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSptdWx0aXBsaWVyICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0aGlzLmludHJvSW1hZ2UxLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSptdWx0aXBsaWVyICsgXCJweFwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHJvcGFuZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFuZWw6YW55ID0gb3V0cm9wYW5lbHNbaV07XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUqbXVsdGlwbGllciArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL3ZhciByZWN0ID0gaW5zcGlyZUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiBwcmV2T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSBcImRvd25cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbCA9IFwidXBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2T2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICBpZihvdXRybyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1jb250YWluZXJcIilbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG91dHJvKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQob3V0cm8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3V0cm8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBpbnNwaXJlSW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4geWNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPSBpbnNwaXJlSW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRyZWFtSW1hZ2Uuc3R5bGUudG9wID0gaW5zcGlyZUltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA8IHljaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5sZWZ0ID0gaW5zcGlyZUltYWdlTGVmdCAtICh3aW5kb3cucGFnZVlPZmZzZXQgKiAuMSkgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5sZWZ0ID0gaW5zcGlyZUltYWdlTGVmdCAtICh3aW5kb3cucGFnZVlPZmZzZXQgKiAuMSkgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHNjcm9sbCA9PSBcInVwXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChpbnNwaXJlKSAmJiBmb2N1cyAhPSBpbnNwaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXMgPSBpbnNwaXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGRyZWFtKSAmJiBmb2N1cyAhPSBkcmVhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzID0gZHJlYW07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChjaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICBtb29uLnN0eWxlLmJvdHRvbSA9IG1vb25Cb3R0b20gKyAoKHdpbmRvdy5wYWdlWU9mZnNldC1tb29uLngtbW9vbi5oZWlnaHQpICogLjQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==