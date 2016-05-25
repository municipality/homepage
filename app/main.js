System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './wall.component', './headerbar.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, http_1, wall_component_1, headerbar_component_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (wall_component_1_1) {
                wall_component_1 = wall_component_1_1;
            },
            function (headerbar_component_1_1) {
                headerbar_component_1 = headerbar_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.ngOnInit = function () {
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [wall_component_1.Wall, headerbar_component_1.Headerbar],
                        providers: [http_1.Http, http_1.HTTP_BINDINGS],
                        template: "\n        <div class=\"background\">\n            <div class=\"left-side\"></div>\n            <div class=\"right-side\"></div>\n            <headerbar></headerbar>\n            <wall></wall>\n        </div>\n\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCxzQkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLHFCQUFJLEVBQUUsK0JBQVMsQ0FBQzt3QkFDOUIsU0FBUyxFQUFHLENBQUMsV0FBSSxFQUFFLG9CQUFhLENBQUM7d0JBQ2pDLFFBQVEsRUFBRyw2TkFVVjtxQkFDSixDQUFDOzt1QkFBQTtnQkFVRixVQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFJRCxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge1dhbGx9IGZyb20gJy4vd2FsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWFkZXJiYXJ9IGZyb20gJy4vaGVhZGVyYmFyLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtXYWxsLCBIZWFkZXJiYXJdLFxuICAgIHByb3ZpZGVycyA6IFtIdHRwLCBIVFRQX0JJTkRJTkdTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1zaWRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8aGVhZGVyYmFyPjwvaGVhZGVyYmFyPlxuICAgICAgICAgICAgPHdhbGw+PC93YWxsPlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICBgXG59KVxuXG5jbGFzcyBBcHAgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuXG4gICAgfVxufVxuXG5cblxuYm9vdHN0cmFwKEFwcCk7XG4iXX0=