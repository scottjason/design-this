
// this uses JavaScripts built-in 'bind' method ( Function.bind )

var fetchUsers = function(){
   return this.name
}

var users = {
    name: "Scott"
}

var iStoreAFunctionBoundToAnObject = fetchUsers.bind(users);
iStoreAFunctionBoundToAnObject();

//---------------------------------

