window.LEVELS={
easy:[
["Which HTTP method is normally used to fetch a page?",["GET","POST","DELETE","PATCH"],0,"GET reads a resource."],
["Status code 404 means:",["Not found","Server error","Success","Redirect"],0,"The resource doesn't exist."],
["HTTPS adds what to HTTP?",["Encryption via TLS","Faster speed","Images","Cookies"],0,"Traffic is encrypted and the server authenticated."]],
medium:[
["A form submits a new order. Which method fits best?",["POST","GET","HEAD","TRACE"],0,"POST creates or submits data."],
["Which header tells the server what format the client is sending?",["Content-Type","Accept","Host","Location"],0,"Content-Type describes the body; Accept is what you want back."],
["Status 301 vs 302?",["301 permanent redirect, 302 temporary","301 error, 302 success","Both permanent","Both errors"],0,"Browsers and search engines cache permanent ones."]],
hard:[
["A server returns 200 with an error message in the body for failures. What's the downside?",["Clients, caches and monitors can't tell it failed","It's faster","It's required","Nothing"],0,"Status codes are the machine-readable contract."],
["Why is HTTP called 'stateless' and what follows?",["Each request stands alone, so state (sessions) must be sent each time, e.g. via cookies","Servers forget DNS","It can't send bodies","It's encrypted"],0,"No built-in memory between requests."],
["Your 20-line Python server reads one request at a time. Under load, what happens?",["Requests queue behind a slow one, latency climbs","It scales automatically","It crashes at once","Nothing"],0,"A single-threaded server handles requests sequentially; use threads/async/workers."]]
};
