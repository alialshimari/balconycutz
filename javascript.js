document.addEventListener('DOMContentLoaded', function() {
    function generateCalendar(calendarElement) {
        const now = new Date();
        const month = now.getMonth(); // Current month (0-indexed)
        const year = now.getFullYear(); // Current year

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const calendarTitle = document.createElement('h3');
        calendarTitle.textContent = `${months[month]} ${year}`;
        calendarElement.appendChild(calendarTitle);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'calendar-days';
        calendarElement.appendChild(daysContainer);

        // Fill in empty days
        for (let i = 0; i < firstDay.getDay(); i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'day empty';
            daysContainer.appendChild(emptyDay);
        }

        // Populate the calendar with days, making only Sundays selectable
        for (let date = 1; date <= lastDay.getDate(); date++) {
            const dayElement = new Date(year, month, date);
            const dateElement = document.createElement('div');
            dateElement.className = 'day';
            dateElement.textContent = date;

            // Check if the day is Sunday
            if (dayElement.getDay() === 0) { // 0 is Sunday
                dateElement.classList.add('selectable');
                dateElement.addEventListener('click', function() {
                    this.style.backgroundColor = 'blue';
                    this.style.color = 'white';
                    alert('Appointment booked for ' + this.textContent + ' ' + months[month] + ' ' + year);
                });
            }

            daysContainer.appendChild(dateElement);
        }
    }

    generateCalendar(document.getElementById('calendar'));
});
