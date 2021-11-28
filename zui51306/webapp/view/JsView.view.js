sap.ui.jsview(
    "iitp.zui51306.view.JsView",
    {
        getControllerName: function () {
            return "iitp.zui51306.controller.JsView";
        },
        createContent: function (oController) {
            let oButton = new sap.m.Button({
                text: "JS View Button",
                press: oController.onClick
            }); 

            //나쁜예1)  
            // onClick: function() {
            //     alert("View Function");
            // },
            // createContent: function (oController) {
            //     let oButton = new sap.m.Button({
            //         text: "JS View Button",
            //         press: this.onClick
            //     });  
            
            //나쁜예2)
            // let oButton = new sap.m.Button({
            //     text: "JS View Button",
            //     press: oController.onClick
            // });
            // oButton.attachPress( oController.onClick);
            
            // 나쁜예3)
            // let oButton = new sap.m.Button({
            //     text: "JS View Button",
            //     press: function() {
            //         alert("test");
            //     }
            // });
            
            // 나쁜예4)
            // let oButton = new sap.m.Button({
            //     text: "JS View Button",
            //     press: selfTest
            // });

            // function selfTest() {
            //     alert("Self Test");
            // }
            
            // <<<<<controller의 기능이 view에 함께 포함되어 있는 경우>>>>> 분리시켜야한다.

            return [ oButton ];
        }
     }
 );