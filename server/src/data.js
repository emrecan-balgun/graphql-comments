const users = [
    {
        id: "1",
        fullName: "Emrecan Balgun",
        profile_photo: "https://avatars2.githubusercontent.com/u/518148?s=460&v=4",
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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt quod quasi non dolorem esse iure id excepturi quam. Fugiat animi soluta laboriosam, vitae magni modi asperiores dolores, voluptatibus ut minus incidunt dolor explicabo repellendus vero fuga saepe velit quos.",
        short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio quasi.",
        cover: "https://randomwordgenerator.com/img/picture-generator/50e9d5424b51b10ff3d8992cc12c30771037dbf85254794e722a73d79349_640.jpg",
        user_id: "1"
    },
    {
        id: "2",
        title: "Emrecan'in diger gonderisi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt quod quasi non dolorem esse iure id excepturi quam. Fugiat animi soluta laboriosam, vitae magni modi asperiores dolores, voluptatibus ut minus incidunt dolor explicabo repellendus vero fuga saepe velit quos.",
        short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio quasi.",
        cover: "https://randomwordgenerator.com/img/picture-generator/55e4d5474350b10ff3d8992cc12c30771037dbf852547849712a73d5954d_640.jpg",
        user_id: "1"
    },
    {
        id: "3",
        title: "Mehmet'in gonderisi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sunt quod quasi non dolorem esse iure id excepturi quam. Fugiat animi soluta laboriosam, vitae magni modi asperiores dolores, voluptatibus ut minus incidunt dolor explicabo repellendus vero fuga saepe velit quos.",
        short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, odio quasi.",
        cover: "https://randomwordgenerator.com/img/picture-generator/54e2d3424c54a414f1dc8460962e33791c3ad6e04e507749712e79d29244c3_640.jpg",
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