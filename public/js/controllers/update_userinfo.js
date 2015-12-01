/**
 * Created by Vaibhav on 11/26/2015.
 */
$(document).ready(function() {


    // Initialize Modal Window for Login / SignUp
   // $('#userinfo_modal').modal({
    //    backdrop: 'static',
     //   show: true
    //})

    $('#updateuserform').submit(function(e) {
        e.preventDefault();
        window.alert("in button click");
        // Get the form ID
        var formId = "#"+$(this).attr("id");

        // Check for errors in form before submitting
        if($(formId).validationEngine('validate') ) {


            $.post($(formId).attr("action"),$(formId).serialize(),function (data) {
                if (data) {
                    window.alert("In failed method");
                   // $('#file').attr('type', 'file');    // Change Attribute back to 'file'
                    $("#contentData").html(data);
                }
                else {

                    window.alert("In Success method");
                    //$('#addProductForm_status').html('Success! Product Added');



                }
            });
        }

    });



});

