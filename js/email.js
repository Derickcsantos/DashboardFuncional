document.getElementById('setor').addEventListener('change', function() {
    const setor = this.value;
    const formularioContainer = document.getElementById('formulario-container');
    
    // Limpa o conteúdo anterior
    formularioContainer.innerHTML = '';

    if (setor) {
        let formulario = '';
        
        switch (setor) {
            case 'financeiro':
                formulario = `
                    <form id="financeiro-form">
                        <input type="hidden" name="apiKey" value="SUA_API_KEY_FINANCEIRO">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>
                        
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>
                        
                        <button class="enviar" type="submit">Enviar para Financeiro</button>
                    </form>
                `;
                break;
            case 'juridico':
                formulario = `
                    <form id="juridico-form">
                        <input type="hidden" name="apiKey" value="SUA_API_KEY_JURIDICO">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>
                        
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>
                        
                        <button class="enviar" type="submit">Enviar para Jurídico</button>
                    </form>
                `;
                break;
            case 'administracao':
                formulario = `
                    <form id="administracao-form">
                        <input type="hidden" name="apiKey" value="SUA_API_KEY_ADMINISTRACAO">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>
                        
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>
                        
                        <button class="enviar" type="submit">Enviar para Administração</button>
                    </form>
                `;
                break;
            case 'resenha':
                formulario = `
                    <form id="resenha-form" action="https://api.web3forms.com/submit" method="POST" >
                        <input type="hidden" name="apiKey" value="7afef111-f5c2-489a-b093-c7965b1cd9bc">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required>
                        
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>
                        
                        <button class="enviar" type="submit">Enviar para Resenha</button>
                    </form>
                `;
                break;
        }
        
        // Insere o formulário específico no container
        formularioContainer.innerHTML = formulario;
    }
});
