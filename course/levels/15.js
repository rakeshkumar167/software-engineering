window.LEVELS={
easy:[
["Which protocol guarantees ordered, reliable delivery?",["TCP","UDP","ICMP","ARP"],0,"TCP retransmits lost data."],
["UDP is good for:",["Fast, loss-tolerant traffic like video calls and games","Bank transfers","File integrity","Login"],0,"No handshake, no retransmission."],
["TLS provides:",["Encryption and server identity","Faster DNS","Compression only","IP addresses"],0,"It underpins HTTPS."]],
medium:[
["TCP's three-way handshake is:",["SYN, SYN-ACK, ACK","GET, POST, PUT","DNS, ARP, IP","HELLO, BYE, ACK"],0,"It sets up a connection."],
["WebSockets are useful for:",["Two-way real-time messaging like chat","Static pages","DNS","Email only"],0,"One long-lived connection, both directions."],
["HTTP/2 improves HTTP/1.1 mainly by:",["Multiplexing many requests over one connection","Removing TLS","Using UDP always","Making URLs shorter"],0,"No more one-request-at-a-time per connection."]],
hard:[
["Why does HTTP/3 use QUIC over UDP?",["Avoids TCP head-of-line blocking and speeds up connection setup","UDP is encrypted by default in the OS","It removes IP","TCP is deprecated"],0,"Lost packets stall only their own stream."],
["A TLS certificate is for the wrong hostname. What happens?",["The browser warns/blocks since identity can't be verified","Nothing","The page loads faster","DNS repairs it"],0,"Hostname match is part of validation."],
["Why is TCP slow for the first request on a new connection?",["Handshakes (TCP + TLS) add round trips before data flows","Packets are tiny","Servers sleep","Routers throttle SYN always"],0,"Connection reuse and keep-alive avoid repeating that cost."]]
};
