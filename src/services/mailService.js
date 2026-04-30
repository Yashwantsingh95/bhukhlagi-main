import emailjs from "@emailjs/browser";

const sendMail = (formData) => {

    return emailjs.send(
        "service_0sn3qpk",
        "template_hbyiibm",
        formData,
        "6OapKCXQBJpctlVJB"
    )
};

export default sendMail;