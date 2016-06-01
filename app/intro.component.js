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
                        template: "\n        <div class=\"intro-container\">\n            <img #image (load)=\"imageLoaded(image)\" class=\"intro-image\" src=\"images/brickwall3.jpg\">\n            <div class=\"intro-icon-container\">\n            \n                <img class=\"intro-icon\" src=\"images/brian-icon.png\">\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2, image3, moon)\" src=\"images/outro1.jpg\">\n            <img #image3 class=\"outro-image\" src=\"images/outro2.jpg\">\n            <img #moon class=\"outro-image moon\" src=\"images/moon.png\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Inspire Individuality</h2>\n                        <p>Stand out from the rest of the crowd.</p>\n                        <p>Be the black sheep of the pack.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                    <div>\n                        <h2>Dream Big</h2>\n                        <p>Aim high, and soar among the stars.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n                    <div>\n                        <h2>Change the World</h2>\n                        <p>The smallest ideas can have the biggest impact.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaURBO2dCQUlJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFEeEQsV0FBTSxHQUFHLEtBQUssQ0FBQztnQkFHZixDQUFDO2dCQUVELHdCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFFRCwyQkFBVyxHQUFYLFVBQVksS0FBSztvQkFDYix5QkFBeUI7b0JBRXpCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsSUFBSSxLQUFLLENBQUM7b0JBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFDO3dCQUNsQyxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDZixLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xFLENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNsRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7d0JBQzdELENBQUM7b0JBRUws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QUFDO3dCQUNMLENBQUM7d0JBRUQsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO3dCQUNwRixDQUFDO29CQUlMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBckpMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFFBQVEsRUFBRyxxdURBeUNWO3FCQUNKLENBQUM7O3lCQUFBO2dCQTJHRixZQUFDO1lBQUQsQ0FBQyxBQXpHRCxJQXlHQztZQXpHRCx5QkF5R0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW50cm8nLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZSAobG9hZCk9XCJpbWFnZUxvYWRlZChpbWFnZSlcIiBjbGFzcz1cImludHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2JyaWNrd2FsbDMuanBnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8taWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbnRyby1pY29uXCIgc3JjPVwiaW1hZ2VzL2JyaWFuLWljb24ucG5nXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgI2ltYWdlMiBjbGFzcz1cIm91dHJvLWltYWdlXCIgKGxvYWQpPVwib3V0cm9JbWFnZUxvYWRlZChpbWFnZTIsIGltYWdlMywgbW9vbilcIiBzcmM9XCJpbWFnZXMvb3V0cm8xLmpwZ1wiPlxuICAgICAgICAgICAgPGltZyAjaW1hZ2UzIGNsYXNzPVwib3V0cm8taW1hZ2VcIiBzcmM9XCJpbWFnZXMvb3V0cm8yLmpwZ1wiPlxuICAgICAgICAgICAgPGltZyAjbW9vbiBjbGFzcz1cIm91dHJvLWltYWdlIG1vb25cIiBzcmM9XCJpbWFnZXMvbW9vbi5wbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbCBmaXJzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbnRyb1wiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+SW5zcGlyZSBJbmRpdmlkdWFsaXR5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN0YW5kIG91dCBmcm9tIHRoZSByZXN0IG9mIHRoZSBjcm93ZC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5CZSB0aGUgYmxhY2sgc2hlZXAgb2YgdGhlIHBhY2suPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIGxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EcmVhbSBCaWc8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWltIGhpZ2gsIGFuZCBzb2FyIGFtb25nIHRoZSBzdGFycy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q2hhbmdlIHRoZSBXb3JsZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgc21hbGxlc3QgaWRlYXMgY2FuIGhhdmUgdGhlIGJpZ2dlc3QgaW1wYWN0LjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEludHJvIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbnRyb0ltYWdlO1xuICAgIG91dHJvSW1hZ2U7XG4gICAgbG9hZGVkID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cblxuICAgIGltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgICAgIC8vUGFyYWxsYXggaW1wbGVtZW50YXRpb25cblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZihpbWFnZS5zdHlsZS5ib3R0b20gPT0gXCJcIikge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGludHJvO1xuICAgICAgICB0aGlzLmludHJvSW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoaW50cm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGludHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImludHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGludHJvICYmIG1lLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0KGludHJvKSkge1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IC0xICogd2luZG93LnBhZ2VZT2Zmc2V0ICogLjIgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3V0cm9JbWFnZUxvYWRlZChpbWFnZSwgZHJlYW1JbWFnZSwgbW9vbikge1xuICAgICAgICBpZighaW1hZ2UgfHwgIWRyZWFtSW1hZ2UpIHJldHVybjtcbiAgICAgICAgaWYodGhpcy5sb2FkZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIGRyZWFtSW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHZhciBtb29uQm90dG9tID0gMDtcbiAgICAgICAgbW9vbi5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgICAgICB2YXIgaW1hZ2VUb3AgPSAwLCBpbWFnZUxlZnQ9MDtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYoaW1hZ2Uuc3R5bGUudG9wID09IFwiXCIpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUubGVmdCA9IFwiMHB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHljaGVjayA9IGltYWdlLnk7XG4gICAgICAgIHZhciBvdXRybztcbiAgICAgICAgdmFyIGluc3BpcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8taW5uZXItcGFuZWxcIilbMF07XG4gICAgICAgIHZhciBkcmVhbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVsxXTtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvdXRyby1pbm5lci1wYW5lbFwiKVsyXTtcbiAgICAgICAgdmFyIGlzSW5WaWV3cG9ydCA9IHRoaXMuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQ7XG4gICAgICAgIHZhciBmb2N1cyA9IGluc3BpcmU7XG4gICAgICAgIHZhciBwcmV2T2Zmc2V0ID0gMDtcbiAgICAgICAgdmFyIHNjcm9sbCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHByZXZPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSBcImRvd25cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbCA9IFwidXBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzY3JvbGwpO1xuXG4gICAgICAgICAgICBpZihvdXRybyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3V0cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3V0cm8tY29udGFpbmVyXCIpWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvdXRybyAmJiBpc0luVmlld3BvcnQob3V0cm8pKSB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID4geWNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRvcCA9IGltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLnRvcCA9IGltYWdlVG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIHljaGVjaykgKyAncHgnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3aW5kb3cucGFnZVlPZmZzZXQgPCB5Y2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmxlZnQgPSBpbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjEpICsgJ3B4JztcbiAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLmxlZnQgPSBpbWFnZUxlZnQgLSAod2luZG93LnBhZ2VZT2Zmc2V0ICogLjA1KSArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzY3JvbGwgPT0gXCJ1cFwiKSB7XG4gICAgICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGluc3BpcmUpICYmIGZvY3VzICE9IGluc3BpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXMgPSBpbnNwaXJlO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgZHJlYW1JbWFnZS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpc0luVmlld3BvcnQoZHJlYW0pICYmIGZvY3VzICE9IGRyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzID0gZHJlYW07XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkcmVhbUltYWdlLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoaXNJblZpZXdwb3J0KGNoYW5nZSkpIHtcbiAgICAgICAgICAgICAgICBtb29uLnN0eWxlLmJvdHRvbSA9IG1vb25Cb3R0b20gKyAoKHdpbmRvdy5wYWdlWU9mZnNldC1tb29uLngtbW9vbi5oZWlnaHQpICogLjQpO1xuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==