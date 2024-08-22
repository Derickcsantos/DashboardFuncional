document.addEventListener('DOMContentLoaded', () => {
    function renderUser(user) {
        const userIdField = document.getElementById('user-id');
        const userNameField = document.getElementById('user-name');
        const userEmailField = document.getElementById('user-email');
        const userPasswordField = document.getElementById('user-password');
        const userSection = document.getElementById('user-section');

        if (userIdField && userNameField && userEmailField && userPasswordField && userSection) {
            userIdField.value = user.id;
            userNameField.value = user.name;
            userEmailField.value = user.email;
            userPasswordField.value = user.password;
            userSection.style.display = 'block';
        } else {
            console.error('Um ou mais campos de usuário não foram encontrados.');
        }
    }

    function contarUsuariosLogados() {
        return openDB().then(db => {
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(storeName, 'readonly');
                const store = transaction.objectStore(storeName);
                let index;
                
                try {
                    index = store.index('logado'); // Acessa o índice 'logado'
                } catch (e) {
                    return reject('Índice "logado" não encontrado.');
                }

                const request = index.count(IDBKeyRange.only(true)); // Contando os usuários logados

                request.onsuccess = () => {
                    resolve(request.result);
                };

                request.onerror = () => {
                    reject('Erro ao contar os usuários logados');
                };
            });
        });
    }

    const userId = localStorage.getItem('userId');

    if (userId) {
        openDB().then(db => {
            const transaction = db.transaction('usuarios', 'readonly');
            const store = transaction.objectStore('usuarios');
            const request = store.get(parseInt(userId));

            request.onsuccess = (event) => {
                const user = event.target.result;
                if (user) {
                    renderUser(user);
                } else {
                    console.error('Usuário não encontrado.');
                }
            };

            request.onerror = (event) => {
                console.error('Erro ao obter usuário:', event.target.error);
            };
        }).catch(error => {
            console.error('Erro ao abrir o banco de dados:', error);
        });
    } else {
        console.error('ID do usuário não encontrado.');
    }

    const updateForm = document.getElementById('update-form');
    if (updateForm) {
        updateForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const id = document.getElementById('user-id').value;
            const name = document.getElementById('user-name').value;
            const email = document.getElementById('user-email').value;
            const password = document.getElementById('user-password').value;

            const updatedUser = { id: parseInt(id), name, email, password };
            updateUser(updatedUser).then(() => {
                alert('Dados atualizados com sucesso');
            }).catch(error => {
                console.error('Erro ao atualizar usuário:', error);
            });
        });
    } else {
        console.error('Formulário de atualização não encontrado.');
    }

    // Atualize a contagem de funcionários ao carregar a página
    contarUsuariosLogados().then(count => {
        const employeeCard = document.getElementById('funcionarioCard');
        if (employeeCard) {
            employeeCard.querySelector('.number').textContent = count;
        }
    }).catch(error => {
        console.error('Erro ao atualizar a contagem de funcionários:', error);
    });
});
