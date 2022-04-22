let rerenderEntrieTree = () => {
    console.log('state ready')
}

let posts
let dialogsData
let message
let friendsList 


let state = {
    profilePage : {
        posts: [
            { id: 0, message: "Hey, why nobody love me ?", likes: "10", avatar: "https://cdn-icons-png.flaticon.com/512/146/146035.png" },
            { id: 1, message: "Okeeeeeeeeey let's gooooo", likes: "3", avatar: 'https://i0.wp.com/anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png?ssl=1'   },
            { id: 2, message: "gg i'back  ", likes: "300", avatar: 'https://cdn.pixabay.com/photo/2021/02/12/07/05/woman-6007535_960_720.png' },
            { id: 3, message: "i love you ", likes: "1221" },
            { id: 3, message: "i love you to", likes: "228" },
        ],
        newPostText : 'Hello slava natsii' ,
        dialogsData: [
            { id: "1", name: "Dima", avatar: 'https://cdn-icons-png.flaticon.com/512/146/146035.png'},
            { id: "2", name: "Tima", avatar: 'https://i0.wp.com/anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png?ssl=1'  },
            { id: "3", name: "Nastya", avatar: 'https://cdn.pixabay.com/photo/2021/02/12/07/05/woman-6007535_960_720.png' },
            // { id: "4", name: "Dima" },
        ]
    },
    messagePage : {
        message : [
            { id: "1", author: "Dima", message: "How can i do ?", avatar: 'https://cdn-icons-png.flaticon.com/512/146/146035.png' },
            { id: "2", author: "Tima", message: "Went" , avatar: 'https://i0.wp.com/anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png?ssl=1' },
            { id: "3", author: "Nastya", message: "I love it", avatar: 'https://cdn.pixabay.com/photo/2021/02/12/07/05/woman-6007535_960_720.png'  },
            { id: "4", author: "Me", message: "Slava Ukraine", avatar: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
            // { id: "5", author: "You", message: "I like sneakers" },
        ]
    },
    friendsList :{
        friends : [
            {id: '0',nameFriend: 'Dima', avatar: 'https://cdn-icons-png.flaticon.com/512/146/146035.png'},
            {id: '1',nameFriend: 'Tima', avatar: 'https://i0.wp.com/anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png?ssl=1'},
            {id: '2',nameFriend: 'Nastya', avatar: 'https://cdn.pixabay.com/photo/2021/02/12/07/05/woman-6007535_960_720.png'},
        ],
    }
}
Window.state = state

export const addPost = () => {
    let newPost = {
        id : 5,
        message : state.profilePage.newPostText,
        likes : 1,
        avatar : "https://www.pngplay.com/wp-content/uploads/9/Label-PNG-Photos.png"

    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntrieTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntrieTree(state)
}
export const subscribe = (observer) =>{
    rerenderEntrieTree = observer
}
// console.log(state.profilePage.newPostText)
export default state
