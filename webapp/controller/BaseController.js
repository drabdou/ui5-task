sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/base/assert"], function (Controller, JSONModel, assert) {
  "use strict";
  return Controller.extend("de.bauerberatung.ui5-task.BaseController", {
    createEntryPath(oModel, sCollection, sKeyField, sKeyVal) {
      let sPath = "/" + sCollection + "/",
        aCollection = oModel.getProperty("/" + sCollection) || [];

      sKeyField = sKeyField || "_id";

      assert(aCollection.length > 0, `Collection ${sCollection} is empty.`);

      if (aCollection) {
        // Allocate correct customer path
        for (var iEntry = 0; iEntry < aCollection.length; iEntry++) {
          let oEntry = oModel.getProperty(`/${sCollection}/` + iEntry);
          if (!!oEntry && oModel.getProperty(`/${sCollection}/` + iEntry)[sKeyField] == sKeyVal) {
            sPath += iEntry;
            break;
          }
        }
      }

      return sPath;
    },

    _handleClose: function (sRoute, oArguments) {
      if (oArguments) oArguments.layout = "OneColumn";
      else {
        oArguments = {
          layout: "OneColumn",
        };
      }

      this.getRouter().navTo(sRoute, oArguments);
    },

    /**
     * Binds the view to the object path. Makes sure that detail view displays
     * a busy indicator while data for the corresponding element binding is loaded.
     * @function
     * @param {string} sObjectPath path to the object to be bound to the view.
     * @private
     */
    _bindView: function (sModel, sObjectPath) {
      // Set busy indicator during view binding
      var oViewModel = this.getModel("viewModel");

      // If the view was not bound yet its not busy, only if the binding requests data it is set to busy again
      oViewModel.setProperty("/busy", false);

      this.getView().bindElement({
        path: sModel + ">" + sObjectPath,
        events: {
          // change: this._onBindingChange.bind(this),
          dataRequested: function () {
            oViewModel.setProperty("/busy", true);
          },
          dataReceived: function () {
            oViewModel.setProperty("/busy", false);
          },
        },
      });
    },

    getModel(sModelName) {
      return this.getView().getModel(sModelName);
    },

    getRouter() {
      return this.getOwnerComponent().getRouter();
    },

    onInit: function () {
      var oModel = new JSONModel({
        items: [],
      });
      this.getView().setModel(oModel, "viewModel");
    },

    onAfterCloseDialog(oEvent) {
      oEvent.getSource().destroy();
    },
  });
});
