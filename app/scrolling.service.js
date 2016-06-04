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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUNJO2dCQUVBLENBQUM7Z0JBRUQsdUNBQVksR0FBWixVQUFjLFNBQVM7b0JBQ25CLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN6QywwREFBMEQ7b0JBQzFELHFDQUFxQztvQkFDckMsTUFBTSxDQUFDLENBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUt4RCxDQUFDO2dCQUNWLENBQUM7Z0JBR0Q7O21CQUVHO2dCQUNILG1DQUFRLEdBQVIsVUFBVSxFQUFFO29CQUNSLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxJQUFJLEdBQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ3hDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7b0JBRXBDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBRSxDQUFDO29CQUN6RSxJQUFJLE1BQU0sR0FBRzt3QkFDVCxJQUFJLElBQUksR0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzt3QkFFeEMsZ0NBQWdDO3dCQUNoQyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ1gsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDSixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7b0NBQzlCLE1BQU0sRUFBRSxDQUFDO2dDQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUdMLENBQUM7d0JBR0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dDQUN6QixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ1gsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDRixVQUFVLENBQUM7b0NBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLENBQUM7b0NBQ2pDLE1BQU0sRUFBRSxDQUFDO2dDQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUNMLENBQUM7b0JBRUwsQ0FBQyxDQUFBO29CQUNELE1BQU0sRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBcEVMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQXNFYix1QkFBQztZQUFELENBQUMsQUFyRUQsSUFxRUM7WUFyRUQsK0NBcUVDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsaW5nU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzSW5WaWV3cG9ydCAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBjb21wb25lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIC8vcmVjdC50b3AgaXMgZGlzdGFuY2UgZnJvbSB0b3AgaW4gcGVyc3BlY3RpdmUgdG8gdmlld3BvcnRcclxuICAgICAgICAgICAgLy93aW5kb3cuaW5uZXJoZWlnaHQgaXMgdmlld3BvcnQgc2l6ZVxyXG4gICAgICAgICAgICByZXR1cm4gKCByZWN0LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiByZWN0LmJvdHRvbSA+IDBcclxuICAgICAgICAgICAgICAgIC8vIHJlY3QudG9wID49IDAgJiZcclxuICAgICAgICAgICAgICAgIC8vIHJlY3QubGVmdCA+PSAwICYmXHJcbiAgICAgICAgICAgICAgICAvLyByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIC8qb3IgJCh3aW5kb3cpLmhlaWdodCgpICovXHJcbiAgICAgICAgICAgICAgICAvLyByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8qb3IgJCh3aW5kb3cpLndpZHRoKCkgKi9cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICAgQHBhcmFtIGlkIDogZWxlbWVudCB0byBzY3JvbGwgdG8gaWRcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8gKGlkKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbEFtdCA9IDUwO1xyXG4gICAgICAgIHZhciBpdGVtOmFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICB2YXIgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgoIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICBodG1sLmNsaWVudEhlaWdodCwgaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwub2Zmc2V0SGVpZ2h0ICk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGl0ZW06YW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAvL05lZWQgdG8gc2Nyb2xsIGRvd24gdG8gZWxlbWVudFxyXG4gICAgICAgICAgICBpZih3aW5kb3cucGFnZVlPZmZzZXQgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPCBoZWlnaHQgJiYgcmVjdC50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZWN0LnRvcCA8PSBzY3JvbGxBbXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIHJlY3QudG9wKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAuMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgc2Nyb2xsQW10KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vTmVlZCB0byBzY3JvbGwgdXAgdG8gZWxlbWVudFxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZWN0LnRvcCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmKHJlY3QudG9wID4gLTEqc2Nyb2xsQW10KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCByZWN0LnRvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAtMSpzY3JvbGxBbXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAuMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=