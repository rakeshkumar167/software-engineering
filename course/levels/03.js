window.LEVELS={
easy:[
["What does DNS do?",["Translates names to IP addresses","Encrypts traffic","Stores web pages","Assigns MAC addresses"],0,"It's the internet's phone book."],
["An IP address identifies:",["A device/interface on a network","A website's colour","A password","A browser tab"],0,"Packets are addressed to IPs."],
["Data on the internet travels in small chunks called:",["Packets","Files","Cookies","Frames of video only"],0,"Messages are split into packets."]],
medium:[
["Your laptop's IP is 192.168.1.20. This is:",["A private address valid only on your local network","A public internet address","Invalid","A DNS name"],0,"192.168.x.x is private (RFC 1918); NAT maps it to a public IP."],
["Which order is correct when you visit a site by name?",["DNS lookup, connect, send request","Send request, DNS lookup, connect","Connect, DNS, request","Request, then IP assigned"],0,"Resolve the name first."],
["What is a router's job?",["Forward packets toward their destination between networks","Store DNS","Run websites","Encrypt disks"],0,"Routers pick the next hop."]],
hard:[
["DNS records are cached. You change a site's IP but some users still reach the old one. Why?",["Resolvers cache the old record until its TTL expires","Browsers hate change","IPs are permanent","Routers refuse"],0,"Lower the TTL before planned migrations."],
["traceroute shows a hop with '* * *'. Most likely meaning?",["That router didn't reply to probes (often filtered), not necessarily broken","The destination is deleted","Your DNS failed","Infinite loop"],0,"Many routers deprioritise or block ICMP replies."],
["Why does IPv6 exist and how does it help NAT?",["IPv4 addresses ran out; IPv6's huge space lets devices have public addresses","IPv6 is faster by definition","IPv4 is encrypted","It replaces DNS"],0,"128-bit addresses remove the need for NAT address sharing."]]
};
