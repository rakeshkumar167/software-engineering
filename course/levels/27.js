window.LEVELS={
easy:[
["DRY stands for:",["Don't Repeat Yourself","Do Run Yearly","Data Rarely Yields","Debug Right Yesterday"],0,"Avoid duplicated logic."],
["Good names should:",["Say what the thing is or does","Be as short as possible","Be random","Use only one letter"],0,"Readable code is maintainable."],
["A function should ideally:",["Do one thing well","Do everything","Be 1000 lines","Have no name"],0,"Single responsibility."]],
medium:[
["Coupling means:",["How much one part depends on others (aim low)","How well tests run","Network speed","File size"],0,"Loose coupling eases change."],
["Cohesion means:",["How related the things inside a module are (aim high)","Dependencies","Speed","Memory"],0,"Keep related code together."],
["Why prefer composition over inheritance often?",["It's more flexible and avoids deep, rigid hierarchies","Inheritance is illegal","It's faster","Fewer files"],0,"Has-a over is-a."]],
hard:[
["Open/closed principle:",["Extend behaviour without modifying existing code","Open files, close files","Open source only","Closed networks"],0,"E.g. add a new payment type via a new class."],
["Premature abstraction is harmful because:",["It adds complexity for needs that may never come","Abstractions are slow","Code gets shorter","Tests pass"],0,"Wait for the pattern to appear (rule of three)."],
["Dependency injection helps by:",["Passing dependencies in so they can be swapped (e.g. a fake in tests)","Installing packages","Making code global","Hiding errors"],0,"Decouples creation from use."]]
};
