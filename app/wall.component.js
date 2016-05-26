System.register(['angular2/core', './instagram.component', './projects.component', './headerbar.component', './intro.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, headerbar_component_1, intro_component_1;
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
            function (headerbar_component_1_1) {
                headerbar_component_1 = headerbar_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
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
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, headerbar_component_1.Headerbar, intro_component_1.Intro],
                        template: "\n            <headerbar></headerbar>\n            <intro></intro>\n            <projects></projects>\n            <instagram></instagram>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFFSTtnQkFDQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtnQkFFQSxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixVQUFVLEVBQUcsQ0FBQywrQkFBUyxFQUFFLDZCQUFRLEVBQUUsK0JBQVMsRUFBRSx1QkFBSyxDQUFDO3dCQUNwRCxRQUFRLEVBQUcsa0pBS1Y7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBWUYsV0FBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsdUJBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbmltcG9ydCB7SW5zdGFncmFtfSBmcm9tICcuL2luc3RhZ3JhbS5jb21wb25lbnQnO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWFkZXJiYXJ9IGZyb20gJy4vaGVhZGVyYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0ludHJvfSBmcm9tICcuL2ludHJvLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnd2FsbCcsXG4gICAgZGlyZWN0aXZlcyA6IFtJbnN0YWdyYW0sIFByb2plY3RzLCBIZWFkZXJiYXIsIEludHJvXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxoZWFkZXJiYXI+PC9oZWFkZXJiYXI+XG4gICAgICAgICAgICA8aW50cm8+PC9pbnRybz5cbiAgICAgICAgICAgIDxwcm9qZWN0cz48L3Byb2plY3RzPlxuICAgICAgICAgICAgPGluc3RhZ3JhbT48L2luc3RhZ3JhbT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdhbGwgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgIH1cbiAgICAvKlxuICAgICAgQ2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBkaXJlY3RpdmUncyBkYXRhLWJvdW5kIHByb3BlcnRpZXMgaGF2ZSBiZWVuIGNoZWNrZWRcbiAgICAgIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAqL1xuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cbn1cbiJdfQ==