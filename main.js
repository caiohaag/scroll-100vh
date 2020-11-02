var sectionScroll = false;

window.addEventListener("wheel", function (event) {
  if (sectionScroll) return;
  if (event.deltaY < 0) {
    var sectionOld = $("input[name=grupo]:checked").prop("id");
    if (sectionOld == "link1") return;
    $("." + sectionOld).fadeOut();
    sectionScroll = true;
    $("input[name=grupo]:checked")
      .prevAll(":radio:first")
      .prop("checked", true);
      var sectionNew = $("input[name=grupo]:checked").prop("id");
      setTimeout(function() {
        $("." + sectionNew).fadeIn();
      }, 400);
    setTimeout(function() {
      sectionScroll = false;
    }, 1000);
    return;
  } else if (event.deltaY > 0) {
    var sectionOld = $("input[name=grupo]:checked").prop("id");
    if (sectionOld == "link5") return;
    $("." + sectionOld).fadeOut();
    sectionScroll = true;
    $("input[name=grupo]:checked")
      .nextAll(":radio:first")
      .prop("checked", true);
      var sectionNew = $("input[name=grupo]:checked").prop("id");
      setTimeout(function() {
        $("." + sectionNew).fadeIn();
      }, 400);
    setTimeout(function() {
      sectionScroll = false;
    }, 1000);
    return;
  }
});
