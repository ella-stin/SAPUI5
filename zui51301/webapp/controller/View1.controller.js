sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zui51301.controller.View1", {
			onInit: function () {
                    
            },
            onClick: function(){
                alert("Hello SAPUI5");
            }
		});
	});
