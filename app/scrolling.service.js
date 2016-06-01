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
    var ScrollingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ScrollingService = (function () {
                function ScrollingService() {
                }
                ScrollingService.prototype.isInViewport = function (component) {
                    var rect = component.getBoundingClientRect();
                    //rect.top is distance from top in perspective to viewport
                    //window.innerheight is viewport size
                    return (rect.top < window.innerHeight && rect.bottom > 0);
                };
                ScrollingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ScrollingService);
                return ScrollingService;
            }());
            exports_1("ScrollingService", ScrollingService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJO2dCQUVBLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFjLFNBQVM7b0JBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN6QywwREFBMEQ7b0JBQzFELHFDQUFxQztvQkFDckMsTUFBTSxDQUFDLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUt4RCxDQUFDO2dCQUNWLENBQUM7Z0JBaEJMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQWtCYix1QkFBQztZQUFELENBQUMsQUFqQkQsSUFpQkM7WUFqQkQsK0NBaUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Nyb2xsaW5nU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgaXNJblZpZXdwb3J0IChjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBjb21wb25lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAvL3JlY3QudG9wIGlzIGRpc3RhbmNlIGZyb20gdG9wIGluIHBlcnNwZWN0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAvL3dpbmRvdy5pbm5lcmhlaWdodCBpcyB2aWV3cG9ydCBzaXplXG4gICAgICAgICAgICByZXR1cm4gKCByZWN0LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiByZWN0LmJvdHRvbSA+IDBcbiAgICAgICAgICAgICAgICAvLyByZWN0LnRvcCA+PSAwICYmXG4gICAgICAgICAgICAgICAgLy8gcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgICAgICAgICAvLyByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIC8qb3IgJCh3aW5kb3cpLmhlaWdodCgpICovXG4gICAgICAgICAgICAgICAgLy8gcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAvKm9yICQod2luZG93KS53aWR0aCgpICovXG4gICAgICAgICAgICApO1xuICAgIH1cblxufVxuIl19