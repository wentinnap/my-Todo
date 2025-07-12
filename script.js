 let count = 0;
        const colors = [
            'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            'linear-gradient(45deg, #a8e6cf, #ffd93d)',
            'linear-gradient(45deg, #ff8a80, #ea80fc)',
            'linear-gradient(45deg, #81c784, #64b5f6)',
            'linear-gradient(45deg, #ffb74d, #f06292)'
        ];
        let currentColorIndex = 0;

        function increment() {
            count++;
            updateCounter();
            showMessage(`Count increased to ${count}!`);
        }

        function decrement() {
            count--;
            updateCounter();
            showMessage(`Count decreased to ${count}!`);
        }

        function reset() {
            count = 0;
            updateCounter();
            showMessage('Counter reset!');
        }

        function updateCounter() {
            const counterElement = document.getElementById('counter');
            counterElement.textContent = count;
            
            // Add a little animation
            counterElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                counterElement.style.transform = 'scale(1)';
            }, 200);
        }

        function showMessage(text) {
            const messageElement = document.getElementById('message');
            messageElement.textContent = text;
            messageElement.classList.add('show');
            
            setTimeout(() => {
                messageElement.classList.remove('show');
            }, 2000);
        }

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            const colorBox = document.getElementById('colorBox');
            colorBox.style.background = colors[currentColorIndex];
            showMessage('Color changed!');
        }

        // Add keyboard support
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case '+':
                case '=':
                    increment();
                    break;
                case '-':
                case '_':
                    decrement();
                    break;
                case 'r':
                case 'R':
                    reset();
                    break;
                case ' ':
                    event.preventDefault();
                    changeColor();
                    break;
            }
        });

        // Welcome message
        window.addEventListener('load', function() {
            setTimeout(() => {
                showMessage('Welcome! Use buttons or keyboard: +/- to count, R to reset, Space to change colors');
            }, 500);
        });