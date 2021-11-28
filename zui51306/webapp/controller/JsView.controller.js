sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zui51306.controller.JsView", {
			onInit: function () {

			},
            onClick: function() {
                alert("Controller onClick");
            }
		});
	});
