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
    var Footer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Footer = (function () {
                function Footer() {
                }
                Footer = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        template: "\n        <div class=\"logo\">\n            <img class=\"logo logo-image\" src=\"images/logo.png\">\n        </div>\n        <div class=\"container\">\n            <div class=\"cell\">\n                <p>Software Engineer</p>\n                <p>Designer</p>\n            </div>\n            <div class=\"cell\">\n                <h4>Contact</h4>\n                <a class=\"email link\" href=\"mailto:ucsdblee@gmail.com\">ucsdblee@gmail.com</a>\n            </div>\n            <div class=\"cell\">\n                <h4>Follow My Ventures</h4>\n                <a class=\"ig-name link\" href=\"http://instagram.com/best_blee_it\" target=\"_blank\"><img class=\"ventures-icon\" src='images/icons/instagram-icon.png'>@best_blee_it</a>\n                <a class=\"linkedin-name link\" href=\"http://linkedin.com/in/bleee\" target=\"_blank\"><img class=\"ventures-icon\" src=\"images/icons/linkedin-icon.png\">@bleee</a>\n            </div>\n        </div>\n\n        <div class=\"last-line\">\n            <p>&copy;Brian Lee</p>\n            <p>Built with Angular2</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Footer);
                return Footer;
            }());
            exports_1("Footer", Footer);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBRUk7Z0JBRUEsQ0FBQztnQkFqQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFHLG1rQ0F3QlY7cUJBQ0osQ0FBQzs7MEJBQUE7Z0JBT0YsYUFBQztZQUFELENBQUMsQUFMRCxJQUtDO1lBTEQsMkJBS0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2Zvb3RlcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibG9nbyBsb2dvLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyPC9wPlxuICAgICAgICAgICAgICAgIDxwPkRlc2lnbmVyPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgIDxoND5Db250YWN0PC9oND5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImVtYWlsIGxpbmtcIiBocmVmPVwibWFpbHRvOnVjc2RibGVlQGdtYWlsLmNvbVwiPnVjc2RibGVlQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxcIj5cbiAgICAgICAgICAgICAgICA8aDQ+Rm9sbG93IE15IFZlbnR1cmVzPC9oND5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImlnLW5hbWUgbGlua1wiIGhyZWY9XCJodHRwOi8vaW5zdGFncmFtLmNvbS9iZXN0X2JsZWVfaXRcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzPVwidmVudHVyZXMtaWNvblwiIHNyYz0naW1hZ2VzL2ljb25zL2luc3RhZ3JhbS1pY29uLnBuZyc+QGJlc3RfYmxlZV9pdDwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpbmtlZGluLW5hbWUgbGlua1wiIGhyZWY9XCJodHRwOi8vbGlua2VkaW4uY29tL2luL2JsZWVlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBjbGFzcz1cInZlbnR1cmVzLWljb25cIiBzcmM9XCJpbWFnZXMvaWNvbnMvbGlua2VkaW4taWNvbi5wbmdcIj5AYmxlZWU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhc3QtbGluZVwiPlxuICAgICAgICAgICAgPHA+JmNvcHk7QnJpYW4gTGVlPC9wPlxuICAgICAgICAgICAgPHA+QnVpbHQgd2l0aCBBbmd1bGFyMjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIEZvb3RlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG4iXX0=