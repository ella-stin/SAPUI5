sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "iitp/zui51305/myLib/MesgManager"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MesgManager) {
		"use strict";

		return Controller.extend("iitp.zui51305.controller.View1", {
			onInit: function () {

			},
            onPress: function( ){
                MesgManager.myMesg("Mesg Content", "Mesg Title");
            }
		});
	});
