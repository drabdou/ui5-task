sap.ui.define(["de/bauerberatung/ui5-task/controller/BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
  "use strict";
  return BaseController.extend("de.bauerberatung.ui5-task.modules.Lieferant.LieferantDetail", {
    onInit: function () {
      var oModel = new JSONModel({
        items: [],
      });
      this.getView().setModel(oModel, "viewModel");

      // this.getRouter().getRoute("CustomerDetail").attachPatternMatched(this._onRouteMatched, this);
      this.getRouter().attachRouteMatched("LieferantDetail", this._onRouteMatched.bind(this));
    },

    _onRouteMatched: function (oEvent) {
      let sObjectId = oEvent.getParameter("arguments").id,
        sLayout = oEvent.getParameter("arguments").layout || "TwoColumnsMidExpanded",
        sSupplierPath = this.createEntryPath(this.getModel("SupplierModel"), "SupplierList", "SupplierID", sObjectId);

      this.getModel("AppModel").setProperty("/layout", sLayout);
      this.getModel("viewModel").setProperty("/customerId", sObjectId);

      this._bindView("SupplierModel", sSupplierPath);

      console.log("Lieferant Detail matched " + sSupplierPath);
    },

    onEditPress: function () {
      sap.m.MessageToast.show("Dummy - Edit");
    },

    onDeletePress: function () {
      sap.m.MessageToast.show("Dummy - Delete");
    },

    onBeforeRendering: function () {},

    onAfterRendering: function () {},

    onExit: function () {},

    handleClose(oEvent) {
      this._handleClose("Lieferant");
    },
  });
});
