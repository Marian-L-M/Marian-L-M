class Contact extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!--Contact Form-->
      <section id="contact" class="container small-img">
        <h2>Contact Me</h2>
        <div class="row justify-content-md-center no-gutters">
          <div class="col-12 col-md-3 no-mobile"> 
            <p>Name<span class="red-highlight">※</span></p>  
            <p>Mail<span class="red-highlight">※</span></p>  
            <p>Topic</p>  
            <p>Content</p>  
            <p><span class="red-highlight">※ required</span></p>
          </div>
          <form action="./assets/php/contact.php" method="post" id="form" class="col-12 col-md-9 contact-form"> 
            <input type="text" placeholder="Insert Name" name="cf_name" class="form-item"><br />
            <input type="text" placeholder="Insert Mail" name="cf_mail" class="form-item"><br />
            <input type="text" placeholder="Insert Topic" name="cf_topic" class="form-item"><br />
            <textarea cols="30" rows="10" placeholder="Message" name="cf_message" class="form-item"></textarea><br />
            <input type="submit" value="send" id="contact-btn">
          </form>
        </div>
      </section>
    `
    }
  }
  
  customElements.define('contact-component', Contact);