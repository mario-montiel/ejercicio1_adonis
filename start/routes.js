'use strict'
const User = use('App/Models/User')

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

Route.get('/', () => {
  var json = ''
  json = `Para logearse use esta ruta: /authJWT 
    Para ingresar un usuario: /add-user-post 
    Para actualizar un usuario: /update-user/:id 
    Para eliminar un usuario: /delete-user/:id 
  `
  return {
    Ejercicio_1_APIS: json
  }
})

Route.get('/users', async (session) => {
  try {
    // const data = {
    //   users: await User.all(),
    //   session_user: session.get('username')
    // }
    // console.log(data)
    return await User.all()
  } catch (error) {
    console.log(error)
  }
})

// AUTH JWT
// Route.on('/login').render('login/login').middleware('auth') EXAMPLE TO MIDDLEWARE
Route.post('/authJWT', 'userController.login')
// CREATE USER
Route.post('/add-user-post', 'userController.addUserPost')

// UPDATE USER
Route.post('/update-user/:id', 'userController.updUser')

// DELETE USER
Route.post('/delete-user/:id', 'userController.deleteUser')

// LOGOUT
Route.post('logout', 'useController.logout')


//crud del iony
Route.get('/colorburger/tabla', 'ColorburgerController.index')
Route.post('/colorburger/nuevo', 'ColorburgerController.store') /*.middleware('auth')*/ ;
Route.put('/colorburger/editar/:id', 'ColorburgerController.update') /*.middleware('auth')*/ ;
Route.delete('/colorburger/eliminar/:id', 'ColorburgerController.destroy') /*.middleware('auth')*/ ;

//CRUD IOVANNA
Route.group(function () {
  /*Route.post('users/register', 'UserController.store');
  Route.post('users/login', 'UsonController.store');
  Route.get('index', 'PersonController.index');*/
  Route.get('/dogs', 'DogController.index') /*.middleware('auth')*/ ;
  Route.post('user/dog', 'DogController.store') /*Route.post('user/dog', 'DogController.create').middleware('auth')*/ ;
  Route.delete('dog/:id', 'DogController.destroy') /*.middleware('auth')*/
  Route.patch('dog/edit/:id', 'DogController.update') /*.middleware('auth')*/
}).prefix('api/test');
