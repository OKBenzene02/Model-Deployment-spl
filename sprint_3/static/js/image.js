const submit = document.querySelector('.submit')
var address;
submit.addEventListener('click', () => {
    const img = document.querySelector('#image')
    address = img.value;
    console.log(img.value)
})

