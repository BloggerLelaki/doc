document.getElementById('copy-button').addEventListener('mousedown', function() {
  var code = document.getElementById('code'),
    message = document.getElementById('message'),
    range = document.createRange();
  /* Add div under range */
  range.selectNode(code);
  window.getSelection().addRange(range);
  /* Copy the selected code */
  document.execCommand('copy');
 /* remove selection so that user never know the something was selected. */
  window.getSelection().removeAllRanges();
}); 
