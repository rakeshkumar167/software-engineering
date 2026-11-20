window.LEVELS={
easy:[
["What is a commit?",["A saved snapshot of your changes with a message","A remote server","A branch","A merge conflict"],0,"Commits are the history's building blocks."],
["Which command copies a remote repository to your machine?",["git clone","git commit","git init","git add"],0,"clone downloads the repo and its history."],
["What does git status show?",["Changed, staged and untracked files","The remote URL only","The server uptime","All commits ever"],0,"Run it often."]],
medium:[
["What's the point of the staging area (git add)?",["Choose exactly which changes go in the next commit","Back up to the cloud","Compress files","Speed up the network"],0,"It lets you build clean, focused commits."],
["Why use a feature branch?",["Work in isolation without breaking main","It makes files smaller","It's required by GitHub","To delete history"],0,"Branches are cheap; merge via pull request."],
["git pull is roughly:",["git fetch followed by merge","git push reversed","git clone","git reset"],0,"It downloads remote changes and integrates them."]],
hard:[
["You committed a secret key and pushed. Is git revert enough?",["No: it stays in history; rotate the key and rewrite history if needed","Yes, it's gone","Yes, after git pull","Only if you delete the branch"],0,"Treat leaked secrets as compromised."],
["Two people edit the same line and merge. What happens?",["A merge conflict you must resolve manually","Git picks the newest","Git deletes both","The merge is silently lost"],0,"Conflict markers show both versions."],
["Difference between merge and rebase?",["Merge keeps branch history with a merge commit; rebase replays commits for a linear history (don't rebase shared branches)","They are identical","Rebase deletes commits forever","Merge only works locally"],0,"Rebasing rewrites commits, so avoid it on shared work."]]
};
