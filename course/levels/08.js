window.LEVELS={
easy:[
["A variable is:",["A named place that holds a value","A kind of loop","A file","A network"],0,"You can read and change it."],
["Which keyword repeats code while a condition is true?",["while","if","def","return"],0,"Loops repeat; if branches."],
["A function lets you:",["Reuse named, parameterised code","Delete variables","Open files only","Avoid errors"],0,"Write once, call many times."]],
medium:[
["What does this print? x = 5; x = x + 2; print(x)",["7","5","2","x"],0,"Assignment replaces the old value."],
["Why use a list over many separate variables?",["Hold a collection you can loop over","Lists are faster at everything","Variables aren't allowed","It uses no memory"],0,"Collections scale to any size."],
["What is the value of 7 // 2 in Python?",["3","3.5","4","2"],0,"// is integer (floor) division."]],
hard:[
["def add(x, items=[]): items.append(x); return items  - why is this a bug?",["The default list is shared across calls","append is invalid","return is missing","items is a keyword"],0,"Mutable defaults are created once; use None and create inside."],
["Pass-by-value vs reference: you pass a list to a function that appends to it. The caller's list:",["Also changes (same object)","Is unchanged","Is deleted","Becomes a tuple"],0,"Lists are mutable objects shared by reference."],
["Why is 0.1 + 0.2 == 0.3 False in most languages?",["Binary floating point can't represent 0.1 exactly","Python bug","Strings are involved","Rounding is disabled"],0,"Compare with a tolerance, or use Decimal for money."]]
};
