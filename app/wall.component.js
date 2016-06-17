System.register(['angular2/core', './instagram.component', './projects.component', './intro.component', './objectives.component', './footer.component', './faces.component', './media.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, intro_component_1, objectives_component_1, footer_component_1, faces_component_1, media_component_1;
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
            function (objectives_component_1_1) {
                objectives_component_1 = objectives_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (faces_component_1_1) {
                faces_component_1 = faces_component_1_1;
            },
            function (media_component_1_1) {
                media_component_1 = media_component_1_1;
            }],
        execute: function() {
            /// <reference path="fbsdk.d.ts" />
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
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro, footer_component_1.Footer, objectives_component_1.Objectives, faces_component_1.Faces, media_component_1.Social],
                        template: "\n            <intro id=\"intro\"></intro>\n            <objectives id=\"objectives\"></objectives>\n            <faces id=\"faces\"></faces>\n            <social id=\"media\"></social>\n            <!-- <projects id=\"projects\" class=\"white-bg section\"></projects>\n            <instagram id=\"instagram\" class=\"blue-bg section\" style=\"background-image: url('images/plaid.jpg');\"></instagram> -->\n            <footer id=\"footer\"></footer>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBLG1DQUFtQztZQWVuQztnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFTQztvQkFSRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFJUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUduRCxDQUFDO2dCQUNMLENBQUM7Z0JBdENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLCtCQUFTLEVBQUUsNkJBQVEsRUFBRSx1QkFBSyxFQUFFLHlCQUFNLEVBQUUsaUNBQVUsRUFBRSx1QkFBSyxFQUFFLHdCQUFNLENBQUM7d0JBQzVFLFFBQVEsRUFBRywwY0FRVjtxQkFDSixDQUFDOzt3QkFBQTtnQkEyQkYsV0FBQztZQUFELENBQUMsQUExQkQsSUEwQkM7WUExQkQsdUJBMEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5pbXBvcnQge0luc3RhZ3JhbX0gZnJvbSAnLi9pbnN0YWdyYW0uY29tcG9uZW50JztcbmltcG9ydCB7UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdHMuY29tcG9uZW50JztcblxuaW1wb3J0IHtJbnRyb30gZnJvbSAnLi9pbnRyby5jb21wb25lbnQnO1xuaW1wb3J0IHtPYmplY3RpdmVzfSBmcm9tICcuL29iamVjdGl2ZXMuY29tcG9uZW50JztcbmltcG9ydCB7Rm9vdGVyfSBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtGYWNlc30gZnJvbSAnLi9mYWNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTb2NpYWx9IGZyb20gJy4vbWVkaWEuY29tcG9uZW50JztcblxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImZic2RrLmQudHNcIiAvPlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW0luc3RhZ3JhbSwgUHJvamVjdHMsIEludHJvLCBGb290ZXIsIE9iamVjdGl2ZXMsIEZhY2VzLCBTb2NpYWxdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGludHJvIGlkPVwiaW50cm9cIj48L2ludHJvPlxuICAgICAgICAgICAgPG9iamVjdGl2ZXMgaWQ9XCJvYmplY3RpdmVzXCI+PC9vYmplY3RpdmVzPlxuICAgICAgICAgICAgPGZhY2VzIGlkPVwiZmFjZXNcIj48L2ZhY2VzPlxuICAgICAgICAgICAgPHNvY2lhbCBpZD1cIm1lZGlhXCI+PC9zb2NpYWw+XG4gICAgICAgICAgICA8IS0tIDxwcm9qZWN0cyBpZD1cInByb2plY3RzXCIgY2xhc3M9XCJ3aGl0ZS1iZyBzZWN0aW9uXCI+PC9wcm9qZWN0cz5cbiAgICAgICAgICAgIDxpbnN0YWdyYW0gaWQ9XCJpbnN0YWdyYW1cIiBjbGFzcz1cImJsdWUtYmcgc2VjdGlvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcGxhaWQuanBnJyk7XCI+PC9pbnN0YWdyYW0+IC0tPlxuICAgICAgICAgICAgPGZvb3RlciBpZD1cImZvb3RlclwiPjwvZm9vdGVyPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgV2FsbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZWxlbWVudEFycmF5O1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbiAgICAvKlxuICAgICAgQ2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkaXJlY3RpdmUncyBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWRcbiAgICAgIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAqL1xuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidmlld3BvcnQtc2l6ZVwiKTtcbiAgICAgICAgdGhpcy5yZXNpemVFbGVtZW50cygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemVFbGVtZW50cygpO1xuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG5cbiAgICByZXNpemVFbGVtZW50cyAoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy90aGlzLmVsZW1lbnRBcnJheVtpXS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgLy90aGlzLmVsZW1lbnRBcnJheVtpXS5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=