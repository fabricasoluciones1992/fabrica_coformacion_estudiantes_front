import Swal from 'sweetalert2';

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@uniempresarial\.edu\.co$/
  return emailRegex.test(email)
}

export const showPassword = (inputId) => {
  const passwordInput = document.getElementById(inputId);
  const iconSpan = document.querySelector(`#${inputId} + .btn .icon`);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    iconSpan.classList.remove('fa-eye-slash');
    iconSpan.classList.add('fa-eye');

    // Cambiar de vuelta a tipo de entrada de contraseña después de 2 segundos
    setTimeout(() => {
      passwordInput.type = 'password';
      iconSpan.classList.remove('fa-eye');
      iconSpan.classList.add('fa-eye-slash');
    }, 2000); // Cambia este valor si deseas que el tiempo sea diferente
  } else {
    passwordInput.type = 'password';
    iconSpan.classList.remove('fa-eye');
    iconSpan.classList.add('fa-eye-slash');
  }
};
export function validateName(name, messageRequired, messageInvalided) {
  let mensaje = '';
  const nameRegex = /^[a-zA-ZÁÉÍÓÚÜáéíóúüÑñ\s]{5,100}$/;
  if (!name.trim()) {
    mensaje = messageRequired
    return mensaje;
  }
  if (!nameRegex.test(name.trim())) {
    mensaje = messageInvalided
    return mensaje;
  }
  return '';
}

export function validateNameProf(name, messageRequired, messageInvalided) {
  let mensaje = '';
  const nameRegex = /^[a-zA-ZÁÉÍÓÚÜáéíóúüÑñ\s]{3,100}$/;
  if (!name.trim()) {
    mensaje = messageRequired
    return mensaje;
  }
  if (!nameRegex.test(name.trim())) {
    mensaje = messageInvalided
    return mensaje;
  }
  return '';
}


export const validateNewPassword = (password, invalidFormat) => {
  let mensaje = '';
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$.!%*?&_-])[A-Za-z\d$@.$!%*?&_-]{8,15}/;

  if (password === '') {
    mensaje = ''
  } else {
    if (!passwordRegex.test(password)) {
      mensaje = invalidFormat
    }
    return mensaje
  }
}

export const validateSame = (newPassword, confirmPassword, notSame, Same) => {
  let mensaje = ''

  if (confirmPassword === '') {
    return { message: '', isValid: '' };
  } else {
    if (newPassword === confirmPassword) {
      return { message: Same, isValid: true };

    } else if (newPassword !== confirmPassword) {
      return { message: notSame, isValid: false };
    }
    return mensaje
  }
}
export function validateDate(dateString, message) {
  // Check if dateString is a string
  if (typeof dateString !== 'string') {
    return 'Invalid date format'; // or any appropriate error message
  }

  const [year, month, day] = dateString.split('-').map(Number);
  // Meses en JavaScript van de 0 a 11, por eso restamos 1 al mes
  const input = new Date(year, month - 1, day);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Establecer hora, minuto, segundo y milisegundo a 0
  const inputDate = input;

  if (inputDate < currentDate) {
    return message;
  }

  return '';
}

export function validateTime(startTime, endTime, messageHourL, messageHourIqual) {
  let mensaje=''
  const start = new Date(startTime);
  const end = new Date(endTime);

  if (start > end) {
   mensaje= messageHourL 
   return mensaje
    //'La hora de inicio no puede ser mayor que la hora de fin.';
  }
  if (start.getTime() === end.getTime()) {
    mensaje= messageHourIqual 
   return mensaje
  }
  return '';
}
export function validateFields(fields, messageReuired) {
  const errors = {};

  for (let field of fields) {
    if (!field.value) {
      errors[field.name] = messageReuired;
    }
  }
  return errors;
}
export function validateStartTime(selectedDate, startTime, message) {
  const currentDate = new Date();

  // Verificar si la fecha seleccionada es hoy
  if (selectedDate.toDateString() === currentDate.toDateString()) {
    // Verificar si res_start es menor que la hora actual
    if (startTime < currentDate) {
      return message;
    }
  }
  return '';
}

export const formatDocument = (document) => {
  // Verificar si el documento existe y tiene al menos 4 caracteres
  if (document && document.length >= 4) {
    // Insertar un punto después de cada grupo de 3 caracteres, comenzando desde el final
    return document.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  } else {
    return document // Devolver el documento sin cambios si no cumple con los requisitos
  }
}

//funcion de errores
export const handleError = (error, confirmButtonColor = '#dd0034') => {
  if (error.response) {
    // Error de respuesta (por ejemplo, error HTTP)
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: `${error.response.status} - ${error.response.data.message}`,
      confirmButtonColor: confirmButtonColor
    });
    // console.error('Error de respuesta:', error.response.data);
  } if (error.request) {
    // Error de solicitud (por ejemplo, problema de red)
    Swal.fire({
      icon: 'warning',
      title: 'Error',
      text: ` ${error.response.data.message}`,
      confirmButtonColor: confirmButtonColor
    });
    // console.error('Error de solicitud:', error.response.data);
  } else {
    // Otros tipos de errores
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error: Se produjo un error inesperado',
      confirmButtonColor: confirmButtonColor
    });
    // console.error('Error inesperado:', error.message);
  }
};


export const handleResponse = (res, name, successMessage, duplicateAlert, invalidFormat, Iqual) => {

  //console.log(res, name, successMessage, duplicateAlert, invalidFormat)
  if (res.data && res.data.status === false && res.data.message) {
    let messageToShow = res.data.message[0];
    let password = res.data.message
    
    if (password.includes('Password does not match')) {
      messageToShow = invalidFormat;
      showSwalAlert(name, messageToShow, 'error');
    }
    if (password.includes('The old password does not match')) {
      messageToShow = invalidFormat;
      showSwalAlert(name, messageToShow, 'error');
    }
    if (password.includes('New password cannot be the same as the old password')) {
      messageToShow = Iqual;
      showSwalAlert(name, messageToShow, 'error');
    }
      if (messageToShow.includes('name has already been taken')) {
      messageToShow = duplicateAlert;
      showSwalAlert(name, messageToShow, 'error');
    }
    else if (messageToShow.includes('format invalidate')) {
      messageToShow = invalidFormat;
      showSwalAlert(null, messageToShow, 'error');
    }
    else if (messageToShow.includes('No users registered')) {
      messageToShow = invalidFormat;
      showSwalAlert(null, messageToShow, 'error');
    } else if (messageToShow.includes('Access denied')) {
      messageToShow = invalidFormat;
      showSwalAlert(null, messageToShow, 'error');
    }
  } if (res.data && res.data.status === true) {
    let messageToShow = successMessage;
    showSwalAlert(name, messageToShow, 'success');
  }

};
export const showSwalAlert = (
  title,
  message,
  icon = 'error',
  confirmButtonColor = '#dd0034',
  cancelButtonColor = '#d33'
) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: message,
    confirmButtonColor: confirmButtonColor,
    cancelButtonColor: cancelButtonColor,
    confirmButtonText: 'OK'
  })
}
export const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});






