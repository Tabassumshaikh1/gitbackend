const mongoose = require('mongoose');

const UserRole = mongoose.model(
     "userRole",
    new mongoose.Schema({
        name: {
            type: String,
            required:true
        }
        ,
        status: {
            type:String,
            enum:[ACTIVE,INACTIVE]

        },
        createdAt: {
            type: Date,
            default: Date.now,
          
            
        },
         updatedAt: {
             type: Date,
            default: Date.now,
          
        },
        menu:{
            type:object
        },
       


    })
)

module.exports={UserRole}