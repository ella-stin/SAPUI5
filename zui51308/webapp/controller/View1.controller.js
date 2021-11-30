sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"
],
	function (Controller, Fragment, MessageBox) {
		"use strict";

		return Controller.extend("iitp.zui51308.controller.View1", {
			onInit: function () {

			}, 
            onPopup: function() {
                let oView = this.getView();
                // alert(oView.getId()); application-iitpzui51308-display-component---View1
                if(!this.byId("idPopup")){
                    Fragment.load({
                        id: oView.getId(),
                        name: "iitp.zui51308.view.Popup",
                        type: "XML",
                        controller: this
                    }).then(
                        function( oPopup ){
                            oView.addDependent( oPopup );
                            oPopup.open();
                        }
                    );
                } else {
                    this.byId("idPopup").open();
                }
            },
            onClose: function() {
                this.getView().byId("idPopup").close();
            },
            onSearch: function() {
                let oView = this.getView();
                let oLastInput = oView.byId("inpLastName");
                let lastName = oLastInput.getValue();
                alert(lastName);
            },
            onFragClick: function() {
                // not exist id
                // alert(this.getView().byId("inpFrag").getValue());
            
                // exist id
                alert(this.getView().byId(

                    sap.ui.core.Fragment.createId("inpFrag", //이 id를 찾아라
                    "inpFrag" //이 id를 가져올거야
                    )
                ).getValue());
            },
            onClick: function() {
                // let mesgContent = sap.ui.getCore().byId(sap.ui.core.Fragment.createId("inpFragJS", "btnSuccess")).getProperty(text);
                let mesgContent = sap.ui.getCore().byId("btnSuccess").getProperty("text");
                MessageBox.show(mesgContent,{
                    title : "Title"
                });
            }
		});
	});
