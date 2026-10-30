# Guia de Configuração - Bar do Jaba

Este documento orienta como configurar o site do Bar do Jaba com os dados reais do restaurante.

## Arquivo de Configuração Principal

Todos os dados do restaurante estão centralizados em: `lib/config.ts`

## Campos que Devem Ser Preenchidos

### 1. Informações Básicas

```typescript
name: "Bar do Jaba",  // Já preenchido
tagline: "Self-Service com Churrasco",  // Já preenchido
```

### 2. Contato

**WhatsApp (OBRIGATÓRIO para funcionalidade principal)**
```typescript
whatsapp: "5511999999999",  // Substitua pelo número real com código do país (55 para Brasil)
```

**Telefone (opcional)**
```typescript
phone: "(11) 9999-9999",  // Substitua pelo telefone real se disponível
```

**Instagram**
```typescript
instagram: "bardojaba",  // Substitua pelo usuário do Instagram (sem @)
```

**E-mail (opcional)**
```typescript
email: "contato@bardojaba.com.br",  // Substitua pelo e-mail real se disponível
```

### 3. Endereço

```typescript
address: {
  street: "Rua Exemplo, 123",  // Nome da rua e número
  neighborhood: "Bairro",  // Nome do bairro
  city: "São Paulo",  // Nome da cidade
  state: "SP",  // Sigla do estado
  zipCode: "00000-000",  // CEP
  fullAddress: "Rua Exemplo, 123 - Bairro, São Paulo - SP, 00000-000",  // Endereço completo para o mapa
  coordinates: {
    lat: -23.5505,  // Latitude (obter do Google Maps)
    lng: -46.6333,  // Longitude (obter do Google Maps)
  },
  reference: "Próximo ao ponto de referência",  // Ponto de referência próximo
}
```

**Como obter as coordenadas:**
1. Acesse [Google Maps](https://www.google.com/maps)
2. Pesquise o endereço do restaurante
3. Clique com o botão direito no local
4. Selecione "As primeiras coordenadas estarão aqui"
5. Copie os valores de latitude e longitude

### 4. Horários de Funcionamento

```typescript
hours: {
  monday: { open: "11:00", close: "15:00", closed: false },
  tuesday: { open: "11:00", close: "15:00", closed: false },
  wednesday: { open: "11:00", close: "15:00", closed: false },
  thursday: { open: "11:00", close: "15:00", closed: false },
  friday: { open: "11:00", close: "15:00", closed: false },
  saturday: { open: "11:00", close: "16:00", closed: false },
  sunday: { open: "11:00", close: "15:00", closed: false },
}
```

**Dias fechados:** Defina `closed: true` para dias que o restaurante não abre

### 5. Preços

```typescript
pricing: {
  model: "per_kg",  // "per_kg" para preço por quilo ou "per_person" para preço fixo por pessoa
  pricePerKg: 59.90,  // Preço por quilo (se aplicável)
  pricePerPerson: null,  // Preço por pessoa (se aplicável)
  drinkPrices: {
    // Adicione preços de bebidas se necessário
  },
}
```

### 6. Serviços

```typescript
services: {
  selfService: true,  // Mantenha true se oferecer self-service
  churrasco: true,  // Mantenha true se oferecer churrasco
  delivery: {
    available: false,  // Mude para true se oferecer delivery
    platforms: ["iFood", "Rappi"],  // Adicione as plataformas utilizadas
    ownDelivery: false,  // Mude para true se fizer delivery próprio
    deliveryArea: "Descrição da área de entrega",  // Descreva a área de atendimento
  },
  reservations: {
    available: false,  // Mude para true se aceitar reservas
    method: "whatsapp",  // "whatsapp" ou "system"
  },
  marmitex: {
    available: false,  // Mude para true se oferecer marmitex
  },
}
```

### 7. Avaliações

```typescript
reviews: {
  platform: "Google Maps",  // Plataforma de avaliações
  link: "https://g.page/r/SEU_LINK/review",  // Link para avaliar
  averageRating: 4.5,  // Nota média (se disponível)
  totalReviews: 150,  // Total de avaliações (se disponível)
}
```

### 8. Sobre o Restaurante

```typescript
about: {
  history: "História do Bar do Jaba...",  // História real do restaurante
  since: 2010,  // Ano de fundação
  specialties: ["Self-service", "Churrasco", "Comida brasileira"],  // Especialidades
  team: "Informações sobre a equipe...",  // Informações sobre a equipe
}
```

## Cardápio

O cardápio está configurado em `lib/config.ts` na seção `menuConfig`.

### Estrutura de Categorias

```typescript
categories: [
  {
    id: "carnes",
    name: "Carnes e Churrasco",
    description: "Carnes preparadas na brasa",
    items: [
      {
        id: "picanha",
        name: "Picanha",
        description: "Picanha grelhada na brasa",
        price: null,  // Preço em R$ (se aplicável para itens individuais)
        image: "/images/menu/picanha.jpg",  // Caminho da imagem
        featured: true,  // true para destacar o item
      },
    ],
  },
  // Adicione mais categorias conforme necessário
]
```

### Adicionando Imagens do Cardápio

1. Crie a pasta `public/images/menu/` se não existir
2. Adicione as imagens dos pratos
3. Atualize o caminho no campo `image` de cada item

### Categorias Sugeridas

- `carnes` - Carnes e Churrasco
- `pratos-quentes` - Pratos Quentes
- `acompanhamentos` - Acompanhamentos
- `saladas` - Saladas
- `bebidas` - Bebidas
- `sobremesas` - Sobremesas

## Promoções

As promoções estão configuradas em `lib/config.ts` na seção `promotionsConfig`.

```typescript
promotionsConfig = {
  active: true,  // Mude para true quando houver promoções ativas
  items: [
    {
      id: "promo-1",
      title: "Promoção da Semana",
      description: "Descrição da promoção",
      image: "/images/promotions/promo-1.jpg",
      discount: 20,  // Porcentagem de desconto (opcional)
      originalPrice: 79.90,  // Preço original (opcional)
      promotionalPrice: 63.90,  // Preço promocional (opcional)
      startDate: "2024-01-01",  // Data de início (YYYY-MM-DD)
      endDate: "2024-12-31",  // Data de encerramento (YYYY-MM-DD)
      conditions: "Condições da promoção",  // Condições específicas
    },
  ],
}
```

## Galeria de Fotos

As fotos da galeria estão configuradas em `lib/config.ts` na seção `galleryConfig`.

```typescript
galleryConfig = {
  images: [
    {
      src: "/images/gallery/churrasco.jpg",
      alt: "Churrasco na brasa",
      category: "churrasco",
    },
    // Adicione mais imagens
  ],
}
```

### Adicionando Imagens da Galeria

1. Crie a pasta `public/images/gallery/` se não existir
2. Adicione as fotos do restaurante
3. Adicione as entradas no array `images`

**Categorias sugeridas:**
- `churrasco` - Fotos de churrasco
- `buffet` - Fotos do buffet
- `pratos` - Fotos de pratos servidos
- `ambiente` - Fotos do ambiente
- `equipe` - Fotos da equipe (se autorizado)

## Imagens do Site

### Imagens do Hero Section

A imagem de fundo da seção principal está atualmente usando uma imagem de placeholder. Para usar uma imagem real:

1. Adicione a imagem em `public/images/`
2. Edite `components/Hero.tsx`
3. Substitua a URL do placeholder pelo caminho da sua imagem

### Imagens de Seções

Seções como "Sobre" também usam imagens de placeholder. Siga o mesmo processo para substituí-las.

## Publicação do Site

### Build de Produção

```bash
npm run build
```

### Testar Build Localmente

```bash
npm run start
```

### Plataformas de Hospedagem Sugeridas

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **GitHub Pages** (com configuração adicional)

## SEO

O SEO básico já está configurado em `app/layout.tsx`. Para personalizar:

```typescript
export const metadata: Metadata = {
  title: "Bar do Jaba | Self-Service com Churrasco",
  description: "Conheça o Bar do Jaba, restaurante de self-service com churrasco...",
  keywords: ["self-service", "churrasco", "restaurante", "comida brasileira"],
  openGraph: {
    title: "Bar do Jaba | Self-Service com Churrasco",
    description: "Conheça o Bar do Jaba...",
    type: "website",
    locale: "pt_BR",
  },
}
```

## Suporte

Se tiver dúvidas ou precisar de ajuda adicional, entre em contato.

## Checklist Antes da Publicação

- [ ] Preencher número do WhatsApp
- [ ] Preencher endereço completo
- [ ] Adicionar coordenadas do mapa
- [ ] Preencher horários de funcionamento
- [ ] Configurar preços (por quilo ou por pessoa)
- [ ] Adicionar itens do cardápio real
- [ ] Adicionar fotos reais do restaurante
- [ ] Configurar link do Instagram
- [ ] Configurar link de avaliações
- [ ] Testar todos os links
- [ ] Testar funcionalidade de WhatsApp
- [ ] Testar em dispositivos móveis
- [ ] Verificar responsividade
