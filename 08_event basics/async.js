/* javascript 

JAVASCRIPT
>> synchronous
>> single thread

EXECUTION CONTEXT
>> execute one line of code at a time
>> console.log->1
>> console.log->2
>> call stack 
>> memory heap 
each option with for the last one to complete before executing


BLOCKING CODE      VS     NONBLOCKING CODE
-------------------------------------------
     |                                |
block the flow of pgm      does not block execution
    |                                 |
read file sync              read file async

js engine  -> memory heap , call stack <--------------------------------------------
    | call                                                                         |
    webapi(in brower,node) -> dom api,  settimeout,set interval, fetch()           | 
    |                                                                              |
    task queue  (no of callbacks in queue)                                         |
     |-----------------------------------------------------------------------------



*/