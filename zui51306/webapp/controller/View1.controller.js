sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zui51306.controller.View1", {
			onInit: function () {

			},
            onSelect:function() {
                let oChk = this.getView().byId("idChk");
                let selectFlag = oChk.getSelected();

                if(selectFlag) {
                    oChk.setText("Yes");
                } else {
                    oChk.setText("No");
                }
            }
		});
	});
