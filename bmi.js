$(document).ready(
    function () {

//add event handlers
var myRules {
    weight:{required:true
    min: 88
    max: 353
    digits: true},
            height:{required:true
    min: 59
    max: 79
    digits:true},
        }
        var myMessages = {
    weight: {required:"Weight is required"},
            height: {required:"Height is required"}
        };
        //all other functions (program logic)
        $("form").validate({submitHandler: calcBmi,
        rules:myRules,
        messages:myMessages});

    }
)