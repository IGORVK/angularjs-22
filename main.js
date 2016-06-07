//В этом уроке мы разберем как работать с разными страницами, делать переходы между ними и отрисовывать разный контент с помощью ngRoute.

//ngRoute что это такое?
// в идеале мы бы хотели переходить между страницами по разным ссылкам и обновлять контент без перезагрузки
//ngRoute в ангуляре это как раз та вещь которая помогает это сделать проще всего
//для начала надо подключить ангуляр и скрип ngRoute ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-route.js
// в боди необходимо создать тег <ng-view></ng-view> в который будет выводиться содержимое каждого нашего route
//дальше подключаем зависимость ngRoute инициализацию ангуляр var app = angular.module('app', ['ngRoute']);
// теперь мы можем конфигурировать наш роутер
//app.config(function($routeProvider){
    // $routeProvider
    // .when('/',{
        // template : <h1>This is my homepage</h1>
    // })
// }) - Что мы здесь сделали?
//мы конфигурируем ngRoute передаем переменную $routeProvider которую мы можем с помощью метода when определить что будет происходить если мы будем переходить по url например '/'
// т.е. когда мы заходим на '/' мы будем грузить шаблон <h1>This is my homepage</h1>
// делать это надо на локальном сервере(opensever, denwer, IntelliJ IDEA(коммерческий продукт)
//)!!! иначе код работать не будет

//запистим html мы увидим что наш url поменялся на ...index.html#/ т.е. добавился #/ и мы видим наш шаблон

// давайте добавим еще какую-нибудь ссылку
    // .when('/posts',{
        // template : '<h1>Posts for my site</h1>'
    // })
// теперь если мы в url добавим posts ...index.html#/posts мы перейдем на новую страницу с текстом Posts for my site
//теперь давайте добавим кнопочки перехода между двумя url
// <a href="#/">Home</a>
// <a href="#/posts">Posts</a>

// посмотрим в браузер все работает переход осуществляется без перезагрузки!!!
// обратите внимание на url он прописан как ....#/ и .....#/posts решетка # это выключенный html5 mode те когда url идет через решетку то backend в этом незадействован
// т.е по факту бэкэнд нам отдает только index.html сам роутинг осуществляется от этого файла
//Если Вы хотите url без решетки то необходимо прописывать дополнительные настройки и настраивать файл таким образом 
//чтобы он всегда редиректил всегда на тот файл где у Вас грузится ангулар и чтобы роутинг происходил полностью на стороне фронтэнда

// теперь давайте попробуем поменять template : на что-нибудь другое!!!!

// заменим template на templateUrl: 'home.html'
// теперь создадим страницу home.html и пропишем в ней шаблон который будет выгружаться в <ng-view></ng-view> 

// так же в $routeProvider можно описывать controller который будет обрабатывать этот шаблон
// добавим на домашнюю страницу контроллер
//controller: 'homeCtrl' 

//и опишем его и сделаем console.log чтобы увидеть что он работает
// app.controller('homeCtrl', function($scope){
    // console.log('homeCtrl');
// });

// это значит что каждый раз когда мы переходим на Home у нас будет отрабатывать контроллер
// теперь мы можем добавить в $scope.model переменную например message : "This is my beautyful HomePage", 
    // $scope.model = {
        // message: "This is my beautyful HomePage",
    // };
// и вывести её в шаблон страницы home.html {{model.message}}

// посмотрим - все работает!!!

 





var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'home.html',
        controller: 'homeCtrl' 
    })
    .when('/posts',{
        template : '<h1>Posts for my site</h1>'
    });
});

app.controller('homeCtrl', function($scope){
    console.log('homeCtrl');
    $scope.model = {
        message: "This is my beautyful HomePage",
    };
});



