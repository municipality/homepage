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
                            id: "footer",
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
                        template: "\n        <div class=\"bar\">\n            <img class=\"logo\" src=\"images/logo.png\">\n            <img class=\"burger\" (click)=\"handleMenu(menu)\"\n            src=\"images/icons/burger.png\">\n        </div>\n        <div #menu class=\"menu\">\n            <div class=\"menu-container\">\n                <div class=\"menu-item\" *ngFor=\"#item of menuItems\" (click)=\"scrollTo(item.id)\">\n                    <p align=\"center\" class=\"{{item.id}}\">{{item.name}}</p>\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQkE7Z0JBSUksbUJBQXFCLGdCQUFtQztvQkFBbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtvQkFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUc7d0JBQ2I7NEJBQ0ksRUFBRSxFQUFFLE9BQU87NEJBQ1gsSUFBSSxFQUFFLFVBQVU7eUJBQ25CO3dCQUNEOzRCQUNJLEVBQUUsRUFBRSxZQUFZOzRCQUNoQixJQUFJLEVBQUUsWUFBWTt5QkFDckI7d0JBQ0Q7NEJBQ0ksRUFBRSxFQUFFLE9BQU87NEJBQ1gsSUFBSSxFQUFFLE9BQU87eUJBQ2hCO3dCQUNEOzRCQUNJLEVBQUUsRUFBRSxPQUFPOzRCQUNYLElBQUksRUFBRSxjQUFjO3lCQUN2Qjt3QkFDRDs0QkFDSSxFQUFFLEVBQUUsUUFBUTs0QkFDWixJQUFJLEVBQUUsU0FBUzt5QkFDbEI7cUJBQ0osQ0FBQztnQkFDTixDQUFDO2dCQUVELDRCQUFRLEdBQVIsVUFBVSxFQUFFO29CQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELDhCQUFVLEdBQVYsVUFBWSxJQUFJO29CQUNaLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsQ0FBQztvQkFHRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0MsQ0FBQztnQkFqRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsUUFBUSxFQUFHLGlpQkFhVjtxQkFDSixDQUFDOzs2QkFBQTtnQkFrREYsZ0JBQUM7WUFBRCxDQUFDLEFBakRELElBaURDO1lBakRELGlDQWlEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdoZWFkZXJiYXInLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIHNyYz1cImltYWdlcy9sb2dvLnBuZ1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ1cmdlclwiIChjbGljayk9XCJoYW5kbGVNZW51KG1lbnUpXCJcbiAgICAgICAgICAgIHNyYz1cImltYWdlcy9pY29ucy9idXJnZXIucG5nXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICNtZW51IGNsYXNzPVwibWVudVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiICpuZ0Zvcj1cIiNpdGVtIG9mIG1lbnVJdGVtc1wiIChjbGljayk9XCJzY3JvbGxUbyhpdGVtLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBhbGlnbj1cImNlbnRlclwiIGNsYXNzPVwie3tpdGVtLmlkfX1cIj57e2l0ZW0ubmFtZX19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyYmFyIHtcbiAgICBpc01lbnVTaG93aW5nIDogYm9vbGVhbjtcbiAgICBtZW51SXRlbXMgOiBhbnlbXTtcbiAgICBtZW51O1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2UgOiBTY3JvbGxpbmdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuaXNNZW51U2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVJdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJpbnRyb1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiV2hvIEkgQW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogXCJvYmplY3RpdmVzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJPYmplY3RpdmVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZmFjZXNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZhY2VzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibWVkaWFcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNvY2lhbCBNZWRpYVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGFjdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgc2Nyb2xsVG8gKGlkKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nU2VydmljZS5zY3JvbGxUbyhpZCk7XG4gICAgICAgIHRoaXMuaGFuZGxlTWVudSh0aGlzLm1lbnUpO1xuICAgIH1cblxuICAgIGhhbmRsZU1lbnUgKG1lbnUpIHtcbiAgICAgICAgaWYoIXRoaXMubWVudSkge1xuICAgICAgICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5pc01lbnVTaG93aW5nKSB7XG4gICAgICAgICAgICBtZW51LnN0eWxlLnJpZ2h0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lbnUuc3R5bGUucmlnaHQgPSBcIlwiO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmlzTWVudVNob3dpbmcgPSAhdGhpcy5pc01lbnVTaG93aW5nO1xuICAgIH1cbn1cbiJdfQ==