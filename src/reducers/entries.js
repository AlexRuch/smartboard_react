const initialState = {
    currentEntry: 1
};

export default function projects(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_ENTRY':
            console.log(action.payload.entryId);
            return {
                currentEntry: action.payload.entryId
            };
        default:
            return state;
    }
}
