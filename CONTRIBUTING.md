# Como Contribuir

Agradecemos seu interesse em contribuir para este portfólio! Este documento guia você através do processo de contribuição.

## 📋 Diretrizes de Contribuição

### 1. Reportar Bugs ou Issues
Antes de criar uma issue, por favor:
- Verifique se o problema já foi reportado
- Forneça screenshots detalhados
- Descreva os passos para reproduzir
- Inclua informações do navegador/sistema

### 2. Propor Melhorias
Sugestões de melhorias são bem-vindas:
- Abra uma issue descrevendo a melhoria proposta
- Seja específico sobre o impacto esperado
- Proponha implementações técnicas quando possível

### 3. Adicionar Novos Projetos
Para adicionar um novo projeto ao portfólio:

1. **Criar arquivo do projeto**
   ```bash
   # Copie o template base
   cp projetos/projeto1.html projetos/projeto4.html
   ```

2. **Editar conteúdo**
   - Título e descrição
   - Stack utilizada
   - Arquitetura do pipeline
   - Códigos de exemplo
   - Métricas e resultados

3. **Adicionar link na página principal**
   - Edite `index.html` na seção `#projetos`
   - Adicione um novo `article.project-card`

4. **Testar**
   - Abra localmente para verificar
   - Verifique responsividade no mobile

### 4. Atualizar Informações Pessoais
- **Contato**: Atualize emails, telefones e links
- **Estatísticas**: Atualize contadores (anos XP, projetos, etc.)
- **Skills**: Adicione novas tecnologias

### 5. Corrigir Erros de Código
- Correções de typo em textos
- Melhorias de acessibilidade
- Correções de links quebrados

## 🛠️ Como Contribuir Técnico

### Usando Git (recomendado)
```bash
# 1. Fork o repositório
# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/portifolio.git
cd portifolio

# 3. Crie uma branch para sua alteração
git checkout -b feature/minha-melhoria

# 4. Faça suas alterações
# ... edite os arquivos ...

# 5. Adicione arquivos modificados
git add .

# 6. Commite com mensagem clara
git commit -m "feat: descrição da melhoria"

# 7. Push para seu fork
git push origin feature/minha-melhoria

# 8. Abra um Pull Request
```

### Formato de Commit
Seguimos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:`: Nova funcionalidade
- `fix:`: Correção de bug
- `docs:`: Alterações na documentação
- `style:`: Formatação, sem mudança de lógica
- `refactor:`: Refatoração de código
- `test:`: Adição de testes
- `chore:`: Tarefas de manutenção

## 📦 Estrutura do Projeto

```
portifolio/
├── index.html              # Página principal
├── style.css               # Estilos customizados
├── script.js               # Interatividade
├── assets/                 # Arquivos estáticos
│   ├── curriculo.pdf       # Currículo em PDF
│   └── curriculo.docx      # Currículo em Word
├── projetos/               # Páginas de projetos
│   ├── projeto1.html
│   ├── projeto2.html
│   └── projeto3.html
└── README.md               # Documentação
```

## 🎨 Diretrizes de Design

### Cores
- Use as variáveis CSS definidas em `:root` no `style.css`
- Paleta primária: `#6366f1` (índigo), `#14b8a6` (turquesa)
- Fundo: `#080810` (escuro)

### Typography
- Títulos: `Space Grotesk` (font-family: 'Space Grotesk', sans-serif)
- Corpo: `Inter` (font-family: 'Inter', sans-serif)
- Código: `Fira Code` (font-family: 'Fira Code', monospace)

### Componentes
- Cards: `.glass-card`
- Botões: `.btn-primary`, `.btn-secondary`
- Chips: `.skill-chip`, `.tech-badge`

## ✅ Checklist de Pull Request

- [ ] Código funcional localmente
- [ ] Responsivo no mobile
- [ ] Acessibilidade verificada
- [ ] Documentação atualizada
- [ ] Commit messages seguem convenção
- [ ] Sem console errors

## 📬 Contato

Para dúvidas ou sugestões:
- **Email**: anselmo.cstecnologia@gmail.com
- **LinkedIn**: [anselmoaxo](https://www.linkedin.com/in/anselmoaxo)
- **GitHub**: [@anselmoaxo](https://github.com/anselmoaxo)

---

Muito obrigado pela sua contribuição! Cada PR ajuda a tornar este portfólio mais completo e útil. ✨