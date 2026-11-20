window.LEVELS={
easy:[
["Which environments are common?",["Development, staging, production","Red, green, blue","Home, work, school","Alpha, beta only"],0,"Each has a different purpose and risk."],
["An environment variable is:",["A named value set outside the code","A Python variable only","A file type","A server"],0,"Used for config like DB URLs."],
["Where should API keys NOT be stored?",["In source code committed to git","In a secrets manager","In env vars","In a vault"],0,"Anyone with the repo would have them."]],
medium:[
["Why use a .env file locally but never commit it?",["Keeps secrets out of version control","It's faster","Git requires it","It's encrypted"],0,"Add it to .gitignore; commit an .env.example."],
["Config should vary by:",["Environment, without changing code","Developer mood","Time of day","File name only"],0,"Twelve-factor app."],
["Staging exists to:",["Test changes in a prod-like setup before release","Replace production","Store backups","Train users"],0,"Catch problems safely."]],
hard:[
["You committed a secret then deleted it next commit. Is it safe?",["No, it remains in history; rotate it","Yes","Yes if branch is private only","Yes after a day"],0,"Assume it's compromised."],
["Why is 'works on my machine' a warning sign?",["Environments differ (versions, config, OS); containers and lock files help","Machines are slow","It's a Git feature","Fine as is"],0,"Reproducible environments."],
["Feature flags let you:",["Deploy code but enable features gradually without redeploying","Hide secrets","Speed DNS","Skip tests"],0,"Separate deploy from release."]]
};
