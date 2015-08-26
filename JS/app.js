var app = angular.module('simpleDirectiveApp', [])

app.directive("dog", function() {
  return {
    restrict: 'E',
    template: '<div>woof woof</div>'
  }

})
app.directive('gsAngularLogo', function() {
  return {
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});
