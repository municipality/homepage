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
                /**
                    @param id : element to scroll to id
                 */
                ScrollingService.prototype.scrollTo = function (id) {
                    var scrollAmt = 50;
                    var item = document.getElementById(id);
                    var rect = item.getBoundingClientRect();
                    var body = document.body;
                    var html = document.documentElement;
                    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                    var scroll = function () {
                        var item = document.getElementById(id);
                        var rect = item.getBoundingClientRect();
                        //Need to scroll down to element
                        if (window.pageYOffset + window.innerHeight < height && rect.top > 0) {
                            if (rect.top <= scrollAmt) {
                                setTimeout(function () {
                                    window.scrollBy(0, rect.top);
                                }, .1);
                            }
                            else {
                                setTimeout(function () {
                                    window.scrollBy(0, scrollAmt);
                                    scroll();
                                }, .1);
                            }
                        }
                        else if (rect.top < 0) {
                            if (rect.top > -1 * scrollAmt) {
                                setTimeout(function () {
                                    window.scrollBy(0, rect.top);
                                }, .1);
                            }
                            else {
                                setTimeout(function () {
                                    window.scrollBy(0, -1 * scrollAmt);
                                    scroll();
                                }, .1);
                            }
                        }
                    };
                    scroll();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJO2dCQUVBLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFjLFNBQVM7b0JBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN6QywwREFBMEQ7b0JBQzFELHFDQUFxQztvQkFDckMsTUFBTSxDQUFDLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUt4RCxDQUFDO2dCQUNWLENBQUM7Z0JBR0Q7O21CQUVHO2dCQUNILG1DQUFRLEdBQVIsVUFBVSxFQUFFO29CQUNSLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxJQUFJLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ3hDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7b0JBRXBDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO29CQUN6RSxJQUFJLE1BQU0sR0FBRzt3QkFDVCxJQUFJLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFFeEMsZ0NBQWdDO3dCQUNoQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ1gsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDSixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0NBQzlCLE1BQU0sRUFBRSxDQUFDO2dDQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUdMLENBQUM7d0JBR0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN6QixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ1gsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDRixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLENBQUM7b0NBQ2pDLE1BQU0sRUFBRSxDQUFDO2dDQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUNMLENBQUM7b0JBRUwsQ0FBQyxDQUFBO29CQUNELE1BQU0sRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBcEVMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQXNFYix1QkFBQztZQUFELENBQUMsQUFyRUQsSUFxRUM7WUFyRUQsK0NBcUVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Nyb2xsaW5nU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgaXNJblZpZXdwb3J0IChjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBjb21wb25lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAvL3JlY3QudG9wIGlzIGRpc3RhbmNlIGZyb20gdG9wIGluIHBlcnNwZWN0aXZlIHRvIHZpZXdwb3J0XG4gICAgICAgICAgICAvL3dpbmRvdy5pbm5lcmhlaWdodCBpcyB2aWV3cG9ydCBzaXplXG4gICAgICAgICAgICByZXR1cm4gKCByZWN0LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiByZWN0LmJvdHRvbSA+IDBcbiAgICAgICAgICAgICAgICAvLyByZWN0LnRvcCA+PSAwICYmXG4gICAgICAgICAgICAgICAgLy8gcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgICAgICAgICAvLyByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIC8qb3IgJCh3aW5kb3cpLmhlaWdodCgpICovXG4gICAgICAgICAgICAgICAgLy8gcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAvKm9yICQod2luZG93KS53aWR0aCgpICovXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICAgIEBwYXJhbSBpZCA6IGVsZW1lbnQgdG8gc2Nyb2xsIHRvIGlkXG4gICAgICovXG4gICAgc2Nyb2xsVG8gKGlkKSB7XG4gICAgICAgIHZhciBzY3JvbGxBbXQgPSA1MDtcbiAgICAgICAgdmFyIGl0ZW06YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB2YXIgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgdmFyIGhlaWdodCA9IE1hdGgubWF4KCBib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQgKTtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBpdGVtOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIHZhciByZWN0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgLy9OZWVkIHRvIHNjcm9sbCBkb3duIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCArIHdpbmRvdy5pbm5lckhlaWdodCA8IGhlaWdodCAmJiByZWN0LnRvcCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZihyZWN0LnRvcCA8PSBzY3JvbGxBbXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgcmVjdC50b3ApO1xuICAgICAgICAgICAgICAgICAgICB9LCAuMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgc2Nyb2xsQW10KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAuMSk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9OZWVkIHRvIHNjcm9sbCB1cCB0byBlbGVtZW50XG4gICAgICAgICAgICBlbHNlIGlmIChyZWN0LnRvcCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZihyZWN0LnRvcCA+IC0xKnNjcm9sbEFtdCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCByZWN0LnRvcCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC0xKnNjcm9sbEFtdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHNjcm9sbCgpO1xuICAgIH1cblxufVxuIl19