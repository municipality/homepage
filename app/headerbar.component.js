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
                        template: "\n        <div class=\"headerbar-name\">\n            <p>Brian Lee</p>\n        </div>\n        <div class=\"headerbar-options\">\n        <!-- From bottom to top because using float: right -->\n            <p (click)=\"scrollTo('instagram')\">Instagram</p>\n            <p (click)=\"scrollTo('projects')\">Projects</p>\n            <p (click)=\"scrollTo('intro')\">Intro</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBQ0ksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtnQkFFeEQsQ0FBQztnQkFFRCw0QkFBUSxHQUFSLFVBQVUsRUFBRTtvQkFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixRQUFRLEVBQUcsK1lBVVY7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBU0YsZ0JBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQVJELGlDQVFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvciA6ICdoZWFkZXJiYXInLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcmJhci1uYW1lXCI+XHJcbiAgICAgICAgICAgIDxwPkJyaWFuIExlZTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyYmFyLW9wdGlvbnNcIj5cclxuICAgICAgICA8IS0tIEZyb20gYm90dG9tIHRvIHRvcCBiZWNhdXNlIHVzaW5nIGZsb2F0OiByaWdodCAtLT5cclxuICAgICAgICAgICAgPHAgKGNsaWNrKT1cInNjcm9sbFRvKCdpbnN0YWdyYW0nKVwiPkluc3RhZ3JhbTwvcD5cclxuICAgICAgICAgICAgPHAgKGNsaWNrKT1cInNjcm9sbFRvKCdwcm9qZWN0cycpXCI+UHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgIDxwIChjbGljayk9XCJzY3JvbGxUbygnaW50cm8nKVwiPkludHJvPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyYmFyIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvIChpZCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nU2VydmljZS5zY3JvbGxUbyhpZCk7XHJcbiAgICB9XHJcbn1cclxuIl19