System.register(['angular2/core', './engineer.component', './photographer.component', './designer.component', './scrolling.service', './brian.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, photographer_component_1, designer_component_1, scrolling_service_1, brian_service_1;
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
            function (designer_component_1_1) {
                designer_component_1 = designer_component_1_1;
            },
            function (scrolling_service_1_1) {
                scrolling_service_1 = scrolling_service_1_1;
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
            }],
        execute: function() {
            Brian = (function () {
                function Brian(scrollingService) {
                    this.scrollingService = scrollingService;
                    this.quote = "\"My objective is to become well-rounded in life, kind of like a circle.\"";
                    this.quoteAuthor;
                }
                Brian.prototype.ngOnInit = function () {
                    this.brianContainer = document.getElementsByClassName("brian-container")[0];
                    this.nameTag = document.getElementsByClassName("brian-name-tag")[0];
                    document.addEventListener("scroll", this.onScroll.bind(this));
                    window.addEventListener("resize", this.onScroll.bind(this));
                };
                Brian.prototype.onScroll = function (e) {
                    var isInViewport = this.scrollingService.isInViewport;
                    var rect = this.brianContainer.getBoundingClientRect();
                    var nameTagRect = this.nameTag.getBoundingClientRect();
                    //600 is the size of brian panels
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
                        directives: [engineer_component_1.Engineer, photographer_component_1.Photographer, designer_component_1.Designer],
                        providers: [brian_service_1.BrianService],
                        template: "\n        <div class=\"quote\">\n            <h2 align=\"center\" style=\"color: #3498db;\">{{quote}}</h2>\n\n        </div>\n        <div class=\"brian-container\">\n            <div class=\"brian-name-tag panel-size\">\n                <h2 class=\"brian-name-tag-text\">Brian</h2>\n            </div>\n            <engineer></engineer>\n            <designer></designer>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [scrolling_service_1.ScrollingService])
                ], Brian);
                return Brian;
            }());
            exports_1("Brian", Brian);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQU1JLGVBQXFCLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyw0RUFBNEUsQ0FBQztvQkFDMUYsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDOUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUVELHdCQUFRLEdBQVIsVUFBVSxDQUFDO29CQUNQLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7b0JBQ3RELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDdkQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxpQ0FBaUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDbkMsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO3dCQUV6QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7d0JBQ2hDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzt3QkFDbkMsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBN0RMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLE9BQU87d0JBQ2xCLFVBQVUsRUFBRyxDQUFDLDZCQUFRLEVBQUUscUNBQVksRUFBRSw2QkFBUSxDQUFDO3dCQUMvQyxTQUFTLEVBQUcsQ0FBQyw0QkFBWSxDQUFDO3dCQUMxQixRQUFRLEVBQUcsZ1pBY1Y7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBMkNGLFlBQUM7WUFBRCxDQUFDLEFBMUNELElBMENDO1lBMUNELHlCQTBDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0VuZ2luZWVyfSBmcm9tICcuL2VuZ2luZWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGhvdG9ncmFwaGVyfSBmcm9tICcuL3Bob3RvZ3JhcGhlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rlc2lnbmVyfSBmcm9tICcuL2Rlc2lnbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2Nyb2xsaW5nU2VydmljZX0gZnJvbSAnLi9zY3JvbGxpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7QnJpYW5TZXJ2aWNlfSBmcm9tICcuL2JyaWFuLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQgKHtcclxuICAgIHNlbGVjdG9yIDogJ2JyaWFuJyxcclxuICAgIGRpcmVjdGl2ZXMgOiBbRW5naW5lZXIsIFBob3RvZ3JhcGhlciwgRGVzaWduZXJdLFxyXG4gICAgcHJvdmlkZXJzIDogW0JyaWFuU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVvdGVcIj5cclxuICAgICAgICAgICAgPGgyIGFsaWduPVwiY2VudGVyXCIgc3R5bGU9XCJjb2xvcjogIzM0OThkYjtcIj57e3F1b3RlfX08L2gyPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnJpYW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJicmlhbi1uYW1lLXRhZyBwYW5lbC1zaXplXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJicmlhbi1uYW1lLXRhZy10ZXh0XCI+QnJpYW48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGVuZ2luZWVyPjwvZW5naW5lZXI+XHJcbiAgICAgICAgICAgIDxkZXNpZ25lcj48L2Rlc2lnbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcmlhbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBicmlhbkNvbnRhaW5lcjtcclxuICAgIHN0YXJ0UG9zaXRpb247XHJcbiAgICBuYW1lVGFnO1xyXG4gICAgcXVvdGU7XHJcbiAgICBxdW90ZUF1dGhvcjtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHNjcm9sbGluZ1NlcnZpY2U6U2Nyb2xsaW5nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucXVvdGUgPSBcIlxcXCJNeSBvYmplY3RpdmUgaXMgdG8gYmVjb21lIHdlbGwtcm91bmRlZCBpbiBsaWZlLCBraW5kIG9mIGxpa2UgYSBjaXJjbGUuXFxcIlwiO1xyXG4gICAgICAgIHRoaXMucXVvdGVBdXRob3I7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuYnJpYW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnJpYW4tY29udGFpbmVyXCIpWzBdO1xyXG4gICAgICAgIHRoaXMubmFtZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJicmlhbi1uYW1lLXRhZ1wiKVswXTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbCAoZSkge1xyXG4gICAgICAgIHZhciBpc0luVmlld3BvcnQgPSB0aGlzLnNjcm9sbGluZ1NlcnZpY2UuaXNJblZpZXdwb3J0O1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5icmlhbkNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgbmFtZVRhZ1JlY3QgPSB0aGlzLm5hbWVUYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy82MDAgaXMgdGhlIHNpemUgb2YgYnJpYW4gcGFuZWxzXHJcbiAgICAgICAgaWYgKHJlY3QudG9wIDwgMCAmJiByZWN0LmJvdHRvbSA+IDYwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlY3QuYm90dG9tIDw9IDYwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLmJvdHRvbSA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUudG9wID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==