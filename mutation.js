chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == "getColors") {
    sendResponse({ data: getColors() });
  }
});

function getColors() {
  var props = {
    colors: []
  };
  var elems = [...document.querySelectorAll("*")].map(el => {
    let computedStyle = window.getComputedStyle(el);
    let color = computedStyle.color;
    if (!props.colors.includes(color)) {
      props.colors.push(color);
    }
  });

  return props;
}
