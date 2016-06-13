System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './wall.component', './headerbar.component', './tetris.component', './scrolling.service', './mobile.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, http_1, wall_component_1, headerbar_component_1, tetris_component_1, scrolling_service_1, mobile_service_1;
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
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
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
            browser_1.bootstrap(App, [scrolling_service_1.ScrollingService, mobile_service_1.MobileService]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCxzQkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLHFCQUFJLEVBQUUsK0JBQVMsRUFBRSx5QkFBTSxDQUFDO3dCQUN0QyxTQUFTLEVBQUcsQ0FBQyxXQUFJLEVBQUUsb0JBQWEsQ0FBQzt3QkFDakMsUUFBUSxFQUFHLHNMQU1WO3FCQUNKLENBQUM7O3VCQUFBO2dCQVVGLFVBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQUlELG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsb0NBQWdCLEVBQUUsOEJBQWEsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgSFRUUF9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7V2FsbH0gZnJvbSAnLi93YWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge0hlYWRlcmJhcn0gZnJvbSAnLi9oZWFkZXJiYXIuY29tcG9uZW50JztcbmltcG9ydCB7VGV0cmlzfSBmcm9tICcuL3RldHJpcy5jb21wb25lbnQnO1xuXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlcyA6IFtXYWxsLCBIZWFkZXJiYXIsIFRldHJpc10sXG4gICAgcHJvdmlkZXJzIDogW0h0dHAsIEhUVFBfQklORElOR1NdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8aGVhZGVyYmFyPjwvaGVhZGVyYmFyPlxuICAgICAgICA8d2FsbD48L3dhbGw+XG4gICAgICAgIDxkaXYgaWQ9XCJpZy1wb3B1cC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgaWQ9XCJpZy1wb3B1cFwiIHNyYz1cImltYWdlcy9zYW1wbGUuanBnXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmNsYXNzIEFwcCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG5cbiAgICB9XG59XG5cblxuXG5ib290c3RyYXAoQXBwLCBbU2Nyb2xsaW5nU2VydmljZSwgTW9iaWxlU2VydmljZV0pO1xuIl19