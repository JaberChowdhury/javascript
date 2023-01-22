const items = document.querySelectorAll(".box");
items.forEach(function (item) {
  item.addEventListener("click", function () {
    document.execCommand("copy");
  });
  item.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", item.textContent);
    }
  });
});
