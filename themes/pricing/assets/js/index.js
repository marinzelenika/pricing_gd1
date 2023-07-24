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
  var supportCheckboxes = document.querySelectorAll("[id^='checkSupport_']");
  var consultingCheckboxes = document.querySelectorAll(
    "[id^='checkConsulting_']"
  );

  function updateLinkHref(ppId) {
    var supportCheckbox = document.getElementById("checkSupport_" + ppId);
    var consultingCheckbox = document.getElementById("checkConsulting_" + ppId);
    var basePrice = parseFloat(supportCheckbox.getAttribute("data-base-price"));
    var supportPrice = parseFloat(
      supportCheckbox.getAttribute("data-support-price")
    );
    var link = document.getElementById("myLink_" + ppId);
    var totalPriceElement = document.getElementById("totalPrice_" + ppId);
    var baseHref = "https://purchase.groupdocs.com/buy/cart?ppId=" + ppId;

    var totalPrice = basePrice;

    if (supportCheckbox.checked) {
      baseHref += "&paidSupport=true";
      totalPrice += supportPrice;
    }

    if (consultingCheckbox.checked) {
      baseHref += "&paidConsulting=true";
      totalPrice += 5999;
    }

    link.href = baseHref;
    totalPriceElement.innerText = totalPrice.toFixed(2); // Display the price with 2 decimal places
  }

  supportCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      updateLinkHref(checkbox.getAttribute("data-pp-id"));
    });

    // Call updateLinkHref() to set the initial href and price
    updateLinkHref(checkbox.getAttribute("data-pp-id"));
  });

  consultingCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      updateLinkHref(checkbox.getAttribute("data-pp-id"));
    });

    // Call updateLinkHref() to set the initial href and price
    updateLinkHref(checkbox.getAttribute("data-pp-id"));
  });
});





