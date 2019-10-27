var my_node_id;

// Consent to the experiment.
$(document).ready(function() {

  // do not allow user to close or reload
  dallinger.preventExit = true;

  $("#submit-response").click(function() {
    $("#submit-response").addClass('disabled');
    $("#submit-response").html('Sending...');
    dallinger.createInfo(my_node_id, {contents: "Submitted", info_type: "Info"})
    .done(function (resp) {
      dallinger.allowExit();
      dallinger.goToPage('questionnaire');
    })
    .fail(function (rejection) {
      dallinger.allowExit();
      dallinger.error(rejection);
    });
  });
});

// Create the agent.
var create_agent = function() {
  // Setup participant and get node id
  $("#submit-response").addClass('disabled');
  dallinger.createAgent()
  .done(function (resp) {
    my_node_id = resp.node.id;
    $("#submit-response").removeClass('disabled');
  })
  .fail(function (rejection) {
    dallinger.allowExit();
    dallinger.error(rejection);
  });
};
