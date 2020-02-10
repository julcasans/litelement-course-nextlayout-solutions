import {LitElement, html, css} from 'lit-element';

class NextLayout extends LitElement {

  static get properties() {
    return {
      title: {type: String},
      darkMode: {type: Boolean}
    };
  }

  static get styles() {
    return css`
      /* begin new code */
      h1 {
        margin: 0;
        padding: 0.2em;
        font-family: "Times New Roman";
      }
      /* end new code */
      main {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        align-content: stretch;
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
    `;
  }

  render() {
    return html`
      <header><h1>${this.title}</h1></header>
      <main>
        <section id="section-left"><slot name="left"></slot></section>
        <section id="section-center"><slot name="center"></slot></section>
        <section id="section-right"><slot name="right"></slot></section>
      </main>
      <footer><slot name="footer"></slot></footer>
    `;
  }

}

customElements.define('next-layout', NextLayout);