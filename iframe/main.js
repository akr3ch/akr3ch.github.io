window.onload = function() {
  var iframe = document.createElement('iframe');
  iframe.src = '//akr3ch.github.io/iframe';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.backgroundColor = 'white';
  document.body.appendChild(iframe);
};
