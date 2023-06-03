sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device"], function (UIComponent, Device, Models, ListSelector) {
  "use strict";

  return UIComponent.extend("de.bauerberatung.ui5-task.Component", {
    metadata: {
      manifest: "json",
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      jQuery.sap.log.setLevel(jQuery.sap.log.ERROR);

      this.getRootControl()
        .loaded()
        .then(
          function () {
            this.getRouter().initialize();
          }.bind(this)
        );
    },

    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass: function () {
      this._sContentDensityClass = "sapUiSizeCompact";
      return this._sContentDensityClass;
    },
  });
});
