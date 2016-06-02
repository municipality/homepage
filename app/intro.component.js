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
                    if (image.style.top == "") {
                        image.style.top = '0px';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbURBO2dCQWVJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFaeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixnQkFBVyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztnQkFXZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIsNkJBQTZCO29CQUM3QixRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBS25FLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQzVCLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FB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QUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7NEJBQ2pDLENBQUM7d0JBQ0wsQ0FBQzt3QkFFRCxFQUFFLENBQUEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQ3BGLENBQUM7b0JBSUwsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkF2Tkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsT0FBTzt3QkFDbEIsUUFBUSxFQUFHLDY3REEyQ1Y7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBMktGLFlBQUM7WUFBRCxDQUFDLEFBektELElBeUtDO1lBektELHlCQXlLQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdpbnRybycsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgI2ltYWdlIGNsYXNzPVwiaW50cm8taW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9icmlhbi5qcGcnKTtcIj5cbiAgICAgICAgICAgICAgICA8aW1nIChsb2FkKT1cImludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpXCIgc3JjPSdpbWFnZXMvYnJpYW4uanBnJyBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWljb24tY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW50cm8taWNvblwiIHNyYz1cImltYWdlcy9icmlhbi1pY29uLnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZTIgY2xhc3M9XCJvdXRyby1pbWFnZVwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL291dHJvMS5qcGdcIj5cbiAgICAgICAgICAgIDxpbWcgI2ltYWdlMyBjbGFzcz1cIm91dHJvLWltYWdlXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvb3V0cm8yLmpwZ1wiPlxuICAgICAgICAgICAgPGltZyAjbW9vbiBjbGFzcz1cIm91dHJvLWltYWdlIG1vb25cIiAobG9hZCk9XCJvdXRyb0ltYWdlTG9hZGVkKGltYWdlMiwgaW1hZ2UzLCBtb29uKVwiIHNyYz1cImltYWdlcy9tb29uLnBuZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsIGZpcnN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWludHJvXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3RhbmQgb3V0IGZyb20gdGhlIHJlc3Qgb2YgdGhlIGNyb3dkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkJlIHRoZSBibGFjayBzaGVlcCBvZiB0aGUgcGFjay48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkRyZWFtIEJpZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BaW0gaGlnaCwgYW5kIHNvYXIgYW1vbmcgdGhlIHN0YXJzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DaGFuZ2UgdGhlIFdvcmxkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBzbWFsbGVzdCBpZGVhcyBjYW4gaGF2ZSB0aGUgYmlnZ2VzdCBpbXBhY3QuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSW50cm8gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGludHJvSW1hZ2U7XG4gICAgb3V0cm9JbWFnZTtcbiAgICBsb2FkZWQgPSBmYWxzZTtcblxuICAgIGxvYWRlZENvdW50ID0gMDtcbiAgICBpbWFnZUNvdW50ID0gNDtcblxuICAgIGludHJvQ29udGFpbmVyO1xuXG4gICAgaW50cm9JbWFnZTE7XG4gICAgb3V0cm9JbWFnZTE7XG4gICAgb3V0cm9JbWFnZTI7XG4gICAgbW9vbjtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICB9XG5cbiAgICBpbnRyb0ltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgICAgIC8vR2V0IHJpZCBvZiBhcHAgbG9hZGluZyBtYXNrXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWxvYWRpbmctbWFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cblxuXG5cbiAgICAgICAgLy9QYXJhbGxheCBpbXBsZW1lbnRhdGlvblxuICAgICAgICB0aGlzLmludHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGltYWdlLnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW50cm87XG4gICAgICAgIGlmKGludHJvID09IG51bGwpIHtcbiAgICAgICAgICAgIGludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIHRoaXMuaW50cm9Db250YWluZXIgPSBpbnRybztcbiAgICAgICAgfVxuICAgICAgICBpbnRyby5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoaW50cm8gJiYgbWUuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQoaW50cm8pKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYm90dG9tID0gLTEgKiB3aW5kb3cucGFnZVlPZmZzZXQgKiAuMyArIFwicHhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCsrO1xuXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQ291bnQgPT0gdGhpcy5pbWFnZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmFsbExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3V0cm9JbWFnZUxvYWRlZChpbWFnZSwgZHJlYW1JbWFnZSwgbW9vbikge1xuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub3V0cm9JbWFnZTEgPSBpbWFnZTtcbiAgICAgICAgdGhpcy5vdXRyb0ltYWdlMiA9IGRyZWFtSW1hZ2U7XG4gICAgICAgIHRoaXMubW9vbiA9IG1vb247XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcblxuICAgICAgICBpZih0aGlzLmxvYWRlZENvdW50ID09IHRoaXMuaW1hZ2VDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5hbGxMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbExvYWRlZCAoKSB7XG4gICAgICAgIGlmKHRoaXMubG9hZGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICB2YXIgaW5zcGlyZUltYWdlID0gdGhpcy5vdXRyb0ltYWdlMTtcbiAgICAgICAgdmFyIGRyZWFtSW1hZ2UgPSB0aGlzLm91dHJvSW1hZ2UyO1xuICAgICAgICB2YXIgbW9vbiA9IHRoaXMubW9vbjtcblxuICAgICAgICBpZighaW5zcGlyZUltYWdlIHx8ICFkcmVhbUltYWdlKSByZXR1cm47XG5cblxuICAgICAgICBkcmVhbUltYWdlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB2YXIgbW9vbkJvdHRvbSA9IDA7XG4gICAgICAgIG1vb24uc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgdmFyIGluc3BpcmVJbWFnZVRvcCA9IDAsIGluc3BpcmVJbWFnZUxlZnQ9MDtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYoaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHljaGVjayA9IGluc3BpcmVJbWFnZS55O1xuICAgICAgICB2YXIgb3JnWUNoZWNrID0geWNoZWNrO1xuICAgICAgICB2YXIgb3V0cm87XG4gICAgICAgIHZhciBpbnNwaXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzBdO1xuICAgICAgICB2YXIgZHJlYW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMV07XG4gICAgICAgIHZhciBjaGFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMl07XG4gICAgICAgIHZhciBpc0luVmlld3BvcnQgPSB0aGlzLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0O1xuICAgICAgICB2YXIgZm9jdXMgPSBpbnNwaXJlO1xuICAgICAgICB2YXIgcHJldk9mZnNldCA9IDA7XG4gICAgICAgIHZhciBzY3JvbGwgPSBcIlwiO1xuICAgICAgICB2YXIgdmlld3BvcnRTaXplID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIHZhciBvdXRyb3BhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1wYW5lbFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRyb3BhbmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhbmVsOmFueSA9IG91dHJvcGFuZWxzW2ldO1xuICAgICAgICAgICAgcGFuZWwuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplICsgXCJweFwiO1xuICAgICAgICB9XG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdmFyIG11bHRpcGxpZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyB2aWV3cG9ydFNpemU7XG4gICAgICAgICAgICB5Y2hlY2sgPSBvcmdZQ2hlY2sgKiBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgdGhpcy5pbnRyb0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUqbXVsdGlwbGllciArIFwicHhcIjtcbiAgICAgICAgICAgIHRoaXMuaW50cm9JbWFnZTEuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplKm11bHRpcGxpZXIgKyBcInB4XCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHJvcGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhbmVsOmFueSA9IG91dHJvcGFuZWxzW2ldO1xuICAgICAgICAgICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSptdWx0aXBsaWVyICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZWN0ID0gaW5zcGlyZUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4gcHJldk9mZnNldCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCA9IFwiZG93blwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gXCJ1cFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGlmKG91dHJvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG91dHJvICYmIGlzSW5WaWV3cG9ydChvdXRybykpIHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiB5Y2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBpbnNwaXJlSW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA8IHljaGVjaykge1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5sZWZ0ID0gaW5zcGlyZUltYWdlTGVmdCAtICh3aW5kb3cucGFnZVlPZmZzZXQgKiAuMSkgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUubGVmdCA9IGluc3BpcmVJbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjEpICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHNjcm9sbCA9PSBcInVwXCIpIHtcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQoaW5zcGlyZSkgJiYgZm9jdXMgIT0gaW5zcGlyZSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1cyA9IGluc3BpcmU7XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQoZHJlYW0pICYmIGZvY3VzICE9IGRyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzID0gZHJlYW07XG4gICAgICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGlzSW5WaWV3cG9ydChjaGFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBtb29uQm90dG9tICsgKCh3aW5kb3cucGFnZVlPZmZzZXQtbW9vbi54LW1vb24uaGVpZ2h0KSAqIC40KTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=