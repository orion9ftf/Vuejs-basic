const quotes = [
  { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
  { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
  { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
  { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes)

const app = Vue.createApp({
  data(){
    return {
      phrases_of_heroes: quotes,
      newQuotes: ''
    }
  },
  methods: {
    addQuote( event ){
      console.log(this.newQuotes)
      console.log(event)

      //insertar el nuevo input en la lista de quotes
      if (event.charCode !== 13 ) return

      this.quote.unshift({
        quote: this.newQuotes
      })
    }
  }
})

app.mount('#myApp')
