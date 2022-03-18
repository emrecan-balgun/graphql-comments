const users = [
    {
        id: "1",
        fullName: "Emrecan Balgun",
        age: 23
    },
    {
        id: "2",
        fullName: "Mehmet Seven",
        age: 29
    }
]

const posts = [
    {
        id: "1",
        title: "Emrecan'in gonderisi",
        user_id: "1"
    },
    {
        id: "2",
        title: "Emrecan'in diger gonderisi",
        user_id: "1"
    },
    {
        id: "3",
        title: "Mehmet'in gonderisi",
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

module.exports = {
    users,
    posts,
    comments
}