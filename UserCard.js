const template = document.createElement('template');
template.innerHTML = `
  <style>
    .user-card {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px;
      border-radius: 8px;
      background: #fff;
    }
    .user-card h3 {
      margin: 0;
    }
    .user-card p {
      margin: 0;
      color: #888;
    }
  </style>
  <div class="user-card">
    <h3></h3>
    <p></p>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['name', 'email'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 把資料放進去
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('p').innerText = this.getAttribute('email');

    if (name === 'name') {
      this.shadowRoot.querySelector('h3').innerText = newValue;
    } else if (name === 'email') {
      this.shadowRoot.querySelector('p').innerText = newValue;
    }
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('user-card-clicked', {
        detail: {
          name: this.getAttribute('name'),
          email: this.getAttribute('email')
        }
      }));
    });
  }
}

customElements.define('user-card', UserCard);

export default UserCard;