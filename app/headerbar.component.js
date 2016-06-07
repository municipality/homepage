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
                        template: "\n        <div class=\"headerbar-name\">\n            <p>Brian Lee</p>\n        </div>\n        <ul class=\"headerbar-options\">\n            <li (click)=\"scrollTo('intro')\">Intro</li>\n            <li (click)=\"scrollTo('projects')\">Projects</li>\n            <li (click)=\"scrollTo('instagram')\">Instagram</li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQ0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtnQkFFeEQsQ0FBQztnQkFFRCw0QkFBUSxHQUFSLFVBQVUsRUFBRTtvQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixRQUFRLEVBQUcsbVZBU1Y7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBU0YsZ0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELGlDQVFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2hlYWRlcmJhcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJiYXItbmFtZVwiPlxuICAgICAgICAgICAgPHA+QnJpYW4gTGVlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwiaGVhZGVyYmFyLW9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxsaSAoY2xpY2spPVwic2Nyb2xsVG8oJ2ludHJvJylcIj5JbnRybzwvbGk+XG4gICAgICAgICAgICA8bGkgKGNsaWNrKT1cInNjcm9sbFRvKCdwcm9qZWN0cycpXCI+UHJvamVjdHM8L2xpPlxuICAgICAgICAgICAgPGxpIChjbGljayk9XCJzY3JvbGxUbygnaW5zdGFncmFtJylcIj5JbnN0YWdyYW08L2xpPlxuICAgICAgICA8L3VsPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyYmFyIHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgc2Nyb2xsVG8gKGlkKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nU2VydmljZS5zY3JvbGxUbyhpZCk7XG4gICAgfVxufVxuIl19