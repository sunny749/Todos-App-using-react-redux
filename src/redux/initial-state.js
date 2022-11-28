 export const initialState =JSON.parse(localStorage.getItem('todos'))||{
    todos:[
        {
            id:0,
            title:'Buy Milk',
            completed:false,
            importent:false,
        },
        {
            id:1,
            title:'clean my room',
            completed:true,
            importent:false,
        },
        {
            id:2,
            title:'Get medicines',
            completed:false,
            importent:true,
        },
        {
            id:3,
            title:'Car service',
            completed:false,
            importent:true,
        },
        {
            id:4,
            title:'Prepare for meating',
            completed:true,
            importent:false,
        },
    ],
 }