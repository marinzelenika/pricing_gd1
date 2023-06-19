document.addEventListener("DOMContentLoaded", function () {
  var tabList = [].slice.call(document.querySelectorAll("#myTab a"));
  tabList.forEach(function (tab) {
    var tabTrigger = new bootstrap.Tab(tab);

    tab.addEventListener("click", function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
});

var cardElements = document.getElementsByClassName("card");
var limit = 130;

if (window.innerWidth < 400) {
  for (var i = 0; i < cardElements.length; i++) {
    var titleElement = cardElements[i].getElementsByClassName("card-title")[0];
    var textElement = cardElements[i].getElementsByClassName("card-text")[0];

    var title = titleElement.textContent;
    var text = textElement.textContent;

    var combinedText = title + " " + text;

    if (combinedText.length > limit) {
      var truncatedText = combinedText.substring(0, limit) + "...";
      var truncatedTitleLength = Math.min(title.length, truncatedText.length);
      var truncatedTitle = truncatedText.substring(0, truncatedTitleLength);
      var truncatedTextContent = truncatedText.substring(truncatedTitleLength);

      titleElement.textContent = truncatedTitle;
      textElement.textContent = truncatedTextContent;
    }
  }
}

