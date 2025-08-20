# Landing Page - Leco Biagioni

Landing page profissional para conversão de leads da empresa Leco Biagioni, especializada em casamentos de luxo no Rio de Janeiro.

## 🎯 Características

- **Design Responsivo**: Otimizada para desktop e mobile
- **Foco em Conversão**: Formulário de contato estrategicamente posicionado
- **5 Blocos de Serviços**: Apresentação clara dos diferenciais da empresa
- **Animações Suaves**: Experiência visual moderna com Framer Motion
- **Performance Otimizada**: Construída com React + Vite

## 🚀 Tecnologias Utilizadas

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (ícones)
- shadcn/ui (componentes)

## 📋 Funcionalidades

### Seção Hero
- Título impactante com call-to-action
- Imagem de fundo profissional
- Botão para scroll suave até o formulário

### Blocos de Serviços
1. **Planejamento Personalizado** - Customização completa do evento
2. **Destination Weddings** - Especialização em casamentos no Rio de Janeiro
3. **Experiência Comprovada** - Mais de mil eventos realizados
4. **Parcerias Exclusivas** - Rede de fornecedores premium
5. **Diversidade e Inclusão** - Cerimônias para todos os tipos de amor

### Formulário de Contato
- Campos obrigatórios: Nome, E-mail, Telefone
- Campos opcionais: Data do evento, Tipo de evento, Mensagem
- Validação de dados
- Mensagem de privacidade

### Rodapé
- Informações de contato
- Links para redes sociais
- Direitos autorais

## 🛠️ Como Executar

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd lecobiagioni-landing
```

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
pnpm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 📦 Build para Produção

```bash
npm run build
# ou
pnpm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🎨 Personalização

### Cores
As cores principais podem ser ajustadas no arquivo `src/App.css` nas variáveis CSS customizadas.

### Imagens
Substitua as imagens na pasta `src/assets/` mantendo os mesmos nomes de arquivo.

### Conteúdo
Edite o arquivo `src/App.jsx` para modificar textos, links e estrutura.

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🔧 Configuração do Formulário

O formulário atualmente exibe os dados no console. Para integrar com um backend:

1. Modifique a função `handleSubmit` em `src/App.jsx`
2. Adicione a URL da API de destino
3. Configure o método de envio (POST, etc.)

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da empresa Leco Biagioni.

---

**Desenvolvido com ❤️ para transformar sonhos em realidade**

