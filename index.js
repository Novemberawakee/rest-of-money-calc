const button = document.querySelector('#btn');
button.addEventListener('click', calculate);

const selectButton = document.querySelector('#savings');
selectButton.addEventListener('click', showOptions);

function showOptions(e) {
    e.preventDefault();
    select.style.display = 'block';
}

function calculate(e) {
    e.preventDefault();
    const income = document.querySelector('#income').value;
    const savings = document.querySelector('#select').value;
    const rent = document.querySelector('#rent').value;
    const internet = document.querySelector('#internet').value;
    const phone = document.querySelector('#phone').value;

    if (income === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information',
        })
    }

    let savedMoney = income * savings;
    let spending = + rent + + internet + +phone;
    let restOfMoney = income - (savedMoney + spending);

    savedMoney = savedMoney.toFixed(2);
    restOfMoney = restOfMoney.toFixed(2);

    document.querySelector('#savedMoney').textContent = savedMoney;
    document.querySelector('#restOfMoney').textContent = restOfMoney;
}