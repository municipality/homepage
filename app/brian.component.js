System.register(['angular2/core', './engineer.component', './photographer.component', './scrolling.service', './brian.service'], function(exports_1, context_1) {
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
    var core_1, engineer_component_1, photographer_component_1, scrolling_service_1, brian_service_1;
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
            },
            function (brian_service_1_1) {
                brian_service_1 = brian_service_1_1;
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
                        providers: [brian_service_1.BrianService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUlJLGVBQXFCLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtnQkFFdEQsQ0FBQztnQkFFRCx3QkFBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsd0JBQVEsR0FBUixVQUFVLENBQUM7b0JBQ1AsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztvQkFDdEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN2RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ3ZELGlDQUFpQztvQkFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO29CQUNuQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7d0JBRXpDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzt3QkFDaEMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOzRCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO3dCQUNuQyxDQUFDO29CQUVMLENBQUM7Z0JBQ0wsQ0FBQztnQkFuREw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsT0FBTzt3QkFDbEIsVUFBVSxFQUFHLENBQUMsNkJBQVEsRUFBRSxxQ0FBWSxDQUFDO3dCQUNyQyxTQUFTLEVBQUcsQ0FBQyw0QkFBWSxDQUFDO3dCQUMxQixRQUFRLEVBQUcsK01BUVY7cUJBQ0osQ0FBQzs7eUJBQUE7Z0JBdUNGLFlBQUM7WUFBRCxDQUFDLEFBdENELElBc0NDO1lBdENELHlCQXNDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5pbXBvcnQge0VuZ2luZWVyfSBmcm9tICcuL2VuZ2luZWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGhvdG9ncmFwaGVyfSBmcm9tICcuL3Bob3RvZ3JhcGhlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Njcm9sbGluZ1NlcnZpY2V9IGZyb20gJy4vc2Nyb2xsaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQge0JyaWFuU2VydmljZX0gZnJvbSAnLi9icmlhbi5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvciA6ICdicmlhbicsXHJcbiAgICBkaXJlY3RpdmVzIDogW0VuZ2luZWVyLCBQaG90b2dyYXBoZXJdLFxyXG4gICAgcHJvdmlkZXJzIDogW0JyaWFuU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZSA6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnJpYW4tbmFtZS10YWcgcGFuZWwtc2l6ZVwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJicmlhbi1uYW1lLXRhZy10ZXh0XCI+QnJpYW48L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxlbmdpbmVlcj48L2VuZ2luZWVyPlxyXG4gICAgICAgIDxwaG90b2dyYXBoZXI+PC9waG90b2dyYXBoZXI+XHJcblxyXG5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJyaWFuIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGJyaWFuQ29udGFpbmVyO1xyXG4gICAgc3RhcnRQb3NpdGlvbjtcclxuICAgIG5hbWVUYWc7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBzY3JvbGxpbmdTZXJ2aWNlOlNjcm9sbGluZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQgKCkge1xyXG4gICAgICAgIHRoaXMuYnJpYW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJyaWFuXCIpWzBdO1xyXG4gICAgICAgIHRoaXMubmFtZVRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJicmlhbi1uYW1lLXRhZ1wiKVswXTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwgKGUpIHtcclxuICAgICAgICB2YXIgaXNJblZpZXdwb3J0ID0gdGhpcy5zY3JvbGxpbmdTZXJ2aWNlLmlzSW5WaWV3cG9ydDtcclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuYnJpYW5Db250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIG5hbWVUYWdSZWN0ID0gdGhpcy5uYW1lVGFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vNjAwIGlzIHRoZSBzaXplIG9mIGJyaWFuIHBhbmVsc1xyXG4gICAgICAgIGlmIChyZWN0LnRvcCA8IDAgJiYgcmVjdC5ib3R0b20gPiA2MDApIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUuYm90dG9tID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcblxyXG4gICAgICAgICAgICBpZihyZWN0LmJvdHRvbSA8PSA2MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lVGFnLnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVUYWcuc3R5bGUuYm90dG9tID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZVRhZy5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=