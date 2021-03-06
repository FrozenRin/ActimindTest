const Posts = {
    data() {
        return {
            limit: 0,
            maxLimit: 100,
            posts: []
        };
    },
    methods: {
        addCards() {
            if (this.limit == this.maxLimit) {
                this.limit = this.maxLimit;
            } else {
                this.limit += 10;
            }
        }
    },
    async mounted() {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await req.json();
        this.posts = posts;
    }
}

Vue.createApp(Posts).mount('#app')

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// function getPosts() {
//     // fetch('https://jsonplaceholder.typicode.com/todos/1')
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then((json) => {
//         // {userId: 1, id: 1, title: "sunt aut facere repellat", body: "quia eto"} X 100
//         console.log(json)
//     })
// }