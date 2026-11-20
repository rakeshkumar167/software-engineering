window.LEVELS={
easy:[
["A load balancer:",["Spreads requests across several servers","Stores files","Encrypts disks","Compiles code"],0,"It improves capacity and availability."],
["A CDN:",["Serves content from servers near the user","Is a database","Is a language","Replaces DNS"],0,"Lower latency for static assets."],
["Caching means:",["Keeping a copy to avoid redoing work","Deleting data","Encrypting","Sorting"],0,"Faster and cheaper."]],
medium:[
["A reverse proxy sits:",["In front of servers, receiving client requests on their behalf","Between you and the internet, hiding clients","Inside the browser","On the DB"],0,"Nginx often does this (TLS, routing, caching)."],
["Cache-Control: max-age=3600 means:",["Reuse this response for up to an hour without asking again","Delete after an hour","Encrypt for an hour","Retry for an hour"],0,"Freshness lifetime."],
["Which content suits a CDN best?",["Images, CSS and JS","Per-user bank balances","Passwords","Session data"],0,"Same for everyone, changes rarely."]],
hard:[
["You deploy new JS but users still see the old one. Typical fix?",["Content-hashed filenames (cache busting) or a purge","Tell users to wait","Disable HTTPS","Bigger CDN"],0,"app.3f9a.js changes URL when content changes."],
["Why must a cache key sometimes include the Vary header values?",["Responses can differ by e.g. language or encoding","Keys must be long","Speed","DNS"],0,"Otherwise one user's variant is served to another."],
["Sticky sessions vs shared session store?",["Sticky pins a user to one server; a shared store lets any server handle them (more resilient)","They are identical","Sticky is stateless","Shared store is slower always"],0,"Stateless app servers scale and fail over more easily."]]
};
