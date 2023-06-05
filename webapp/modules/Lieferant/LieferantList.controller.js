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

    onSearch: function (oEvent) {
      // #TodoFilter      
      var oList = this.getView().byId("supplierList");
      var oSearchField = this.getView().byId("searchField").getValue();
      if(oSearchField==""){
      this.getView().byId("searchField").setPlaceholder("Bitte hier Nummer/Lieferantenname eingeben");
        }
      //sQuery is used as the search value when filtering the list, initialized as an empty string
      var sQuery="";
      //aFilter is the array filter we are using, initialized as an empty array
      var aFilter = [];
      //Check if the search field is not empty and set the value of sQuery.
      if (oSearchField !== "") 
        sQuery = oSearchField;
      //get the binding of the list items
      var oBinding = oList.getBinding("items");
      //Creating the filter by CompanyName (Lieferantenname)
      var oCompanyNameFilter = new sap.ui.model.Filter("CompanyName", sap.ui.model.FilterOperator.Contains, sQuery);
      //Creating Filter by SupplierId (Nummer)
      var oSupplierIdFilter = new sap.ui.model.Filter("SupplierID", sap.ui.model.FilterOperator.Contains, sQuery);
      //Combining the two filters to aFilter
      aFilter.push(new sap.ui.model.Filter([oCompanyNameFilter, oSupplierIdFilter], false));
      //Filter the list binding items with aFilter
      oBinding.filter(aFilter);
    },

    onRefreshSupplier: function () {
     // sap.m.MessageToast.show("Dummy - Refresh");
      this.getView().byId("searchField").setValue("");
      this.onSearch();
    },

    onAddSupplier: function () {
      sap.m.MessageToast.show("Dummy - Add Supplier");
    },

    onAfterRendering: function () { },

    onBeforeRendering: function () { },

    onExit: function () { },

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
