window.LEVELS={
easy:[
["Concurrency means:",["Dealing with multiple tasks at once (overlapping)","Using only one CPU","Compiling","Sorting"],0,"Tasks make progress in overlapping time."],
["A thread is:",["A unit of execution inside a process","A kind of file","A network port","A database"],0,"Threads share the process's memory."],
["Async code is helpful when:",["Waiting on I/O like network or disk","Doing heavy math only","Printing","Sorting a tiny list"],0,"Don't sit idle while waiting."]],
medium:[
["A race condition happens when:",["Outcome depends on unpredictable timing of shared access","Two files have the same name","A server is slow","Code is compiled twice"],0,"E.g. two threads incrementing a counter."],
["A lock (mutex) is used to:",["Let only one thread use a shared resource at a time","Encrypt data","Speed up loops","Close ports"],0,"Protects critical sections."],
["Concurrency vs parallelism?",["Parallelism runs at the same instant on multiple cores; concurrency is structuring overlapping tasks","Identical","Concurrency needs GPUs","Parallelism is single-core"],0,"Concurrency can happen on one core."]],
hard:[
["Deadlock occurs when:",["Tasks wait for each other's locks forever","A thread finishes","A server restarts","Memory frees"],0,"Avoid by consistent lock ordering or timeouts."],
["In Python's asyncio, a blocking time.sleep(5) inside a coroutine:",["Freezes the whole event loop; use await asyncio.sleep","Is fine","Runs in parallel","Raises error always"],0,"Never block the event loop."],
["CPU-bound work in Python benefits most from:",["Multiple processes (GIL limits threads)","More async","More sleeps","Bigger lists"],0,"Use multiprocessing or native libraries."]]
};
