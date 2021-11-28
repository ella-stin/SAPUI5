sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageBox) {
		"use strict";

		return Controller.extend("iitp.zday1301.controller.View1", {
			onInit: function () {

            },
            onClick: function() {
                // alert("Hello, SAPUI5!");
                // sap.m.MessageBox.show("Content", {
                //     title: "Team Name"
                // });
                // let mesgContent = this.getView().byId("inputTeamName").getValue();

                let oInput = this.getView().byId("inputTeamName");
                let mesgContent =oInput.getValue();
                MessageBox.show(mesgContent, {
                    title: "Team Name"
                })
            }
		});
	});
