System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './wall.component', './headerbar.component', './tetris.component', './scrolling.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, http_1, wall_component_1, headerbar_component_1, tetris_component_1, scrolling_service_1;
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
            },
            function (tetris_component_1_1) {
                tetris_component_1 = tetris_component_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
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
                        directives: [wall_component_1.Wall, headerbar_component_1.Headerbar, tetris_component_1.Tetris],
                        providers: [http_1.Http, http_1.HTTP_BINDINGS],
                        template: "\n        <div class=\"background\">\n            <headerbar></headerbar>\n            <wall></wall>\n        </div>\n        <div id=\"ig-popup-container\">\n            <div id=\"ig-popup\">\n                <img id=\"ig-popup-image\" src=\"images/sample.jpg\">\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App, [scrolling_service_1.ScrollingService]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCxzQkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLHFCQUFJLEVBQUUsK0JBQVMsRUFBRSx5QkFBTSxDQUFDO3dCQUN0QyxTQUFTLEVBQUcsQ0FBQyxXQUFJLEVBQUUsb0JBQWEsQ0FBQzt3QkFDakMsUUFBUSxFQUFHLG1UQVVWO3FCQUNKLENBQUM7O3VCQUFBO2dCQVVGLFVBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQUlELG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsb0NBQWdCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge1dhbGx9IGZyb20gJy4vd2FsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtIZWFkZXJiYXJ9IGZyb20gJy4vaGVhZGVyYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1RldHJpc30gZnJvbSAnLi90ZXRyaXMuY29tcG9uZW50JztcblxuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtXYWxsLCBIZWFkZXJiYXIsIFRldHJpc10sXG4gICAgcHJvdmlkZXJzIDogW0h0dHAsIEhUVFBfQklORElOR1NdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGhlYWRlcmJhcj48L2hlYWRlcmJhcj5cbiAgICAgICAgICAgIDx3YWxsPjwvd2FsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJpZy1wb3B1cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpZy1wb3B1cFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJpZy1wb3B1cC1pbWFnZVwiIHNyYz1cImltYWdlcy9zYW1wbGUuanBnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuY2xhc3MgQXBwIGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cbn1cblxuXG5cbmJvb3RzdHJhcChBcHAsIFtTY3JvbGxpbmdTZXJ2aWNlXSk7XG4iXX0=