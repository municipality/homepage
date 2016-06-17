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
                        }
                    ];
                    this.selected = this.tabs[0]["name"];
                }
                Social.prototype.ngOnInit = function () {
                };
                Social.prototype.ngAfterViewInit = function () {
                };
                Social.prototype.tabClick = function (tab) {
                    this.selected = tab.name;
                };
                Social = __decorate([
                    core_1.Component({
                        selector: 'social',
                        directives: [instagram_component_1.Instagram],
                        template: "\n        <div class=\"intro\">\n            <div class=\"section-header\">\n                <h2 align=\"center\" class=\"white\">Social Media</h2>\n            </div>\n        </div>\n        <div class=\"tabs\">\n            <div *ngFor=\"#item of tabs\" [ngClass]=\"{selected: (selected == item.name)}\"\n            (click)=\"tabClick(item)\">\n                <img src={{item.src}}>\n            </div>\n        </div>\n        <div class=\"container\">\n            <instagram [style.display]=\"selected =='instagram' ? 'block' : 'none'\"></instagram>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Social);
                return Social;
            }());
            exports_1("Social", Social);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUJBO2dCQVNJO29CQVJBLFNBQUksR0FBRzt3QkFDSDs0QkFDSSxJQUFJLEVBQUUsV0FBVzs0QkFDakIsR0FBRyxFQUFFLGlDQUFpQzt5QkFDekM7cUJBQ0osQ0FBQztvQkFJRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQseUJBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQUVELGdDQUFlLEdBQWY7Z0JBRUEsQ0FBQztnQkFFRCx5QkFBUSxHQUFSLFVBQVMsR0FBRztvQkFDUixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBNUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLFFBQVE7d0JBQ25CLFVBQVUsRUFBRSxDQUFDLCtCQUFTLENBQUM7d0JBQ3ZCLFFBQVEsRUFBRyxxa0JBZVY7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBMEJGLGFBQUM7WUFBRCxDQUFDLEFBeEJELElBd0JDO1lBeEJELDJCQXdCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7SW5zdGFncmFtfSBmcm9tICcuL2luc3RhZ3JhbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdzb2NpYWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtJbnN0YWdyYW1dLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBhbGlnbj1cImNlbnRlclwiIGNsYXNzPVwid2hpdGVcIj5Tb2NpYWwgTWVkaWE8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFic1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCIjaXRlbSBvZiB0YWJzXCIgW25nQ2xhc3NdPVwie3NlbGVjdGVkOiAoc2VsZWN0ZWQgPT0gaXRlbS5uYW1lKX1cIlxuICAgICAgICAgICAgKGNsaWNrKT1cInRhYkNsaWNrKGl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3tpdGVtLnNyY319PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5zdGFncmFtIFtzdHlsZS5kaXNwbGF5XT1cInNlbGVjdGVkID09J2luc3RhZ3JhbScgPyAnYmxvY2snIDogJ25vbmUnXCI+PC9pbnN0YWdyYW0+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWwgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXR7XG4gICAgdGFicyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICAgICAgICAgIHNyYzogXCJpbWFnZXMvaWNvbnMvaW5zdGFncmFtLWljb24ucG5nXCJcbiAgICAgICAgfVxuICAgIF07XG4gICAgc2VsZWN0ZWQ7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnRhYnNbMF1bXCJuYW1lXCJdO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG5cbiAgICB9XG5cbiAgICB0YWJDbGljayh0YWIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRhYi5uYW1lO1xuICAgIH1cbn1cbiJdfQ==