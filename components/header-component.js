class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <nav class="nav-btns">
        <ul>
          <a href="#landing"><li>INTRODUCTION</li></a>
          <a href="#portfolio"><li>PORTFOLIO</li></a>
          <a href="#about"><li>ABOUT</li></a>
          <a href="#contact"><li>CONTACT</li></a>
        </ul>
        <div class="hamburger-container" aria-label="open mobile menu">
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
    `
    }
  }
  
  customElements.define('header-component', Header);