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
    var Tetris;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Tetris = (function () {
                function Tetris() {
                }
                Tetris.prototype.handleTop = function (t) {
                    this.t = t;
                    var me = this;
                    var start = (me.t.height + 40) * -1;
                    if (me.t.style.top == "") {
                        me.t.style.top = start + "px";
                    }
                    document.addEventListener("scroll", function (e) {
                        //total height of the document
                        var totalHeight = document.body.scrollHeight - document.body.clientHeight;
                        //current scroll of the document
                        var currentHeight = document.body.scrollTop;
                        me.t.style.top = start + (document.body.clientHeight * (currentHeight * 1.0 / totalHeight)) + "px";
                    });
                };
                Tetris.prototype.handleBottom = function (b) {
                    // this.b = b;
                    // var me = this;
                    // var top = me.b.offsetTop;
                    // document.addEventListener("scroll", (e) => {
                    //     if(me.b.style.top == "") {
                    //         me.b.style.top = top + "px";
                    //     }
                    //     me.b.style.top = top + (window.pageYOffset) + "px";
                    // });
                };
                Tetris = __decorate([
                    core_1.Component({
                        selector: 'tetris',
                        template: "\n        <div class=\"tetris-container\">\n        <img #t class=\"tetris-top\" (load)=\"handleTop(t)\" src=\"images/tetris-top.png\">\n        <img #b class=\"tetris-bottom\" (load)=\"handleBottom(b)\" src=\"images/tetris-bottom-small.jpg\">\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFHSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUNSLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xDLENBQUM7b0JBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2xDLDhCQUE4Qjt3QkFDOUIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQzFFLGdDQUFnQzt3QkFDaEMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBRTVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZHLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsNkJBQVksR0FBWixVQUFjLENBQUM7b0JBQ1gsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsK0NBQStDO29CQUMvQyxpQ0FBaUM7b0JBQ2pDLHVDQUF1QztvQkFDdkMsUUFBUTtvQkFDUiwwREFBMEQ7b0JBQzFELE1BQU07Z0JBQ1YsQ0FBQztnQkE1Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJRQUtUO3FCQUNKLENBQUM7OzBCQUFBO2dCQXFDRixhQUFDO1lBQUQsQ0FBQyxBQXBDRCxJQW9DQztZQXBDRCwyQkFvQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV0cmlzLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nICN0IGNsYXNzPVwidGV0cmlzLXRvcFwiIChsb2FkKT1cImhhbmRsZVRvcCh0KVwiIHNyYz1cImltYWdlcy90ZXRyaXMtdG9wLnBuZ1wiPlxuICAgICAgICA8aW1nICNiIGNsYXNzPVwidGV0cmlzLWJvdHRvbVwiIChsb2FkKT1cImhhbmRsZUJvdHRvbShiKVwiIHNyYz1cImltYWdlcy90ZXRyaXMtYm90dG9tLXNtYWxsLmpwZ1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFRldHJpcyB7XG4gICAgdCA6IGFueTtcbiAgICBiIDogYW55O1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cblxuICAgIGhhbmRsZVRvcCAodCkge1xuICAgICAgICB0aGlzLnQgPSB0O1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnQgPSAobWUudC5oZWlnaHQgKyA0MCkgKiAtMTtcbiAgICAgICAgaWYobWUudC5zdHlsZS50b3AgPT0gXCJcIikge1xuICAgICAgICAgICAgbWUudC5zdHlsZS50b3AgPSBzdGFydCArIFwicHhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vdG90YWwgaGVpZ2h0IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIC8vY3VycmVudCBzY3JvbGwgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuXG4gICAgICAgICAgICBtZS50LnN0eWxlLnRvcCA9IHN0YXJ0ICsgKGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0ICogKGN1cnJlbnRIZWlnaHQgKiAxLjAgLyB0b3RhbEhlaWdodCkpICsgXCJweFwiO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUJvdHRvbSAoYikge1xuICAgICAgICAvLyB0aGlzLmIgPSBiO1xuICAgICAgICAvLyB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAvLyB2YXIgdG9wID0gbWUuYi5vZmZzZXRUb3A7XG4gICAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGlmKG1lLmIuc3R5bGUudG9wID09IFwiXCIpIHtcbiAgICAgICAgLy8gICAgICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIG1lLmIuc3R5bGUudG9wID0gdG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCkgKyBcInB4XCI7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cbn1cbiJdfQ==