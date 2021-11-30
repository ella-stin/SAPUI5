sap.ui.jsfragment("iitp.zui51308.view.XmlFrag", {
    createContent: function(oController){
            let oInput = new sap.m.Input(this.createId("inInput"));

            let oButton = new sap.m.Button("btnSuccess", {
                text: "Say Hello (JavaScript Fragment)",
                press: oController.onClick
            });

            return [oInput, oButton];
    }
});