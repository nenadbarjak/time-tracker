const initialState = [
    // {
    //     id: '1',
    //     startTime: 1597642801049,
    //     endTime: 1597642820146
    // },
    // {
    //     id: '2',
    //     startTime: 1597642801049,
    //     endTime: 1597642820146
    // },
    // {
    //     id: '3',
    //     startTime: 1597642801049,
    //     endTime: 1597642820146
    // }
]


export function timesReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return [...action.payload.times]

        case 'ADD_TIME':
            return [...state, action.payload.time]

        case 'REMOVE_TIME':
            return state.filter(time => time._id !== action.payload.id)

        case 'LOGOUT':
            return undefined

        default:
            return state
    }
}