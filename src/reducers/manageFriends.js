export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND': 
            return {friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND':
            const friend2Remove = state.friends.find(friend => friend.id === action.id)
            const friendIndex = state.friends.indexOf(friend2Remove)
            const friendsCopy = [...state.friends]
            friendsCopy.splice(friendIndex, 1)
            return {friends: friendsCopy}
        default:
            return state
    }
}

// let state = {
//     friends: [
//       {
//         name: 'Avi',
//         hometown: 'NYC',
//         id: 100
//       },
//       {
//         name: 'Joe',
//         hometown: 'Boston',
//         id: 101
//       },
//       {
//         name: 'Steven',
//         hometown: 'Philadephia',
//         id: 102
//       }
//     ]
//   };

// manageFriends(state, {
//     type: "REMOVE_FRIEND",
//     id: 101
//   })
