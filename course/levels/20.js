window.LEVELS={
easy:[
["A unit test checks:",["One small piece of code in isolation","The whole system","The network","The UI colours"],0,"Fast and focused."],
["Why write tests?",["Catch regressions and give confidence to change code","Slow development always","Impress managers","Replace requirements"],0,"They are a safety net."],
["A failing test tells you:",["Behaviour differs from what's expected","The computer is broken","The test runner is old","Nothing"],0,"Investigate: code or test wrong?"]],
medium:[
["TDD follows:",["Red (failing test), Green (make it pass), Refactor","Code, ship, test","Plan, plan, plan","Test after release"],0,"Write the test first."],
["What is a mock?",["A fake dependency used to isolate the code under test","A real server","A bug","A deployment"],0,"E.g. a fake payment API."],
["The testing pyramid suggests:",["Many unit tests, fewer integration, fewest end-to-end","Only e2e tests","Only manual tests","Equal amounts of all"],0,"Lower layers are faster and more stable."]],
hard:[
["Why are flaky tests harmful?",["People stop trusting failures and ignore real bugs","They are faster","They improve coverage","They are harmless"],0,"Fix or quarantine them."],
["100% code coverage means:",["Every line ran, not that behaviour is correctly checked","No bugs","Perfect quality","All edge cases tested"],0,"Coverage measures execution, not assertion quality."],
["Tests that mock everything often:",["Pass while the real integration is broken","Catch more bugs","Run slower","Need no assertions"],0,"Balance with integration tests."]]
};
