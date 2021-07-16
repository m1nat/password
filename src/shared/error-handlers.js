export const showFormErrorMessege = () => {
  const inputErrorTag = document.querySelector('.input-error');
  inputErrorTag.style.display = 'block';
};

export const hideFormErrorMessege = () => {
  const inputErrorTag = document.querySelector('.input-error');
  inputErrorTag.style.display = 'none';
};

export const showFormErrorMessegeEmail = () => {
  const inputErrorTag = document.querySelector('.email-error');
  inputErrorTag.style.display = 'block';
};

export const hideFormErrorMessegeEmail = () => {
  const inputErrorTag = document.querySelector('.email-error');
  inputErrorTag.style.display = 'none';
};

export const showErrorNotification = error => {
  const notification = document.createElement('div');
  notification.className = 'error-notification';
  const body = document.getElementsByTagName('body')[0];
  body.append(notification);
  notification.innerText = error.response.data.error.message;
  setTimeout(() => {
    notification.style.display = 'none'
  }, 5000);
};
