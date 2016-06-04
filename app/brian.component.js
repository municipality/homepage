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
                    var nameTagRect = this.nameTag.getBoundingClientRect();
                    //600 is the size of brian panels
                    console.log(rect.bottom);
                    if (rect.top < 0 && rect.bottom > 600) {
                        this.nameTag.style.position = "fixed";
                        this.nameTag.style.bottom = "";
                        this.nameTag.style.top = "0px";
                    }
                    else {
                        this.nameTag.style.position = "absolute";
                        if (rect.bottom <= 600) {
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
                        template: "\n        <div class=\"brian-name-tag panel-size\">\n            <h2 class=\"brian-name-tag-text\">Brian</h2>\n        </div>\n        <engineer></engineer>\n        <photographer></photographer>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Brian);
                return Brian;
            }());
            exports_1("Brian", Brian);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlJLGVBQXFCLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtnQkFFdEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsd0JBQVEsR0FBUixVQUFVLENBQUM7b0JBQ1AsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztvQkFDdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ3ZELGlDQUFpQztvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRXpCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDbkMsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO3dCQUV6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7d0JBQ2hDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzt3QkFDbkMsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBcERMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFVBQVUsRUFBRyxDQUFDLDZCQUFRLEVBQUUscUNBQVksQ0FBQzt3QkFDckMsUUFBUSxFQUFHLCtNQVFWO3FCQUNKLENBQUM7O3lCQUFBO2dCQXlDRixZQUFDO1lBQUQsQ0FBQyxBQXhDRCxJQXdDQztZQXhDRCx5QkF3Q0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtFbmdpbmVlcn0gZnJvbSAnLi9lbmdpbmVlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Bob3RvZ3JhcGhlcn0gZnJvbSAnLi9waG90b2dyYXBoZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTY3JvbGxpbmdTZXJ2aWNlfSBmcm9tICcuL3Njcm9sbGluZy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yIDogJ2JyaWFuJyxcclxuICAgIGRpcmVjdGl2ZXMgOiBbRW5naW5lZXIsIFBob3RvZ3JhcGhlcl0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnJpYW4tbmFtZS10YWcgcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJicmlhbi1uYW1lLXRhZy10ZXh0XCI+QnJpYW48L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxlbmdpbmVlcj48L2VuZ2luZWVyPlxyXG4gICAgICAgIDxwaG90b2dyYXBoZXI+PC9waG90b2dyYXBoZXI+XHJcblxyXG5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyaWFuIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGJyaWFuQ29udGFpbmVyO1xyXG4gICAgc3RhcnRQb3NpdGlvbjtcclxuICAgIG5hbWVUYWc7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlOlNjcm9sbGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuYnJpYW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJyaWFuXCIpWzBdO1xyXG4gICAgICAgIHRoaXMubmFtZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJicmlhbi1uYW1lLXRhZ1wiKVswXTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwgKGUpIHtcclxuICAgICAgICB2YXIgaXNJblZpZXdwb3J0ID0gdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydDtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuYnJpYW5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIG5hbWVUYWdSZWN0ID0gdGhpcy5uYW1lVGFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vNjAwIGlzIHRoZSBzaXplIG9mIGJyaWFuIHBhbmVsc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlY3QuYm90dG9tKTtcclxuXHJcbiAgICAgICAgaWYgKHJlY3QudG9wIDwgMCAmJiByZWN0LmJvdHRvbSA+IDYwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlY3QuYm90dG9tIDw9IDYwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==