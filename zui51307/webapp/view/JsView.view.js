sap.ui.jsview(
    "iitp.zui51307.view.JsView",
    {
        getControllerName: function(){
            return "iitp.zui51307.controller.JsView";
        },
        createContent: function( oController ){
            let oLabel = new sap.m.Label({ //new sap.ui.commons(데스크탑용)
                text: "JS View" ,
                labelFor: "inpLabel"
            }); 

            let oInput = new sap.m.Input("inpLabel", { 
               // id: "inpLabel",
                value: "ABAP" ,
                description: "JS View"
            });

            let oButton = new sap.m.Button({ 
                text: "JS Click",
                press: oController.onPress 
            }); 

            return [oLabel, oInput, oButton];
        }

    }
);