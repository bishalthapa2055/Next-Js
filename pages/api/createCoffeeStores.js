import CoffeeStore from "@/pages/coffee-store/[id]";
import Airtable from "airtable";
const  base = new Airtable({apiKey: process.env.airtable_api_key}).base(process.env.airtable_base_id);



const table = base('coffee-stores');

console.log(table)


const createCoffeeStore =  async(req, res ) =>{

    const {id , name ,address , neighboourhood , votes , imageUrl} = req.body ;

   if(req.method === 'POST'){
    
    const findcoffeeStore = await table.select({
        filterByFormula :` id= ${id} ` 
    }).firstPage()

    console.log(findcoffeeStore)

    
    if(findcoffeeStore.length !== 0){
        res.json({
            status : false ,
            data : findcoffeeStore.map((item) => item.fields)
        })
    }
    // crete the records 

   const createTablle = await table.create([
        {
            fields :{
                id :id ,
                name :name,
                address : address,
                neighboourhood :neighboourhood,
                votes :votes,
                imageUrl  : imageUrl,
            }
        }
    ])

    console.log(createTablle)
    res.json({
        status : true ,
        message : "Recored created sucessfully ",
        data : createTablle.map((item) =>item.fields)
    })
   }
   else{
    res.json({
        message :"Others Request"
    })
   }
}

export default createCoffeeStore