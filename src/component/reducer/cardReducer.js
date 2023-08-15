export const taskReducer=(state,action)=>{
    const {type,payload}=action
    switch( type ){
        case 'ADD_TASK':
            return {...state,taskList:payload.tasks}
    }
}