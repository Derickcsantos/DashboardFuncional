const dbName = 'LoginFuncional';
        const storeName = 'usuarios';

        function openDB() {
            return new Promise((resolve, reject) => {
                const request = indexedDB.open(dbName, 2); // Versão deve ser igual ou maior do que a versão do banco de dados configurada

                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains(storeName)) {
                        const store = db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                        store.createIndex('email', 'email', { unique: true });
                    }
                };

                request.onsuccess = (event) => resolve(event.target.result);
                request.onerror = (event) => reject(event.target.error);
            });
        }

        function getAllUsers() {
            return openDB().then(db => {
                return new Promise((resolve, reject) => {
                    const transaction = db.transaction(storeName, 'readonly');
                    const store = transaction.objectStore(storeName);
                    const request = store.getAll(); // Obter todos os usuários

                    request.onsuccess = () => resolve(request.result);
                    request.onerror = (event) => reject(event.target.error);
                });
            });
        }

        function deleteUser(id) {
            return openDB().then(db => {
                return new Promise((resolve, reject) => {
                    const transaction = db.transaction(storeName, 'readwrite');
                    const store = transaction.objectStore(storeName);
                    const request = store.delete(id); // Excluir o usuário com o ID especificado

                    request.onsuccess = () => resolve();
                    request.onerror = (event) => reject(event.target.error);
                });
            });
        }

        function displayUsers(users) {
            const tableBody = document.querySelector('#users-table tbody');
            tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar novos dados

            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.telefone}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td><button class="delete-btn" data-id="${user.id}">Excluir</button></td>
                `;
                tableBody.appendChild(row);
            });

            // Adicionar event listeners para os botões de exclusão
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const id = parseInt(event.target.getAttribute('data-id'), 10);
                    if (confirm('Você tem certeza que deseja excluir este usuário?')) {
                        deleteUser(id).then(() => {
                            alert('Usuário excluído com sucesso');
                            getAllUsers().then(users => {
                                displayUsers(users);
                            });
                        }).catch(error => {
                            console.error('Erro ao excluir usuário:', error);
                        });
                    }
                });
            });
        }

        document.getElementById('load-users').addEventListener('click', () => {
            getAllUsers().then(users => {
                displayUsers(users);
            }).catch(error => {
                console.error('Erro ao carregar usuários:', error);
            });
        });