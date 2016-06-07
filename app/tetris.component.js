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
                        template: "\n        <div class=\"tetris-container\">\n            <img #t class=\"tetris-top\" (load)=\"handleTop(t)\" src=\"images/tetris-top.png\">\n            <img #b class=\"tetris-bottom\" (load)=\"handleBottom(b)\" src=\"images/tetris-bottom-small.jpg\">\n            \n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tetris);
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV0cmlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRldHJpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFHSTtnQkFFQSxDQUFDO2dCQUVELDBCQUFTLEdBQVQsVUFBVyxDQUFDO29CQUNSLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNYLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztvQkFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2xDLENBQUM7b0JBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLENBQUM7d0JBQ2xDLDhCQUE4Qjt3QkFDOUIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7d0JBQzFFLGdDQUFnQzt3QkFDaEMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBRTVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZHLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsNkJBQVksR0FBWixVQUFjLENBQUM7b0JBQ1gsY0FBYztvQkFDZCxpQkFBaUI7b0JBQ2pCLDRCQUE0QjtvQkFDNUIsK0NBQStDO29CQUMvQyxpQ0FBaUM7b0JBQ2pDLHVDQUF1QztvQkFDdkMsUUFBUTtvQkFDUiwwREFBMEQ7b0JBQzFELE1BQU07Z0JBQ1YsQ0FBQztnQkE3Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGlTQU1UO3FCQUNKLENBQUM7OzBCQUFBO2dCQXFDRixhQUFDO1lBQUQsQ0FBQyxBQXBDRCxJQW9DQztZQXBDRCwyQkFvQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yOiAndGV0cmlzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV0cmlzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyAjdCBjbGFzcz1cInRldHJpcy10b3BcIiAobG9hZCk9XCJoYW5kbGVUb3AodClcIiBzcmM9XCJpbWFnZXMvdGV0cmlzLXRvcC5wbmdcIj5cbiAgICAgICAgICAgIDxpbWcgI2IgY2xhc3M9XCJ0ZXRyaXMtYm90dG9tXCIgKGxvYWQpPVwiaGFuZGxlQm90dG9tKGIpXCIgc3JjPVwiaW1hZ2VzL3RldHJpcy1ib3R0b20tc21hbGwuanBnXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXRyaXMge1xuICAgIHQgOiBhbnk7XG4gICAgYiA6IGFueTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVUb3AgKHQpIHtcbiAgICAgICAgdGhpcy50ID0gdDtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0ID0gKG1lLnQuaGVpZ2h0ICsgNDApICogLTE7XG4gICAgICAgIGlmKG1lLnQuc3R5bGUudG9wID09IFwiXCIpIHtcbiAgICAgICAgICAgIG1lLnQuc3R5bGUudG9wID0gc3RhcnQgKyBcInB4XCI7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvL3RvdGFsIGhlaWdodCBvZiB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIHZhciB0b3RhbEhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAvL2N1cnJlbnQgc2Nyb2xsIG9mIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblxuICAgICAgICAgICAgbWUudC5zdHlsZS50b3AgPSBzdGFydCArIChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAqIChjdXJyZW50SGVpZ2h0ICogMS4wIC8gdG90YWxIZWlnaHQpKSArIFwicHhcIjtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVCb3R0b20gKGIpIHtcbiAgICAgICAgLy8gdGhpcy5iID0gYjtcbiAgICAgICAgLy8gdmFyIG1lID0gdGhpcztcbiAgICAgICAgLy8gdmFyIHRvcCA9IG1lLmIub2Zmc2V0VG9wO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIChlKSA9PiB7XG4gICAgICAgIC8vICAgICBpZihtZS5iLnN0eWxlLnRvcCA9PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICAgICAgbWUuYi5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBtZS5iLnN0eWxlLnRvcCA9IHRvcCArICh3aW5kb3cucGFnZVlPZmZzZXQpICsgXCJweFwiO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG4iXX0=