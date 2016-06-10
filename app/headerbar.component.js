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
                    this.isMenuShowing = false;
                    this.menuItems = [
                        {
                            id: "intro",
                            name: "Who I Am"
                        },
                        {
                            id: "objectives",
                            name: "Objectives"
                        },
                        {
                            id: "media",
                            name: "Social Media"
                        },
                        {
                            id: "contact",
                            name: "Contact"
                        }
                    ];
                }
                Headerbar.prototype.scrollTo = function (id) {
                    this.scrollingService.scrollTo(id);
                    this.handleMenu(this.menu);
                };
                Headerbar.prototype.handleMenu = function (menu) {
                    if (!this.menu) {
                        this.menu = menu;
                    }
                    if (!this.isMenuShowing) {
                        menu.style.right = 0;
                    }
                    else {
                        menu.style.right = "";
                    }
                    this.isMenuShowing = !this.isMenuShowing;
                };
                Headerbar = __decorate([
                    core_1.Component({
                        selector: 'headerbar',
                        template: "\n        <div class=\"bar\">\n            <img class=\"logo\" src=\"images/logo.png\">\n            <img class=\"burger\" (click)=\"handleMenu(menu)\"\n            src=\"images/icons/burger.png\">\n            <!-- <ul class=\"headerbar-options\">\n                <li (click)=\"scrollTo('intro')\">Intro</li>\n                <li (click)=\"scrollTo('brian')\">Facets</li>\n            </ul> -->\n        </div>\n        <div #menu class=\"menu\">\n            <div class=\"menu-container\">\n                <div class=\"menu-item\" *ngFor=\"#item of menuItems\" (click)=\"scrollTo(item.id)\">\n                    <p align=\"center\" class=\"{{item.id}}\">{{item.name}}</p>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBSUksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUc7d0JBQ2I7NEJBQ0ksRUFBRSxFQUFFLE9BQU87NEJBQ1gsSUFBSSxFQUFFLFVBQVU7eUJBQ25CO3dCQUNEOzRCQUNJLEVBQUUsRUFBRSxZQUFZOzRCQUNoQixJQUFJLEVBQUUsWUFBWTt5QkFDckI7d0JBQ0Q7NEJBQ0ksRUFBRSxFQUFFLE9BQU87NEJBQ1gsSUFBSSxFQUFFLGNBQWM7eUJBQ3ZCO3dCQUNEOzRCQUNJLEVBQUUsRUFBRSxTQUFTOzRCQUNiLElBQUksRUFBRSxTQUFTO3lCQUNsQjtxQkFDSixDQUFDO2dCQUNOLENBQUM7Z0JBRUQsNEJBQVEsR0FBUixVQUFVLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsOEJBQVUsR0FBVixVQUFZLElBQUk7b0JBQ1osRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3pCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUMxQixDQUFDO29CQUdELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM3QyxDQUFDO2dCQWpFTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixRQUFRLEVBQUcsd3VCQWlCVjtxQkFDSixDQUFDOzs2QkFBQTtnQkE4Q0YsZ0JBQUM7WUFBRCxDQUFDLEFBN0NELElBNkNDO1lBN0NELGlDQTZDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdoZWFkZXJiYXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ1cmdlclwiIChjbGljayk9XCJoYW5kbGVNZW51KG1lbnUpXCJcbiAgICAgICAgICAgIHNyYz1cImltYWdlcy9pY29ucy9idXJnZXIucG5nXCI+XG4gICAgICAgICAgICA8IS0tIDx1bCBjbGFzcz1cImhlYWRlcmJhci1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJzY3JvbGxUbygnaW50cm8nKVwiPkludHJvPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cInNjcm9sbFRvKCdicmlhbicpXCI+RmFjZXRzPC9saT5cbiAgICAgICAgICAgIDwvdWw+IC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAjbWVudSBjbGFzcz1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiAqbmdGb3I9XCIjaXRlbSBvZiBtZW51SXRlbXNcIiAoY2xpY2spPVwic2Nyb2xsVG8oaXRlbS5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgYWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cInt7aXRlbS5pZH19XCI+e3tpdGVtLm5hbWV9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlcmJhciB7XG4gICAgaXNNZW51U2hvd2luZyA6IGJvb2xlYW47XG4gICAgbWVudUl0ZW1zIDogYW55W107XG4gICAgbWVudTtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlIDogU2Nyb2xsaW5nU2VydmljZSkge1xuICAgICAgICB0aGlzLmlzTWVudVNob3dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tZW51SXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiaW50cm9cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIldobyBJIEFtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwib2JqZWN0aXZlc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT2JqZWN0aXZlc1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcIm1lZGlhXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTb2NpYWwgTWVkaWFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJjb250YWN0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb250YWN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBzY3JvbGxUbyAoaWQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLnNjcm9sbFRvKGlkKTtcbiAgICAgICAgdGhpcy5oYW5kbGVNZW51KHRoaXMubWVudSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTWVudSAobWVudSkge1xuICAgICAgICBpZighdGhpcy5tZW51KSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmlzTWVudVNob3dpbmcpIHtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUucmlnaHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVudS5zdHlsZS5yaWdodCA9IFwiXCI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuaXNNZW51U2hvd2luZyA9ICF0aGlzLmlzTWVudVNob3dpbmc7XG4gICAgfVxufVxuIl19