/**
* 
* FactService.js
*
* This file setup a class to link the back-end to the front-end 
*
*
* [created] : 11/02/2019
* [author]: ETF
*/
//Use axios to call the api in the back-end 
import axios from 'axios';
// set the back-en url 
const url = '/api/fact'

class FactService {

    //gets the facts from the database
    static getFacts(){
        // we use a promise to asure the data comes from the database 
        return new Promise(async(resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post=>({
                        ...post
                    }))
                )
            }catch(err){
                reject(err)
            }
        });
    }
    //gets fact from the external api 
    static getFact(){
        return axios.post(url);  
    }
    //delete fact from database base on the id of the element selected 
    static deleteFact(id){
        return axios.delete(`${url}/${id}`);
    }
}
// Export the class
export default FactService;
