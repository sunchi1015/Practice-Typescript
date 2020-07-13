import './style.css';

// Vue js class created in plain javascript
export class Vue {
  constructor(options: any) {
    const el = document.querySelector(options.el);
    const data = options.data;

    Object.keys(data).forEach(key => {
      console.log(el);
      el.innerHTML = el.innerHTML.replace(`{{ ${key} }}`, data[key]);
    });
    console.log(el);
  }
}

// module code Vue class clalled here
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    age: 23
  }
});
