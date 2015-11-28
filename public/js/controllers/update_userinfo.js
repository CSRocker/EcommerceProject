/**
 * Created by Vaibhav on 11/26/2015.
 */
$(document).ready(function() {


    function editname(btneditnamevalue) {
        switch (btneditnamevalue) {
            case btneditname:
                $("#diveditemail").addClass("hidden");
                $("#diveditmobile").addClass("hidden");
                $("#diveditpassword").addClass("hidden");

                $("#diveditsetting").removeClass("hidden");
                $("#diveditname").removeClass("hidden");
                break;
            case btneditemail:
                $("#diveditname").addClass("hidden");
                $("#diveditmobile").addClass("hidden");
                $("#diveditpassword").addClass("hidden");

                $("#diveditsetting").removeClass("hidden");
                $("#diveditemail").removeClass("hidden");
                break;
            case btneditmobile:
                $("#diveditname").addClass("hidden");
                $("#diveditemail").addClass("hidden");
                $("#diveditpassword").addClass("hidden");

                $("#diveditmobile").removeClass("hidden");
                $("#diveditsetting").removeClass("hidden");

                break;
            case btneditpassword:
                $("#diveditname").addClass("hidden");
                $("#diveditmobile").addClass("hidden");
                $("#diveditemail").addClass("hidden");

                $("#diveditpassword").removeClass("hidden");
                $("#diveditsetting").removeClass("hidden");

                break;
        }


    }
}
