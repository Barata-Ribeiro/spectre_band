export default class FormValidation {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
  }

  entryValidation() {
    this.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);
      // Whenever the user types in the input field, tries to validateFields
      input.addEventListener('input', () => this.validateFields(input));
      //  Whenever the user clicks off the input field, tries to validate
      input.addEventListener('blur', () => this.validateFields(input));
    });
  }

  validateFields(field) {
    // Mapping of field IDs to their corresponding label names
    const fieldNames = {
      name: 'Name',
      email: 'Email',
      message: 'Message',
    };

    const fieldName = fieldNames[field.id];

    // If input is empty, set an error message
    if (field.value.trim() === '') {
      this.setStatus(field, `${fieldName} cannot be blank`, 'error');
      return; // Early return after setting error
    }

    // If the input is an email address, perform email validation
    if (field.type === 'email') {
      const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (regex.test(field.value)) this.setStatus(field, null, 'success');
      else {
        this.setStatus(field, 'Please enter a valid email address', 'error');
        return; // Early return after setting error
      }
    }

    // If the field is the "message" field and its length is less than 10 characters,
    // set an error message
    if (field.id === 'message' && field.value.trim().length < 10) {
      this.setStatus(field, 'Message must be at least 10 characters long', 'error');
      return; // Early return after setting error
    }

    // Set the field status to success if all validations pass
    this.setStatus(field, null, 'success');
  }

  // Set the status of the input field based on the error message
  setStatus(field, message, status) {
    const errorMessage = document.querySelector(`#${field.id}-error`);
    // Hide everything and remove the error message
    if (status === 'success') {
      if (errorMessage) errorMessage.innerText = '';
      field.classList.remove('form-input-error');
      errorMessage.style.display = 'none';
    }
    // Show the error message and add the class to the input
    if (status === 'error') {
      errorMessage.innerText = message;
      field.classList.add('form-input-error');
      errorMessage.style.display = 'block';
    }
  }

  submitValidation() {
    // Submit the form
    this.form.addEventListener('submit', (event) => {
      // First validate all fields
      this.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        this.validateFields(input);
      });

      // Check if there are errors in any of the fields
      const errors = this.fields.some((field) => {
        const input = document.querySelector(`#${field}`);
        return input.classList.contains('form-input-error');
      });

      // If there are errors, prevent the form submission
      if (errors) event.preventDefault();
    });
  }

  init() {
    this.entryValidation();
    this.submitValidation();
    return this;
  }
}
