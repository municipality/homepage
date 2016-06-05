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
    var BrianService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BrianService = (function () {
                function BrianService() {
                }
                BrianService.prototype.toNextPanel = function (component) {
                    var left;
                    if (component.style.left == "") {
                        left = 0;
                    }
                    else {
                        var s = component.style.left;
                        left = Number(s.substring(0, s.length - 2));
                    }
                    var parent = component.parentElement;
                    var width = parent.offsetWidth;
                    var scrollAmt = 50;
                    var scroll = function (amtToScroll) {
                        if (amtToScroll > 0) {
                            if (amtToScroll < 50) {
                                setTimeout(function () {
                                    component.style.left = left - amtToScroll;
                                }, .1);
                            }
                            else {
                                setTimeout(function () {
                                    component.style.left = left - scrollAmt;
                                    scroll(amtToScroll - scrollAmt);
                                }, .1);
                            }
                        }
                    };
                    scroll(width);
                };
                BrianService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BrianService);
                return BrianService;
            }());
            exports_1("BrianService", BrianService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyaWFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUVELGtDQUFXLEdBQVgsVUFBYSxTQUFTO29CQUNsQixJQUFJLElBQUksQ0FBQztvQkFDVCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQzdCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDO29CQUNELElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQy9CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxNQUFNLEdBQUcsVUFBQyxXQUFXO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEIsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ25CLFVBQVUsQ0FBQztvQ0FDUCxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dDQUM5QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBRVgsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDRixVQUFVLENBQUM7b0NBQ1AsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFNBQVMsQ0FBQztvQ0FDeEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQztnQ0FDcEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUNYLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDLENBQUE7b0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQXJDTDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFzQ2IsbUJBQUM7WUFBRCxDQUFDLEFBckNELElBcUNDO1lBckNELHVDQXFDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJyaWFuU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b05leHRQYW5lbCAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIGxlZnQ7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC5zdHlsZS5sZWZ0ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcyA9IGNvbXBvbmVudC5zdHlsZS5sZWZ0O1xyXG4gICAgICAgICAgICBsZWZ0ID0gTnVtYmVyKHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFyZW50ID0gY29tcG9uZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBzY3JvbGxBbXQgPSA1MDtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gKGFtdFRvU2Nyb2xsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbXRUb1Njcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbXRUb1Njcm9sbCA8IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zdHlsZS5sZWZ0ID0gbGVmdCAtIGFtdFRvU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIC4xKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnN0eWxlLmxlZnQgPSBsZWZ0IC0gc2Nyb2xsQW10O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwoYW10VG9TY3JvbGwgLSBzY3JvbGxBbXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2Nyb2xsKHdpZHRoKTtcclxuICAgIH1cclxufVxyXG4iXX0=