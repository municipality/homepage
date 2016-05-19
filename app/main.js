System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', './instagram.component'], function(exports_1, context_1) {
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
    var browser_1, core_1, http_1, instagram_component_1;
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
            function (instagram_component_1_1) {
                instagram_component_1 = instagram_component_1_1;
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
                        directives: [instagram_component_1.Instagram],
                        providers: [http_1.Http, http_1.HTTP_BINDINGS],
                        template: "\n        <instagram></instagram>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFFQSxDQUFDO2dCQUVELHNCQUFRLEdBQVI7Z0JBRUEsQ0FBQztnQkFoQkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsVUFBVSxFQUFHLENBQUMsK0JBQVMsQ0FBQzt3QkFDeEIsU0FBUyxFQUFHLENBQUMsV0FBSSxFQUFFLG9CQUFhLENBQUM7d0JBQ2pDLFFBQVEsRUFBRyx5Q0FFVjtxQkFDSixDQUFDOzt1QkFBQTtnQkFVRixVQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFJRCxtQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGUsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHAsIEhUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtJbnN0YWdyYW19IGZyb20gJy4vaW5zdGFncmFtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxuICAgIGRpcmVjdGl2ZXMgOiBbSW5zdGFncmFtXSxcbiAgICBwcm92aWRlcnMgOiBbSHR0cCwgSFRUUF9CSU5ESU5HU10sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxpbnN0YWdyYW0+PC9pbnN0YWdyYW0+XG4gICAgYFxufSlcblxuY2xhc3MgQXBwIGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcblxuICAgIH1cbn1cblxuXG5cbmJvb3RzdHJhcChBcHApO1xuIl19