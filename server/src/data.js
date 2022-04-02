const users = [
    {
        id: "1",
        fullName: "Emrecan Balgun",
        profile_photo: "https://avatars2.githubusercontent.com/u/527058?s=460&v=4",
        age: 23
    },
    {
        id: "2",
        fullName: "Mehmet Seven",
        profile_photo: "https://avatars2.githubusercontent.com/u/527358?s=460&v=4",
        age: 29
    }
]

const posts = [
    {
        id: "1",
        title: "Emrecan'in gonderisi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio quasi.",
        user_id: "1"
    },
    {
        id: "2",
        title: "Emrecan'in diger gonderisi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio quasi.",
        user_id: "1"
    },
    {
        id: "3",
        title: "Mehmet'in gonderisi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio quasi.",
        user_id: "2"
    }
]

const comments = [
    {
        id: "1",
        text: "Emrenin yorumu",
        post_id: "1",
        user_id: "1"
    },
    {
        id: "2",
        text: "Emrenin diger yorumu",
        post_id: "1",
        user_id: "1"
    },
    {
        id: "3",
        text: "Emrenin diger yorumu",
        post_id: "2",
        user_id: "1"
    },
    {
        id: "4",
        text: "Mehmetin yorumu",
        post_id: "3",
        user_id: "2"
    }
]

export default {
    users,
    posts,
    comments
}