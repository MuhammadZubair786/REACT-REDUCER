const INTIAL_STATE = {
   app_name:'chat app'
}

export default  (state=INTIAL_STATE,action)=>{
    console.log("App ACTION ==>",action)
    
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                app_name:action.data
                
            
            }
            )
            console.log(action.state.app_name)
        
        
            
    }
    return state
}