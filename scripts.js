// Initialize an empty array to store user data
let users = [];

//Get a reference to the user list element
const userList = document.getElementById('userList');

//Fetch the user data from the API with fetch()
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>{
        //Store the fetched data in the users array
        users=data;
        //function to display the user data
        renderUsers(users);
        })

//Define a function to display the user data
function renderUsers(list){
    //convert the array into HTMLL <li> elements using map()

    userList.innerHTML=list.map(user =>`
        <li>
            <strong>${user.name}</strong><br>
            <small>${user.email}</small>
        </li>
    `).join('');
}

//Filter functionality
document.getElementById('')

//add a click evenet listener to filter button
//this runs when the filter button is clicked
document.getElementById("filterBtn").addEventListener('click',()=>{
const keyword=document.getElementById('filterInput').value.toLowerCase();

//use .filter() to create a new array with users whose names include the keyword

const filtered=users.filter(u=>u.name.toLowerCase().includes(keyword));

renderUsers(filtered)
})

//sort functionality (A-Z)
//when clicked we want to display the user in ascending order (alpha)
//use addEventListner() to add function to sortAsc button
document.getElementById("sortAsc").addEventListener("click", () =>{
    //we use spread operator to creat a shallow copy  of the user array
    //This will ensure that the original users array is not modified
    //we use .sort() to sort the users array in alphabetical ordr
    //localeCompare() handles the sorting base on the suers names in case sensitive
    const sorted = [...users].sort((a,b) => a.name.localeCompare(b.name));
    
    renderUsers(sorted);
})

//sort fucntion (Z-A)
//when clicked we want to display the user in descending alpha order
document.getElementById("sortDesc").addEventListener("click", () =>{
    //use the spread operator to create a shallow copy of the users array
    //then use .sort() with localeCompare()
    const sorted = [...users].sort((a,b)=>b.name.localeCompare(a.name));
    renderUsers(sorted);
})