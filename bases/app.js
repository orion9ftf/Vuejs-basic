
const app = Vue.createApp({
  // template: `
  // <h1>Esto fue renderizado con Vue</h1>
  // <p>Lorem ipsum dolor sit amet consectetur, 
  // adipisicing elit. Veritatis, vero voluptatem, 
  // aliquid aspernatur fuga amet corrupti nobis 
  // et repellat harum est repellendus tempore esse 
  // laudantium blanditiis voluptatibus perferendis 
  // assumenda. Omnis?
  // </p>
  // `

  data(){
    return {
      quote: 'I´m Batman',
      author: 'Bruce Wayne'
    }
  },
  methods: {
    changeQuote(){
      console.log('Evento click del método changeQuote')
      this.author = 'Human'

      this.capitalize()
    },
    capitalize(){
      this.quote = this.quote.toUpperCase()
    }
  }
  //option API
    //methods: {},
    //watch: {},
  //composition API
    //setup() {}
})

app.mount('#myApp')
