// /*Pagination

// Implement a pagination system that divides a list into pages of fixed size.

// Statistics on a List

// Write a program to calculate the mean, median, and mode of a list of numbers*/


// Measure	|             Description                               |	Use Case
// Mean =      Average of all numbers	                             Best for evenly distributed data
// Median =   	Middle value in a sorted list	                     Best for skewed data or outliers
// Mode =       Most frequently occurring number(s)	                 Best for categorical or discrete data


// 2 = A check-in list for team members


/*here are some tips for making an effective to-do list:
Prioritize: Organize tasks by urgency or priority. 
Include deadlines: Always include a deadline for each task. 
Break down big tasks: Break large tasks into smaller ones. 
Categorize: Group tasks by project or goal, or categorize them as "Urgent," "Important," or "Upcoming". 
Make it actionable: Use verbs first, and details later. 
Set aside time to review: Set aside time to review your to-do list. 
Make it fun: Try writing each task on a piece of paper and putting them in a container. At the start of your day, draw a note at random and complete that task */

// 1 = Tasks for an upcoming event

let TodoList = [];
    
let TaskOne = {
    "Id" : 1 ,
    "Name" : prompt("enter your name"),
    "Description" : prompt("please enter something about yourself"),
    "Refrence" : prompt("please tell why did you come to this event")    
}
TodoList.push(TaskOne);
console.log("todo List :" , TaskOne);


let TaskTwo = {
     "Id" : 2,
    "For what topic you come " : prompt("please tell us for what topic did you come "),
    "What do you know about prompt" : prompt("please tell us what do you know about your topic")
}
TodoList.push(TaskTwo);
console.log("TodoList :" , TaskTwo);
let TaskThree = {
    "Id" : 3 ,
    "food items" : prompt("please tell us what do you like to eat : menu : biryani , club sandwich , chikken tikka")
}

TodoList.push(TaskThree);
console.log("Todo List :" , TaskThree);

// now I have to do array methods mean remove and display
//splice() it is for remove;
