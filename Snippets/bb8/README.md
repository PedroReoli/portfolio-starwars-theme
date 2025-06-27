# 🤖 BB-8 Toggle Switch

## Visão Geral
Componente React que cria um toggle switch animado com o droid BB-8 do Star Wars. O droid se move de um lado para o outro quando o switch é ativado.

## 🎯 Funcionalidades

### Animações Principais
- **Movimento do BB-8**: O droid se move da esquerda para a direita
- **Rotação do corpo**: O corpo do droid gira 225° quando ativado
- **Movimento da cabeça**: A cabeça se inclina durante a interação
- **Antenas**: As antenas se movem no hover

### Efeitos de Cenário
- **Estrelas**: 7 estrelas que se movem para posições específicas
- **Nuvens**: 3 nuvens que desaparecem quando ativado
- **Montanhas**: 3 montanhas (Gomrassen, Hermes, Chenini) que se elevam
- **Planetas**: 2 planetas (Tatto-1, Tatto-2) que se movem

### Interações
- **Hover**: Efeitos visuais quando o mouse passa sobre o droid
- **Click**: Ativa/desativa o switch
- **Active**: Animação de inclinação da cabeça

## 🎨 Customização

### Variáveis CSS
```css
.bb8-toggle {
  --toggle-size: 16px;        /* Tamanho base */
  --toggle-width: 10.625em;   /* Largura do container */
  --toggle-height: 5.625em;   /* Altura do container */
  --bb8-diameter: 4.375em;    /* Diâmetro do BB-8 */
  --accent: #de7d2f;          /* Cor de destaque */
  --bb8-bg: #fff;             /* Cor do BB-8 */
  --transition: 0.4s;         /* Duração das transições */
}
```

### Cores Personalizáveis
```css
/* Cor do BB-8 */
--bb8-bg: #fff;

/* Cor de destaque */
--accent: #de7d2f;

/* Cor do fundo */
--toggle-bg: linear-gradient(#2c4770, #070e2b 35%, #628cac 50% 70%, #a6c5d4);
```

## 📱 Responsividade

O componente é totalmente responsivo com breakpoints:
- **Mobile**: Escala reduzida para telas pequenas
- **Tablet**: Escala intermediária
- **Desktop**: Escala completa

## 🔧 Uso

### Importação
```tsx
import Switch from '@/Snippets/bb8/bb8.tsx';
```

### Implementação
```tsx
function App() {
  return (
    <div>
      <Switch />
    </div>
  );
}
```

### Com Estado
```tsx
function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Switch />
      <p>Status: {isActive ? 'Ativo' : 'Inativo'}</p>
    </div>
  );
}
```

## 🎭 Animações Detalhadas

### BB-8 Body
- **Rotação**: 45° → 225° quando ativado
- **Transição**: 0.4s ease-out

### BB-8 Head
- **Hover**: Inclinação de 25° para esquerda/direita
- **Active**: Inclinação adicional durante o clique

### Estrelas
- **Posição inicial**: `top: 100%`
- **Posição final**: Posições específicas (0.625em, 1.875em, etc.)
- **Transições**: Diferentes durações (0.2s, 0.3s, 0.4s, etc.)

### Nuvens
- **Movimento**: `right: -100%` quando ativado
- **Transições**: 0.6s, 0.8s para diferentes nuvens

## 🌟 Efeitos Visuais

### Sombras
- **BB-8**: `drop-shadow(0 0.063em 0.125em gray)`
- **Planetas**: `box-shadow` com cores específicas

### Gradientes
- **Fundo**: Gradiente complexo com múltiplas cores
- **BB-8**: Gradientes para criar profundidade

### Filtros
- **Nuvens**: `blur(0.125em)` para efeito de névoa
- **Estrelas**: `drop-shadow` para brilho

## 🎯 Estados do Componente

### Inativo (Padrão)
- BB-8 na posição esquerda
- Estrelas na parte inferior
- Nuvens visíveis
- Montanhas na parte inferior

### Ativo (Checked)
- BB-8 na posição direita
- Estrelas em posições específicas
- Nuvens desaparecem
- Montanhas se elevam

### Hover
- Antenas se movem
- Cabeça se inclina
- Efeitos de brilho

## 🔍 Estrutura HTML

```html
<label class="bb8-toggle">
  <input class="bb8-toggle__checkbox" type="checkbox" />
  <div class="bb8-toggle__container">
    <div class="bb8-toggle__scenery">
      <!-- Estrelas, nuvens, montanhas -->
    </div>
    <div class="bb8">
      <div class="bb8__head-container">
        <div class="bb8__antenna"></div>
        <div class="bb8__antenna"></div>
        <div class="bb8__head"></div>
      </div>
      <div class="bb8__body"></div>
    </div>
    <div class="artificial__hidden">
      <div class="bb8__shadow"></div>
    </div>
  </div>
</label>
```

## 🎨 Personalização Avançada

### Mudança de Cores
```css
.bb8-toggle {
  --accent: #ff6b35;          /* Laranja */
  --bb8-bg: #f0f0f0;          /* Cinza claro */
}
```

### Mudança de Tamanho
```css
.bb8-toggle {
  --toggle-size: 20px;        /* Maior */
  --toggle-size: 12px;        /* Menor */
}
```

### Mudança de Velocidade
```css
.bb8-toggle {
  --transition: 0.2s;         /* Mais rápido */
  --transition: 0.8s;         /* Mais lento */
}
```

---

**Que a Força esteja com o BB-8!** 🤖✨ 