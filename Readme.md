# Node Js Task 1 [Demo-Link](https://node-day-1-task-p2w6.onrender.com/)

# Endpoints

## File List  Endpoint

`https://node-day-1-task-p2w6.onrender.com/filesList`

[Demo-Link-FileList](https://node-day-1-task-p2w6.onrender.com/filesList)

## Description:Getting Files List.
### Response:
+ ***Content :*** 
[
    "05-03-2024 18-01-31.txt",
    "05-03-2024 18-01-57.txt",
    "05-03-2024 18-02-11.txt",
    "05-03-2024 18-05-53.txt",
    "05-03-2024 18-15-47.txt",
    "05-03-2024 18-17-21.txt",
    "05-03-2024 18-38-11.txt",
    "05-03-2024 18-41-39.txt",
    "05-03-2024-18-00-34.txt"
]

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

# Render.Com Output
***Endpoint***
https://node-day-1-task-p2w6.onrender.com/<br>
![1](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/09214008-c137-4ba6-8523-6c884c30d00e)


***Endpoint***
https://node-day-1-task-p2w6.onrender.com/write<br>
![write](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/b0fb254d-27d4-468c-9a17-9abe8a524359)


***Endpoint***
https://node-day-1-task-p2w6.onrender.com/read<br>
![read](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/38de5af3-75fe-43b4-b44d-c0a38e607d22)


***Endpoint***
https://node-day-1-task-p2w6.onrender.com/filesList<br>
![filelist](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/9417e584-f2f9-4a2d-808e-4dea1713b37e)



# POSTMAN OUTPUT SCREENSHOT
***Endpoint***
http://localhost:4000/filesList<br>
![Screenshot 2024-03-05 185509](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/51df5038-833a-4f14-818f-0dca638d71a0)

***Endpoint***
http://localhost:4000/<br>
![Screenshot 2024-03-05 013614](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/2d2189c7-5ce9-43c8-99e3-07304fbe4aa7)

***Endpoint***
http://localhost:4000/write<br>
![2](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/e3ae51b5-c876-4a74-a934-57654c1f2145)

***Endpoint***
http://localhost:4000/read<br>
![3](https://github.com/GandhiRam2202/Node-Day-1-Task/assets/152801640/84d0e5f0-e135-4fed-b12f-a6a1fffb6248)
