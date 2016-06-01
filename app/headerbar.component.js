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
                Headerbar.prototype.scrollTo = function (id) {
                    var item = document.getElementById(id);
                    var rect = item.getBoundingClientRect();
                    var body = document.body;
                    var html = document.documentElement;
                    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                    var scroll = function () {
                        var item = document.getElementById(id);
                        var rect = item.getBoundingClientRect();
                        if (window.pageYOffset + window.innerHeight < height && rect.top > 0) {
                            setTimeout(function () {
                                window.scrollBy(0, 50);
                                scroll();
                            }, .1);
                        }
                        else if (rect.top < -50) {
                            setTimeout(function () {
                                window.scrollBy(0, -50);
                                scroll();
                            }, .1);
                        }
                    };
                    scroll();
                };
                Headerbar = __decorate([
                    core_1.Component({
                        selector: 'headerbar',
                        template: "\n        <div class=\"headerbar-name\">\n            <p>Brian Lee</p>\n        </div>\n        <div class=\"headerbar-options\">\n        <!-- From bottom to top because using float: right -->\n            <p (click)=\"scrollTo('instagram')\">Instagram</p>\n            <p (click)=\"scrollTo('projects')\">Projects</p>\n            <p (click)=\"scrollTo('intro')\">Intro</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Headerbar);
                return Headerbar;
            }());
            exports_1("Headerbar", Headerbar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlcmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFFRCw0QkFBUSxHQUFSLFVBQVUsRUFBRTtvQkFDUixJQUFJLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDekIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztvQkFFcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQzVDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUM7b0JBQ3pFLElBQUksTUFBTSxHQUFHO3dCQUNULElBQUksSUFBSSxHQUFPLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO3dCQUN4QyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsVUFBVSxDQUFDO2dDQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dDQUN2QixNQUFNLEVBQUUsQ0FBQzs0QkFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBRVgsQ0FBQzt3QkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3RCLFVBQVUsQ0FBQztnQ0FDUCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUN4QixNQUFNLEVBQUUsQ0FBQzs0QkFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFFTCxDQUFDLENBQUE7b0JBQ0QsTUFBTSxFQUFFLENBQUM7Z0JBQ2IsQ0FBQztnQkE5Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsV0FBVzt3QkFDdEIsUUFBUSxFQUFHLCtZQVVWO3FCQUNKLENBQUM7OzZCQUFBO2dCQWtDRixnQkFBQztZQUFELENBQUMsQUFqQ0QsSUFpQ0M7WUFqQ0QsaUNBaUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2hlYWRlcmJhcicsXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJiYXItbmFtZVwiPlxuICAgICAgICAgICAgPHA+QnJpYW4gTGVlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcmJhci1vcHRpb25zXCI+XG4gICAgICAgIDwhLS0gRnJvbSBib3R0b20gdG8gdG9wIGJlY2F1c2UgdXNpbmcgZmxvYXQ6IHJpZ2h0IC0tPlxuICAgICAgICAgICAgPHAgKGNsaWNrKT1cInNjcm9sbFRvKCdpbnN0YWdyYW0nKVwiPkluc3RhZ3JhbTwvcD5cbiAgICAgICAgICAgIDxwIChjbGljayk9XCJzY3JvbGxUbygncHJvamVjdHMnKVwiPlByb2plY3RzPC9wPlxuICAgICAgICAgICAgPHAgKGNsaWNrKT1cInNjcm9sbFRvKCdpbnRybycpXCI+SW50cm88L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyYmFyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBzY3JvbGxUbyAoaWQpIHtcbiAgICAgICAgdmFyIGl0ZW06YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB2YXIgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgdmFyIGhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBpdGVtOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIHZhciByZWN0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCA8IGhlaWdodCAmJiByZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSwgLjEpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWN0LnRvcCA8IC01MCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTUwKTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfSwgLjEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsKCk7XG4gICAgfVxufVxuIl19