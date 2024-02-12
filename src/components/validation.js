export const FormValidation=(name,email, contact, address)=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const contactRegex =/^\+?[1-9][0-9]{7,14}$/.test(contact);
    const nameRegex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const addressRegex=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/.test(address);
    if(!emailRegex) return "Email is not valid";
    if(!contactRegex) return "Contact is not valid";
    if(!nameRegex) return "Name is not valid"
    if(!addressRegex) return "Address is no valid"
    return null;
}