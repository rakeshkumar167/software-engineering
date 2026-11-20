window.LEVELS={
easy:[
["A compiler translates source code into:",["Machine code (or bytecode) before running","Text again","HTML","Nothing"],0,"Compiling happens ahead of execution."],
["Which language is typically interpreted?",["Python","C","Rust","Go"],0,"Python runs through an interpreter (to bytecode, then a VM)."],
["An interpreter executes code:",["Line by line / statement by statement at run time","Only after linking","Never","Only on servers"],0,"It reads and runs the program as it goes."]],
medium:[
["Why are compiled programs usually faster at startup and run time?",["Translation was already done and optimised","They have fewer bugs","They use less disk","They skip the OS"],0,"Optimisation happens once, ahead of time."],
["Java source is compiled to bytecode, then run by the JVM. Java is therefore:",["Both compiled and interpreted/JIT-run","Purely interpreted","Purely native","A markup language"],0,"Two-stage: javac then the JVM."],
["Which advantage do interpreters give beginners?",["Immediate feedback in a REPL","Smaller binaries","No syntax","No errors"],0,"You can try code instantly."]],
hard:[
["What does a JIT compiler do?",["Compiles hot code to machine code while the program runs","Compiles before shipping","Interprets only","Removes type checks forever"],0,"It observes execution and optimises hot paths at run time."],
["A compiled Go binary built on macOS won't run on Linux. Why?",["Machine code and system calls target a specific OS/CPU","Go is interpreted","Binaries expire","Linux lacks files"],0,"Cross-compile with GOOS/GOARCH to target another platform."],
["You ship a compiled C++ program to a customer. Which statement is true?",["They can run it without your compiler or source","They need your compiler installed","They need an interpreter for C++","It only runs in your office"],0,"A compiled binary is self-contained for its target platform; interpreted programs need the interpreter installed."]]
};
