import 'es6-promise/auto';

const loginFormElement: HTMLElement | null = document.getElementById("loginForm");

if(loginFormElement){
    loginFormElement.addEventListener("submit", async function(event) {
        event.preventDefault();
    
        const username = document.getElementById("username") as HTMLInputElement | null;
        const password = document.getElementById("password") as HTMLInputElement | null;
        
        if(username && password){
            const usernameValue: String = username.value;
            const passwordValue: String = password.value;
            
            try {
                // try to submit succesfully
                const response = await fetch("https://dummyjson.com/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            username: usernameValue,
                            password: passwordValue,
                            expiresInMins: 30
                        }
                    )
                })
                if(response.ok){
                    const result = await response.json();
                    // console.log(result);
                    // Local Storage
                    localStorage.setItem("firstName", result.firstName);
                    localStorage.setItem("lastName", result.lastName);
                    localStorage.setItem("image", result.image);
                    localStorage.setItem("token", result.token);
                    window.location.href = "home.html";
                    
                }else {
                    const error = await response.json();
                    const errorVal: HTMLElement | null = document.getElementById("error");
                    
                    if(errorVal){
                        errorVal.innerHTML = error.message;
                    }
                }
            }catch(error){
                //  if any error, catch the error
                const errorVal = document.getElementById("error");
                if(errorVal){
                    errorVal.innerHTML = "Unable to login. Something went wrong";
                } 
            }
        }
    
        
    });
}



