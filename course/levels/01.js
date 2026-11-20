window.LEVELS={
easy:[
["A program stored on disk that is not running is called:",["A process","A program","A thread","A daemon"],1,"A process is a running instance of a program."],
["Which resource does the OS give each process its own private view of?",["Memory address space","The keyboard","The monitor only","The router"],0,"Each process sees its own virtual memory."],
["What uniquely identifies a running process?",["Its PID","Its file name","Its IP","Its port"],0,"The Process ID (PID)."]],
medium:[
["You open the same editor twice. How many processes exist?",["One shared","Two, one per instance","Zero","Depends on the file"],1,"Each launch is a separate process with its own memory."],
["Which state means a process is ready but waiting for CPU time?",["Running","Ready","Zombie","Terminated"],1,"The scheduler picks Ready processes to run."],
["Why can't one process normally read another's memory?",["It's slow","The OS enforces isolation","Memory is encrypted","Only threads can"],1,"Virtual memory isolation protects processes from each other."]],
hard:[
["A process leaks memory slowly in production. Which symptom appears first and most reliably?",["Rising memory use over time, eventually the OS kills it (OOM)","The PID changes","CPU drops to 0","The file disappears"],0,"Leaks grow resident memory until limits or the OOM killer trigger."],
["A parent exits while its child still runs. What typically happens?",["Child is adopted by init/systemd and keeps running","Child is instantly killed always","Child becomes a thread","Child gets the parent's PID"],0,"Orphans are re-parented to PID 1."],
["Why is creating a process heavier than creating a thread?",["Processes need their own address space and resources","Threads use more RAM","Processes can't run in parallel","Threads need a new PID each"],0,"Threads share the parent's address space, so they're cheaper."]]
};
