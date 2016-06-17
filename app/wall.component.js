System.register(['angular2/core', './instagram.component', './projects.component', './intro.component', './objectives.component', './footer.component', './faces.component', './media.component'], function(exports_1, context_1) {
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
    var core_1, instagram_component_1, projects_component_1, intro_component_1, objectives_component_1, footer_component_1, faces_component_1, media_component_1;
    var Wall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instagram_component_1_1) {
                instagram_component_1 = instagram_component_1_1;
            },
            function (projects_component_1_1) {
                projects_component_1 = projects_component_1_1;
            },
            function (intro_component_1_1) {
                intro_component_1 = intro_component_1_1;
            },
            function (objectives_component_1_1) {
                objectives_component_1 = objectives_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (faces_component_1_1) {
                faces_component_1 = faces_component_1_1;
            },
            function (media_component_1_1) {
                media_component_1 = media_component_1_1;
            }],
        execute: function() {
            Wall = (function () {
                function Wall() {
                }
                /*
                  Called right after the directive's data-bound properties have been checked
                  for the first time
                 */
                Wall.prototype.ngOnInit = function () {
                    var _this = this;
                    this.elementArray = document.getElementsByClassName("viewport-size");
                    this.resizeElements();
                    window.addEventListener("resize", function (e) {
                        _this.resizeElements();
                    });
                };
                Wall.prototype.resizeElements = function () {
                    for (var i = 0; i < this.elementArray.length; i++) {
                    }
                };
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [instagram_component_1.Instagram, projects_component_1.Projects, intro_component_1.Intro, footer_component_1.Footer, objectives_component_1.Objectives, faces_component_1.Faces, media_component_1.Social],
                        template: "\n            <intro id=\"intro\"></intro>\n            <objectives id=\"objectives\"></objectives>\n            <faces id=\"faces\"></faces>\n            <social id=\"media\"></social>\n            <!-- <projects id=\"projects\" class=\"white-bg section\"></projects>\n            <instagram id=\"instagram\" class=\"blue-bg section\" style=\"background-image: url('images/plaid.jpg');\"></instagram> -->\n            <footer id=\"footer\"></footer>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXlCQTtnQkFFSTtnQkFFQSxDQUFDO2dCQUNEOzs7bUJBR0c7Z0JBQ0gsdUJBQVEsR0FBUjtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN0QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMxQixDQUFDLENBQUMsQ0FBQztnQkFHUCxDQUFDO2dCQUVELDZCQUFjLEdBQWQ7b0JBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUduRCxDQUFDO2dCQUNMLENBQUM7Z0JBckNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFHLE1BQU07d0JBQ2pCLFVBQVUsRUFBRyxDQUFDLCtCQUFTLEVBQUUsNkJBQVEsRUFBRSx1QkFBSyxFQUFFLHlCQUFNLEVBQUUsaUNBQVUsRUFBRSx1QkFBSyxFQUFFLHdCQUFNLENBQUM7d0JBQzVFLFFBQVEsRUFBRywwY0FRVjtxQkFDSixDQUFDOzt3QkFBQTtnQkEwQkYsV0FBQztZQUFELENBQUMsQUF6QkQsSUF5QkM7WUF6QkQsdUJBeUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5pbXBvcnQge0luc3RhZ3JhbX0gZnJvbSAnLi9pbnN0YWdyYW0uY29tcG9uZW50JztcbmltcG9ydCB7UHJvamVjdHN9IGZyb20gJy4vcHJvamVjdHMuY29tcG9uZW50JztcblxuaW1wb3J0IHtJbnRyb30gZnJvbSAnLi9pbnRyby5jb21wb25lbnQnO1xuaW1wb3J0IHtPYmplY3RpdmVzfSBmcm9tICcuL29iamVjdGl2ZXMuY29tcG9uZW50JztcbmltcG9ydCB7Rm9vdGVyfSBmcm9tICcuL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtGYWNlc30gZnJvbSAnLi9mYWNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTb2NpYWx9IGZyb20gJy4vbWVkaWEuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnd2FsbCcsXG4gICAgZGlyZWN0aXZlcyA6IFtJbnN0YWdyYW0sIFByb2plY3RzLCBJbnRybywgRm9vdGVyLCBPYmplY3RpdmVzLCBGYWNlcywgU29jaWFsXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgICAgIDxpbnRybyBpZD1cImludHJvXCI+PC9pbnRybz5cbiAgICAgICAgICAgIDxvYmplY3RpdmVzIGlkPVwib2JqZWN0aXZlc1wiPjwvb2JqZWN0aXZlcz5cbiAgICAgICAgICAgIDxmYWNlcyBpZD1cImZhY2VzXCI+PC9mYWNlcz5cbiAgICAgICAgICAgIDxzb2NpYWwgaWQ9XCJtZWRpYVwiPjwvc29jaWFsPlxuICAgICAgICAgICAgPCEtLSA8cHJvamVjdHMgaWQ9XCJwcm9qZWN0c1wiIGNsYXNzPVwid2hpdGUtYmcgc2VjdGlvblwiPjwvcHJvamVjdHM+XG4gICAgICAgICAgICA8aW5zdGFncmFtIGlkPVwiaW5zdGFncmFtXCIgY2xhc3M9XCJibHVlLWJnIHNlY3Rpb25cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL3BsYWlkLmpwZycpO1wiPjwvaW5zdGFncmFtPiAtLT5cbiAgICAgICAgICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIj48L2Zvb3Rlcj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFdhbGwgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVsZW1lbnRBcnJheTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG4gICAgLypcbiAgICAgIENhbGxlZCByaWdodCBhZnRlciB0aGUgZGlyZWN0aXZlJ3MgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkXG4gICAgICBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgKi9cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudEFycmF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInZpZXdwb3J0LXNpemVcIik7XG4gICAgICAgIHRoaXMucmVzaXplRWxlbWVudHMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplRWxlbWVudHMoKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHJlc2l6ZUVsZW1lbnRzICgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudEFycmF5W2ldLnN0eWxlLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAvL3RoaXMuZWxlbWVudEFycmF5W2ldLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==