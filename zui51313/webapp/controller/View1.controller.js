sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "iitp/zui51313/model/type/chkTeamNo",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, chkTeamNo, MessageBox) {
		"use strict";

		return Controller.extend("iitp.zui51313.controller.View1", {
			onInit: function () {
                let oData = {
                    teamNo: "D001"
                }

                let oModel = new JSONModel();
                oModel.setData(oData);
                this.getView().setModel(oModel);
			},
            onSuccess: function( oEvent ) {
                let oElement = oEvent.getSource();
                oElement.setValueState("None");

                let btn = this.getView().byId("idBtn");
                btn.attachPress(MessageBox.show("Success", {
                    title: "The Result"
                }))

                // let oText = this.getView().byId("idMesgText");
                // oText.setText("Success");
            },
            onError: function( oEvent ) {
                let oElement = oEvent.getSource();
                oElement.setValueState("Error");

                let btn = this.getView().byId("idBtn");
                btn.attachPress(MessageBox.show("Error", {
                    title: "The Result"
                }))
                
                // let oText = this.getView().byId("idMesgText");
                // oText.setText("The Team No is wrong");
            }
            // onPress: function() {
                // let btn = this.getView().byId("inpTeamNo");
                // btn.getValueState();
            //     let oText = this.getView().byId("idMesgText");
            //     let reBtn = oText.getText();
            //     alert(reBtn);
            // }
		});
	});
