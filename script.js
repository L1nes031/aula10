const element = document.querySelector('.strength')
const strength = new bootstrap.Strength(element, {
  input: '#my-password-input',
  minLength: 10,
  messages: {
    weak: 'Too weak',
    fair: 'Could be better',
    good: 'Good password',
    strong: 'Excellent!'
  }
})