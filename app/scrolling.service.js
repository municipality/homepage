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
                    return (rect.top < window.pageYOffset + window.innerHeight && rect.bottom > 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJO2dCQUVBLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFjLFNBQVM7b0JBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUV6QyxNQUFNLENBQUMsQ0FBRSxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FLN0UsQ0FBQztnQkFDVixDQUFDO2dCQWZMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQWdCYix1QkFBQztZQUFELENBQUMsQUFmRCxJQWVDO1lBZkQsK0NBZUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JvbGxpbmdTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBpc0luVmlld3BvcnQgKGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgcmVjdCA9IGNvbXBvbmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgcmV0dXJuICggcmVjdC50b3AgPCB3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgcmVjdC5ib3R0b20gPiAwXG4gICAgICAgICAgICAgICAgLy8gcmVjdC50b3AgPj0gMCAmJlxuICAgICAgICAgICAgICAgIC8vIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAgICAgICAgICAgLy8gcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiAvKm9yICQod2luZG93KS5oZWlnaHQoKSAqL1xuICAgICAgICAgICAgICAgIC8vIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLypvciAkKHdpbmRvdykud2lkdGgoKSAqL1xuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=