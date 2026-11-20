window.LEVELS={
easy:[
["JSON is:",["A text format for structured data","A programming language","An image format","A database"],0,"Keys and values, lists and objects."],
["Which format separates values with commas, row by row?",["CSV","JSON","YAML","XML"],0,"Good for spreadsheets."],
["Which encoding handles almost every language's characters?",["UTF-8","ASCII","Morse","Base10"],0,"UTF-8 is the web's default."]],
medium:[
["ASCII can represent:",["Basic English characters only","Every language","Images","Emoji"],0,"7 bits, 128 characters."],
["Why is 'é' sometimes shown as 'Ã©'?",["Text decoded with the wrong encoding","Disk damage","Font missing only","A virus"],0,"UTF-8 bytes read as Latin-1."],
["Which is valid JSON?",['{"name": "Ana"}',"{name: 'Ana'}","{'name': 'Ana'}","name=Ana"],0,"JSON requires double-quoted keys and strings."]],
hard:[
["Why is a CSV field like 'Smith, John' tricky?",["The comma inside needs quoting or it splits into two columns","CSV forbids names","It's too long","Spaces break CSV"],0,"Use a real CSV parser, not split(',')."],
["Why is JSON a poor choice for configuration with comments?",["JSON has no comment syntax (YAML/TOML do)","JSON is binary","JSON is slow","Comments are illegal everywhere"],0,"Config formats often choose YAML or TOML."],
["A binary file vs a text file?",["Binary holds arbitrary bytes, so opening it as text produces garbage","Text files are smaller always","Binary can't be read","There's no difference"],0,"Text is bytes interpreted via an encoding."]]
};
