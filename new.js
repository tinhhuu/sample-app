function  validateDangky(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const isUsernameValid = validateInput(username,/^[a-zA-Z0-9]{5,}$/,'Ten khong hop le, vui long nhap 5 ki tu');
    const isPasswordValid = validateInput(password, /^$/)
}
