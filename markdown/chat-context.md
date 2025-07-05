# Chat Context - StarWarsPortfolio

## Contexto do Projeto

### 🎯 Objetivo Principal
Portfolio pessoal com tema Star Wars, desenvolvido em React + TypeScript + Vite.

### 🏗️ Arquitetura Atual
- **Frontend**: React + TypeScript + Vite
- **Componentes**: Funcionais com hooks
- **Roteamento**: React Router
- **Estilização**: CSS puro com organização modular

### 📁 Estrutura de Arquivos
```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.tsx      # Navegação principal
│   ├── Background.tsx  # Fundo estrelado
│   ├── RootLayout.tsx  # Layout base
│   └── bb8/           # Componente BB-8
├── css/               # Estilos organizados
│   ├── SharedComponents.css  # Componentes reutilizáveis
│   ├── AboutMe.css           # Estilos específicos da página
│   └── ...
└── pages/             # Páginas da aplicação
    └── AboutMe.tsx    # Página sobre mim
```

## Decisões Técnicas

### 🎨 Organização CSS
**Decisão**: Criar `SharedComponents.css` para componentes reutilizáveis
- **Motivo**: Evitar duplicação de código e facilitar manutenção
- **Benefícios**: Código mais limpo, reutilização, consistência visual
- **Implementação**: Migração de navbar, background e root layout

### 🔧 Padrões de Import
**Decisão**: Usar alias `@/` para imports
- **Estrutura**: `@/css/` para estilos, `@/components/` para componentes
- **Benefícios**: Imports mais limpos e fáceis de manter

### 📱 Responsividade
**Decisão**: Mobile-first com breakpoints específicos
- **Breakpoints**: 768px (tablet), 480px (mobile)
- **Navbar**: Adaptação automática para mobile (esconde texto, reduz altura)

## Componentes Identificados

### ✅ Reutilizáveis (SharedComponents.css)
1. **Navbar**: Navegação principal com logo Star Wars
2. **Background**: Sistema de estrelas com tsParticles (400 estrelas com efeito twinkle)
3. **RootLayout**: Estrutura base da aplicação

### 🔄 Potenciais Reutilizáveis
1. **Cards**: Foto, descrição, seções
2. **Botões**: Interações e navegação
3. **Loading**: Estados de carregamento
4. **Animações**: Transições e efeitos

## Temas e Estilos

### 🎨 Paleta de Cores
- **Primária**: #fed34f (amarelo Star Wars)
- **Secundária**: #4bd5ee (azul Jedi)
- **Sith**: #8b0000 (vermelho escuro)
- **Fundo**: #0a0a0a (preto)
- **Cards**: #1a1a1a (cinza escuro)

### 🌟 Animações
- **Stars**: 400 estrelas com tsParticles, efeito twinkle e distribuição automática
- **Scale**: Hover no logo Star Wars
- **Fade**: Transições suaves
- **Responsive**: Estrelas se adaptam ao redimensionamento da janela

## Próximas Decisões

### 🔮 Sistema de Temas
- **Jedi/Sith**: Alternância de cores e estilos
- **Implementação**: CSS variables + classes condicionais

### 🧩 Componentização
- **Cards**: Componentes reutilizáveis para seções
- **Botões**: Padronização de interações
- **Loading**: Estados de carregamento consistentes

### 📊 Performance
- **Lazy Loading**: Carregamento sob demanda
- **CSS Optimization**: Redução de duplicação
- **Bundle Size**: Otimização de imports

## Regras de Desenvolvimento

### 📝 Commits
- **Padrão**: Inglês técnico e semântico
- **Exemplo**: `feat: add shared components css structure`

### 🎯 Componentes
- **SRP**: Responsabilidade única
- **Reutilização**: Moderada e justificada
- **Especificidade**: Componentes específicos preferidos

### 🎨 CSS
- **Organização**: `src/css/` com arquivos específicos
- **Reutilização**: `SharedComponents.css` para elementos comuns
- **Responsividade**: Mobile-first obrigatório 