System.register(['angular2/core', './scrolling.service', './mobile.service'], function(exports_1, context_1) {
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
    var core_1, scrolling_service_1, mobile_service_1;
    var Intro;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            Intro = (function () {
                function Intro(scrollingService, mobileService) {
                    this.scrollingService = scrollingService;
                    this.mobileService = mobileService;
                    this.loaded = false;
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
                    if (!this.mobileService.isMobile()) {
                        document.addEventListener("scroll", function (e) {
                            if (intro && me.scrollingService.isInViewport(intro)) {
                                image.style.bottom = (-1 * Math.floor(window.pageYOffset * .3)) + "px";
                            }
                        });
                    }
                };
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <div class=\"intro-container\">\n            <div #image class=\"intro-image-container\" style=\"background-image: url('images/brian-blurred.jpg');\">\n                <img (load)=\"introImageLoaded(image)\" src='images/brian-blurred.jpg' style=\"display:none;\">\n            </div>\n            <div class=\"intro-icon-container\">\n                <img class=\"intro-icon\" src=\"images/brian-icon-2.png\">\n            </div>\n            <div class=\"titles-container\">\n                <div class=\"titles\">\n                    <h2 class=\"blue\">Software Engineer</h2>\n                    <h2 class=\"white\">Designer</h2>\n                    <h2 class=\"blue\">Dreamer</h2>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService, mobile_service_1.MobileService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMEJBO2dCQVNJLGVBQXFCLGdCQUFtQyxFQUNuQyxhQUE2QjtvQkFEN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWdCO29CQVJsRCxXQUFNLEdBQUcsS0FBSyxDQUFDO2dCQVVmLENBQUM7Z0JBRUQsd0JBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELGdDQUFnQixHQUFoQixVQUFpQixLQUFLO29CQUNsQiw2QkFBNkI7b0JBQzdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDbkUseUJBQXlCO29CQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDL0IsQ0FBQztvQkFDRCxJQUFJLEtBQUssQ0FBQztvQkFDVixFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDZixLQUFLLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO29CQUNoQyxDQUFDO29CQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUMvQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDakMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7NEJBQ2xDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbEQsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7NEJBQzNFLENBQUM7d0JBRUwsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFFTCxDQUFDO2dCQWhFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxPQUFPO3dCQUNsQixRQUFRLEVBQUcsNHZCQWdCVjtxQkFDSixDQUFDOzt5QkFBQTtnQkFnREYsWUFBQztZQUFELENBQUMsQUE5Q0QsSUE4Q0M7WUE5Q0QseUJBOENDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5cbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2ludHJvJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiAjaW1hZ2UgY2xhc3M9XCJpbnRyby1pbWFnZS1jb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2JyaWFuLWJsdXJyZWQuanBnJyk7XCI+XG4gICAgICAgICAgICAgICAgPGltZyAobG9hZCk9XCJpbnRyb0ltYWdlTG9hZGVkKGltYWdlKVwiIHNyYz0naW1hZ2VzL2JyaWFuLWJsdXJyZWQuanBnJyBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImludHJvLWljb25cIiBzcmM9XCJpbWFnZXMvYnJpYW4taWNvbi0yLnBuZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmx1ZVwiPlNvZnR3YXJlIEVuZ2luZWVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwid2hpdGVcIj5EZXNpZ25lcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJsdWVcIj5EcmVhbWVyPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSW50cm8gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGludHJvSW1hZ2U7XG4gICAgbG9hZGVkID0gZmFsc2U7XG5cbiAgICBpbnRyb0NvbnRhaW5lcjtcblxuICAgIGludHJvSW1hZ2UxO1xuXG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBtb2JpbGVTZXJ2aWNlIDogTW9iaWxlU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxuXG4gICAgaW50cm9JbWFnZUxvYWRlZChpbWFnZSkge1xuICAgICAgICAvL0dldCByaWQgb2YgYXBwIGxvYWRpbmcgbWFza1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAvL1BhcmFsbGF4IGltcGxlbWVudGF0aW9uXG4gICAgICAgIHRoaXMuaW50cm9JbWFnZTEgPSBpbWFnZTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYoaW1hZ2Uuc3R5bGUuYm90dG9tID09IFwiXCIpIHtcbiAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRybztcbiAgICAgICAgaWYoaW50cm8gPT0gbnVsbCkge1xuICAgICAgICAgICAgaW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50cm8tY29udGFpbmVyXCIpWzBdO1xuICAgICAgICAgICAgdGhpcy5pbnRyb0NvbnRhaW5lciA9IGludHJvO1xuICAgICAgICB9XG4gICAgICAgIGludHJvLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICBpZiAoIXRoaXMubW9iaWxlU2VydmljZS5pc01vYmlsZSgpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaW50cm8gJiYgbWUuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQoaW50cm8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9ICgtMSAqIE1hdGguZmxvb3Iod2luZG93LnBhZ2VZT2Zmc2V0ICogLjMpKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIl19