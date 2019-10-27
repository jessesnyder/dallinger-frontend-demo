// Consent to the experiment.
$(document).ready(function() {

    // do not allow user to close or reload
    dallinger.preventExit = true;

    // Print the consent form.
    $("#print-consent").click(function() {
      window.print();
    });

    // Consent to the experiment.
    $("#consent").click(function() {
      dallinger.allowExit();
      dallinger.goToPage('instructions/instruct-1');
    });

    // Consent to the experiment.
    $("#no-consent").click(function() {
      dallinger.allowExit();
      window.close();
    });

  });