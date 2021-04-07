const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function subTen(value) {
  return  value < 10 ? ('0' + value) : value;
}

const validateEmail = email => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = {
  formatTime,
  subTen,
  validateEmail: validateEmail
}
