var TAX_RATE = 0.076;

var Main = new Vue({
    el: "#main",
    data: {
        items: [
            {name: "Fettuccine Alfredo", price: 11.50, stock: 6, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore aliqua.", imgSrc: "img/alfredo.png", ordered: 0},
            {name: "Pizza", price: 13.99, stock: 8, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  ut labore et dolore aliqua.", imgSrc: "img/pizza.png", ordered: 0},
            {name: "Ham Carbonara", price: 11.50, stock: 3, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ut labore et dolore aliqua.", imgSrc: "img/carbonara.png", ordered: 0}
        ]
    },
    methods: {
        OrderItem(item) {
            item.stock -= 1;
            item.ordered += 1;
        },
        ClearItem(item) {
            item.stock += item.ordered;
            item.ordered = 0;
        }
    },
    computed: {
        totalOrdered: function() {
            var count = 0;

            for (var i = 0; i < this.items.length; i++) {
                count += this.items[i].ordered;
            }

            return count;
        },
        subtotal: function() {
            var sub = 0.0;

            for (var i = 0; i < this.items.length; i++) {
                sub += this.items[i].price * this.items[i].ordered;
            }

            return sub;
        },
        tax: function() {
            return this.subtotal * TAX_RATE;
        },
        total: function() {
            return this.subtotal + this.tax;
        }
    }
});