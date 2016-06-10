System.register(['angular2/core', './instagram.component', './projects.component', './intro.component', './objectives.component', './brian.component', './footer.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, intro_component_1, objectives_component_1, brian_component_1, footer_component_1;
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
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro, brian_component_1.Brian, footer_component_1.Footer, objectives_component_1.Objectives],
                        template: "\n            <intro id=\"intro\"></intro>\n            <objectives id=\"objectives\"></objectives>\n            \n            <!-- <projects id=\"projects\" class=\"white-bg section\"></projects>\n            <instagram id=\"instagram\" class=\"blue-bg section\" style=\"background-image: url('images/plaid.jpg');\"></instagram> -->\n            <footer></footer>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFHUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUduRCxDQUFDO2dCQUNMLENBQUM7Z0JBcENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLCtCQUFTLEVBQUUsNkJBQVEsRUFBRSx1QkFBSyxFQUFFLHVCQUFLLEVBQUUseUJBQU0sRUFBRSxpQ0FBVSxDQUFDO3dCQUNwRSxRQUFRLEVBQUcsb1hBT1Y7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBMEJGLFdBQUM7WUFBRCxDQUFDLEFBekJELElBeUJDO1lBekJELHVCQXlCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cblxuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vaW5zdGFncmFtLmNvbXBvbmVudCc7XG5pbXBvcnQge1Byb2plY3RzfSBmcm9tICcuL3Byb2plY3RzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7SW50cm99IGZyb20gJy4vaW50cm8uY29tcG9uZW50JztcbmltcG9ydCB7T2JqZWN0aXZlc30gZnJvbSAnLi9vYmplY3RpdmVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0JyaWFufSBmcm9tICcuL2JyaWFuLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvb3Rlcn0gZnJvbSAnLi9mb290ZXIuY29tcG9uZW50JztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ3dhbGwnLFxuICAgIGRpcmVjdGl2ZXMgOiBbSW5zdGFncmFtLCBQcm9qZWN0cywgSW50cm8sIEJyaWFuLCBGb290ZXIsIE9iamVjdGl2ZXNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICAgICAgPGludHJvIGlkPVwiaW50cm9cIj48L2ludHJvPlxuICAgICAgICAgICAgPG9iamVjdGl2ZXMgaWQ9XCJvYmplY3RpdmVzXCI+PC9vYmplY3RpdmVzPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIDxwcm9qZWN0cyBpZD1cInByb2plY3RzXCIgY2xhc3M9XCJ3aGl0ZS1iZyBzZWN0aW9uXCI+PC9wcm9qZWN0cz5cbiAgICAgICAgICAgIDxpbnN0YWdyYW0gaWQ9XCJpbnN0YWdyYW1cIiBjbGFzcz1cImJsdWUtYmcgc2VjdGlvblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvcGxhaWQuanBnJyk7XCI+PC9pbnN0YWdyYW0+IC0tPlxuICAgICAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdhbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVsZW1lbnRBcnJheTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG4gICAgLypcbiAgICAgIENhbGxlZCByaWdodCBhZnRlciB0aGUgZGlyZWN0aXZlJ3MgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkXG4gICAgICBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgKi9cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEFycmF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpZXdwb3J0LXNpemVcIik7XG4gICAgICAgIHRoaXMucmVzaXplRWxlbWVudHMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplRWxlbWVudHMoKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHJlc2l6ZUVsZW1lbnRzICgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudEFycmF5W2ldLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudEFycmF5W2ldLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==