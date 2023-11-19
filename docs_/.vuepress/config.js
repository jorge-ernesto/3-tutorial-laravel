/**
* Para levantar el proyecto, en el elemento "base" debe ir:
* En produccion con el servidor jorgeernestoweb.com: "/3-tutorial-laravel/" ----> Se debe crear la carpeta "3-tutorial-laravel" en "www"
* En producción con GitHub                         : "/3-tutorial-laravel/"
*/
module.exports = {
  title: 'Laravel',
  description: 'Aprende a utilizar Laravel en tus proyectos web',
  base: '/3-tutorial-laravel/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:[
        '/',
        '/bases-datos/',
        '/auth/',
        '/vue/',
        '/trucos/',
        '/db-relacional/',
        '/factorias/',
        '/api-rest/'
      ]
  }

}