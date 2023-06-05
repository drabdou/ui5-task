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
      //sQuery is used as the search value when filtering the list, initialized as an empty string
      var sQuery="";
      //aFilter is the array filter we are using, initialized as an empty array
      var aFilter = [];
      //Check if the search field is not empty and set the value of sQuery.
      if (oSearchField !== "") 
        sQuery = oSearchField;
      //get the binding of the list items
      var oBinding = oList.getBinding("items");
      //Creating Filter to filter list by CompanyName (Lieferantenname)
      var oCompanyNameFilter = new sap.ui.model.Filter("CompanyName", sap.ui.model.FilterOperator.Contains, sQuery);
      //Creating Filter to filter list by SupplierId (Nummer)
      var oSupplierIdFilter = new sap.ui.model.Filter("SupplierID", sap.ui.model.FilterOperator.Contains, sQuery);
      //Combining the two filters and add the search result to aFilter
      aFilter.push(new sap.ui.model.Filter([oCompanyNameFilter, oSupplierIdFilter], false));
      //Change the list binding items with result from aFilter
      oBinding.filter(aFilter);



      //Here in the code below i was testing the filtering option with another way since the standard Filters properties in XML
      //were raising an issue with the data loaded in the list and when clicking the search button
      //with the code above this would not be working properly----->Code below was making it work just fine ;))

      /*   
       if (oSearchField != "") 
         sQuery = oSearchField;
       else if (oEvent == undefined || oEvent.mParameters.newValue == undefined) {
          sQuery = ""
          this.getView().byId("searchField").setPlaceholder("Bitte Nummer oder Liferantenname hier einfügen");
        }
          else
           sQuery = oEvent.mParameters.newValue
         // alert(sQuery);
      // Referenz auf die Liste
      // var oList = this.getView().byId("supplierList");  
       */

    },

    onRefreshSupplier: function () {
      sap.m.MessageToast.show("Dummy - Refresh");
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
