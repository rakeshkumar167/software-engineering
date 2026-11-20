window.LEVELS={
easy:[
["Which structure maps keys to values?",["Dictionary / hash map","Stack","Queue","Array only"],0,"Look up a value by key."],
["A stack is:",["Last in, first out","First in, first out","Sorted","Random"],0,"Like a pile of plates."],
["Which is a queue's order?",["First in, first out","Last in, first out","Alphabetical","Random"],0,"Like a line at a shop."]],
medium:[
["Looking up an item in a hash map is typically:",["O(1) on average","O(n)","O(n²)","O(log n) always"],0,"Hashing jumps to the bucket."],
["Binary search requires the data to be:",["Sorted","Unique","Numbers only","In a hash map"],0,"It halves the range each step: O(log n)."],
["Which is faster for 1,000,000 items?",["O(log n)","O(n)","O(n²)","They are equal"],0,"log₂(1,000,000) is about 20 steps."]],
hard:[
["Checking 'x in list' inside a loop over n items is:",["O(n²) overall; use a set for O(n)","O(n)","O(1)","O(log n)"],0,"Each membership test scans the list."],
["Why can a hash map degrade to O(n) lookups?",["Many keys collide into the same bucket","Memory runs out","Keys are strings","Sorting is required"],0,"Good hash functions and resizing prevent it."],
["Best structure for 'process the oldest task first, add new ones at the end'?",["Queue (deque)","Stack","Binary tree","Set"],0,"FIFO order."]]
};
