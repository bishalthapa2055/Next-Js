import CoffeeStore from "@/pages/coffee-store/[id]";
import Airtable from "airtable";
const  base = new Airtable({apiKey: process.env.airtable_api_key}).base(process.env.airtable_base_id);



const table = base('coffee-stores');

console.log(table)


const createCoffeeStore =  async(req, res ) =>{

   if(req.method === 'POST'){
    
    const findcoffeeStore = await table.select({
        filterByFormula :` id= "0" ` 
    }).firstPage()

    console.log(findcoffeeStore)

    if(findcoffeeStore){
        res.json({
            status : false ,
            message : "Record alreaduy exists" ,
            data : findcoffeeStore.map((item) => item.fields)
        })
    }
    if(findcoffeeStore.length === 0){
        res.json({
            status : false ,
            data : findcoffeeStore.map((item) => item.fields)
        })
    }
    res.json({
        message :"create a record",
    })
   }
   else{
    res.json({
        message :"Others Request"
    })
   }
}

export default createCoffeeStore