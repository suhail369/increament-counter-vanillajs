// Getting all the counters
const counters = document.querySelectorAll('.counter');

// Looping through the counter
counters.forEach(counter => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const counterText = parseInt(counter.innerText);
        const increament = target / 200;

        if (counterText < target) {
            counter.innerText = `${Math.ceil(counterText + increament)}`;

            setTimeout(updateCounter, 1)
        }
    }

    updateCounter();
})