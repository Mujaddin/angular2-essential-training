System.register(['@angular/core', '@angular/platform-browser', './app.component', './media-item.component', './media-item-list.component', './favorite.directive', './category-list.pipe', './popup.component', './popup-image.component'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, media_item_component_1, media_item_list_component_1, favorite_directive_1, category_list_pipe_1, popup_component_1, popup_image_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (media_item_component_1_1) {
                media_item_component_1 = media_item_component_1_1;
            },
            function (media_item_list_component_1_1) {
                media_item_list_component_1 = media_item_list_component_1_1;
            },
            function (favorite_directive_1_1) {
                favorite_directive_1 = favorite_directive_1_1;
            },
            function (category_list_pipe_1_1) {
                category_list_pipe_1 = category_list_pipe_1_1;
            },
            function (popup_component_1_1) {
                popup_component_1 = popup_component_1_1;
            },
            function (popup_image_component_1_1) {
                popup_image_component_1 = popup_image_component_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        media_item_component_1.MediaItemComponent,
                        media_item_list_component_1.MediaItemListComponent,
                        favorite_directive_1.FavoriteDirective,
                        category_list_pipe_1.CategoryListPipe,
                        popup_component_1.PopupComponent,
                        popup_image_component_1.PopupImageComponent
                    ],
                    bootstrap: [
                        app_component_1.AppComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map