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
                    this.image = image;
                    var me = this;
                    // document.addEventListener("scroll", (e) => {
                    //     if(me.scrollingService.isInViewport(me)) {
                    //         me.image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
                    //         console.log("scrolling");
                    //     }
                    //
                    // });
                };
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <div class=\"intro-container\">\n            <img #image (load)=\"imageLoaded(image)\" class=\"intro-image\" src=\"images/image1.jpg\">\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Inspire Individuality</p>\n            </div>\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Always Be Learning</p>\n            </div>\n            <div class=\"intro-box\">\n                <p class=\"intro-box-header\">Change the World</p>\n            </div>\n        </div>\n        <div class=\"outro-container\">\n            <div class=\"outro-panel first\">\n                <div class=\"outro-intro\">\n\n                </div>\n                <div class=\"outro-inner-panel right\">\n                    <div>\n                        <h2>Testing</h2>\n                        <p>Testing More</p>\n                        <p>Testing Complete.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel left\">\n                </div>\n            </div>\n            <div class=\"outro-panel\">\n                <div class=\"outro-inner-panel center\">\n\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNENBO2dCQUdJLGVBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtnQkFFeEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBRUQsMkJBQVcsR0FBWCxVQUFZLEtBQUs7b0JBQ2IseUJBQXlCO29CQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUNkLCtDQUErQztvQkFDL0MsaURBQWlEO29CQUNqRCx5RUFBeUU7b0JBQ3pFLG9DQUFvQztvQkFDcEMsUUFBUTtvQkFDUixFQUFFO29CQUNGLE1BQU07Z0JBQ1YsQ0FBQztnQkEvREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsT0FBTzt3QkFDbEIsUUFBUSxFQUFHLCt4Q0FvQ1Y7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBeUJGLFlBQUM7WUFBRCxDQUFDLEFBdkJELElBdUJDO1lBdkJELHlCQXVCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdpbnRybycsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgI2ltYWdlIChsb2FkKT1cImltYWdlTG9hZGVkKGltYWdlKVwiIGNsYXNzPVwiaW50cm8taW1hZ2VcIiBzcmM9XCJpbWFnZXMvaW1hZ2UxLmpwZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWJveFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tYm94LWhlYWRlclwiPkluc3BpcmUgSW5kaXZpZHVhbGl0eTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWJveFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tYm94LWhlYWRlclwiPkFsd2F5cyBCZSBMZWFybmluZzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvLWJveFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tYm94LWhlYWRlclwiPkNoYW5nZSB0aGUgV29ybGQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbCBmaXJzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbnRyb1wiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm91dHJvLWlubmVyLXBhbmVsIHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VGVzdGluZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UZXN0aW5nIE1vcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UZXN0aW5nIENvbXBsZXRlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdXRyby1pbm5lci1wYW5lbCBjZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnRybyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW1hZ2UgOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICB9XG5cbiAgICBpbWFnZUxvYWRlZChpbWFnZSkge1xuICAgICAgICAvL1BhcmFsbGF4IGltcGxlbWVudGF0aW9uXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAvLyAgICAgaWYobWUuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQobWUpKSB7XG4gICAgICAgIC8vICAgICAgICAgbWUuaW1hZ2Uuc3R5bGUuYm90dG9tID0gLTEgKiB3aW5kb3cucGFnZVlPZmZzZXQgKiAxLjI1ICsgXCJweFwiO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsaW5nXCIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG4iXX0=