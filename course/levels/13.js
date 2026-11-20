window.LEVELS={
easy:[
["An API lets:",["Programs talk to each other","Users edit CSS","Disks spin","Wi-Fi connect"],0,"It's a contract between software."],
["Which method deletes a resource in REST?",["DELETE","GET","POST","HEAD"],0,"Methods map to actions."],
["Data in REST APIs is commonly sent as:",["JSON","Binary executables","PDF","Emoji only"],0,"Readable and language-neutral."]],
medium:[
["Which URL follows REST naming best?",["GET /users/42","GET /getUser?id=42","POST /deleteUser/42","GET /doUserThing"],0,"Nouns for resources, HTTP methods for actions."],
["Creating a new item successfully should return:",["201 Created","404","500","204 only"],0,"201 and often a Location header."],
["PUT vs PATCH?",["PUT replaces the whole resource; PATCH changes part of it","They are identical","PATCH deletes","PUT is read-only"],0,"Both update, with different scope."]],
hard:[
["Why should an idempotent operation matter to clients?",["Retrying after a timeout won't cause duplicates","It's faster","It encrypts data","It skips auth"],0,"PUT and DELETE are idempotent; POST usually isn't (use idempotency keys)."],
["A list endpoint returns 1,000,000 records at once. Fix?",["Pagination (limit/offset or cursor)","Bigger servers only","Return XML","Cache forever"],0,"Always bound response sizes."],
["Why version an API (/v1/...)?",["Change it without breaking existing clients","Looks professional","Required by HTTP","Faster routing"],0,"Breaking changes go in a new version."]]
};
