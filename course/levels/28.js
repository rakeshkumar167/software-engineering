window.LEVELS={
easy:[
["Never trust:",["User input","Your own constants","Compiled code","Comments"],0,"Validate and sanitise."],
["HTTPS protects:",["Data in transit from eavesdropping and tampering","Data at rest","Passwords stored","Source code"],0,"Encryption plus server identity."],
["Dependencies should be:",["Kept updated and audited for vulnerabilities","Never updated","Copied by hand","Ignored"],0,"Supply-chain security."]],
medium:[
["SQL injection is prevented by:",["Parameterised queries","Longer passwords","Hiding the table name","Disabling logs"],0,"Data never becomes code."],
["Principle of least privilege:",["Grant only the permissions needed","Give admin to all","Share one account","Remove logins"],0,"Limits damage."],
["Why escape output in HTML?",["Stop injected scripts running (XSS)","Make it faster","Save bytes","Fix CSS"],0,"Context-aware encoding."]],
hard:[
["IDOR means:",["Changing an ID in a request exposes another user's data because ownership isn't checked","A kind of firewall","A hash","A token"],0,"Always authorize per object."],
["Why shouldn't error pages show stack traces to users?",["They leak internals useful to attackers","They're ugly only","They're slow","Required by HTTP"],0,"Log details server-side, show generic message."],
["A dependency has a known CVE. Best response?",["Assess exposure, patch/upgrade, and add automated scanning","Ignore","Delete the repo","Pin it forever"],0,"Dependabot/audit tools help."]]
};
