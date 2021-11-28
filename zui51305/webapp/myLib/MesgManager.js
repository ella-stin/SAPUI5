sap.ui.define( 
    ["sap/m/MessageBox"],
    function( MessageBox ) {
        return { //객체
            myMesg: function( pMesg, pTitle ) {
                MessageBox.show( pMesg, {
                    title: pTitle
                });
            }
        };
});