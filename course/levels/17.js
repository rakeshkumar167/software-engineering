window.LEVELS={
easy:[
["OAuth 2 is mainly for:",["Delegated access without sharing your password","Storing passwords","Encrypting disks","DNS"],0,"'Sign in with Google' style flows."],
["A JWT is:",["A signed token carrying claims","A password","A cookie type","A database"],0,"Header.payload.signature."],
["MFA means:",["Using more than one kind of proof to log in","More passwords of the same kind","Multiple files","Fast login"],0,"Something you know + have + are."]],
medium:[
["Passwords should be stored as:",["Salted, slow hashes (bcrypt/argon2)","Plain text","Encrypted with one key","MD5"],0,"Hashes can't be reversed; slow ones resist brute force."],
["What does a salt do?",["Makes identical passwords hash differently","Encrypts the hash","Shortens it","Adds a second factor"],0,"Defeats precomputed rainbow tables."],
["OIDC adds to OAuth:",["An identity layer (who the user is)","A faster network","Cookies","Encryption of disks"],0,"OAuth = authorization; OIDC = authentication on top."]],
hard:[
["JWT payloads are base64, not encrypted. So you must not:",["Put secrets in them","Sign them","Use HTTPS","Set expiry"],0,"Anyone can read the payload; only the signature prevents tampering."],
["Why use short-lived access tokens with refresh tokens?",["Limits damage from a stolen access token while keeping users logged in","Faster login","Required by JSON","Smaller tokens"],0,"Refresh tokens can be revoked and stored more safely."],
["Why do SPAs/mobile apps use the Authorization Code flow with PKCE?",["It stops intercepted codes from being redeemed by an attacker","It avoids HTTPS","It removes tokens","It's faster"],0,"PKCE binds the code to the client that started the flow."]]
};
