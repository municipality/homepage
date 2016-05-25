System.register(['angular2/core', './projects.service'], function(exports_1, context_1) {
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
    var core_1, projects_service_1;
    var Projects;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projects_service_1_1) {
                projects_service_1 = projects_service_1_1;
            }],
        execute: function() {
            Projects = (function () {
                function Projects(projectsService) {
                    this.projectsService = projectsService;
                }
                Projects.prototype.ngOnInit = function () {
                    this.projectsService.getProjects()
                        .subscribe(function (response) {
                        console.log(response);
                    });
                };
                Projects = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        providers: [projects_service_1.ProjectsService],
                        template: "\n        <p class=\"section-header\">Recent Projects</p>\n        <div class=\"project\">\n            <img class=\"project-image\" src=\"images/sample.jpg\">\n            <p class=\"project-title\">Sample Text</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [projects_service_1.ProjectsService])
                ], Projects);
                return Projects;
            }());
            exports_1("Projects", Projects);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQ0ksa0JBQXFCLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBRXBELENBQUM7Z0JBRUQsMkJBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTt5QkFDakMsU0FBUyxDQUFFLFVBQUMsUUFBUTt3QkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUcsVUFBVTt3QkFDckIsU0FBUyxFQUFHLENBQUMsa0NBQWUsQ0FBQzt3QkFDN0IsUUFBUSxFQUFHLCtPQU1WO3FCQUNKLENBQUM7OzRCQUFBO2dCQWFGLGVBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELCtCQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UHJvamVjdHNTZXJ2aWNlfSBmcm9tICcuL3Byb2plY3RzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdwcm9qZWN0cycsXG4gICAgcHJvdmlkZXJzIDogW1Byb2plY3RzU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5SZWNlbnQgUHJvamVjdHM8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cImltYWdlcy9zYW1wbGUuanBnXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5TYW1wbGUgVGV4dDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFByb2plY3RzIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBwcm9qZWN0c1NlcnZpY2U6UHJvamVjdHNTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNTZXJ2aWNlLmdldFByb2plY3RzKClcbiAgICAgICAgLnN1YnNjcmliZSggKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==