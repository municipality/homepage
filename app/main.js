System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './wall.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, http_1, wall_component_1;
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
                        directives: [wall_component_1.Wall],
                        providers: [http_1.Http, http_1.HTTP_BINDINGS],
                        template: "\n        <div class=\"background\">\n            <div class=\"left-side\"></div>\n            <div class=\"right-side\"></div>\n            <wall></wall>\n        </div>\n\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCxzQkFBUSxHQUFSO2dCQUVBLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRyxDQUFDLHFCQUFJLENBQUM7d0JBQ25CLFNBQVMsRUFBRyxDQUFDLFdBQUksRUFBRSxvQkFBYSxDQUFDO3dCQUNqQyxRQUFRLEVBQUcsd0xBU1Y7cUJBQ0osQ0FBQzs7dUJBQUE7Z0JBVUYsVUFBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBSUQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIVFRQX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuaW1wb3J0IHtXYWxsfSBmcm9tICcuL3dhbGwuY29tcG9uZW50JztcblxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxuICAgIGRpcmVjdGl2ZXMgOiBbV2FsbF0sXG4gICAgcHJvdmlkZXJzIDogW0h0dHAsIEhUVFBfQklORElOR1NdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtc2lkZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXNpZGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDx3YWxsPjwvd2FsbD5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgYFxufSlcblxuY2xhc3MgQXBwIGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cbn1cblxuXG5cbmJvb3RzdHJhcChBcHApO1xuIl19