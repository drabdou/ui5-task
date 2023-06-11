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
      //sQuery is used as the search value when filtering the list, initialized as an empty string
      var sQuery = "";
      //aFilter is the array filter we are using, initialized as an empty array
      var aFilter = [];
      var oSearchField = this.getView().byId("searchField").getValue();
      //get the binding of the list items
      var oBinding = oList.getBinding("items");

      if (oSearchField == "") {
        this.getView().byId("searchField").setPlaceholder("Bitte hier Nummer oder Lieferantenname eingeben");
      } else {
        sQuery = oSearchField;
        //Creating the filter by CompanyName (Lieferantenname)
        var oCompanyNameFilter = new sap.ui.model.Filter("CompanyName", sap.ui.model.FilterOperator.Contains, sQuery);
        //Creating Filter by SupplierId (Nummer)
        var oSupplierIdFilter = new sap.ui.model.Filter("SupplierID", sap.ui.model.FilterOperator.Contains, sQuery);
        //Combining the two filters to aFilter
        aFilter.push(new sap.ui.model.Filter([oCompanyNameFilter, oSupplierIdFilter], false));
      }
      //Filter the list binding items with aFilter
      oBinding.filter(aFilter);
    },

    onRefreshSupplier: function () {
      // sap.m.MessageToast.show("Dummy - Refresh");
      var that = this;
      this.getView().byId("searchField").setValue("");
      this.onSearch();
      this.getView().byId("searchField").setPlaceholder("Nummer/ Lieferantenname eingeben");

    },

    onAddSupplier: function () {
      sap.m.MessageToast.show("Dummy - Add Supplier");
      var oSupplierModel = this.getView().getModel("SupplierModel");
      var oData = oSupplierModel.getData().SupplierList;

      var that = this;

      // Create a dialog
      var oDialog = new sap.m.Dialog({
        title: "Dialog Title",
        content: [
          new sap.m.Label({ text: "SupplierID" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "CompanyName" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "ContactName" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "ContactTitle" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "Address" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "City" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "Region" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "PostalCode" }),
          new sap.m.Input({ value: "" }),
          new sap.m.Label({ text: "Country" }),
          new sap.m.Input({ value: "" }),
        ],
        beginButton: new sap.m.Button({
          text: "Save",
          press: function () {
            // Handle save button press
            var oField1 = oDialog.getContent()[1]; // Get input 1
            var oField2 = oDialog.getContent()[3]; // Get input 2
            var oField3 = oDialog.getContent()[5]; // 
            var oField4 = oDialog.getContent()[7]; //
            var oField5 = oDialog.getContent()[9]; // 
            var oField6 = oDialog.getContent()[11]; //
            var oField7 = oDialog.getContent()[13]; // 
            var oField8 = oDialog.getContent()[15]; //
            var oField9 = oDialog.getContent()[17]; // 


            var SupplierIDField = oField1.getValue(); // Get the value of field 1
            var CompanyNameField = oField2.getValue(); // Get the value of field 2
            var ContactNameField = oField3.getValue();
            var ContactTitleField = oField4.getValue();
            var AddressField = oField5.getValue();
            var CityField = oField6.getValue();
            var RegionField = oField7.getValue();
            var PostalCodeField = oField8.getValue();
            var CountryField = oField9.getValue();


            var newLieferant = {
              SupplierID: SupplierIDField,
              CompanyName: CompanyNameField,
              ContactName: ContactNameField,
              ContactTitle: ContactTitleField,
              Address: AddressField,
              City: CityField,
              Region: RegionField,
              PostalCode: PostalCodeField,
              Country: CountryField
            }
            oData.push((newLieferant))
           // that.getView().getModel("SupplierModel").getData().SupplierList=oData;

            // Close the dialog
            oDialog.close();
          }
        }),
        endButton: new sap.m.Button({
          text: "Cancel",
          press: function () {
            // Handle cancel button press
            // Close the dialog without performing any action
            oDialog.close();
          }
        })
      });

      // Open the dialog
      oDialog.open();



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
