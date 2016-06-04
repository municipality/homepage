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
                        template: "\n        <headerbar></headerbar>\n        <wall></wall>\n        <div id=\"ig-popup-container\">\n            <img id=\"ig-popup\" src=\"images/sample.jpg\">\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App, [scrolling_service_1.ScrollingService]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCxzQkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLHFCQUFJLEVBQUUsK0JBQVMsRUFBRSx5QkFBTSxDQUFDO3dCQUN0QyxTQUFTLEVBQUcsQ0FBQyxXQUFJLEVBQUUsb0JBQWEsQ0FBQzt3QkFDakMsUUFBUSxFQUFHLHNMQU1WO3FCQUNKLENBQUM7O3VCQUFBO2dCQVVGLFVBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQUlELG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsb0NBQWdCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIVFRQX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCB7V2FsbH0gZnJvbSAnLi93YWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGVhZGVyYmFyfSBmcm9tICcuL2hlYWRlcmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RldHJpc30gZnJvbSAnLi90ZXRyaXMuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxyXG4gICAgZGlyZWN0aXZlcyA6IFtXYWxsLCBIZWFkZXJiYXIsIFRldHJpc10sXHJcbiAgICBwcm92aWRlcnMgOiBbSHR0cCwgSFRUUF9CSU5ESU5HU10sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8aGVhZGVyYmFyPjwvaGVhZGVyYmFyPlxyXG4gICAgICAgIDx3YWxsPjwvd2FsbD5cclxuICAgICAgICA8ZGl2IGlkPVwiaWctcG9wdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgaWQ9XCJpZy1wb3B1cFwiIHNyYz1cImltYWdlcy9zYW1wbGUuanBnXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5jbGFzcyBBcHAgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0ICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuYm9vdHN0cmFwKEFwcCwgW1Njcm9sbGluZ1NlcnZpY2VdKTtcclxuIl19