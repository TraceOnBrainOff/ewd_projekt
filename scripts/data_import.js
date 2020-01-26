function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function importData()
{
    var urls = ["https://api.waqi.info/feed/here/?token=76ae2b8c7ceef24f4c0cb9443638a692bb81f30a", "http://api.openweathermap.org/data/2.5/forecast?id=3094802&APPID=d623998413e93e8181cff27ec1f24fab"]
    var iter = Math.min(urls.length, interpretFuncs.length) //Failsafe by nie wykonać czegoś bez urla albo funkcji
    for (i=0; i<iter; i++)
    {
        httpGetAsync(urls[i], interpretFuncs[i])
    }
}
importData()