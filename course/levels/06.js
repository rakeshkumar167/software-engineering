window.LEVELS={
easy:[
["Which command lists files in a directory?",["ls","cd","rm","cat"],0,"ls lists; cd changes directory."],
["What does pwd print?",["The current working directory","Your password","The process list","The PATH"],0,"Print working directory."],
["Which command shows the contents of a text file?",["cat","mkdir","touch","chmod"],0,"cat prints a file to the terminal."]],
medium:[
["What does ls | grep log do?",["Pipes the file list into grep, showing only names containing 'log'","Deletes log files","Sorts files","Writes to a file named log"],0,"A pipe sends one command's output to another's input."],
["What does > do in: echo hi > a.txt ?",["Redirects output into a.txt, overwriting it","Appends to a.txt","Reads a.txt","Compares files"],0,">> appends."],
["chmod +x script.sh does what?",["Makes the file executable","Deletes it","Hides it","Compresses it"],0,"Permissions control who can read, write, execute."]],
hard:[
["You type 'mytool' and get 'command not found', but ./mytool works. Why?",["Its directory isn't in PATH","The file is corrupt","The shell is broken","It's a directory"],0,"The shell searches only directories listed in $PATH."],
["Why is rm -rf $DIR/ dangerous in a script?",["If DIR is empty it becomes rm -rf /","It's slow","It asks questions","It only removes hidden files"],0,"Always quote and validate variables; use set -u."],
["Command A && B vs A ; B?",["&& runs B only if A succeeded; ; runs B regardless","They are identical","&& runs both in parallel","; stops on error"],0,"Exit codes drive control flow in shell."]]
};
