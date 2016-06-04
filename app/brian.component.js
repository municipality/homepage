System.register(['angular2/core', './engineer.component', './photographer.component', './scrolling.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, photographer_component_1, scrolling_service_1;
    var Brian;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (engineer_component_1_1) {
                engineer_component_1 = engineer_component_1_1;
            },
            function (photographer_component_1_1) {
                photographer_component_1 = photographer_component_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            }],
        execute: function() {
            Brian = (function () {
                function Brian(scrollingService) {
                    this.scrollingService = scrollingService;
                }
                Brian.prototype.ngOnInit = function () {
                    this.brianContainer = document.getElementsByTagName("brian")[0];
                    this.nameTag = document.getElementsByClassName("brian-name-tag")[0];
                    document.addEventListener("scroll", this.onScroll.bind(this));
                };
                Brian.prototype.onScroll = function (e) {
                    var isInViewport = this.scrollingService.isInViewport;
                    var rect = this.brianContainer.getBoundingClientRect();
                    if (rect.top < 0 && rect.bottom > window.innerHeight) {
                        this.nameTag.style.position = "fixed";
                    }
                    else {
                        this.nameTag.style.position = "absolute";
                        if (rect.bottom < window.innerHeight) {
                            this.nameTag.style.bottom = "0px";
                            this.nameTag.style.top = "";
                        }
                        else {
                            this.nameTag.style.bottom = "";
                            this.nameTag.style.top = "0px";
                        }
                    }
                };
                Brian = __decorate([
                    core_1.Component({
                        selector: 'brian',
                        directives: [engineer_component_1.Engineer, photographer_component_1.Photographer],
                        template: "\n        <div class=\"brian-name-tag viewport-size\">\n            <h2 class=\"brian-name-tag-text\">Brian</h2>\n        </div>\n        <engineer></engineer>\n        <photographer></photographer>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Brian);
                return Brian;
            }());
            exports_1("Brian", Brian);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlJLGVBQXFCLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtnQkFFdEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsd0JBQVEsR0FBUixVQUFVLENBQUM7b0JBQ1AsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztvQkFDdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO29CQUMxQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7d0JBQ3pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7d0JBQ2hDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzt3QkFDbkMsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBN0NMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFVBQVUsRUFBRyxDQUFDLDZCQUFRLEVBQUUscUNBQVksQ0FBQzt3QkFDckMsUUFBUSxFQUFHLGtOQVFWO3FCQUNKLENBQUM7O3lCQUFBO2dCQWtDRixZQUFDO1lBQUQsQ0FBQyxBQWpDRCxJQWlDQztZQWpDRCx5QkFpQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5pbXBvcnQge0VuZ2luZWVyfSBmcm9tICcuL2VuZ2luZWVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bob3RvZ3JhcGhlcn0gZnJvbSAnLi9waG90b2dyYXBoZXIuY29tcG9uZW50JztcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdicmlhbicsXG4gICAgZGlyZWN0aXZlcyA6IFtFbmdpbmVlciwgUGhvdG9ncmFwaGVyXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJyaWFuLW5hbWUtdGFnIHZpZXdwb3J0LXNpemVcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImJyaWFuLW5hbWUtdGFnLXRleHRcIj5CcmlhbjwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZW5naW5lZXI+PC9lbmdpbmVlcj5cbiAgICAgICAgPHBob3RvZ3JhcGhlcj48L3Bob3RvZ3JhcGhlcj5cblxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBCcmlhbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYnJpYW5Db250YWluZXI7XG4gICAgc3RhcnRQb3NpdGlvbjtcbiAgICBuYW1lVGFnO1xuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2U6U2Nyb2xsaW5nU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQgKCkge1xuICAgICAgICB0aGlzLmJyaWFuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJicmlhblwiKVswXTtcbiAgICAgICAgdGhpcy5uYW1lVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJyaWFuLW5hbWUtdGFnXCIpWzBdO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgb25TY3JvbGwgKGUpIHtcbiAgICAgICAgdmFyIGlzSW5WaWV3cG9ydCA9IHRoaXMuc2Nyb2xsaW5nU2VydmljZS5pc0luVmlld3BvcnQ7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5icmlhbkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wIDwgMCAmJiByZWN0LmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgaWYocmVjdC5ib3R0b20gPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUuYm90dG9tID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS50b3AgPSBcIjBweFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=