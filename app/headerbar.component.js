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
                            id: "faces",
                            name: "Faces"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBSUksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUc7d0JBQ2I7NEJBQ0ksRUFBRSxFQUFFLE9BQU87NEJBQ1gsSUFBSSxFQUFFLFVBQVU7eUJBQ25CO3dCQUNEOzRCQUNJLEVBQUUsRUFBRSxZQUFZOzRCQUNoQixJQUFJLEVBQUUsWUFBWTt5QkFDckI7d0JBQ0Q7NEJBQ0ksRUFBRSxFQUFFLE9BQU87NEJBQ1gsSUFBSSxFQUFFLE9BQU87eUJBQ2hCO3dCQUNEOzRCQUNJLEVBQUUsRUFBRSxPQUFPOzRCQUNYLElBQUksRUFBRSxjQUFjO3lCQUN2Qjt3QkFDRDs0QkFDSSxFQUFFLEVBQUUsU0FBUzs0QkFDYixJQUFJLEVBQUUsU0FBUzt5QkFDbEI7cUJBQ0osQ0FBQztnQkFDTixDQUFDO2dCQUVELDRCQUFRLEdBQVIsVUFBVSxFQUFFO29CQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELDhCQUFVLEdBQVYsVUFBWSxJQUFJO29CQUNaLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsQ0FBQztvQkFHRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0MsQ0FBQztnQkFyRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsUUFBUSxFQUFHLHd1QkFpQlY7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBa0RGLGdCQUFDO1lBQUQsQ0FBQyxBQWpERCxJQWlEQztZQWpERCxpQ0FpREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnaGVhZGVyYmFyJyxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImxvZ29cIiBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidXJnZXJcIiAoY2xpY2spPVwiaGFuZGxlTWVudShtZW51KVwiXG4gICAgICAgICAgICBzcmM9XCJpbWFnZXMvaWNvbnMvYnVyZ2VyLnBuZ1wiPlxuICAgICAgICAgICAgPCEtLSA8dWwgY2xhc3M9XCJoZWFkZXJiYXItb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwic2Nyb2xsVG8oJ2ludHJvJylcIj5JbnRybzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJzY3JvbGxUbygnYnJpYW4nKVwiPkZhY2V0czwvbGk+XG4gICAgICAgICAgICA8L3VsPiAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgI21lbnUgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgKm5nRm9yPVwiI2l0ZW0gb2YgbWVudUl0ZW1zXCIgKGNsaWNrKT1cInNjcm9sbFRvKGl0ZW0uaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJ7e2l0ZW0uaWR9fVwiPnt7aXRlbS5uYW1lfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJiYXIge1xuICAgIGlzTWVudVNob3dpbmcgOiBib29sZWFuO1xuICAgIG1lbnVJdGVtcyA6IGFueVtdO1xuICAgIG1lbnU7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5pc01lbnVTaG93aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVudUl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImludHJvXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJXaG8gSSBBbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcIm9iamVjdGl2ZXNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk9iamVjdGl2ZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJmYWNlc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRmFjZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJtZWRpYVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU29jaWFsIE1lZGlhXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiY29udGFjdFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGFjdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgc2Nyb2xsVG8gKGlkKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nU2VydmljZS5zY3JvbGxUbyhpZCk7XG4gICAgICAgIHRoaXMuaGFuZGxlTWVudSh0aGlzLm1lbnUpO1xuICAgIH1cblxuICAgIGhhbmRsZU1lbnUgKG1lbnUpIHtcbiAgICAgICAgaWYoIXRoaXMubWVudSkge1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5pc01lbnVTaG93aW5nKSB7XG4gICAgICAgICAgICBtZW51LnN0eWxlLnJpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUucmlnaHQgPSBcIlwiO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmlzTWVudVNob3dpbmcgPSAhdGhpcy5pc01lbnVTaG93aW5nO1xuICAgIH1cbn1cbiJdfQ==