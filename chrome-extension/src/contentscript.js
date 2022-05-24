function getDataLinks() {
  $('a[href^="data"]').each(function (_, a) {
    a.href = "https://www.jmit.ac.in/";
  });
  return;
}

getDataLinks();
setInterval(getDataLinks, 1000);
