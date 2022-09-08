const {schema, model} =require("mongoose");

const userSchema = new Schema({

    firstName :{
        type: string,
        required: true
    },
    middleName: String,
    lastName: {
        type: String,
        required:true,
    },
    email:{
    type: String,
    required:true,
},
    password:{
    type: String,
    required:true,
},
    gender:{
    type: String,
    required:true,
},

})

module.exports =model("user",userSchema );


