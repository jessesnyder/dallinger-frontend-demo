/**
 * JS Specific to the instructions pages
 */

 $(document).ready(function() {

  // do not allow user to close or reload
  dallinger.preventExit = true;

    // Proceed to experiment,
    // but only if you passed the quiz in the instructions.
    $("#quiz-submit").click(function() {
      var answer = $("#quiz").val();
      if (answer === "B"){
        dallinger.allowExit();
        dallinger.goToPage("instructions/instruct-ready");
      } else {
        alert("Hmmm... Are you sure? Review the images carefully and try again.");
      }
    });

});