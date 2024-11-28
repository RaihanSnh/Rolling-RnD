function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');
    
    if (username === "Calon RnD" && password === "akumaurnd123") {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        window.location.replace('home.html');
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('loginForm').reset();
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 2000);
    }
}

function logout() {
    sessionStorage.clear();
    window.location.replace('login.html');
}