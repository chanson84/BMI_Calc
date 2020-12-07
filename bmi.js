$(document).ready(
    function () {

//add event handlers
var myRules = {
    pounds:{required:true,
    min: 88,
    max: 353,
    digits: true},
            height:{required:true,
    min: 59,
    max: 79,
    digits:true},
        }
        var myMessages = {
    pounds: {required:"Weight is required"},
            height: {required:"Height is required"}
        };
        //all other functions (program logic)
        $("form").validate({submitHandler: calcBmi,
        rules:myRules,
        messages:myMessages});

    })

//calculate BMI
function calcBmi()
{
    var calcweight = $("#pounds").val();
    var calcheight = $("#height").val();
    var bmiHeight = calcheight * calcheight;//dislpay BMI
        var bmiFinal = calcweight/bmiHeight * 703;
        $("#bmiOutput").text(bmiFinal.toFixed(1));}

