window.onload = function () {
    if (window.location.pathname.includes('login.html')) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            window.location.replace('home.html');
        }

        document.getElementById('login-form').addEventListener('submit', handleLogin);
    }

    if (window.location.pathname.includes('home.html')) {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.replace('login.html');
        } else {
            const username = sessionStorage.getItem('username');
            document.getElementById('welcomeUser').textContent = `Welcome, ${username}`;

            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', logout);
            }

            document.getElementById('search-form').addEventListener('submit', function (event) {
                event.preventDefault();
                const query = document.getElementById('search-box').value.toLowerCase();
                const members = document.querySelectorAll('.member');
                members.forEach(member => {
                    const name = member.getAttribute('data-name').toLowerCase();
                    member.style.display = name.includes(query) ? 'block' : 'none';
                });
            });
        }
    }
};

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if (username === "CalonRnD" && password === "akumaurnd123") {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        window.location.replace('home.html');
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('login-form').reset();
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 2000);
    }
}

function logout() {
    sessionStorage.clear();
    window.location.replace('login.html');
}
