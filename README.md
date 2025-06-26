# Site do Flat - Instruções de Uso

## Sobre o Site
Este é um site profissional criado para a venda do seu flat. O site inclui:

- **Galeria de fotos** com as imagens do flat organizadas por cômodos
- **Informações detalhadas** sobre o imóvel e suas comodidades
- **Botão do WhatsApp** que envia uma mensagem automática para o número +55 81 9847-3310
- **Design responsivo** que funciona em computadores, tablets e celulares
- **Efeitos visuais modernos** com animações e hover effects

## Arquivos Incluídos
- `index.html` - Página principal do site
- `style.css` - Arquivo de estilos e design
- `script.js` - Funcionalidades JavaScript (WhatsApp, modal de imagens)
- `images/` - Pasta com todas as fotos do flat organizadas
- `README.md` - Este arquivo de instruções

## Como Usar

### Opção 1: Abrir Localmente
1. Extraia todos os arquivos em uma pasta
2. Abra o arquivo `index.html` em qualquer navegador web
3. O site funcionará normalmente

### Opção 2: Hospedar Online
Para disponibilizar o site na internet, você pode:

1. **Usar um serviço gratuito como Netlify ou Vercel:**
   - Acesse netlify.com ou vercel.com
   - Faça upload da pasta do site
   - Receba um link público gratuito

2. **Usar um servidor web:**
   - Faça upload dos arquivos para seu servidor
   - Configure o domínio desejado

## Funcionalidades

### Botão WhatsApp
- Ao clicar em "Quero Comprar!", abre o WhatsApp com uma mensagem pré-definida
- A mensagem inclui o interesse no flat e o valor R$ 390.000,00
- Envia para o número: +55 81 9847-3310

### Galeria de Imagens
- Clique em qualquer foto para vê-la em tamanho maior
- Use a tecla ESC ou clique no X para fechar
- Imagens organizadas por: sala, quarto, cozinha, banheiro, piscina e varanda

## Personalização

### Alterar Preço ou Número do WhatsApp
Edite o arquivo `script.js` e modifique as linhas:
```javascript
const WHATSAPP_NUMBER = '+5581984733310';
const PROPERTY_PRICE = 'R$ 390.000,00';
```

### Alterar Informações do Flat
Edite o arquivo `index.html` na seção "Detalhes do Flat"

### Alterar Cores ou Design
Edite o arquivo `style.css` para personalizar cores, fontes e layout

## Suporte
O site foi criado com tecnologias web padrão (HTML, CSS, JavaScript) e funciona em todos os navegadores modernos.

**Recursos incluídos:**
- Design responsivo para mobile
- Otimização para SEO
- Carregamento rápido das imagens
- Compatibilidade com todos os navegadores
- Efeitos visuais profissionais

Aproveite seu novo site profissional para vender o flat!

