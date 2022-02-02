const app = new Vue({
    el: '#app',
    data: {
       cards: [], 
    },
    created() {
            axios
        .get('http://localhost/php-ajax-dischi/server/controller.php?query=all')
        .then((result) => {
            this.cards = result.data.response;
            })
        .catch((err) => {
                console.log(err);
        });
    }
});