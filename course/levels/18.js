window.LEVELS={
easy:[
["Which SQL statement reads data?",["SELECT","INSERT","DELETE","CREATE"],0,"SELECT queries rows."],
["A primary key:",["Uniquely identifies each row","Encrypts the table","Sorts data","Is a password"],0,"No duplicates, never null."],
["A table consists of:",["Rows and columns","Folders","Packets","Threads"],0,"Rows are records; columns are fields."]],
medium:[
["A foreign key links:",["A row in one table to a row in another","Two databases to a network","Users to passwords","Files to folders"],0,"It models relationships."],
["What does an index do?",["Speeds up lookups at the cost of extra storage and slower writes","Deletes duplicates","Encrypts","Backs up"],0,"Like a book's index."],
["Why use a transaction?",["Group steps so they all succeed or all roll back","Speed","Encrypt","Compress"],0,"ACID guarantees, e.g. a bank transfer."]],
hard:[
["Building SQL as 'SELECT * FROM u WHERE name=' + input risks:",["SQL injection; use parameterised queries","Slow queries only","Type errors","Nothing"],0,"Never concatenate user input into SQL."],
["The N+1 query problem is:",["One query for a list plus one per item","Needing N servers","Index duplication","A join type"],0,"Fix with a JOIN or batching/eager loading."],
["Why might a query ignore an index on a column?",["A function on the column (e.g. WHERE LOWER(name)=...) or a low-selectivity filter","Indexes expire","Tables are small only","SQL forbids it"],0,"Check with EXPLAIN."]]
};
