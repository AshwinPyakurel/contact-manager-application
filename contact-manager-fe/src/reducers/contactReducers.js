const initialState = [
    {
        id:0,
        name:"Ashwin",
        email:"mail@mail.com",
        phoneNumber:98765,
        image: "https://media.istockphoto.com/photos/black-stone-wall-texture-picture-id471060950?s=612x612"
    },
    {
        id:1,
        name:"Richen",
        email:"richenmail@mail.com",
        phoneNumber:35678,
        image: "https://media.istockphoto.com/photos/black-stone-wall-texture-picture-id471060950?s=612x612"
    },
];
const contactReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
            break;
        default: 
        return state;
    }
};
export default contactReducer;