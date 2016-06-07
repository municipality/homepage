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
                        //this.elementArray[i].style.width = window.innerWidth + "px";
                        this.elementArray[i].style.height = window.innerHeight + "px";
                    }
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro, brian_component_1.Brian, footer_component_1.Footer],
                        template: "\n            <intro id=\"intro\"></intro>\n            <brian></brian>\n            <!-- <projects id=\"projects\" class=\"white-bg section\"></projects>\n            <instagram id=\"instagram\" class=\"blue-bg section\" style=\"background-image: url('images/plaid.jpg');\"></instagram> -->\n            <footer></footer>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFHUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMvQyw4REFBOEQ7d0JBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDbEUsQ0FBQztnQkFDTCxDQUFDO2dCQW5DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixVQUFVLEVBQUcsQ0FBQywrQkFBUyxFQUFFLDZCQUFRLEVBQUUsdUJBQUssRUFBRSx1QkFBSyxFQUFFLHlCQUFNLENBQUM7d0JBQ3hELFFBQVEsRUFBRywwVUFNVjtxQkFDSixDQUFDOzt3QkFBQTtnQkEwQkYsV0FBQztZQUFELENBQUMsQUF6QkQsSUF5QkM7WUF6QkQsdUJBeUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5pbXBvcnQge0luc3RhZ3JhbX0gZnJvbSAnLi9pbnN0YWdyYW0uY29tcG9uZW50JztcbmltcG9ydCB7UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdHMuY29tcG9uZW50JztcblxuaW1wb3J0IHtJbnRyb30gZnJvbSAnLi9pbnRyby5jb21wb25lbnQnO1xuaW1wb3J0IHtCcmlhbn0gZnJvbSAnLi9icmlhbi5jb21wb25lbnQnO1xuaW1wb3J0IHtGb290ZXJ9IGZyb20gJy4vZm9vdGVyLmNvbXBvbmVudCc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW0luc3RhZ3JhbSwgUHJvamVjdHMsIEludHJvLCBCcmlhbiwgRm9vdGVyXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxpbnRybyBpZD1cImludHJvXCI+PC9pbnRybz5cbiAgICAgICAgICAgIDxicmlhbj48L2JyaWFuPlxuICAgICAgICAgICAgPCEtLSA8cHJvamVjdHMgaWQ9XCJwcm9qZWN0c1wiIGNsYXNzPVwid2hpdGUtYmcgc2VjdGlvblwiPjwvcHJvamVjdHM+XG4gICAgICAgICAgICA8aW5zdGFncmFtIGlkPVwiaW5zdGFncmFtXCIgY2xhc3M9XCJibHVlLWJnIHNlY3Rpb25cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3BsYWlkLmpwZycpO1wiPjwvaW5zdGFncmFtPiAtLT5cbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbGVtZW50QXJyYXk7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuICAgIC8qXG4gICAgICBDYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIGRpcmVjdGl2ZSdzIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hlY2tlZFxuICAgICAgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICovXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRBcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ2aWV3cG9ydC1zaXplXCIpO1xuICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnRzKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnRzKCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgICByZXNpemVFbGVtZW50cyAoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy90aGlzLmVsZW1lbnRBcnJheVtpXS5zdHlsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50QXJyYXlbaV0uc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19