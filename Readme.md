# Node Js Task 1 [Demo-Link](https://node-day-1-task-p2w6.onrender.com/)

# Endpoints

## Write Endpoint
`https://node-day-1-task-p2w6.onrender.com/write`

[Demo-Link-write](https://node-day-1-task-p2w6.onrender.com/write)

## Description: Writes the current date and time to a file.
### Response:
+ ***Status :*** 200 OK
+ ***Content :*** Confirmation message with the current date and time.

## Read Endpoint
`https://node-day-1-task-p2w6.onrender.com/read`

[Demo-Link-read](https://node-day-1-task-p2w6.onrender.com/read)

## Description: Reads the content of the file written by the /write endpoint.
### Response:
+ ***Status :*** 200 OK
+ ***Content :*** Data read from the file.


# Dependencies

+ ***Express.js :*** Web server framework for handling HTTP requests
+ ***fs :*** ```Node.js``` file system module
+ ***date-fns :*** Library for date and time formatting