const FormValidation = (name,email,contact, address) => {
    const nameRegex = /^[A-Za-z\s]+$/i.test(name);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email);
    const contactRegex = /^\+?[1-9][0-9]{6,14}$/i.test(contact);
    const addressRegex = /^[A-Za-z\s]+$/i.test(address);

  
    if (!nameRegex) return "Name is not valid";
    if (!emailRegex) return "Email is not valid";
    if (!contactRegex) return "Contact is not valid";
    if (!addressRegex) return "Address is not valid";
  
    return null;
  };
  
  export default FormValidation;
  