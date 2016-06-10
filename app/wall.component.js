System.register(['angular2/core', './instagram.component', './projects.component', './intro.component', './brian.component', './footer.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, intro_component_1, brian_component_1, footer_component_1;
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
            function (brian_component_1_1) {
                brian_component_1 = brian_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            Wall = (function () {
                function Wall() {
                }
                /*
                  Called right after the directive's data-bound properties have been checked
                  for the first time
                 */
                Wall.prototype.ngOnInit = function () {
                    var _this = this;
                    this.elementArray = document.getElementsByClassName("viewport-size");
                    this.resizeElements();
                    window.addEventListener("resize", function (e) {
                        _this.resizeElements();
                    });
                };
                Wall.prototype.resizeElements = function () {
                    for (var i = 0; i < this.elementArray.length; i++) {
                    }
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro, brian_component_1.Brian, footer_component_1.Footer],
                        template: "\n            <intro id=\"intro\"></intro>\n            <brian id=\"brian\"></brian>\n            <!-- <projects id=\"projects\" class=\"white-bg section\"></projects>\n            <instagram id=\"instagram\" class=\"blue-bg section\" style=\"background-image: url('images/plaid.jpg');\"></instagram> -->\n            <footer></footer>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFHUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUduRCxDQUFDO2dCQUNMLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLCtCQUFTLEVBQUUsNkJBQVEsRUFBRSx1QkFBSyxFQUFFLHVCQUFLLEVBQUUseUJBQU0sQ0FBQzt3QkFDeEQsUUFBUSxFQUFHLHVWQU1WO3FCQUNKLENBQUM7O3dCQUFBO2dCQTBCRixXQUFDO1lBQUQsQ0FBQyxBQXpCRCxJQXlCQztZQXpCRCx1QkF5QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCB7SW5zdGFncmFtfSBmcm9tICcuL2luc3RhZ3JhbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RzLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0ludHJvfSBmcm9tICcuL2ludHJvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnJpYW59IGZyb20gJy4vYnJpYW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtGb290ZXJ9IGZyb20gJy4vZm9vdGVyLmNvbXBvbmVudCc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnd2FsbCcsXHJcbiAgICBkaXJlY3RpdmVzIDogW0luc3RhZ3JhbSwgUHJvamVjdHMsIEludHJvLCBCcmlhbiwgRm9vdGVyXSxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgICAgICA8aW50cm8gaWQ9XCJpbnRyb1wiPjwvaW50cm8+XHJcbiAgICAgICAgICAgIDxicmlhbiBpZD1cImJyaWFuXCI+PC9icmlhbj5cclxuICAgICAgICAgICAgPCEtLSA8cHJvamVjdHMgaWQ9XCJwcm9qZWN0c1wiIGNsYXNzPVwid2hpdGUtYmcgc2VjdGlvblwiPjwvcHJvamVjdHM+XHJcbiAgICAgICAgICAgIDxpbnN0YWdyYW0gaWQ9XCJpbnN0YWdyYW1cIiBjbGFzcz1cImJsdWUtYmcgc2VjdGlvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcGxhaWQuanBnJyk7XCI+PC9pbnN0YWdyYW0+IC0tPlxyXG4gICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2FsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlbGVtZW50QXJyYXk7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgLypcclxuICAgICAgQ2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkaXJlY3RpdmUncyBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWRcclxuICAgICAgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgKi9cclxuICAgIG5nT25Jbml0ICgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRBcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aWV3cG9ydC1zaXplXCIpO1xyXG4gICAgICAgIHRoaXMucmVzaXplRWxlbWVudHMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNpemVFbGVtZW50cyAoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5lbGVtZW50QXJyYXlbaV0uc3R5bGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgLy90aGlzLmVsZW1lbnRBcnJheVtpXS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==