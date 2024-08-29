// const getUsers = async () => {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const option = {
//     method: "GET",
//   };
//   try {
//     req = await fetch(url, option);
//     const response = await req.json();
//     printUsers(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const printUsers = (userList) => {
//   userList.forEach((user) => {
//     const userNameTag = createUser(user);
//     console.log(" userNameTag : ", userNameTag);
//     document.getElementById("userList").appendChild(userNameTag);
//   });
// };

// const createUser = (user) => {
//   const pTag = document.createElement("p");
//   pTag.innerText = `user name : ${user.name}`;
//   return pTag;
// };


const handleForm=(e)=>{
e.preventDefault()
const form = document.getElementById("form-login");
  const formData = new FormData(form);
const data = {}
  formData.entries().forEach((element) => {
data[element[0]] = element[1]
  });
  createPost(data)
  
}


const createPost=async (data)=>{
  const url = "https://jsonplaceholder.typicode.com/posts";
  const option = {
    method: "POST",
    body:JSON.stringify(data)
  };
  const req = await fetch(url, option);
  console.log(req);
  
}