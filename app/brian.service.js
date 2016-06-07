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
                                    component.style.left = left - scrollAmt + "px";
                                    left = left - scrollAmt;
                                    scroll(amtToScroll - scrollAmt);
                                }, .1);
                            }
                        }
                    };
                    scroll(width);
                };
                BrianService.prototype.toPrevPanel = function (component) {
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
                                    component.style.left = left + amtToScroll;
                                }, .1);
                            }
                            else {
                                setTimeout(function () {
                                    component.style.left = left + scrollAmt + "px";
                                    left = left + scrollAmt;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpYW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyaWFuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUVELGtDQUFXLEdBQVgsVUFBYSxTQUFTO29CQUNsQixJQUFJLElBQUksQ0FBQztvQkFDVCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0YsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQzdCLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDO29CQUNELElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7b0JBQ3JDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQy9CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxNQUFNLEdBQUcsVUFBQyxXQUFXO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEIsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ25CLFVBQVUsQ0FBQztvQ0FDUCxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dDQUM5QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBRVgsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDRixVQUFVLENBQUM7b0NBQ1AsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQy9DLElBQUksR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDO29DQUN4QixNQUFNLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxDQUFDO2dDQUNwQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ1gsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUMsQ0FBQTtvQkFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBRUQsa0NBQVcsR0FBWCxVQUFhLFNBQVM7b0JBQ2xCLElBQUksSUFBSSxDQUFDO29CQUNULEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzt3QkFDN0IsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hELENBQUM7b0JBQ0QsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQztvQkFDckMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDL0IsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUNuQixJQUFJLE1BQU0sR0FBRyxVQUFDLFdBQVc7d0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNsQixFQUFFLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDbkIsVUFBVSxDQUFDO29DQUNQLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxXQUFXLENBQUM7Z0NBQzlDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFFWCxDQUFDOzRCQUNELElBQUksQ0FBQyxDQUFDO2dDQUNGLFVBQVUsQ0FBQztvQ0FDUCxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQztvQ0FDL0MsSUFBSSxHQUFHLElBQUksR0FBRyxTQUFTLENBQUM7b0NBQ3hCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0NBQ3BDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDWCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQyxDQUFBO29CQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkF2RUw7b0JBQUMsaUJBQVUsRUFBRTs7Z0NBQUE7Z0JBd0ViLG1CQUFDO1lBQUQsQ0FBQyxBQXZFRCxJQXVFQztZQXZFRCx1Q0F1RUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcmlhblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuXG4gICAgdG9OZXh0UGFuZWwgKGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgbGVmdDtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5zdHlsZS5sZWZ0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHMgPSBjb21wb25lbnQuc3R5bGUubGVmdDtcbiAgICAgICAgICAgIGxlZnQgPSBOdW1iZXIocy5zdWJzdHJpbmcoMCwgcy5sZW5ndGggLSAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmVudCA9IGNvbXBvbmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB2YXIgd2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBzY3JvbGxBbXQgPSA1MDtcbiAgICAgICAgdmFyIHNjcm9sbCA9IChhbXRUb1Njcm9sbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFtdFRvU2Nyb2xsID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChhbXRUb1Njcm9sbCA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnN0eWxlLmxlZnQgPSBsZWZ0IC0gYW10VG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIH0sIC4xKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuc3R5bGUubGVmdCA9IGxlZnQgLSBzY3JvbGxBbXQgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdCAtIHNjcm9sbEFtdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbChhbXRUb1Njcm9sbCAtIHNjcm9sbEFtdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwod2lkdGgpO1xuICAgIH1cblxuICAgIHRvUHJldlBhbmVsIChjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIGxlZnQ7XG4gICAgICAgIGlmIChjb21wb25lbnQuc3R5bGUubGVmdCA9PSBcIlwiKSB7XG4gICAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzID0gY29tcG9uZW50LnN0eWxlLmxlZnQ7XG4gICAgICAgICAgICBsZWZ0ID0gTnVtYmVyKHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJlbnQgPSBjb21wb25lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgc2Nyb2xsQW10ID0gNTA7XG4gICAgICAgIHZhciBzY3JvbGwgPSAoYW10VG9TY3JvbGwpID0+IHtcbiAgICAgICAgICAgIGlmIChhbXRUb1Njcm9sbCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoYW10VG9TY3JvbGwgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zdHlsZS5sZWZ0ID0gbGVmdCArIGFtdFRvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICB9LCAuMSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgc2Nyb2xsQW10ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQgKyBzY3JvbGxBbXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwoYW10VG9TY3JvbGwgLSBzY3JvbGxBbXQpO1xuICAgICAgICAgICAgICAgICAgICB9LCAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsKHdpZHRoKTtcbiAgICB9XG59XG4iXX0=