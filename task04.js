//// accept a password from user and validate it

    // validations :-
        //  1. min 8 chars
        //  2. min 1 uppercase 
        // check if it has %

        let password = "%sonuJustin";

        
        let minUpperCase = (char)=>{
            let haveUppercase = false;
            for(let chr of char){
                if(chr==chr.toUpperCase()&&chr!==chr.toLowerCase()){
                    haveUppercase=true;
                } 
            } return haveUppercase;
        }

        if(password.length>=8 && minUpperCase(password) && password.includes("%")){
            console.log("valid entry")
        }else {
            console.log("invalid entry")
        }

   