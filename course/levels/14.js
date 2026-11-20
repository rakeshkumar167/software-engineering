window.LEVELS={
easy:[
["XSS stands for:",["Cross-Site Scripting","Extra Secure Socket","XML Style Sheet","Cross-Server Sync"],0,"Injecting attacker scripts into a page."],
["Same-origin policy limits:",["How a page from one origin can access another origin's data","Image sizes","Cookie colours","Server speed"],0,"Origin = scheme + host + port."],
["CORS is:",["A way for servers to allow cross-origin requests","A cookie type","A firewall","A database"],0,"The server opts in via headers."]],
medium:[
["Which two URLs share an origin?",["https://a.com/x and https://a.com/y","https://a.com and http://a.com","https://a.com and https://b.a.com","https://a.com and https://a.com:8443"],0,"Scheme, host and port must all match."],
["CSRF tricks a browser into:",["Sending an unwanted authenticated request to a site you're logged in to","Showing ads","Crashing","Leaking DNS"],0,"Cookies are sent automatically."],
["A good defence against CSRF is:",["SameSite cookies and anti-CSRF tokens","Longer passwords","Bigger fonts","Disabling HTTPS"],0,"Make the request verifiable as intentional."]],
hard:[
["You get a CORS error. Is the server request actually blocked?",["The browser blocks reading the response; the server may have already processed it","The server rejected it always","The network failed","DNS failed"],0,"CORS protects the user's browser; it isn't server auth."],
["Why does a Content-Security-Policy help against XSS?",["It restricts where scripts can load/run from","It encrypts scripts","It hides the DOM","It blocks cookies"],0,"Injected inline scripts get blocked."],
["Setting Access-Control-Allow-Origin: * together with credentials is:",["Not allowed/unsafe: credentialed requests need a specific origin","Recommended","Required","Faster"],0,"Browsers reject wildcard with credentials."]]
};
