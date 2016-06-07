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
    var Headerbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            }],
        execute: function() {
            Headerbar = (function () {
                function Headerbar(scrollingService) {
                    this.scrollingService = scrollingService;
                }
                Headerbar.prototype.scrollTo = function (id) {
                    this.scrollingService.scrollTo(id);
                };
                Headerbar = __decorate([
                    core_1.Component({
                        selector: 'headerbar',
                        template: "\n        <div class=\"headerbar-name\">\n            <p>Brian Lee</p>\n        </div>\n        <ul class=\"headerbar-options\">\n            <li (click)=\"scrollTo('intro')\">Intro</li>\n            <li (click)=\"scrollTo('projects')\">Projects</li>\n            <li (click)=\"scrollTo('instagram')\">Instagram</li>\n\n\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQ0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtnQkFFeEQsQ0FBQztnQkFFRCw0QkFBUSxHQUFSLFVBQVUsRUFBRTtvQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixRQUFRLEVBQUcsdVZBV1Y7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBU0YsZ0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELGlDQVFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2hlYWRlcmJhcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJiYXItbmFtZVwiPlxuICAgICAgICAgICAgPHA+QnJpYW4gTGVlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwiaGVhZGVyYmFyLW9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaSAoY2xpY2spPVwic2Nyb2xsVG8oJ2ludHJvJylcIj5JbnRybzwvbGk+XG4gICAgICAgICAgICA8bGkgKGNsaWNrKT1cInNjcm9sbFRvKCdwcm9qZWN0cycpXCI+UHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgPGxpIChjbGljayk9XCJzY3JvbGxUbygnaW5zdGFncmFtJylcIj5JbnN0YWdyYW08L2xpPlxuXG5cbiAgICAgICAgPC91bD5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlcmJhciB7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIHNjcm9sbFRvIChpZCkge1xuICAgICAgICB0aGlzLnNjcm9sbGluZ1NlcnZpY2Uuc2Nyb2xsVG8oaWQpO1xuICAgIH1cbn1cbiJdfQ==