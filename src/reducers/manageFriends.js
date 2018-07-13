export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let arr = [...state.friends]
      const friend = arr.find(friend => friend.id === action.id)
      const index = arr.indexOf(friend)
      arr.splice(index, 1)
      return { friends: arr }
    default:
      return state;
  }
}
