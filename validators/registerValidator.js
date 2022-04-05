export const registerValidator = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Toto pole je povinné";
  } else if (values.name.length < 4) {
    errors.name = "Jméno musí mít alespoň 4 znaky";
  }
  if (!values.email) {
    errors.email = "Toto pole je povinné";
  } else if (!regex.test(values.email)) {
    errors.email = "Email je ve špatném formátu";
  }
  if (!values.password) {
    errors.password = "Toto pole je povinné";
  }
  if (!values.confirm_password) {
    errors.confirm_password = "Toto pole je povinné";
  } else if (values.confirm_password !== values.password) {
    errors.password = "Hesla se neshodují";
    errors.confirm_password = "Hesla se neshodují";
  }
  return errors;
};
