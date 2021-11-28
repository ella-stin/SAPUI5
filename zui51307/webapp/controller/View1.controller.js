sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zui51307.controller.View1", {
			onInit: function () {

			},
            onPress: function() {
                 let inputValue = this.getView().byId("inpLabel").getValue();
                // let inputValue = sap.ui.getCore().byId("inpLabel").getValue(); -> "ABAP"을 가져온다.
                alert( inputValue );
            }
		});
	});
