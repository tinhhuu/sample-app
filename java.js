function validateDangky() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    const isUsernameValid = validateInput(username, /^[a-zA-Z0-9$]{5,}$/, 'Tên người dùng không hợp lệ. Tên người dùng phải có ít nhất 5 ký tự và chỉ bao gồm chữ cái, số hoặc ký tự $.');
    const isPasswordValid = validateInput(password, /^(?=.*[A-z])(?=.*\d)(?=.*[~!@#$%^&\*\.\-_]).{5,}$/, 'Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 5 ký tự, bao gồm chữ cái, số và ký tự đặc biệt.');

    return isUsernameValid && isPasswordValid;
}

function validateInput(input, regex, message) {
    if (regex.test(input)) {
        return true;
    } else {
        alert(message);
        return false;
    }
}