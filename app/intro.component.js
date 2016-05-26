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
                    document.onscroll = function (e) {
                        me.image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
                    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUVJO2dCQUVBLENBQUM7Z0JBRUQsd0JBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFLO29CQUNiLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxRQUFRLENBQUMsUUFBUSxHQUFHLFVBQUMsQ0FBQzt3QkFDbEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDbEUsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBakNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFFBQVEsRUFBRyw0Y0FXVjtxQkFDSixDQUFDOzt5QkFBQTtnQkFvQkYsWUFBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQseUJBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdpbnRybycsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxpbWcgI2ltYWdlIChsb2FkKT1cImltYWdlTG9hZGVkKGltYWdlKVwiIGNsYXNzPVwiaW50cm8taW1hZ2VcIiBzcmM9XCJpbWFnZXMvaW1hZ2UxLmpwZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tYm94XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5JbnNwaXJlIEluZGl2aWR1YWxpdHk8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tYm94XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5BbHdheXMgQmUgTGVhcm5pbmc8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm8tYm94XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImludHJvLWJveC1oZWFkZXJcIj5DaGFuZ2UgdGhlIFdvcmxkPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgSW50cm8gaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGltYWdlIDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxuXG4gICAgaW1hZ2VMb2FkZWQoaW1hZ2UpIHtcbiAgICAgICAgLy9QYXJhbGxheCBpbXBsZW1lbnRhdGlvblxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50Lm9uc2Nyb2xsID0gKGUpID0+IHtcbiAgICAgICAgICAgIG1lLmltYWdlLnN0eWxlLmJvdHRvbSA9IC0xICogd2luZG93LnBhZ2VZT2Zmc2V0ICogMS4yNSArIFwicHhcIjtcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=