import CoffeeStore from "@/pages/coffee-store/[id]";
import Airtable from "airtable";
const  base = new Airtable({apiKey: process.env.airtable_api_key}).base(process.env.airtable_base_id);



const table = base('coffee-stores');

console.log(table)


const createCoffeeStore = (req, res ) =>{

   if(req.method === 'POST'){
    res.json({
        message :"post xa  hai"
    })
   }
   else{
    res.json({
        message :"Others"
    })
   }
}

export default createCoffeeStore