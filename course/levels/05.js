window.LEVELS={
easy:[
["Authentication answers:",["Who are you?","What may you do?","Where are you?","When?"],0,"Authorization answers 'what may you do'."],
["A cookie is:",["Small data the browser stores and sends back to the server","A virus","A server file","A DNS record"],0,"Set via Set-Cookie, returned in Cookie."],
["Which is authorization?",["Only admins can delete users","Entering a password","Showing ID","Typing a username"],0,"It's about permissions."]],
medium:[
["Why store a session ID in the cookie instead of the user's data?",["Data stays on the server; the cookie is just a key","Cookies are bigger","It's prettier","DNS needs it"],0,"Clients can tamper with anything they hold."],
["Which cookie flag stops JavaScript from reading it?",["HttpOnly","Secure","SameSite","Path"],0,"HttpOnly blocks document.cookie (limits XSS theft)."],
["User is logged in but gets 403 on /admin. This means:",["Authenticated but not authorized","Not logged in","Server down","Bad URL"],0,"401 = not authenticated, 403 = not permitted."]],
hard:[
["Why should login errors say 'invalid username or password' rather than which one was wrong?",["Avoids revealing which accounts exist","Shorter text","Faster","Required by HTTP"],0,"Prevents username enumeration."],
["An attacker steals a session ID. What can they do and how do you limit it?",["Impersonate the user; use HTTPS, HttpOnly, short expiry, rotate on login, server-side revoke","Nothing","Only read DNS","Change the password hash"],0,"Session ID is a bearer secret."],
["Why must the server check authorization on every request, not just hide buttons in the UI?",["Clients can craft requests directly","Buttons are slow","Browsers block it","HTTP requires it"],0,"UI hiding is not security (broken access control, IDOR)."]]
};
