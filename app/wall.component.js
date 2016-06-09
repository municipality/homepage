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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFHUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUduRCxDQUFDO2dCQUNMLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLCtCQUFTLEVBQUUsNkJBQVEsRUFBRSx1QkFBSyxFQUFFLHVCQUFLLEVBQUUseUJBQU0sQ0FBQzt3QkFDeEQsUUFBUSxFQUFHLHVWQU1WO3FCQUNKLENBQUM7O3dCQUFBO2dCQTBCRixXQUFDO1lBQUQsQ0FBQyxBQXpCRCxJQXlCQztZQXpCRCx1QkF5QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmltcG9ydCB7SW5zdGFncmFtfSBmcm9tICcuL2luc3RhZ3JhbS5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0cy5jb21wb25lbnQnO1xuXG5pbXBvcnQge0ludHJvfSBmcm9tICcuL2ludHJvLmNvbXBvbmVudCc7XG5pbXBvcnQge0JyaWFufSBmcm9tICcuL2JyaWFuLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvb3Rlcn0gZnJvbSAnLi9mb290ZXIuY29tcG9uZW50JztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ3dhbGwnLFxuICAgIGRpcmVjdGl2ZXMgOiBbSW5zdGFncmFtLCBQcm9qZWN0cywgSW50cm8sIEJyaWFuLCBGb290ZXJdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGludHJvIGlkPVwiaW50cm9cIj48L2ludHJvPlxuICAgICAgICAgICAgPGJyaWFuIGlkPVwiYnJpYW5cIj48L2JyaWFuPlxuICAgICAgICAgICAgPCEtLSA8cHJvamVjdHMgaWQ9XCJwcm9qZWN0c1wiIGNsYXNzPVwid2hpdGUtYmcgc2VjdGlvblwiPjwvcHJvamVjdHM+XG4gICAgICAgICAgICA8aW5zdGFncmFtIGlkPVwiaW5zdGFncmFtXCIgY2xhc3M9XCJibHVlLWJnIHNlY3Rpb25cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3BsYWlkLmpwZycpO1wiPjwvaW5zdGFncmFtPiAtLT5cbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbGVtZW50QXJyYXk7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuICAgIC8qXG4gICAgICBDYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIGRpcmVjdGl2ZSdzIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hlY2tlZFxuICAgICAgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICovXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRBcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aWV3cG9ydC1zaXplXCIpO1xuICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnRzKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnRzKCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICByZXNpemVFbGVtZW50cyAoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy90aGlzLmVsZW1lbnRBcnJheVtpXS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgLy90aGlzLmVsZW1lbnRBcnJheVtpXS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=