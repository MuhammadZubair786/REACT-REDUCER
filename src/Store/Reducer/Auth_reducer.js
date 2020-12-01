const INTIAL_STATE = {
        username:'zubair',
        email:'m,zhassan444@gmail.com',
        
    }
    
    export default  (state=INTIAL_STATE,action)=>{
        console.log("Auth ACTION ==>",action)

        return state
    }