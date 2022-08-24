const initialDrawerState = {

    title: "Keep",

};

export const NavReducer = (state = initialDrawerState, action) => {
    console.log(action)
    switch (action.type) {
        case 'notes':
            return {
                ...state,
                title: "Keep"
            };

        default:
            return state;
    }
};