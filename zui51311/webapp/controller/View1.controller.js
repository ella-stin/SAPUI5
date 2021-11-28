sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter"
],
	function (Controller, JSONModel, Filter) {
		"use strict";

		return Controller.extend("iitp.zui51311.controller.View1", {
			onInit: function () {
                let oData = {
                    aEmp : [
                        { eId: "E0001", firstName: "NH", lastName: "Park"},
                        { eId: "E0002", firstName: "SM", lastName: "Ahn"},
                        { eId: "E0003", firstName: "CH", lastName: "Park"}
                    ] ,
                    aSkill: [
                        { eId: "E0001", sId: "S01", sName: "SAPUI5" },
                        { eId: "E0001", sId: "S01", sName: "ABAP" },
                        { eId: "E0002", sId: "S01", sName: "SAPUI5" },
                        { eId: "E0003", sId: "S02", sName: "ABAP" }
                    ]
                };
                
                let oModel = new JSONModel();
                oModel.setData( oData );
                this.getView().setModel( oModel );
			},
            onPress: function( oEvt ) {
                let selectItemContxt = oEvt.getSource().getBindingContext();
                // alert(selectItemContxt);
                let oModel = this.getView().getModel();
                let selectEmpId = oModel.getProperty( "eId", selectItemContxt );
                // alert(selectEmpId);

                let oTable = this.getView().byId("idTableSkill");
                
                // let oFilter = new sap.ui.model.Filter(
                //     "eId", 
                //     "EQ", 
                //     selectEmpId
                // );

                let oFilter = new Filter(
                    "eId", 
                    "EQ", //sap.ui.model.FilterOperator.EQ
                    selectEmpId
                );

                oTable.getBinding("items").filter(oFilter);
            }
            
            
		});
	});
