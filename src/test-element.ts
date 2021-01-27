console.log('::-> Test HTMLElement type <-::');

const tabDivContent: HTMLElement = document.getElementById('app');
// const tabDivContent: HTMLElement = null;

if (tabDivContent instanceof Element) {
  tabDivContent.classList.add('naturalClass');
  console.log('HTML element');
} else {
  console.log('NOT HTML element');
}

if (tabDivContent instanceof Element) {
  tabDivContent.classList.remove('invisible_tab');
  tabDivContent.classList.add('visible_tab');
}

// if (this.orderView.buttonTabIndex === undefined) {
//   tabIndex = '0';
//   this.orderView.opArg3 = false;
// }
