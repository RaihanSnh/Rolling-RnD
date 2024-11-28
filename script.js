window.onload = function() {
    if (window.location.pathname.includes('login.html')) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            window.location.replace('home.html');
        }

        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }

    if (window.location.pathname.includes('home.html')) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.replace('login.html');
        } else {
            const username = sessionStorage.getItem('username');
            document.getElementById('welcomeUser').textContent = `Welcome, ${username}`;

            document.getElementById('logoutBtn').addEventListener('click', logout);
        }
    }
}

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