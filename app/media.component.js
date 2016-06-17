System.register(['angular2/core', './instagram.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1;
    var Social;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instagram_component_1_1) {
                instagram_component_1 = instagram_component_1_1;
            }],
        execute: function() {
            Social = (function () {
                function Social() {
                    this.tabs = [
                        {
                            name: "instagram",
                            src: "images/icons/instagram-icon.png"
                        },
                        {
                            name: "instagram-test",
                            src: "images/icons/instagram-icon.png"
                        }
                    ];
                    this.selected = this.tabs[0]["name"];
                }
                Social.prototype.ngOnInit = function () {
                };
                Social.prototype.tabClick = function (tab) {
                    this.selected = tab.name;
                };
                Social = __decorate([
                    core_1.Component({
                        selector: 'social',
                        directives: [instagram_component_1.Instagram],
                        template: "\n        <div class=\"intro\">\n            <div class=\"section-header\">\n                <h2 align=\"center\" class=\"white\">Social Media</h2>\n            </div>\n        </div>\n        <div class=\"tabs\">\n            <div *ngFor=\"#item of tabs\" [ngClass]=\"{selected: (selected == item.name)}\"\n            (click)=\"tabClick(item)\">\n                <img src={{item.src}}>\n            </div>\n        </div>\n        <div class=\"container\">\n            <instagram *ngIf=\"selected =='instagram'\"></instagram>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Social);
                return Social;
            }());
            exports_1("Social", Social);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQWFJO29CQVpBLFNBQUksR0FBRzt3QkFDSDs0QkFDSSxJQUFJLEVBQUUsV0FBVzs0QkFDakIsR0FBRyxFQUFFLGlDQUFpQzt5QkFDekM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLGdCQUFnQjs0QkFDdEIsR0FBRyxFQUFFLGlDQUFpQzt5QkFDekM7cUJBQ0osQ0FBQztvQkFJRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQseUJBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELHlCQUFRLEdBQVIsVUFBUyxHQUFHO29CQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkE1Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsUUFBUTt3QkFDbkIsVUFBVSxFQUFFLENBQUMsK0JBQVMsQ0FBQzt3QkFDdkIsUUFBUSxFQUFHLHdpQkFlVjtxQkFDSixDQUFDOzswQkFBQTtnQkEwQkYsYUFBQztZQUFELENBQUMsQUF4QkQsSUF3QkM7WUF4QkQsMkJBd0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vaW5zdGFncmFtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ3NvY2lhbCcsXG4gICAgZGlyZWN0aXZlczogW0luc3RhZ3JhbV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24taGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJ3aGl0ZVwiPlNvY2lhbCBNZWRpYTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJzXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiNpdGVtIG9mIHRhYnNcIiBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IChzZWxlY3RlZCA9PSBpdGVtLm5hbWUpfVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidGFiQ2xpY2soaXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17e2l0ZW0uc3JjfX0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnN0YWdyYW0gKm5nSWY9XCJzZWxlY3RlZCA9PSdpbnN0YWdyYW0nXCI+PC9pbnN0YWdyYW0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWwgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgdGFicyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICAgICAgICAgIHNyYzogXCJpbWFnZXMvaWNvbnMvaW5zdGFncmFtLWljb24ucG5nXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpbnN0YWdyYW0tdGVzdFwiLFxuICAgICAgICAgICAgc3JjOiBcImltYWdlcy9pY29ucy9pbnN0YWdyYW0taWNvbi5wbmdcIlxuICAgICAgICB9XG4gICAgXTtcbiAgICBzZWxlY3RlZDtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMudGFic1swXVtcIm5hbWVcIl07XG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxuXG4gICAgdGFiQ2xpY2sodGFiKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0YWIubmFtZTtcbiAgICB9XG59XG4iXX0=