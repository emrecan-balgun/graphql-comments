const users = [
    {
        id: "1",
        fullName: "Emrecan Balgun"
    },
    {
        id: "2",
        fullName: "Mehmet Seven"
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
        text: "Lorem ipsum",
        post_id: "1"
    },
    {
        id: "2",
        text: "Lorem ipsum doler",
        post_id: "1"
    },
    {
        id: "3",
        text: "Foo bar",
        post_id: "2"
    },
    {
        id: "4",
        text: "Foo bar baz",
        post_id: "3"
    }
]

module.exports = {
    users,
    posts,
    comments
}