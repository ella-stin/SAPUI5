sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	function (Controller) {
		"use strict";

		return Controller.extend("iitp.zui51309.controller.View1", {
			onInit: function () {
                let oData = {
                    lastName: "Park",
                    firstName : "NH"
                };

                let oModel = new sap.ui.model.json.JSONModel();
                oModel.setData( oData );

                this.getView().setModel( oModel );
			}, 
            onPress: function() {
                // let oBtn = this.getView().byId("idBtn").getValue();
                // alert( oBtn ); -> Park
                let oModel = this.getView().getModel();
                // alert( oModel ); -> EventProvider sap.ui.model.json.JSONModel
                let oData = oModel.getData();
                alert( oData.lastName + " " + oData.firstName );
            }
            
		});
	});
