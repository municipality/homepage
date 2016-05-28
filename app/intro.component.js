System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Intro;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Intro = (function () {
                function Intro() {
                }
                Intro.prototype.ngOnInit = function () {
                };
                Intro.prototype.imageLoaded = function (image) {
                    //Parallax implementation
                    this.image = image;
                    var me = this;
                    document.addEventListener("scroll", function (e) {
                        me.image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
                    });
                };
                Intro = __decorate([
                    core_1.Component({
                        selector: 'intro',
                        template: "\n        <img #image (load)=\"imageLoaded(image)\" class=\"intro-image\" src=\"images/image1.jpg\">\n        <div class=\"intro-box\">\n            <p class=\"intro-box-header\">Inspire Individuality</p>\n        </div>\n        <div class=\"intro-box\">\n            <p class=\"intro-box-header\">Always Be Learning</p>\n        </div>\n        <div class=\"intro-box\">\n            <p class=\"intro-box-header\">Change the World</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Intro);
                return Intro;
            }());
            exports_1("Intro", Intro);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUVJO2dCQUVBLENBQUM7Z0JBRUQsd0JBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDbEUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFqQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsT0FBTzt3QkFDbEIsUUFBUSxFQUFHLDRjQVdWO3FCQUNKLENBQUM7O3lCQUFBO2dCQW9CRixZQUFDO1lBQUQsQ0FBQyxBQWxCRCxJQWtCQztZQWxCRCx5QkFrQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2ludHJvJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGltZyAjaW1hZ2UgKGxvYWQpPVwiaW1hZ2VMb2FkZWQoaW1hZ2UpXCIgY2xhc3M9XCJpbnRyby1pbWFnZVwiIHNyYz1cImltYWdlcy9pbWFnZTEuanBnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tYm94LWhlYWRlclwiPkluc3BpcmUgSW5kaXZpZHVhbGl0eTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tYm94LWhlYWRlclwiPkFsd2F5cyBCZSBMZWFybmluZzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyby1ib3hcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW50cm8tYm94LWhlYWRlclwiPkNoYW5nZSB0aGUgV29ybGQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbnRybyBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW1hZ2UgOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICB9XG5cbiAgICBpbWFnZUxvYWRlZChpbWFnZSkge1xuICAgICAgICAvL1BhcmFsbGF4IGltcGxlbWVudGF0aW9uXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbWUuaW1hZ2Uuc3R5bGUuYm90dG9tID0gLTEgKiB3aW5kb3cucGFnZVlPZmZzZXQgKiAxLjI1ICsgXCJweFwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=