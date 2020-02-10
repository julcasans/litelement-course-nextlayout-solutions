# Estilos en LitElements - Ejercicios

1. El componte no tiene ningún estilo. Agregar los siguientes estilos:

```css
main {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
}
h1 {
  margin: 0;
  padding: 0.2em;
}
section {
  border-style: solid;
  border-width: 1px;        
}
#section-left {
  color: red;
  width: 20vw;
}
#section-center {
  color: blue;
  width: 60vw;
}
#section-right {
  color: green;
  width: 20vw;
}   
```

2. El shadow DOM de un componente web lo protege de los estilos que se definen fuera de él. Sin embargo hay propiedades de css que son heredadas por los hijos, como:

* color y background-color
* font-family y todas las propiedades font-*
* custom properties (--*)

Por este motivo, el título del componente hereda el font-family definido en el html del `index.html`.

Modificar el css del componente para que el título se muestre con la tipografía `"Times New Roman"`.

3. El componente debe tener un borde con una sombra. Agregar el css que consigue este efecto y que se muestra a continuación:
```css
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
```

4. Cuando el componente está deshabilitado (  `<next-layout disabled>`)
se debe aplicar el siguiente estilo (sobre el componente):
```css
  background-color: #efefef;
  opacity: 0.4;
```

5. Agregar estilos para que:
* Todos los párrafos `<p>` que estén en el slot de la derecha estén alineados a izquierda.
```css
  text-align: right;
  margin-right: 0.5em;
```
* Todos los párrafos `<p>` en el slot del centro estén alineados al centro.
```css
  text-align: right;
```
* Todos los párrafos `<p>` del slot izquierdo estén alineados a derecha:
```css
  text-align: left;
  margin-left: 0.5em;
```

En el `index.html` agregar un hijo al componente: `<div slot="left"><p >Left in div</p></div>`, de manera que quede así:

```html
  <next-layout id="layout" title="Title" >
    <p slot="left">Left</p>
    <div slot="left"><p >Left in div</p></div>
    <p slot="center">Center</p>
    <p slot="right">Right</p>
    <p slot="footer">Footer</p>
  </next-weather>
```
¿Por qué el párrafo `<p>` que está dentro del `<div>` no queda alineado a derecha?

6. Dentro de `<style>` que está en `index.html` agregar:
```css
  p {
    text-align: center;
  }
```
¿Cómo afecta esto a los elementos `<p>` que están en el light DOM de `<next-layout>`? ¿Por qué?

7. Extender la API de estilos del componente para que el usuario pueda cambiar el color de fondo y el de la letra del header.

8. El componente tiene una propiedad `darkMode` que es booleana. Hacer que cuando esa propiedad sea true, el componente se muestre en modo oscuro, es decir con el fondo oscuo y las letras en blanco. Como ayuda se tiene la clase dark:

```css
  .dark {
    background-color: #3d3d3d;
    color: #fff;
  }
```