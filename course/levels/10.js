window.LEVELS={
easy:[
["A bug is:",["A mistake that makes software behave wrongly","A feature","A virus only","A server"],0,"Debugging is finding and fixing them."],
["A stack trace shows:",["The chain of calls leading to an error","A list of users","File sizes","Network speed"],0,"Read it from the bottom/top (language-dependent) for the failing line."],
["The first step when you hit a bug is usually to:",["Reproduce it reliably","Rewrite everything","Ignore it","Blame a teammate"],0,"If you can't reproduce it, you can't confirm a fix."]],
medium:[
["Why is print/logging debugging useful?",["It shows actual values at points in execution","It fixes bugs","It speeds code","It is required"],0,"Check assumptions with evidence."],
["What is bisecting?",["Halving the search space (code/commits) to locate the cause","Splitting a file","Merging branches","Deleting tests"],0,"git bisect finds the commit that introduced a bug."],
["Rubber duck debugging works because:",["Explaining the problem aloud exposes wrong assumptions","The duck knows","It's faster to type","Ducks run code"],0,"Articulating forces you to check each step."]],
hard:[
["The bug only happens in production. Best first move?",["Gather logs/metrics and try to reproduce with the same data and config","Edit the production code live","Restart and hope","Disable logging"],0,"Observe before changing."],
["Fix applied, bug seems gone, but you never understood the cause. Risk?",["It may be hidden, not fixed, and return","None","It's definitely fixed","Tests will fail"],0,"Add a regression test and find the root cause."],
["A test fails 1 time in 20. Most likely cause?",["A race condition, timing or shared state (flaky)","Cosmic rays","Bad Wi-Fi only","Python version"],0,"Nondeterminism needs isolation of timing and shared state."]]
};
