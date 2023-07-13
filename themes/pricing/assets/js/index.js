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

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

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

document.addEventListener("DOMContentLoaded", function () {
  var checkSupport = document.getElementById("checkSupport");
  var checkConsulting = document.getElementById("checkConsulting");

  // Assuming you have a link with the id 'myLink'
  var link = document.getElementById("myLink");

  function updateLinkHref() {
    var baseHref = "https://purchase.groupdocs.com/buy/cart?ppId=";
    var ppId = checkSupport.getAttribute("data-pp-id"); // assuming ppId is same for both

    baseHref += ppId;

    if (checkSupport.checked) {
      baseHref += "&paidSupport=true";
    }

    // If you need to add any other parameters based on the checkConsulting checkbox, add them here

    link.href = baseHref;
  }

  checkSupport.addEventListener("change", function () {
    updateLinkHref();
  });

  checkConsulting.addEventListener("change", function () {
    updateLinkHref();
  });

  // Call updateLinkHref() to set the initial href
  updateLinkHref();
});



