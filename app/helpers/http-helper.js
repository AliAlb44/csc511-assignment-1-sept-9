export default (url, callback) =>
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
          const data = JSON.parse(xmlHttp.responseText);
          callback(data);
      }
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
};
