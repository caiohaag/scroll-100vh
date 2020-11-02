var sectionScroll = false;

window.addEventListener("wheel", function (event) {
  if (sectionScroll) return;
  if (event.deltaY < 0) {
    var sectionOld = $("input[name=grupo]:checked").prop("id");
    if (sectionOld == "link1") return;
    $("." + sectionOld).fadeOut();
    $(".label").removeClass('selected');    
    sectionScroll = true;
    $("input[name=grupo]:checked")
      .prevAll(":radio:first")
      .prop("checked", true);
    var sectionNew = $("input[name=grupo]:checked").prop("id");
    linkSelected();
    setTimeout(function () {
      $("." + sectionNew).fadeIn();
    }, 400);
    setTimeout(function () {
      sectionScroll = false;
    }, 1000);
    return;
  } else if (event.deltaY > 0) {
    var sectionOld = $("input[name=grupo]:checked").prop("id");
    if (sectionOld == "link5") return;
    $("." + sectionOld).fadeOut();    
    $(".label").removeClass('selected'); 
    sectionScroll = true;
    $("input[name=grupo]:checked")
      .nextAll(":radio:first")
      .prop("checked", true);
    var sectionNew = $("input[name=grupo]:checked").prop("id");
    linkSelected();
    setTimeout(function () {
      $("." + sectionNew).fadeIn();
    }, 400);
    setTimeout(function () {
      sectionScroll = false;
    }, 1000);
    return;
  }
});

$('input[type=radio][name=grupo]').change(function() {
  $(".caravanita").fadeOut();
  $(".label").removeClass('selected');
  linkSelected();
  var sectionNewClick = $("input[name=grupo]:checked").prop("id");
  setTimeout(function () {
  $("." + sectionNewClick).fadeIn();
}, 400);
});


function linkSelected() {  
  var label = $("label[for='" + $($("input[name=grupo]:checked")).attr('id') + "']");
  label.addClass('selected');
}