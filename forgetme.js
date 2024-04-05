if(localStorage.getItem("DontShow")) {
    $("#one-time-newsletter").hide();
  }
  $("#forgetMe").on("click", function() {
    localStorage.setItem("DontShow", "true");
  });