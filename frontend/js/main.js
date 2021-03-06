// Import bower components scripts
require('../bower_components/angular/angular.js');
require('../bower_components/angular-route/angular-route.min.js');
require('../bower_components/angular-resource/angular-resource.min.js');
require('../bower_components/angular-cookies/angular-cookies.min.js');
require('../bower_components/angular-sanitize/angular-sanitize.min.js');



//========
// The app
//========

var app = angular.module('reddit', ['ngRoute']);


//========
// Imports
//========

// Routes
var postRoutes 			= require('./routes/post');
var authRoutes 			= require('./routes/auth');
var profileRoutes 		= require('./routes/profile');

// Controllers
var postCtrl 			= require('./controllers/post');
var listViewCtrl		= require('./controllers/list-posts');
var detailViewCtrl 		= require('./controllers/detail-view');
var postFormCtrl 		= require('./controllers/post-form');
var commentCtrl 		= require('./controllers/comment');
var commentFormCtrl 	= require('./controllers/comment-form');
var authCtrl 			= require('./controllers/auth');
var loginCtrl 			= require('./controllers/login-form');
var profileCtrl 		= require('./controllers/profile');
var filterCtrl 			= require('./controllers/filter');

// Directives
var postDirective 		= require('./directives/post');
var commentDirective 	= require('./directives/comment');
var authDirective 		= require('./directives/auth');
var postsLoaded 		= require('./directives/posts-loaded');
var packeryDirective 	= require('./directives/packery');
var filterDirective 	= require('./directives/filter');

// Factories
var authInterceptor 	= require('./factories/auth-interceptor');
var authChangeNotifier 	= require('./factories/auth-change-notifier');
var socketIO 			= require('./factories/socket.io');

// Config
var interceptor 		= require('./config/interceptor');


//========
// Factory
//========

app.factory('authInterceptor', authInterceptor);
app.factory('authState', authChangeNotifier);
app.factory('SocketIO', socketIO);


//=======
// Config
//=======

app.config(interceptor);


//=======
// Routes
//=======

app.config(authRoutes);
app.config(profileRoutes);
app.config(postRoutes);


//============
// Controllers
//============

app.controller('PostController', postCtrl);
app.controller('DetailViewController', detailViewCtrl);
app.controller('ListViewController', listViewCtrl);
app.controller('PostFormController', postFormCtrl);
app.controller('CommentController', commentCtrl);
app.controller('CommentFormController', commentFormCtrl);
app.controller('AuthController', authCtrl);
app.controller('LoginFormController', loginCtrl);
app.controller('ProfileController', profileCtrl);
app.controller('FilterController', filterCtrl);

//===========
// Directives
//===========

app.directive('post', postDirective.post);
app.directive('postform', postDirective.form);
app.directive('comment', commentDirective.comment);
app.directive('commentform', commentDirective.commentForm);
app.directive('authheader', authDirective.authHeader);
app.directive('postsLoaded', postsLoaded);
app.directive('packery', packeryDirective);
app.directive('filterPosts', filterDirective);