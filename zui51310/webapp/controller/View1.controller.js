sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("iitp.zui51310.controller.View1", {
			onInit: function () {
                let oData = {
                   mySap:{ skillNo: "S01",
                           skillName: "SAPUI5"
                         },
                    aSap: [
                        { sId: "S01", sName: "SAPUI5"},
                        { sId: "S02", sName: "ABAP"},
                        { sId: "S03", sName: "HANA"}
                    ],
                    aEmp: [
                        { key: "E001", text: "Park NH"},
                        { key: "E002", text: "Ahn SM"},
                        { key: "E003", text: "Park CH"}
                    ]
                };

                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel, "myModel" ); //모델 추가해주면 따로 디폴트 모델은 없다. 
			},

            onSelect: function ( oEvent ) {
                let oCombo = this.getView().byId("idCombo");
                let selectKey = oCombo.getSelectedKey();
                alert( selectKey );      
                
                let sPath = oEvent.getParameter("selectedItem").getBindingContext("myModel").getPath();
                alert( sPath );
            }
		});
	});
