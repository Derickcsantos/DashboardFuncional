document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        getUserByEmail(email).then(user => {
            if (user && user.password === password) {
                
                user.logado = true; // Define o usuário como logado
                updateUser(user).then(() => {
                    localStorage.setItem('userId', user.id);
                    window.location.href = 'logado.html'; 
                }).catch(error => {
                    console.error('Erro ao atualizar o status de login:', error);
                });
            } else {
                alert('Credenciais inválidas');
            }
        }).catch(error => {
            console.error('Falha no login:', error);
        });
    });

    document.getElementById('register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('register-name').value;
        const telefone = document.getElementById('register-phone').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        addUser({ name, telefone, email, password, logado: true }).then((userId) => {
            localStorage.setItem('userId', userId);
            window.location.href = 'logado.html'; 
        }).catch(error => {
            console.error('Erro ao registrar usuário:', error);
        });
    });

    // Alternar entre login e registro
    const showRegisterButton = document.getElementById('show-register');
    const showLoginButton = document.getElementById('show-login');
    const registerSection = document.getElementById('register-section');
    const loginSection = document.getElementById('login-section');

    function showRegister(){
        registerSection.style.display = 'block';
        loginSection.style.display = 'none';
        showRegisterButton.style.display = 'none';  
        showLoginButton.style.display = 'block';   
    }

    function showLogin() {
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
        showRegisterButton.style.display = 'block'; 
        showLoginButton.style.display = 'none';     
    }

    showRegister(); 
    showRegisterButton.addEventListener('click', showRegister);
    showLoginButton.addEventListener('click', showLogin);
});
