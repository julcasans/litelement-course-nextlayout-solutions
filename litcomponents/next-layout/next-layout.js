import {LitElement, html} from 'lit-element';

class NextLayout extends LitElement {

  static get properties() {
    return {
      title: {type: String},
      darkMode: {type: Boolean}
    };
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