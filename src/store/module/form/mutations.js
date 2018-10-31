import Inputmask from 'inputmask';

export const UPDATE_PHONE_NUMBER = (state, phoneNumber) => {
  try {
  //regex for valid phone number
    let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    state.validPhoneNumber = re.test(phoneNumber);
    console.log(re.test(phoneNumber));
    state.phoneNumber = phoneNumber;

    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(document.getElementById('phone_number'));
  } catch (error) {
    console.log('UPDATE_PHONE_NUMBER:' + error)
  }
}
export const UPDATE_ENTER_CODE = (state, enterCode) => {
  state.enterCode = enterCode;
}

export const START_TIMER = (state) => {
  try {
     let timer = setInterval(() => {
      if (state.time > 0) {
        state.time--;
      } else {
        clearInterval(timer);
      }
     }, 1000)
  } catch (error) {
    console.log("START_TIMER: " + error)
  }
}
