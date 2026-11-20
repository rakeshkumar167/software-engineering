window.LEVELS={
easy:[
["The OS kernel:",["Manages hardware, memory, processes and files","Browses the web","Compiles code","Draws icons"],0,"It's the core of the OS."],
["RAM is:",["Fast, temporary working memory","Permanent storage","A network","A CPU"],0,"Lost on power off."],
["A file system organises:",["Files and folders on storage","CPU registers","Network routes","DNS"],0,"Names, paths, permissions."]],
medium:[
["Virtual memory lets the OS:",["Give each process a private address space and use disk as overflow","Run without RAM","Skip the CPU","Encrypt files"],0,"Mapped to physical memory by the OS."],
["A system call is:",["A program asking the kernel to do something privileged (open file, send data)","A phone call","A shell alias","A syntax error"],0,"The user-to-kernel boundary."],
["Which scheduler goal is typical?",["Share CPU time fairly among processes","Keep one process always running","Delete idle processes","Maximise disk use"],0,"Time slices give illusion of parallelism."]],
hard:[
["A machine has free disk but 'out of memory'. What may the OS do?",["Swap to disk (slow, 'thrashing') or kill a process (OOM killer)","Buy RAM","Ignore it","Shut down always"],0,"Heavy swapping makes systems crawl."],
["Why does opening a file fail with 'too many open files'?",["Per-process file descriptor limit reached, often from leaks","Disk full only","Wrong encoding","Firewall"],0,"Always close files (use 'with')."],
["User mode vs kernel mode exists to:",["Prevent programs from directly damaging hardware or each other","Speed up apps","Save energy","Allow root"],0,"Privilege separation."]]
};
