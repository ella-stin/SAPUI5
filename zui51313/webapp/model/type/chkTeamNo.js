sap.ui.define(
    ["sap/ui/model/SimpleType",
     "sap/ui/model/ValidateException"
    ],
    function(SimpleType, ValidateException) {
        return SimpleType.extend( "iitp.zui51313.model.type.chkTeamNo", {
            formatValue: function( oValue ) {
                return oValue; 
            },
            //이렇게 하면 포맷 안한다는말, 대신 로직삽입도 가능
            //Formats the given raw value to an output value of the given target type.
            parseValue: function( oValue ){
                return oValue;
            },
            validateValue: function( oValue ) {
                if ( oValue == 'D001') {

                } else {
                    throw new ValidateException();
                }
            } 
            //Validates whether a given raw value meets the defined constraints.
            //Throwing an exception is simple.
            //All it takes is to instantiate an exception object and then… "throw" it.
        } );
    }
);