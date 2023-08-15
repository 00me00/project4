export const taskReducer=(state,action)=>{
    const {type,payload}=action
    switch( type ){
        case 'ADD_TASK':
            return {...state,taskList:payload.tasks}
       case 'REMOVE_TASK':
                return {...state,taskList:payload.tasks}
    case 'EDIT_TASK':
        return {...state,task:payload.task}
     case 'UPDATE_TASK':
        return {...state,taskList:payload.tasks}
            default:
                return"not match"
    }
}