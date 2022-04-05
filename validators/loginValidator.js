export const loginValidator = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Toto pole je povinné";
  } else if (!regex.test(values.email)) {
    errors.email = "Email je ve špatném formátu";
  }
  if (!values.password) {
    errors.password = "Toto pole je povinné";
  }
  return errors;
};
