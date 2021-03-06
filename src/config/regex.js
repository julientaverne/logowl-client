export default {
    notEmpty: /(?!^$)([^\s])/,
    // eslint-disable-next-line
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*[\d])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,15}$/,
    description: /^.{1,100}$/
};