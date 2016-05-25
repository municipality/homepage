System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Headerbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Headerbar = (function () {
                function Headerbar() {
                }
                Headerbar = __decorate([
                    core_1.Component({
                        selector: 'headerbar',
                        template: "\n        <div class=\"headerbar-name\">\n            <p>Brian Lee</p>\n        </div>\n        <div class=\"headerbar-options\">\n        <!-- From bottom to top because using float: right -->\n            <p>Instagram</p>\n            <p>Recent Projects</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFDSTtnQkFFQSxDQUFDO2dCQWhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxXQUFXO3dCQUN0QixRQUFRLEVBQUcsMlJBU1Y7cUJBQ0osQ0FBQzs7NkJBQUE7Z0JBS0YsZ0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELGlDQUlDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2hlYWRlcmJhcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJiYXItbmFtZVwiPlxuICAgICAgICAgICAgPHA+QnJpYW4gTGVlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcmJhci1vcHRpb25zXCI+XG4gICAgICAgIDwhLS0gRnJvbSBib3R0b20gdG8gdG9wIGJlY2F1c2UgdXNpbmcgZmxvYXQ6IHJpZ2h0IC0tPlxuICAgICAgICAgICAgPHA+SW5zdGFncmFtPC9wPlxuICAgICAgICAgICAgPHA+UmVjZW50IFByb2plY3RzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlcmJhciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuIl19