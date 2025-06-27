# ⚡ Lightsaber Collection

## Visão Geral
Coleção de sabres de luz interativos inspirados nos personagens icônicos do Star Wars. Cada sabre tem sua cor característica e efeitos de plasma únicos.

## 🎯 Personagens Suportados

### 🟢 Yoda (Verde)
- **Cor**: `rgb(135,220,90)`
- **Efeito**: Plasma verde com brilho suave
- **Característica**: Sabre mais curto, estilo do Mestre Jedi

### 🔴 Darth Vader (Vermelho)
- **Cor**: `rgb(229,17,21)`
- **Efeito**: Plasma vermelho intenso
- **Característica**: Sabre do lado sombrio da Força

### 🟣 Mace Windu (Roxo)
- **Cor**: `rgb(202,116,221)`
- **Efeito**: Plasma roxo único
- **Característica**: Sabre raro, cor exclusiva

### 🔵 Obi-Wan Kenobi (Azul)
- **Cor**: `rgb(55,132,214)`
- **Efeito**: Plasma azul clássico
- **Característica**: Sabre tradicional dos Jedi

## 🎨 Funcionalidades

### Animações de Plasma
- **Extensão**: O plasma se estende de 0 a 250px
- **Transição**: 300ms suave
- **Efeito de brilho**: Animação contínua de 2s

### Controles Interativos
- **Toggle**: Clique para ativar/desativar
- **Hover**: Efeitos visuais no hover
- **Switch**: Botão que muda de cor

### Efeitos Visuais
- **Blur**: Efeito de desfoque no plasma
- **Box-shadow**: Brilho característico de cada cor
- **Gradientes**: Efeitos de profundidade

## 🔧 Implementação

### HTML Básico
```html
<div class="lightsaber">
  <label for="yoda-example"></label>
  <input type="checkbox" id="yoda-example" checked="checked">
  <div class="switch"></div>
  <div class="plasma yoda"></div>
</div>
```

### CSS Necessário
```html
<link rel="stylesheet" href="Snippets/lightsaber/lightsaber.css">
```

### Exemplo Completo
```html
<section class="the-demo">
  <div class="example-item">
    <div class="lightsaber">
      <label for="yoda-example"></label>
      <input type="checkbox" id="yoda-example" checked="checked">
      <div class="switch"></div>
      <div class="plasma yoda"></div>
    </div>
    <h3>Yoda</h3>
  </div>
  
  <div class="example-item">
    <div class="lightsaber">
      <label for="vader-example"></label>
      <input type="checkbox" id="vader-example" checked="checked">
      <div class="switch"></div>
      <div class="plasma vader"></div>
    </div>
    <h3>Vader</h3>
  </div>
</section>
```

## 🎭 Animações Detalhadas

### Plasma Extension
```css
.lightsaber input[type=checkbox]:checked ~ div.plasma {
  height: 250px;  /* Extensão máxima */
}
```

### Glow Effects
```css
@keyframes yoda {
  from { box-shadow: 0 0 10px #7EC855; }
  50% { box-shadow: 0 0 16px #7EC855; }
  to { box-shadow: 0 0 10px #7EC855; }
}
```

### Switch Animation
```css
.lightsaber input[type=checkbox]:hover ~ div.switch {
  background: #c09853;  /* Cor no hover */
  left: 12px;           /* Movimento */
}
```

## 🎨 Personalização

### Cores Personalizadas
```css
/* Novo personagem */
.custom-lightsaber {
  background: linear-gradient(
    to right, 
    rgb(255, 100, 100) 0%,
    rgba(254,254,254,1) 30%,
    rgba(254,254,254,1) 47%,
    rgba(254,254,254,1) 71%,
    rgb(255, 100, 100) 100%
  );
  animation-name: custom-glow;
}

@keyframes custom-glow {
  from { box-shadow: 0 0 10px #ff6464; }
  50% { box-shadow: 0 0 16px #ff6464; }
  to { box-shadow: 0 0 10px #ff6464; }
}
```

### Tamanhos Personalizados
```css
.lightsaber .plasma {
  height: 0;           /* Altura inicial */
  width: 10px;         /* Largura do plasma */
}

.lightsaber input[type=checkbox]:checked ~ div.plasma {
  height: 300px;       /* Altura personalizada */
}
```

### Velocidades de Animação
```css
.lightsaber .plasma {
  transition: height 500ms;  /* Mais lento */
  /* ou */
  transition: height 150ms;  /* Mais rápido */
}
```

## 🌟 Efeitos Especiais

### Blur Effect
```css
.lightsaber .plasma {
  filter: blur(1px);  /* Efeito de desfoque */
}
```

### Multiple Gradients
```css
.yoda {
  background: 
    linear-gradient(to right, rgb(135,220,90) 0%, rgba(254,254,254,1) 30%),
    linear-gradient(to right, rgb(135,220,90) 0%, rgba(254,254,254,1) 70%),
    linear-gradient(to right, rgb(135,220,90) 0%, rgba(254,254,254,1) 100%);
}
```

## 📱 Responsividade

### Breakpoints
```css
@media (max-width: 768px) {
  .lightsaber .plasma {
    width: 8px;  /* Mais fino em mobile */
  }
  
  .lightsaber input[type=checkbox]:checked ~ div.plasma {
    height: 200px;  /* Menor extensão */
  }
}
```

## 🎯 Estados do Componente

### Inativo
- Plasma retraído (height: 0)
- Switch na posição inicial
- Sem efeitos de brilho

### Ativo
- Plasma estendido (height: 250px)
- Switch na posição final
- Efeitos de brilho ativos

### Hover
- Switch muda de cor
- Efeitos visuais adicionais

## 🔍 Estrutura CSS

### Componente Principal
```css
.lightsaber { 
  position: relative; 
}
```

### Label (Handle)
```css
.lightsaber label {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  /* Estilo do cabo do sabre */
}
```

### Switch
```css
.lightsaber .switch {
  background: #B94A37;
  width: 5px;
  height: 10px;
  /* Posicionamento e transições */
}
```

### Plasma
```css
.lightsaber .plasma {
  transition: height 300ms;
  border-radius: 12px 12px 0 0;
  position: absolute;
  bottom: 55px;
  left: 2px;
  width: 10px;
  height: 0;
  filter: blur(1px);
}
```

## 🎨 Temas de Cores

### Paleta Jedi
- **Verde**: `#87DC5A` (Yoda)
- **Azul**: `#3784D6` (Obi-Wan)
- **Roxo**: `#CA74DD` (Windu)

### Paleta Sith
- **Vermelho**: `#E51115` (Vader)

### Cores Neutras
- **Branco**: `#FEFEFE` (Centro do plasma)
- **Cinza**: `#E2E2E2` (Cabo)

---

**Que a Força esteja com seus sabres!** ⚡✨ 