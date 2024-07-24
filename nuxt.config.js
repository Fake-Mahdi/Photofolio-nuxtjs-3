export default {
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' },
        { href: 'https://fonts.googleapis.com/css2?family=Cardo&display=swap', rel: 'stylesheet' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js', defer: true },
        { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', defer: true }
      ]
    }
  },
  components: true  // Enables automatic component imports
}