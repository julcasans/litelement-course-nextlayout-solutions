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
      :host {
        display: block;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      :host([disabled]) {       
        background-color: #efefef;
        opacity: 0.4;
      }
      /* begin new code */
      header {
        background-color: var(--next-layer-header-background);
        color: var(--next-layer-header-color);
      }
      /* end new code */
      h1 {
        margin: 0;
        padding: 0.2em;
        font-family: "Times New Roman";
      }      
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
      #section-left ::slotted(p) {
        text-align: right;
        margin-right: 0.5em;
      }
      #section-center ::slotted(p) {
        text-align: center;
      }
      #section-right ::slotted(p) {
        text-align: left;
        margin-left: 0.5em;
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