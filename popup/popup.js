chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { type: "getColors" }, function(
    response
  ) {
    console.log(response.data);
    placeColors(response.data);
  });
});

function placeColors(data) {
  let list = document.getElementById("colorsList");
  list.innerHTML = "";
  data.colors.map(color => {
    list.innerHTML += `
        <div class="demo__color" style="background: ${color};">${color}</div>
    `;
  });
  window.resizeTo(500, 500);
}
