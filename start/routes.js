'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// const Subject = use('app/Models/Subject')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('/subjects', 'SubjectController.index')
  Route.post('/subjects', 'SubjectController.store')
  Route.get('/subjects/:id', 'SubjectController.show')
  Route.put('/subjects/:id', 'SubjectController.update')
  Route.delete('/subjects/:id', 'SubjectController.destroy')
}).prefix('api')
