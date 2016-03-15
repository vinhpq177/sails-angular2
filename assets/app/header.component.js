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
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        template: '<header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">\
      <div class="mdl-layout__header-row">\
        <span class="mdl-layout-title">Home</span>\
        <div class="mdl-layout-spacer"></div>\
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">\
          <label class="mdl-button mdl-js-button mdl-button--icon" for="search">\
            <i class="material-icons">search</i>\
          </label>\
          <div class="mdl-textfield__expandable-holder">\
            <input class="mdl-textfield__input" type="text" id="search">\
            <label class="mdl-textfield__label" for="search">Enter your query...</label>\
          </div>\
        </div>\
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">\
          <i class="material-icons">more_vert</i>\
        </button>\
        <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">\
          <li class="mdl-menu__item">About</li>\
          <li class="mdl-menu__item">Contact</li>\
          <li class="mdl-menu__item">Legal information</li>\
        </ul>\
      </div>\
    </header>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map