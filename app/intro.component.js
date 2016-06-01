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
                            image.style.bottom = -1 * window.pageYOffset * .5 + "px";
                            console.log("scrolling");
                        }
                    });
                };
                Intro.prototype.outroImageLoaded = function (image) {
                    var _this = this;
                    var imageTop = 0, imageLeft = 0;
                    var me = this;
                    if (image.style.top == "") {
                        image.style.top = '0px';
                        image.style.left = "0px";
                    }
                    var ycheck = image.y;
                    var outro;
                    this.outroImage = image;
                    document.addEventListener("scroll", function (e) {
                        if (outro == null) {
                            outro = document.getElementsByClassName("outro-container")[0];
                        }
                        if (outro && me.scrollingService.isInViewport(outro)) {
                            console.log("outro scroll");
                            if (window.pageYOffset > ycheck) {
                                _this.outroImage.style.top = imageTop + (window.pageYOffset - ycheck) + 'px';
                            }
                            else if (window.pageYOffset < ycheck) {
                                _this.outroImage.style.top = "0px";
                            }
                            _this.outroImage.style.left = imageLeft - (window.pageYOffset * .4) + 'px';
                        }
                    });
                };
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <div class=\"intro-container\">\n            <img #image (load)=\"imageLoaded(image)\" class=\"intro-image\" src=\"images/image1.jpg\">\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Inspire Individuality</p>\n            </div>\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Always Be Learning</p>\n            </div>\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Change the World</p>\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <img #image2 class=\"outro-image\" (load)=\"outroImageLoaded(image2)\" src=\"images/outro1.jpg\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Testing</h2>\n                        <p>Testing More</p>\n                        <p>Testing Complete.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkNBO2dCQUdJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtnQkFFeEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBRUQsMkJBQVcsR0FBWCxVQUFZLEtBQUs7b0JBQ2IseUJBQXlCO29CQUV6QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQ2QsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUMvQixDQUFDO29CQUNELElBQUksS0FBSyxDQUFDO29CQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO29CQUN4QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDbEMsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ2YsS0FBSyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRSxDQUFDO3dCQUNELEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDOzRCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM3QixDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsZ0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7b0JBQXRCLGlCQTJCQztvQkExQkcsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBQyxDQUFDLENBQUM7b0JBQzlCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7d0JBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNyQixJQUFJLEtBQUssQ0FBQztvQkFDVixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2xDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNmLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEUsQ0FBQzt3QkFFRCxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7NEJBRTNCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUNoRixDQUFDOzRCQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0NBQ3BDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7NEJBQ3RDLENBQUM7NEJBRUQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUM5RSxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBckdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFFBQVEsRUFBRyw4NENBcUNWO3FCQUNKLENBQUM7O3lCQUFBO2dCQThERixZQUFDO1lBQUQsQ0FBQyxBQTVERCxJQTREQztZQTVERCx5QkE0REMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaW50cm8nLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZSAobG9hZCk9XCJpbWFnZUxvYWRlZChpbWFnZSlcIiBjbGFzcz1cImludHJvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2ltYWdlMS5qcGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5BbHdheXMgQmUgTGVhcm5pbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5DaGFuZ2UgdGhlIFdvcmxkPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nICNpbWFnZTIgY2xhc3M9XCJvdXRyby1pbWFnZVwiIChsb2FkKT1cIm91dHJvSW1hZ2VMb2FkZWQoaW1hZ2UyKVwiIHNyYz1cImltYWdlcy9vdXRybzEuanBnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWwgZmlyc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW50cm9cIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCByaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlRlc3Rpbmc8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVzdGluZyBNb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVzdGluZyBDb21wbGV0ZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgbGVmdFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8tcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0cm8taW5uZXItcGFuZWwgY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSW50cm8gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGludHJvSW1hZ2U7XG4gICAgb3V0cm9JbWFnZTtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxuXG4gICAgaW1hZ2VMb2FkZWQoaW1hZ2UpIHtcbiAgICAgICAgLy9QYXJhbGxheCBpbXBsZW1lbnRhdGlvblxuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGlmKGltYWdlLnN0eWxlLmJvdHRvbSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW50cm87XG4gICAgICAgIHRoaXMuaW50cm9JbWFnZSA9IGltYWdlO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihpbnRybyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50cm8tY29udGFpbmVyXCIpWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaW50cm8gJiYgbWUuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQoaW50cm8pKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYm90dG9tID0gLTEgKiB3aW5kb3cucGFnZVlPZmZzZXQgKiAuNSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjcm9sbGluZ1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvdXRyb0ltYWdlTG9hZGVkKGltYWdlKSB7XG4gICAgICAgIHZhciBpbWFnZVRvcCA9IDAsIGltYWdlTGVmdD0wO1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZihpbWFnZS5zdHlsZS50b3AgPT0gXCJcIikge1xuICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudG9wID0gJzBweCc7XG4gICAgICAgICAgICBpbWFnZS5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeWNoZWNrID0gaW1hZ2UueTtcbiAgICAgICAgdmFyIG91dHJvO1xuICAgICAgICB0aGlzLm91dHJvSW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYob3V0cm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHJvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm91dHJvLWNvbnRhaW5lclwiKVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3V0cm8gJiYgbWUuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQob3V0cm8pKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvdXRybyBzY3JvbGxcIilcblxuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IHljaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHJvSW1hZ2Uuc3R5bGUudG9wID0gaW1hZ2VUb3AgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC0geWNoZWNrKSArICdweCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA8IHljaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHJvSW1hZ2Uuc3R5bGUudG9wID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm91dHJvSW1hZ2Uuc3R5bGUubGVmdCA9IGltYWdlTGVmdCAtICh3aW5kb3cucGFnZVlPZmZzZXQgKiAuNCkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=