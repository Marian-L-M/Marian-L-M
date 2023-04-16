class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <nav class="nav-menu">
        <ul class="nav-btns">
        <li><a href="#landing">INTRODUCTION</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
        </ul>
        </nav>
        <div class="hamburger-container" aria-label="open mobile menu">
          <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </header>
    `
    }
  }
  
  customElements.define('header-component', Header);