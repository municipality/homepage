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
                        template: "\n        <div class=\"intro-container\">\n            <div #image class=\"intro-image-container\" style=\"background-image: url('images/brian3.jpg');\">\n                <img (load)=\"introImageLoaded(image)\" src='images/brian.jpg' style=\"display:none;\">\n            </div>\n            <div class=\"intro-icon-container\">\n\n                <img class=\"intro-icon\" src=\"images/brian-icon.png\">\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro1.jpg\">\n            <img #image3 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro2.jpg\">\n            <img #moon class=\"outro-image moon\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/moon.png\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire Individuality</h2>\n                        <p>Stand out from the rest of the crowd.</p>\n                        <p>Be the black sheep of the pack.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Dream Big</h2>\n                        <p>Aim high, and soar among the stars.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                        <p>The smallest ideas can have the biggest impact.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQWVJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFaeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixnQkFBVyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztnQkFXZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIsNkJBQTZCO29CQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ25FLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FB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LFFBQVEsRUFBRyw4N0RBMkNWO3FCQUNKLENBQUM7O3lCQUFBO2dCQXdMRixZQUFDO1lBQUQsQ0FBQyxBQXRMRCxJQXNMQztZQXRMRCx5QkFzTEMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdpbnRybycsXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgI2ltYWdlIGNsYXNzPVwiaW50cm8taW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9icmlhbjMuanBnJyk7XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIChsb2FkKT1cImludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpXCIgc3JjPSdpbWFnZXMvYnJpYW4uanBnJyBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1pY29uLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbnRyby1pY29uXCIgc3JjPVwiaW1hZ2VzL2JyaWFuLWljb24ucG5nXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGltZyAjaW1hZ2UyIGNsYXNzPVwib3V0cm8taW1hZ2VcIiAobG9hZCk9XCJvdXRyb0ltYWdlTG9hZGVkKGltYWdlMiwgaW1hZ2UzLCBtb29uKVwiIHNyYz1cImltYWdlcy9vdXRybzEuanBnXCI+XHJcbiAgICAgICAgICAgIDxpbWcgI2ltYWdlMyBjbGFzcz1cIm91dHJvLWltYWdlXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvb3V0cm8yLmpwZ1wiPlxyXG4gICAgICAgICAgICA8aW1nICNtb29uIGNsYXNzPVwib3V0cm8taW1hZ2UgbW9vblwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL21vb24ucG5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbCBmaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWludHJvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+SW5zcGlyZSBJbmRpdmlkdWFsaXR5PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RhbmQgb3V0IGZyb20gdGhlIHJlc3Qgb2YgdGhlIGNyb3dkLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmUgdGhlIGJsYWNrIHNoZWVwIG9mIHRoZSBwYWNrLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EcmVhbSBCaWc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BaW0gaGlnaCwgYW5kIHNvYXIgYW1vbmcgdGhlIHN0YXJzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSB0aGUgV29ybGQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgc21hbGxlc3QgaWRlYXMgY2FuIGhhdmUgdGhlIGJpZ2dlc3QgaW1wYWN0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRybyBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpbnRyb0ltYWdlO1xyXG4gICAgb3V0cm9JbWFnZTtcclxuICAgIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGxvYWRlZENvdW50ID0gMDtcclxuICAgIGltYWdlQ291bnQgPSA0O1xyXG5cclxuICAgIGludHJvQ29udGFpbmVyO1xyXG5cclxuICAgIGludHJvSW1hZ2UxO1xyXG4gICAgb3V0cm9JbWFnZTE7XHJcbiAgICBvdXRyb0ltYWdlMjtcclxuICAgIG1vb247XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbnRyb0ltYWdlTG9hZGVkKGltYWdlKSB7XHJcbiAgICAgICAgLy9HZXQgcmlkIG9mIGFwcCBsb2FkaW5nIG1hc2tcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vUGFyYWxsYXggaW1wbGVtZW50YXRpb25cclxuICAgICAgICB0aGlzLmludHJvSW1hZ2UxID0gaW1hZ2U7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBpZihpbWFnZS5zdHlsZS5ib3R0b20gPT0gXCJcIikge1xyXG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSAnMHB4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGludHJvO1xyXG4gICAgICAgIGlmKGludHJvID09IG51bGwpIHtcclxuICAgICAgICAgICAgaW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50cm8tY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmludHJvQ29udGFpbmVyID0gaW50cm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGludHJvLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihpbnRybyAmJiBtZS5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydChpbnRybykpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9ICgtMSAqIE1hdGguZmxvb3Iod2luZG93LnBhZ2VZT2Zmc2V0ICogLjMpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQ291bnQgPT0gdGhpcy5pbWFnZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UsIGRyZWFtSW1hZ2UsIG1vb24pIHtcclxuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm91dHJvSW1hZ2UxID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy5vdXRyb0ltYWdlMiA9IGRyZWFtSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5tb29uID0gbW9vbjtcclxuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQ291bnQgPT0gdGhpcy5pbWFnZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFsbExvYWRlZCAoKSB7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBpbnNwaXJlSW1hZ2UgPSB0aGlzLm91dHJvSW1hZ2UxO1xyXG4gICAgICAgIHZhciBkcmVhbUltYWdlID0gdGhpcy5vdXRyb0ltYWdlMjtcclxuICAgICAgICB2YXIgbW9vbiA9IHRoaXMubW9vbjtcclxuXHJcbiAgICAgICAgaWYoIWluc3BpcmVJbWFnZSB8fCAhZHJlYW1JbWFnZSkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB2YXIgbW9vbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgICAgIHZhciBpbnNwaXJlSW1hZ2VUb3AgPSAwLCBpbnNwaXJlSW1hZ2VMZWZ0PTA7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICBpZihpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID09IFwiXCIpIHtcclxuICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB5Y2hlY2sgPSBpbnNwaXJlSW1hZ2UueTtcclxuICAgICAgICB2YXIgb3JnWUNoZWNrID0geWNoZWNrO1xyXG4gICAgICAgIHZhciBvdXRybztcclxuICAgICAgICB2YXIgaW5zcGlyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVswXTtcclxuICAgICAgICB2YXIgZHJlYW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMV07XHJcbiAgICAgICAgdmFyIGNoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVsyXTtcclxuICAgICAgICB2YXIgaXNJblZpZXdwb3J0ID0gdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydDtcclxuICAgICAgICB2YXIgZm9jdXMgPSBpbnNwaXJlO1xyXG4gICAgICAgIHZhciBwcmV2T2Zmc2V0ID0gMDtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gXCJcIjtcclxuICAgICAgICB2YXIgdmlld3BvcnRTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICB2YXIgb3V0cm9wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8tcGFuZWxcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRyb3BhbmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGFuZWw6YW55ID0gb3V0cm9wYW5lbHNbaV07XHJcbiAgICAgICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSArIFwicHhcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbXVsdGlwbGllciA9IHdpbmRvdy5pbm5lckhlaWdodCAvIHZpZXdwb3J0U2l6ZTtcclxuICAgICAgICAgICAgeWNoZWNrID0gb3JnWUNoZWNrICogbXVsdGlwbGllcjtcclxuICAgICAgICAgICAgdGhpcy5pbnRyb0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUqbXVsdGlwbGllciArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5pbnRyb0ltYWdlMS5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUqbXVsdGlwbGllciArIFwicHhcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRyb3BhbmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhbmVsOmFueSA9IG91dHJvcGFuZWxzW2ldO1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplKm11bHRpcGxpZXIgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy92YXIgcmVjdCA9IGluc3BpcmVJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4gcHJldk9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gXCJkb3duXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSBcInVwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldk9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAgICAgaWYob3V0cm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgb3V0cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8tY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvdXRybykge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KG91dHJvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG91dHJvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPSBpbnNwaXJlSW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUudG9wID0gaW5zcGlyZUltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHljaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gaW5zcGlyZUltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3aW5kb3cucGFnZVlPZmZzZXQgPCB5Y2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUubGVmdCA9IGluc3BpcmVJbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjEpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUubGVmdCA9IGluc3BpcmVJbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjEpICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzY3JvbGwgPT0gXCJ1cFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQoaW5zcGlyZSkgJiYgZm9jdXMgIT0gaW5zcGlyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzID0gaW5zcGlyZTtcclxuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChkcmVhbSkgJiYgZm9jdXMgIT0gZHJlYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb2N1cyA9IGRyZWFtO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0luVmlld3BvcnQoY2hhbmdlKSkge1xyXG4gICAgICAgICAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBtb29uQm90dG9tICsgKCh3aW5kb3cucGFnZVlPZmZzZXQtbW9vbi54LW1vb24uaGVpZ2h0KSAqIC40KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=