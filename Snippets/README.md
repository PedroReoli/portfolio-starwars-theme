# 🌟 Coleção Star Wars - Snippets

## Visão Geral
Esta é uma coleção completa de snippets inspirados no universo Star Wars, organizados por funcionalidade e personagens icônicos.

## 📁 Estrutura dos Diretórios

### 🤖 BB-8 (`/bb8/`)
- **Arquivo**: `bb8.tsx`
- **Tecnologia**: React + Styled Components
- **Funcionalidade**: Toggle switch animado com o droid BB-8
- **Características**:
  - Animação completa do droid
  - Efeitos de cenário (estrelas, nuvens, montanhas)
  - Interação hover e click
  - Design responsivo

### ⚡ Lightsaber (`/lightsaber/`)
- **Arquivos**: `lightsaber.css`, `lightsaber.html`
- **Funcionalidade**: Sabres de luz interativos
- **Personagens Suportados**:
  - **Yoda** (Verde)
  - **Darth Vader** (Vermelho)
  - **Mace Windu** (Roxo)
  - **Obi-Wan Kenobi** (Azul)
- **Características**:
  - Animações de plasma
  - Efeitos de brilho
  - Controles de toggle
  - Cores específicas por personagem

### 🎬 Opening Crawl (`/opening/`)
- **Arquivos**: `opening.html`, `opening.scss`, `opening.js`
- **Funcionalidade**: Abertura clássica do Star Wars de 1977
- **Características**:
  - Logo animado
  - Texto de abertura (crawl)
  - Sincronização com áudio
  - Efeitos 3D
  - Baseado no original de Tim Pietrusky

### 🚶‍♂️ AT-AT Walker (`/walker/`)
- **Arquivos**: `walker.html`, `walker.less`
- **Funcionalidade**: Animação do Walker AT-AT
- **Características**:
  - Movimento de pernas
  - Cenário espacial
  - Naves espaciais
  - Montanhas e rochas
  - Efeitos de profundidade

### ✨ Tipografia (`/tipography.css`)
- **Arquivo**: `tipography.css`
- **Funcionalidade**: Efeitos visuais Star Wars
- **Características**:
  - Fundo de estrelas
  - Efeitos de fade
  - Perspectiva de texto
  - Cores temáticas

## 🎯 Como Usar

### BB-8 Toggle
```tsx
import Switch from '@/Snippets/bb8/bb8.tsx';

// Use o componente
<Switch />
```

### Lightsaber
```html
<!-- Inclua o CSS -->
<link rel="stylesheet" href="Snippets/lightsaber/lightsaber.css">

<!-- Use o HTML -->
<div class="lightsaber">
  <label for="yoda-example"></label>
  <input type="checkbox" id="yoda-example" checked="checked">
  <div class="switch"></div>
  <div class="plasma yoda"></div>
</div>
```

### Opening Crawl
```html
<!-- Inclua os arquivos -->
<link rel="stylesheet" href="Snippets/opening/opening.scss">
<script src="Snippets/opening/opening.js"></script>

<!-- Use o HTML -->
<article class="starwars">
  <!-- Conteúdo da abertura -->
</article>
```

### AT-AT Walker
```html
<!-- Inclua o LESS -->
<link rel="stylesheet" href="Snippets/walker/walker.less">

<!-- Use o HTML -->
<section>
  <div class="at-at">
    <!-- Conteúdo do Walker -->
  </div>
</section>
```

## 🎨 Personalização

### Cores dos Sabres de Luz
```css
.yoda { /* Verde */ }
.vader { /* Vermelho */ }
.windu { /* Roxo */ }
.obi-wan { /* Azul */ }
```

### Configuração do BB-8
```css
.bb8-toggle {
  --toggle-size: 16px;
  --accent: #de7d2f;
  --bb8-bg: #fff;
}
```

### Efeitos de Estrelas
```css
.stars {
  /* Configuração das estrelas */
  box-shadow: 970px 909px #FFF, /* ... */;
}
```

## 🔧 Tecnologias Utilizadas

- **React** + **Styled Components** (BB-8)
- **CSS3** + **Animações** (Lightsaber)
- **SCSS** + **JavaScript** (Opening Crawl)
- **LESS** + **HTML** (AT-AT Walker)
- **CSS Puro** (Tipografia)

## 📱 Responsividade

Todos os componentes são responsivos e funcionam em:
- Desktop
- Tablet
- Mobile

## 🎵 Áudio

O Opening Crawl inclui:
- Arquivos de áudio originais
- Sincronização automática
- Controles de play/pause

## 🌟 Créditos

- **BB-8**: Design original inspirado no droid
- **Lightsaber**: Cores e efeitos dos filmes
- **Opening Crawl**: Baseado no trabalho de Tim Pietrusky
- **AT-AT Walker**: Animação inspirada em Hoth
- **Tipografia**: Efeitos visuais do universo Star Wars

## 📄 Licença

Todos os snippets são para uso educacional e de demonstração.
Sound copyright by The Walt Disney Company.

---

**Que a Força esteja com você!** 🌟 