function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('teste-bootstrap-gas3')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
