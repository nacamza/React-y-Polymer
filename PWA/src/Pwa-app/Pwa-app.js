import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../Card-element/CardElement';
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * @customElement
 * @polymer
 */
class PwaApp extends PolymerElement {

  handleResponse(event, request){
    console.log(request.response);
    this.data = request.response;
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        header{
                background-color: #0B3D91;
                color: #FFFFFF;
                text-align: center;
                height: 40px;
                line-height: 40px;
                font-family: sans-serif;
            }
      </style>
      <header>NASA: foto del día</header>
      <card-element data="[[data]]"></card-element>
      
      <iron-ajax
        auto
        url="https://api.nasa.gov/planetary/apod"
        params='{"api_key": "knBWAHTr1Yesapf67dQwxpRKc0bCWpejBOt92Thn"}'
        handle-as="json"
        method="GET"
        on-response="handleResponse"
        debounce-duration="300">
      >
    </iron-ajax>
    `;
  }
}

window.customElements.define('pwa-app', PwaApp);
