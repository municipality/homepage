System.register(['angular2/core', './instagram.component', './projects.component', './intro.component', './scrolling.service'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, intro_component_1, scrolling_service_1;
    var Wall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instagram_component_1_1) {
                instagram_component_1 = instagram_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            }],
        execute: function() {
            Wall = (function () {
                function Wall(scrollingService) {
                    this.scrollingService = scrollingService;
                }
                /*
                  Called right after the directive's data-bound properties have been checked
                  for the first time
                 */
                Wall.prototype.ngOnInit = function () {
                    var _this = this;
                    var me = this;
                    document.addEventListener("scroll", function (e) {
                        if (_this.intro == null) {
                            _this.intro = document.getElementById("intro");
                        }
                        if (_this.intro && me.scrollingService.isInViewport(_this.intro)) {
                            var image = document.getElementsByClassName("intro-image")[0];
                            image.style.bottom = -1 * window.pageYOffset * 1.25 + "px";
                            console.log("scrolling");
                        }
                    });
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro],
                        template: "\n            <intro id=\"intro\"></intro>\n            <div class=\"blank-block\"></div>\n            <projects></projects>\n            <instagram></instagram>\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFFSSxjQUFxQixnQkFBbUM7b0JBQW5DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7Z0JBRXhELENBQUM7Z0JBQ0Q7OzttQkFHRztnQkFDSCx1QkFBUSxHQUFSO29CQUFBLGlCQWFDO29CQVpHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDbEMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssSUFBSSxJQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2xELENBQUM7d0JBQ0QsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzVELElBQUksS0FBSyxHQUFPLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOzRCQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM3QixDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBaENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLCtCQUFTLEVBQUUsNkJBQVEsRUFBRSx1QkFBSyxDQUFDO3dCQUN6QyxRQUFRLEVBQUcseUtBS1Y7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBd0JGLFdBQUM7WUFBRCxDQUFDLEFBdkJELElBdUJDO1lBdkJELHVCQXVCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vaW5zdGFncmFtLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7SW50cm99IGZyb20gJy4vaW50cm8uY29tcG9uZW50JztcblxuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW0luc3RhZ3JhbSwgUHJvamVjdHMsIEludHJvXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxpbnRybyBpZD1cImludHJvXCI+PC9pbnRybz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFuay1ibG9ja1wiPjwvZGl2PlxuICAgICAgICAgICAgPHByb2plY3RzPjwvcHJvamVjdHM+XG4gICAgICAgICAgICA8aW5zdGFncmFtPjwvaW5zdGFncmFtPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV2FsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW50cm87XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgc2Nyb2xsaW5nU2VydmljZSA6IFNjcm9sbGluZ1NlcnZpY2UpIHtcblxuICAgIH1cbiAgICAvKlxuICAgICAgQ2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkaXJlY3RpdmUncyBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWRcbiAgICAgIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAqL1xuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5pbnRybyA9PSBudWxsICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50cm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludHJvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5pbnRybyAmJiBtZS5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydCh0aGlzLmludHJvKSkge1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZTphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW50cm8taW1hZ2VcIilbMF07XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUuYm90dG9tID0gLTEgKiB3aW5kb3cucGFnZVlPZmZzZXQgKiAxLjI1ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsaW5nXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==