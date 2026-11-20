window.LEVELS={
easy:[
["CI stands for:",["Continuous Integration","Code Inspection","Cloud Interface","Computer Instruction"],0,"Merge often and test automatically."],
["CD can mean:",["Continuous Delivery/Deployment","Compact Disc","Code Debug","Container Disk"],0,"Automated release."],
["A pipeline is:",["Automated steps like build, test, deploy","A network cable","A database","A branch"],0,"Runs on every change."]],
medium:[
["Why run tests in CI?",["Every change is checked the same way, not just on one laptop","Because laptops can't","It's cheaper only","To avoid code review"],0,"Catches breakage early."],
["Delivery vs deployment?",["Delivery: ready to release at a click; Deployment: releases automatically","Identical","Delivery is manual coding","Deployment has no tests"],0,"Difference is the final approval step."],
["An artifact in CI is:",["A built output (binary, image) that moves through stages","A bug","A branch","A log level"],0,"Build once, deploy the same artifact."]],
hard:[
["Why build once and promote the same artifact across environments?",["What you tested is exactly what ships","It saves disk","Rebuilding is illegal","Faster DNS"],0,"Rebuilding may produce differences."],
["Blue/green deployment:",["Run new version beside old and switch traffic, enabling instant rollback","Colour-codes logs","Deploy at night","Skips tests"],0,"Canary releases shift traffic gradually."],
["A pipeline uses a secret in a log message. Risk?",["Anyone with log access can read it; mask secrets","None","Faster builds","It's encrypted"],0,"Use the CI secret store with masking."]]
};
