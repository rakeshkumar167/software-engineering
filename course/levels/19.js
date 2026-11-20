window.LEVELS={
easy:[
["A backend framework helps you:",["Build server-side apps faster with routing, templates, etc.","Design logos","Style pages only","Install OSes"],0,"Examples: Flask, Django, Express."],
["A route maps:",["A URL path and method to a handler function","A file to a disk","A user to a color","A DNS to an IP"],0,"@app.get('/users')"],
["Which does the browser NOT run?",["Backend server code","JavaScript","HTML","CSS"],0,"The server runs backend code."]],
medium:[
["Middleware is:",["Code that runs on every request before/after handlers (auth, logging)","A database","A CSS tool","A router"],0,"A pipeline of steps."],
["Why use an ORM?",["Work with database rows as objects instead of raw SQL","It's always faster","It removes the database","It encrypts"],0,"Convenient, but know the SQL it generates."],
["Input validation should happen:",["On the server, always (client checks are only convenience)","Only in the browser","Never","Only in tests"],0,"Clients can bypass the UI."]],
hard:[
["A request handler runs a 10-second report synchronously. Effect on other users?",["Workers get blocked, so latency and timeouts rise; use a background job","None","Faster for everyone","DB gets bigger"],0,"Offload long work to a queue."],
["Why return consistent error shapes and codes?",["Clients can handle failures programmatically","Looks nicer","Required by Python","Smaller responses"],0,"Predictable contracts."],
["Why keep business logic out of route handlers?",["Easier to test and reuse; handlers just translate HTTP","Handlers are slow","Frameworks forbid it","Saves memory"],0,"Thin controllers, fat services."]]
};
