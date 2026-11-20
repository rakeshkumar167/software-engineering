window.LEVELS={
easy:[
["Logs are:",["Records of events with timestamps","Numbers only","Network cables","Passwords"],0,"The nurse's chart."],
["Metrics are:",["Numbers measured over time","Stories","Images","Secrets"],0,"Request rate, error %, CPU."],
["A health endpoint (/healthz) lets:",["Monitors check the app is alive","Users log in","DNS resolve","Git merge"],0,"Returns 200 when healthy."]],
medium:[
["Golden signals include:",["Latency, traffic, errors, saturation","Colour, size, font, speed","Git, Docker, HTTP, DNS","Dev, test, stage, prod"],0,"Start with these four."],
["Why use structured (JSON) logs?",["Searchable and filterable by field","Prettier","Smaller always","Required"],0,"Query by user_id or request_id."],
["An alert should be:",["Actionable and tied to user impact","Triggered by any blip","Sent to everyone","Ignored"],0,"Avoid alert fatigue."]],
hard:[
["p99 latency is 4s but average is 120ms. What does it mean?",["1% of requests are very slow, which averages hide","Nothing","Servers are idle","Averages are exact"],0,"Tail latency hurts real users."],
["First priority in a live incident:",["Mitigate (rollback/failover), then investigate","Find who to blame","Write the postmortem","Rewrite the code"],0,"Stop the bleeding first."],
["An SLO of 99.9% monthly allows about how much downtime?",["~43 minutes","~4 hours","~5 seconds","None"],0,"0.1% of 30 days is about 43 min: the error budget."]]
};
