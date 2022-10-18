document.addEventListener('DOMContentLoaded', function(){
    // Handling SignUp
    var username = document.getElementById('username');
    var password = document.getElementById('pwd');
    //var password2 = document.getElementById('pwd2');
    //var profilePic = document.getElementById('dp');
    var submit = document.getElementById('submit');
    var root = document.getElementById('root');
    
    // SIGNUP FN::
    
    submit.addEventListener('click', handleSingup);
    function handleSingup(e){
        e.preventDefault();
        if(username.value && password.value){
            
                
                let init = {
                    dbName:'user_db',
                    store: {
                        name: 'Users',
                        params: {
                            autoIncrement: true
                        }
                    },
                    index: {
                        name:'Username',
                        other: 'Username',
                        params: {
                            unique: true
                        }
                    },
                    txParams:'readwrite',
                    body:{
                        method: 'put',
                        inserts:[
                            {Username: username.value, Password: password.value }
                        ]
                            
                        
                    }
                }
                // using saveIndexedDB Function from include\/db.js\/\/
                saveIndexedDB(init,1,function(result){
                  
                    if(result === 'Username taken'){
                        root.innerText = 'Username Already Taken';
                        username.value = '';
                    }else {
                        root.innerText = 'Account Successfully Created';
                        root.className = "success";
                        username.value = '';
                        password.value = '';
                        
                        
                        setTimeout(function(){
                            window.location = '/login.html';
                            //window.reload();
                        },1000)
                        setTimeout(function(){
                            root.innerText = '';
                            root.className = '';
                        },2000)
                    }
                });
            
        }else{
            
            root.innerText = 'Fields Must not be empty';
            root.className = "error";
        };
        console.log('clicked')
    }
    
    })