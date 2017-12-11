/**
 * Created by vikassaryal on 11/12/17.
 */


    var isAlreadyPopUp;

    isAlreadyPopUp=false;
    $(window).scroll(function () {
        if(!isAlreadyPopUp){
            if ($(document).scrollTop() >= $(document).height() / 25){
            $("#popup1").show("slow");
            }else{
                $("#popup1").hide("slow");
            }
        }
    });


    $(document).ready(function() {
        $("#close1 a").click(function(){
            $("#popup1").hide("slow");
        });
    });

    function hidePopup(){
        $("#popup1").hide("slow");
    }

    $(function() {
        $("#future_date").countdowntimer({
            hours: 3‚
		    minutes : 10‚
            seconds : 10‚
            size : "lg"‚
    });
    });

    function validateEmail(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.match(mailformat))
        {
            window.alert("Your Email is registered")
            return true;
        }
        else
        {
            window.alert("You have entered an invalid email address!");
            // document.form1.text1.focus();
            return false;
        }
    }
