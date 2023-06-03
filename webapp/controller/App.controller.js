sap.ui.define(["de/bauerberatung/ui5-task/controller/BaseController", "sap/ui/Device", "sap/ui/core/Fragment", "sap/ui/core/Popup"], function (BaseController, Device, Fragment, Popup) {
  "use strict";

  return BaseController.extend("de.bauerberatung.ui5-task.controller.App", {
    onInit: function () {
      this.router = this.getOwnerComponent().getRouter();

      this.router.attachRoutePatternMatched(this.onRoutePatternMatched.bind(this));

      // apply content density mode to root view
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    },

    onRoutePatternMatched: function (event) {},
  });
});
