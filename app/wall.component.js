System.register(['angular2/core', './instagram.component', './projects.component', './intro.component', './brian.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, intro_component_1, brian_component_1;
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
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro, brian_component_1.Brian],
                        template: "\n            <intro id=\"intro\"></intro>\n            <brian></brian>\n            <projects id=\"projects\" class=\"white-bg section\"></projects>\n            <instagram id=\"instagram\" class=\"blue-bg section\" style=\"background-image: url('images/plaid.jpg');\"></instagram>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFHUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMvQyw4REFBOEQ7d0JBQzlELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztvQkFDbEUsQ0FBQztnQkFDTCxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixVQUFVLEVBQUcsQ0FBQywrQkFBUyxFQUFFLDZCQUFRLEVBQUUsdUJBQUssRUFBRSx1QkFBSyxDQUFDO3dCQUNoRCxRQUFRLEVBQUcsa1NBS1Y7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBMEJGLFdBQUM7WUFBRCxDQUFDLEFBekJELElBeUJDO1lBekJELHVCQXlCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vaW5zdGFncmFtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdHMuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7SW50cm99IGZyb20gJy4vaW50cm8uY29tcG9uZW50JztcclxuaW1wb3J0IHtCcmlhbn0gZnJvbSAnLi9icmlhbi5jb21wb25lbnQnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ3dhbGwnLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtJbnN0YWdyYW0sIFByb2plY3RzLCBJbnRybywgQnJpYW5dLFxyXG4gICAgdGVtcGxhdGUgOiBgXHJcbiAgICAgICAgICAgIDxpbnRybyBpZD1cImludHJvXCI+PC9pbnRybz5cclxuICAgICAgICAgICAgPGJyaWFuPjwvYnJpYW4+XHJcbiAgICAgICAgICAgIDxwcm9qZWN0cyBpZD1cInByb2plY3RzXCIgY2xhc3M9XCJ3aGl0ZS1iZyBzZWN0aW9uXCI+PC9wcm9qZWN0cz5cclxuICAgICAgICAgICAgPGluc3RhZ3JhbSBpZD1cImluc3RhZ3JhbVwiIGNsYXNzPVwiYmx1ZS1iZyBzZWN0aW9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9wbGFpZC5qcGcnKTtcIj48L2luc3RhZ3JhbT5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFdhbGwgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZWxlbWVudEFycmF5O1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAgIENhbGxlZCByaWdodCBhZnRlciB0aGUgZGlyZWN0aXZlJ3MgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkXHJcbiAgICAgIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICovXHJcbiAgICBuZ09uSW5pdCAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50QXJyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidmlld3BvcnQtc2l6ZVwiKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVFbGVtZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplRWxlbWVudHMgKCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudEFycmF5W2ldLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudEFycmF5W2ldLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19