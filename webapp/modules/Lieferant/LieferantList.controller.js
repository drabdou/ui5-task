sap.ui.define(["de/bauerberatung/ui5-task/controller/BaseController", "sap/ui/model/json/JSONModel", "sap/ui/core/Fragment", "sap/m/MessageToast"], function (BaseController, JSONModel, Fragment, MessageToast) {
  "use strict";
  return BaseController.extend("de.bauerberatung.ui5-task.modules.Lieferant.LieferantList", {
    onInit: function () {
      this.getRouter().attachRouteMatched("Lieferant", this._onRouteMatched.bind(this));
    },

    _onRouteMatched: function (oEvent) {
      console.log("Lieferant List matched");

      let sLayout = oEvent.getParameter("arguments").layout || "OneColumn";

      this.getModel("AppModel").setProperty("/layout", sLayout);
    },

    onSearch: function () {
      // #TodoFilter

      // Referenz auf die Liste
      var oList = this.getView().byId("supplierList");
    },

    onRefreshSupplier: function () {
      sap.m.MessageToast.show("Dummy - Refresh");
    },

    onAddSupplier: function () {
      sap.m.MessageToast.show("Dummy - Add Supplier");
    },

    onAfterRendering: function () {},

    onBeforeRendering: function () {},

    onExit: function () {},

    onSelectionChange: function (oEvent) {
      var oList = oEvent.getSource(),
        bSelected = oEvent.getParameter("selected");

      // skip navigation when deselecting an item in multi selection mode
      if (!(oList.getMode() === "MultiSelect" && !bSelected)) {
        // get the list item, either from the listItem parameter or from the event's source itself (will depend on the device-dependent mode).
        this.getRouter().navTo(
          "LieferantDetail",
          {
            id: oEvent.getSource().getBindingContext("SupplierModel").getProperty("SupplierID"),
            layout: "TwoColumnsMidExpanded",
          },
          true
        );
      }
    },
  });
});
