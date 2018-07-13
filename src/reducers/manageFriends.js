export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":

            return { friends: [...state.friends, action.friend] }
        case "REMOVE_FRIEND":

            // let deleted = friends.find(action.friend.id)

            return  { friends: state.friends.filter(friend => friend.id !== action.id) }
        default:
            return { friends: state.friends }
    }
}
