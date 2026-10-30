# Bar do Jaba - Site Oficial

Site profissional e moderno para o restaurante Bar do Jaba, especializado em self-service com churrasco.

## 🚀 Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **React** - Biblioteca UI

## 📋 Funcionalidades

- ✅ Hero section com design impactante
- ✅ Seção sobre o restaurante
- ✅ Sistema de cardápio categorizado
- ✅ Destaques e diferenciais
- ✅ Seção de promoções (configurável)
- ✅ Galeria de fotos com lightbox
- ✅ Seção de avaliações de clientes
- ✅ Formulário de reservas (via WhatsApp)
- ✅ Seção de delivery
- ✅ Localização com mapa
- ✅ Horários de funcionamento
- ✅ Contato integrado
- ✅ Botão flutuante do WhatsApp
- ✅ Menu responsivo (mobile)
- ✅ Design totalmente responsivo
- ✅ SEO otimizado

## 🎨 Identidade Visual

### Paleta de Cores

- **Preto Carvão:** #171717
- **Marrom Madeira:** #513625
- **Laranja Brasa:** #E87524
- **Bege Creme:** #F3E8D5
- **Branco Quente:** #FFFDF8
- **Verde:** #4CAF50 (para elementos de confirmação)

### Tipografia

- Títulos: Fonte encorpada e marcante
- Textos: Fonte moderna e legível (system-ui)

## 📁 Estrutura do Projeto

```
jaba/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout principal com metadata
│   └── page.tsx             # Página inicial
├── components/
│   ├── About.tsx            # Seção sobre o restaurante
│   ├── Contact.tsx          # Seção de contato
│   ├── Delivery.tsx         # Seção de delivery
│   ├── FinalCTA.tsx         # Chamada final à ação
│   ├── Footer.tsx           # Rodapé
│   ├── FloatingWhatsApp.tsx # Botão flutuante do WhatsApp
│   ├── Gallery.tsx          # Galeria de fotos
│   ├── Header.tsx           # Cabeçalho com navegação
│   ├── Hero.tsx             # Seção principal (hero)
│   ├── Highlights.tsx       # Diferenciais
│   ├── Hours.tsx            # Horários de funcionamento
│   ├── Location.tsx         # Localização e mapa
│   ├── Logo.tsx             # Componente de logo
│   ├── Menu.tsx             # Cardápio
│   ├── Promotions.tsx       # Promoções
│   ├── Reservations.tsx     # Formulário de reservas
│   └── Reviews.tsx          # Avaliações de clientes
├── lib/
│   ├── config.ts            # Configuração centralizada do restaurante
│   └── types.ts             # Definições de tipos TypeScript
├── public/                  # Arquivos estáticos (imagens, etc.)
├── CONFIGURACAO.md          # Guia de configuração
├── next.config.ts           # Configuração do Next.js
├── package.json             # Dependências do projeto
├── tsconfig.json            # Configuração do TypeScript
└── tailwind.config.ts       # Configuração do Tailwind CSS
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório (se aplicável)
git clone <repositório-url>
cd jaba

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Build de Produção

```bash
# Crie o build de produção
npm run build

# Teste o build localmente
npm start
```

## ⚙️ Configuração

Antes de publicar o site, preencha os dados reais do restaurante no arquivo `lib/config.ts`.

Consulte o arquivo [CONFIGURACAO.md](./CONFIGURACAO.md) para instruções detalhadas.

### Campos Essenciais

- **WhatsApp:** Número com código do país (ex: 5511999999999)
- **Endereço:** Endereço completo para o mapa
- **Coordenadas:** Latitude e longitude do Google Maps
- **Horários:** Dias e horários de funcionamento
- **Preços:** Modelo de cobrança e valores
- **Cardápio:** Itens reais do restaurante

## 📸 Imagens

### Estrutura de Pastas Sugerida

```
public/
├── images/
│   ├── menu/           # Imagens dos pratos do cardápio
│   ├── gallery/        # Fotos da galeria
│   ├── promotions/     # Imagens de promoções
│   └── hero/           # Imagem de fundo do hero
```

### Adicionando Imagens

1. Crie as pastas necessárias em `public/images/`
2. Adicione as imagens
3. Atualize os caminhos nos arquivos de configuração

## 🌱 Publicação

### Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Vercel detectará automaticamente o projeto Next.js
4. Configure as variáveis de ambiente (se necessário)
5. Deploy automático

### Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto ou conecte o repositório
3. Configure o comando de build: `npm run build`
4. Configure a pasta de publicação: `.next`
5. Deploy

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- **Desktop:** 1024px e acima
- **Tablet:** 768px - 1023px
- **Mobile:** Abaixo de 768px

## ♿ Acessibilidade

O site segue boas práticas de acessibilidade:

- HTML semântico
- Navegação por teclado
- Textos alternativos em imagens
- Contraste adequado
- ARIA labels onde necessário

## 🔍 SEO

O site inclui otimização básica para SEO:

- Meta tags configuradas
- Open Graph para compartilhamento social
- Estrutura semântica
- URLs amigáveis

## 📝 Licença

Este projeto foi desenvolvido para o Bar do Jaba.

## 👥 Suporte

Para dúvidas sobre configuração ou utilização, consulte o arquivo [CONFIGURACAO.md](./CONFIGURACAO.md).

---

Desenvolvido com ❤️ para o Bar do Jaba
