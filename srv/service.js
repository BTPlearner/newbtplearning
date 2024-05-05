const cds = require('@sap/cds');
module.exports = cds.service.impl(async function(srv){
    srv.on('printhelloworld',req=>{
        console.log(req.data.input)
        return '$(req.data.input) world'
    }
    )
    srv.on('addition', req=>{
        console.log(req.data)
        let result
        result = req.data.num1 + req.data.num2
        return result
    }
    
    )
    srv.on('myfunction', req=>{
        let result = {};
        if (req.data.category==1){
           result.product = 'Audi';
           result.price = '2 CR INR' 
        }
        else{
            result.product = 'BMW';
            result.priceArrey = [
                {
                  "price":1000,
                  "discount":10  
                }
            ]
        }
        console.log(result)
        return result
    }

    )

}



)