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
                    //Parallax implementation
                    this.introImage1 = image;
                    var me = this;
                    if (image.style.top == "") {
                        image.style.top = '0px';
                    }
                    var intro;
                    if (intro == null) {
                        intro = document.getElementsByClassName("intro-container")[0];
                        this.introContainer = intro;
                    }
                    intro.style.height = window.innerHeight + "px";
                    document.addEventListener("scroll", function (e) {
                        if (intro && me.scrollingService.isInViewport(intro)) {
                            image.style.bottom = -1 * window.pageYOffset * .3 + "px";
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
                    window.addEventListener("resize", function (e) {
                        var multiplier = window.innerHeight / viewportSize;
                        ycheck = orgYCheck * multiplier;
                        _this.introContainer.style.height = viewportSize + "px";
                    });
                    document.addEventListener("scroll", function (e) {
                        var rect = inspireImage.getBoundingClientRect();
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
                            if (window.pageYOffset > ycheck) {
                                inspireImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                                dreamImage.style.top = inspireImageTop + (window.pageYOffset - ycheck) + 'px';
                            }
                            else if (window.pageYOffset < ycheck) {
                                inspireImage.style.top = "0px";
                                dreamImage.style.top = "0px";
                            }
                            inspireImage.style.left = inspireImageLeft - (window.pageYOffset * .1) + 'px';
                            dreamImage.style.left = inspireImageLeft - (window.pageYOffset * .05) + 'px';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQWVJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFaeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixnQkFBVyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztnQkFXZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIseUJBQXlCO29CQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDNUIsQ0FBQztvQkFDRCxJQUFJLEtBQUssQ0FBQztvQkFDVixFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDZixLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUNoQyxDQUFDO29CQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMvQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDbEMsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUs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Qzs0QkFDRixFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ3ZDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0NBQ2QsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dDQUMvQixVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ2pDLENBQUM7d0JBQ0wsQ0FBQzt3QkFFRCxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3BGLENBQUM7b0JBSUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFyTUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsT0FBTzt3QkFDbEIsUUFBUSxFQUFHLDY3REEyQ1Y7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBeUpGLFlBQUM7WUFBRCxDQUFDLEFBdkpELElBdUpDO1lBdkpELHlCQXVKQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdpbnRybycsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgI2ltYWdlIGNsYXNzPVwiaW50cm8taW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9icmlhbi5qcGcnKTtcIj5cbiAgICAgICAgICAgICAgICA8aW1nIChsb2FkKT1cImludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpXCIgc3JjPSdpbWFnZXMvYnJpYW4uanBnJyBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWljb24tY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW50cm8taWNvblwiIHNyYz1cImltYWdlcy9icmlhbi1pY29uLnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZTIgY2xhc3M9XCJvdXRyby1pbWFnZVwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL291dHJvMS5qcGdcIj5cbiAgICAgICAgICAgIDxpbWcgI2ltYWdlMyBjbGFzcz1cIm91dHJvLWltYWdlXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvb3V0cm8yLmpwZ1wiPlxuICAgICAgICAgICAgPGltZyAjbW9vbiBjbGFzcz1cIm91dHJvLWltYWdlIG1vb25cIiAobG9hZCk9XCJvdXRyb0ltYWdlTG9hZGVkKGltYWdlMiwgaW1hZ2UzLCBtb29uKVwiIHNyYz1cImltYWdlcy9tb29uLnBuZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsIGZpcnN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWludHJvXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RhbmQgb3V0IGZyb20gdGhlIHJlc3Qgb2YgdGhlIGNyb3dkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJlIHRoZSBibGFjayBzaGVlcCBvZiB0aGUgcGFjay48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRyZWFtIEJpZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BaW0gaGlnaCwgYW5kIHNvYXIgYW1vbmcgdGhlIHN0YXJzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGFuZ2UgdGhlIFdvcmxkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBzbWFsbGVzdCBpZGVhcyBjYW4gaGF2ZSB0aGUgYmlnZ2VzdCBpbXBhY3QuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSW50cm8gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGludHJvSW1hZ2U7XG4gICAgb3V0cm9JbWFnZTtcbiAgICBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGxvYWRlZENvdW50ID0gMDtcbiAgICBpbWFnZUNvdW50ID0gNDtcblxuICAgIGludHJvQ29udGFpbmVyO1xuXG4gICAgaW50cm9JbWFnZTE7XG4gICAgb3V0cm9JbWFnZTE7XG4gICAgb3V0cm9JbWFnZTI7XG4gICAgbW9vbjtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICB9XG5cbiAgICBpbnRyb0ltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgICAgIC8vUGFyYWxsYXggaW1wbGVtZW50YXRpb25cbiAgICAgICAgdGhpcy5pbnRyb0ltYWdlMSA9IGltYWdlO1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZihpbWFnZS5zdHlsZS50b3AgPT0gXCJcIikge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGludHJvO1xuICAgICAgICBpZihpbnRybyA9PSBudWxsKSB7XG4gICAgICAgICAgICBpbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbnRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICB0aGlzLmludHJvQ29udGFpbmVyID0gaW50cm87XG4gICAgICAgIH1cbiAgICAgICAgaW50cm8uc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihpbnRybyAmJiBtZS5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydChpbnRybykpIHtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSAtMSAqIHdpbmRvdy5wYWdlWU9mZnNldCAqIC4zICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XG5cbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRyb0ltYWdlTG9hZGVkKGltYWdlLCBkcmVhbUltYWdlLCBtb29uKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGVkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5vdXRyb0ltYWdlMSA9IGltYWdlO1xuICAgICAgICB0aGlzLm91dHJvSW1hZ2UyID0gZHJlYW1JbWFnZTtcbiAgICAgICAgdGhpcy5tb29uID0gbW9vbjtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCsrO1xuXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQ291bnQgPT0gdGhpcy5pbWFnZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmFsbExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsTG9hZGVkICgpIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIHZhciBpbnNwaXJlSW1hZ2UgPSB0aGlzLm91dHJvSW1hZ2UxO1xuICAgICAgICB2YXIgZHJlYW1JbWFnZSA9IHRoaXMub3V0cm9JbWFnZTI7XG4gICAgICAgIHZhciBtb29uID0gdGhpcy5tb29uO1xuXG4gICAgICAgIGlmKCFpbnNwaXJlSW1hZ2UgfHwgIWRyZWFtSW1hZ2UpIHJldHVybjtcblxuXG4gICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHZhciBtb29uQm90dG9tID0gMDtcbiAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICB2YXIgaW5zcGlyZUltYWdlVG9wID0gMCwgaW5zcGlyZUltYWdlTGVmdD0wO1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZihpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID09IFwiXCIpIHtcbiAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeWNoZWNrID0gaW5zcGlyZUltYWdlLnk7XG4gICAgICAgIHZhciBvcmdZQ2hlY2sgPSB5Y2hlY2s7XG4gICAgICAgIHZhciBvdXRybztcbiAgICAgICAgdmFyIGluc3BpcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMF07XG4gICAgICAgIHZhciBkcmVhbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVsxXTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVsyXTtcbiAgICAgICAgdmFyIGlzSW5WaWV3cG9ydCA9IHRoaXMuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQ7XG4gICAgICAgIHZhciBmb2N1cyA9IGluc3BpcmU7XG4gICAgICAgIHZhciBwcmV2T2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIHNjcm9sbCA9IFwiXCI7XG5cbiAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gdmlld3BvcnRTaXplO1xuICAgICAgICAgICAgeWNoZWNrID0gb3JnWUNoZWNrICogbXVsdGlwbGllcjtcbiAgICAgICAgICAgIHRoaXMuaW50cm9Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplICsgXCJweFwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZWN0ID0gaW5zcGlyZUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4gcHJldk9mZnNldCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCA9IFwiZG93blwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gXCJ1cFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgICAgICAgICAgaWYob3V0cm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3V0cm8gJiYgaXNJblZpZXdwb3J0KG91dHJvKSkge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHljaGVjaykge1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gaW5zcGlyZUltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYod2luZG93LnBhZ2VZT2Zmc2V0IDwgeWNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLmxlZnQgPSBpbnNwaXJlSW1hZ2VMZWZ0IC0gKHdpbmRvdy5wYWdlWU9mZnNldCAqIC4xKSArICdweCc7XG4gICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5sZWZ0ID0gaW5zcGlyZUltYWdlTGVmdCAtICh3aW5kb3cucGFnZVlPZmZzZXQgKiAuMDUpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNjcm9sbCA9PSBcInVwXCIpIHtcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQoaW5zcGlyZSkgJiYgZm9jdXMgIT0gaW5zcGlyZSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1cyA9IGluc3BpcmU7XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQoZHJlYW0pICYmIGZvY3VzICE9IGRyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzID0gZHJlYW07XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChjaGFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBtb29uQm90dG9tICsgKCh3aW5kb3cucGFnZVlPZmZzZXQtbW9vbi54LW1vb24uaGVpZ2h0KSAqIC40KTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=