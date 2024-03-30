(function() {
    const displayElement = document.getElementById('display');

    setTimeout(function() {
        displayElement.textContent = '10';
        setTimeout(function() {
            displayElement.textContent = '9';
            setTimeout(function() {
                displayElement.textContent = '8';
                setTimeout(function() {
                    displayElement.textContent = '7';
                    setTimeout(function() {
                        displayElement.textContent = '6';
                        setTimeout(function() {
                            displayElement.textContent = '5';
                            setTimeout(function() {
                                displayElement.textContent = '4';
                                setTimeout(function() {
                                    displayElement.textContent = '3';
                                    setTimeout(function() {
                                        displayElement.textContent = '2';
                                        setTimeout(function() {
                                            displayElement.textContent = '1';
                                            setTimeout(function() {
                                                displayElement.textContent = 'Happy Independence Day!';
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
})();
