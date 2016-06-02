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
                    var outropanels = document.getElementsByClassName("outro-panel");
                    for (var i = 0; i < outropanels.length; i++) {
                        var panel = outropanels[i];
                        panel.style.height = viewportSize + "px";
                    }
                    window.addEventListener("resize", function (e) {
                        var multiplier = window.innerHeight / viewportSize;
                        ycheck = orgYCheck * multiplier;
                        _this.introContainer.style.height = viewportSize * multiplier + "px";
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
                        template: "\n        <div #image class=\"intro-container intro-image-container\" style=\"background-image: url('images/brian.jpg');\">\n            <img (load)=\"introImageLoaded(image)\" src='images/brian.jpg' style=\"display:none;\">\n\n            <div class=\"intro-icon-container\">\n\n                <img class=\"intro-icon\" src=\"images/brian-icon.png\">\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro1.jpg\">\n            <img #image3 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro2.jpg\">\n            <img #moon class=\"outro-image moon\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/moon.png\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire Individuality</h2>\n                        <p>Stand out from the rest of the crowd.</p>\n                        <p>Be the black sheep of the pack.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Dream Big</h2>\n                        <p>Aim high, and soar among the stars.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                        <p>The smallest ideas can have the biggest impact.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0RBO2dCQWVJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFaeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztvQkFFZixnQkFBVyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztnQkFXZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSztvQkFDbEIseUJBQXlCO29CQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDNUIsQ0FBQztvQkFDRCxJQUFJLEtBQUssQ0FBQztvQkFDVixFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDZixLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUNoQyxDQUFDO29CQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMvQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDbEMsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUs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RyxFQUFFLENBQUMsQ0FBQzt3QkFDcEYsQ0FBQztvQkFJTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQTlNTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixRQUFRLEVBQUcsMDREQTBDVjtxQkFDSixDQUFDOzt5QkFBQTtnQkFtS0YsWUFBQztZQUFELENBQUMsQUFqS0QsSUFpS0M7WUFqS0QseUJBaUtDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2ludHJvJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiAjaW1hZ2UgY2xhc3M9XCJpbnRyby1jb250YWluZXIgaW50cm8taW1hZ2UtY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9icmlhbi5qcGcnKTtcIj5cbiAgICAgICAgICAgIDxpbWcgKGxvYWQpPVwiaW50cm9JbWFnZUxvYWRlZChpbWFnZSlcIiBzcmM9J2ltYWdlcy9icmlhbi5qcGcnIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8taWNvbi1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbnRyby1pY29uXCIgc3JjPVwiaW1hZ2VzL2JyaWFuLWljb24ucG5nXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgI2ltYWdlMiBjbGFzcz1cIm91dHJvLWltYWdlXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvb3V0cm8xLmpwZ1wiPlxuICAgICAgICAgICAgPGltZyAjaW1hZ2UzIGNsYXNzPVwib3V0cm8taW1hZ2VcIiAobG9hZCk9XCJvdXRyb0ltYWdlTG9hZGVkKGltYWdlMiwgaW1hZ2UzLCBtb29uKVwiIHNyYz1cImltYWdlcy9vdXRybzIuanBnXCI+XG4gICAgICAgICAgICA8aW1nICNtb29uIGNsYXNzPVwib3V0cm8taW1hZ2UgbW9vblwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyLCBpbWFnZTMsIG1vb24pXCIgc3JjPVwiaW1hZ2VzL21vb24ucG5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWwgZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW50cm9cIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkluc3BpcmUgSW5kaXZpZHVhbGl0eTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TdGFuZCBvdXQgZnJvbSB0aGUgcmVzdCBvZiB0aGUgY3Jvd2QuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QmUgdGhlIGJsYWNrIHNoZWVwIG9mIHRoZSBwYWNrLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RHJlYW0gQmlnPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFpbSBoaWdoLCBhbmQgc29hciBhbW9uZyB0aGUgc3RhcnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNoYW5nZSB0aGUgV29ybGQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHNtYWxsZXN0IGlkZWFzIGNhbiBoYXZlIHRoZSBiaWdnZXN0IGltcGFjdC48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnRybyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW50cm9JbWFnZTtcbiAgICBvdXRyb0ltYWdlO1xuICAgIGxvYWRlZCA9IGZhbHNlO1xuXG4gICAgbG9hZGVkQ291bnQgPSAwO1xuICAgIGltYWdlQ291bnQgPSA0O1xuXG4gICAgaW50cm9Db250YWluZXI7XG5cbiAgICBpbnRyb0ltYWdlMTtcbiAgICBvdXRyb0ltYWdlMTtcbiAgICBvdXRyb0ltYWdlMjtcbiAgICBtb29uO1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cblxuICAgIGludHJvSW1hZ2VMb2FkZWQoaW1hZ2UpIHtcbiAgICAgICAgLy9QYXJhbGxheCBpbXBsZW1lbnRhdGlvblxuICAgICAgICB0aGlzLmludHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGltYWdlLnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW50cm87XG4gICAgICAgIGlmKGludHJvID09IG51bGwpIHtcbiAgICAgICAgICAgIGludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIHRoaXMuaW50cm9Db250YWluZXIgPSBpbnRybztcbiAgICAgICAgfVxuICAgICAgICBpbnRyby5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGludHJvICYmIG1lLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0KGludHJvKSkge1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IC0xICogd2luZG93LnBhZ2VZT2Zmc2V0ICogLjMgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQrKztcblxuICAgICAgICBpZih0aGlzLmxvYWRlZENvdW50ID09IHRoaXMuaW1hZ2VDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5hbGxMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UsIGRyZWFtSW1hZ2UsIG1vb24pIHtcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcblxuICAgICAgICB0aGlzLm91dHJvSW1hZ2UxID0gaW1hZ2U7XG4gICAgICAgIHRoaXMub3V0cm9JbWFnZTIgPSBkcmVhbUltYWdlO1xuICAgICAgICB0aGlzLm1vb24gPSBtb29uO1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50Kys7XG5cbiAgICAgICAgaWYodGhpcy5sb2FkZWRDb3VudCA9PSB0aGlzLmltYWdlQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxMb2FkZWQgKCkge1xuICAgICAgICBpZih0aGlzLmxvYWRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgdmFyIGluc3BpcmVJbWFnZSA9IHRoaXMub3V0cm9JbWFnZTE7XG4gICAgICAgIHZhciBkcmVhbUltYWdlID0gdGhpcy5vdXRyb0ltYWdlMjtcbiAgICAgICAgdmFyIG1vb24gPSB0aGlzLm1vb247XG5cbiAgICAgICAgaWYoIWluc3BpcmVJbWFnZSB8fCAhZHJlYW1JbWFnZSkgcmV0dXJuO1xuXG5cbiAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdmFyIG1vb25Cb3R0b20gPSAwO1xuICAgICAgICBtb29uLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XG4gICAgICAgIHZhciBpbnNwaXJlSW1hZ2VUb3AgPSAwLCBpbnNwaXJlSW1hZ2VMZWZ0PTA7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGluc3BpcmVJbWFnZS5zdHlsZS50b3AgPT0gXCJcIikge1xuICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciB5Y2hlY2sgPSBpbnNwaXJlSW1hZ2UueTtcbiAgICAgICAgdmFyIG9yZ1lDaGVjayA9IHljaGVjaztcbiAgICAgICAgdmFyIG91dHJvO1xuICAgICAgICB2YXIgaW5zcGlyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVswXTtcbiAgICAgICAgdmFyIGRyZWFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzFdO1xuICAgICAgICB2YXIgY2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWlubmVyLXBhbmVsXCIpWzJdO1xuICAgICAgICB2YXIgaXNJblZpZXdwb3J0ID0gdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydDtcbiAgICAgICAgdmFyIGZvY3VzID0gaW5zcGlyZTtcbiAgICAgICAgdmFyIHByZXZPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgc2Nyb2xsID0gXCJcIjtcbiAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICB2YXIgb3V0cm9wYW5lbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8tcGFuZWxcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0cm9wYW5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYW5lbDphbnkgPSBvdXRyb3BhbmVsc1tpXTtcbiAgICAgICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSArIFwicHhcIjtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHZhciBtdWx0aXBsaWVyID0gd2luZG93LmlubmVySGVpZ2h0IC8gdmlld3BvcnRTaXplO1xuICAgICAgICAgICAgeWNoZWNrID0gb3JnWUNoZWNrICogbXVsdGlwbGllcjtcbiAgICAgICAgICAgIHRoaXMuaW50cm9Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRTaXplKm11bHRpcGxpZXIgKyBcInB4XCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHJvcGFuZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhbmVsOmFueSA9IG91dHJvcGFuZWxzW2ldO1xuICAgICAgICAgICAgICAgIHBhbmVsLnN0eWxlLmhlaWdodCA9IHZpZXdwb3J0U2l6ZSptdWx0aXBsaWVyICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZWN0ID0gaW5zcGlyZUltYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4gcHJldk9mZnNldCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCA9IFwiZG93blwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsID0gXCJ1cFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldk9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGlmKG91dHJvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1jb250YWluZXJcIilbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG91dHJvICYmIGlzSW5WaWV3cG9ydChvdXRybykpIHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgPiB5Y2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaW5zcGlyZUltYWdlLnN0eWxlLnRvcCA9IGluc3BpcmVJbWFnZVRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQgLSB5Y2hlY2spICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBpbnNwaXJlSW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA8IHljaGVjaykge1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGluc3BpcmVJbWFnZS5zdHlsZS5sZWZ0ID0gaW5zcGlyZUltYWdlTGVmdCAtICh3aW5kb3cucGFnZVlPZmZzZXQgKiAuMSkgKyAncHgnO1xuICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUubGVmdCA9IGluc3BpcmVJbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjA1KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzY3JvbGwgPT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGluc3BpcmUpICYmIGZvY3VzICE9IGluc3BpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXMgPSBpbnNwaXJlO1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGRyZWFtKSAmJiBmb2N1cyAhPSBkcmVhbSkge1xuICAgICAgICAgICAgICAgICAgICBmb2N1cyA9IGRyZWFtO1xuICAgICAgICAgICAgICAgICAgICBpbnNwaXJlSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihpc0luVmlld3BvcnQoY2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIG1vb24uc3R5bGUuYm90dG9tID0gbW9vbkJvdHRvbSArICgod2luZG93LnBhZ2VZT2Zmc2V0LW1vb24ueC1tb29uLmhlaWdodCkgKiAuNCk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19