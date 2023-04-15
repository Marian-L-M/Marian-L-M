class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <div class="sns-icons">
        <a href="https://github.com/Marian-L-M/"><i class="fab fa-github icon"></i></a>
        <a href="https://linkedin.com/in/marian-maschke"><i class="fab fa-linkedin-in icon"></i></a>
        </div>
        <div id="subtitle">Designed and developed by Marian Maschke</div>
    </footer>
    `
    }
  }
  
  customElements.define('footer-component', Footer);