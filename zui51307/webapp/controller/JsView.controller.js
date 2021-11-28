sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zui51307.controller.JsView", {
			onInit: function () {
                
			},
            onPress: function() {
                let inputValue = sap.ui.getCore().byId("inpLabel").getValue();
                alert(inputValue);
            }
		});
	});
