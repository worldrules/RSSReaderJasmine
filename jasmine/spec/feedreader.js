/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         /* Percorre todos os feeds , verificando se URL's estão definidos 
         *  E se são maiores que 0 , ou seja uma validação
         */


        it('url defined', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });


        /* Percorre todos os feeds , verificando se Nome's estão definidos 
         *  E se são maiores que 0 , ou seja uma validação
         */
        it('name defined', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });


    });


    /* Criado um novo grupo de testes, chamado "The Menu" */

    describe('The Menu', function () { 

        // Verifica se o body tem a classe 'menu-hidden' e identifica caso seja true

        it('is hidden', function () { 
            const body  = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true)
         })

        //Cria duas variáveis e faz um expect se quando clicado
        //o menu vai receber toggle da classe 'menu-hidden' tanto falso , quanto verdadeiro

         it('toggles on and off', function () { 
             const body = $('body');
             const menu = $('.menu-icon-link');

             menu.click();
             
             expect(body.hasClass('menu-hidden')).toBe(false);
             menu.click();
             
             expect(body.hasClass('menu-hidden')).toBe(true);
          })
     })

     describe('Initial Entries', function () {  
         
        /* Criado um novo grupo de testes, chamado "Initial Entries" */
         
        //Função assincrona para verificar se feed tem filhos maiores que 0

        beforeEach(function (done) {  
            loadFeed(0,done);
        });

        it('complete work', function () { 
            const feed = $('.feed');
            expect(feed.children.length > 0).toBe(true)
         })
     });



    
     /* Criado um novo grupo de testes, chamado "New Feed Selection" */

     describe('New Feed Selection', function () {
         const feed = $('.feed');
         const firstFeed = [];
         beforeEach(function (done) { 
             loadFeed(0);
             Array.from(feed.children).forEach(function (entry) {
                 firstFeed.push(entry.innerText);
               });
             loadFeed(1,done);
          });
         
          // Se o conteúdo mudar
          it('content changes', function(){
            Array.from(feed.children).forEach(function(entry,index){
                console.log(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
                expect(entry.innerText === firstFeed[index]).toBe(false);
                expect(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
            });	
        });
      });
}());
