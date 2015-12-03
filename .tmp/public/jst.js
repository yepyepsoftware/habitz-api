this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/habitz.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="jumbotron">\n        <h1 align="center">HabitzApp</h1>\n        <br>\n        <div id="habitz-form" class="row">\n            <div class="col-sm-8 col-sm-offset-2 text-center">\n                <form>\n                    <div class="form-group">\n                        <input type="text" class="form-control input-lg text-center" placeholder="New awesome habit!" ng-model="formData.value">\n                        <br>\n                        <button type="submit" class="btn btn-primary btn-lg" ng-click="addHabitz()">Add</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div id="habitz-list" class="row">\n        <div class="col-sm-4 col-sm-offset-4">\n            <div class="checkbox" ng-repeat="habit in habitz">\n                <label>\n                    <input type="checkbox" ng-click="removeHabitz(habit)">\n                    {{ habit.value }}\n                </label>\n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/landing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Header -->\n<a name="about"></a>\n<div class="intro-header">\n    <div class="container">\n\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="intro-message">\n                    <h1>Landing Page</h1>\n                    <h3>A Template by Start Bootstrap</h3>\n                    <hr class="intro-divider">\n                    <ul class="list-inline intro-social-buttons">\n                        <li>\n                            <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>\n                        </li>\n                        <li>\n                            <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>\n                        </li>\n                        <li>\n                            <a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <!-- /.container -->\n\n</div>\n<!-- /.intro-header -->\n\n<!-- Footer -->\n<footer>\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-12">\n                <ul class="list-inline">\n                    <li>\n                        <a href="#">Home</a>\n                    </li>\n                    <li class="footer-menu-divider">&sdot;</li>\n                    <li>\n                        <a href="#about">About</a>\n                    </li>\n                    <li class="footer-menu-divider">&sdot;</li>\n                    <li>\n                        <a href="#services">Services</a>\n                    </li>\n                    <li class="footer-menu-divider">&sdot;</li>\n                    <li>\n                        <a href="#contact">Contact</a>\n                    </li>\n                </ul>\n                <p class="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>\n            </div>\n        </div>\n    </div>\n</footer>\n';

}
return __p
};

this["JST"]["assets/templates/users.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    <div class="jumbotron">\n        <h1 align="center">Users</h1>\n        <br>\n        <div id="users-form" class="row">\n            <div class="col-sm-8 col-sm-offset-2 text-center">\n                <form>\n                    <div class="form-group">\n                        <input type="text" class="form-control input-lg text-center" placeholder="New user" ng-model="formData.name">\n                        <br>\n                        <button type="submit" class="btn btn-primary btn-lg" ng-click="addUser()">Add</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div id="users-list" class="row">\n        <div class="col-sm-4 col-sm-offset-4">\n            <div class="checkbox" ng-repeat="user in users">\n                <label>\n                    <input type="checkbox" ng-click="removeUser(user)">\n                    {{ user }}\n                </label>\n            </div>\n        </div>\n    </div>\n</div>\n';

}
return __p
};