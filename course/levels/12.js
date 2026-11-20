window.LEVELS={
easy:[
["HTML is used for:",["The structure and content of a page","Styling only","Server logic","Databases"],0,"CSS styles, JavaScript adds behaviour."],
["CSS is used for:",["Styling and layout","Storing data","Networking","Compiling"],0,"Colours, spacing, fonts."],
["The DOM is:",["The browser's tree of page elements that JavaScript can change","A database","A server","A CSS file"],0,"Document Object Model."]],
medium:[
["Which selects the element with id 'menu'?",["document.getElementById('menu')","document.menu()","find('menu')","get(menu)"],0,"Or querySelector('#menu')."],
["Why separate HTML, CSS and JS?",["Each has one job, making pages easier to maintain","Browsers require it","It is faster always","Only for large sites"],0,"Separation of concerns."],
["What does the box model describe?",["Content, padding, border and margin around an element","A 3D layout","Cookies","Network packets"],0,"Sizing and spacing of every element."]],
hard:[
["Why prefer textContent over innerHTML when inserting user text?",["innerHTML can run attacker HTML/scripts (XSS)","textContent is slower","innerHTML is deprecated","No difference"],0,"Never inject untrusted strings as HTML."],
["A script in <head> can't find an element in <body>. Why?",["The DOM isn't built yet; use defer or run after load","Scripts must be in body only","IDs are case-insensitive","CSS is blocking"],0,"Use <script defer> or DOMContentLoaded."],
["Event delegation means:",["One listener on a parent handles events from many children","Adding listeners to every child","Removing events","Delaying events"],0,"Events bubble up, so the parent can catch them; it also handles items added later."]]
};
