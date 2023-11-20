



const getAllUsers = async() =>{


    const options = {
        method: "GET",
        headers: {
          Accept: "application/json", // Fix the typo here
          // Authorization 
        },
      };
    
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" , options);
    
      
    return await data.json()



}

export default getAllUsers