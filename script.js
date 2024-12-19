document.addEventListener('DOMContentLoaded', function () {
    const viewPracticalsBtn = document.getElementById('viewPracticalsBtn');
    const practicalsContainer = document.getElementById('practicals-container');

    // List of practicals
    const practicals = [
        { name: 'All Practical', file: 'daa0.txt' },
        { name: 'insertion sort', file: 'daa1.txt' },
        { name: 'heap sort', file: 'daa2.txt' },
        { name: 'merge sort', file: 'daa3.txt' },
        { name: 'quick sort', file: 'daa4.txt' },
        { name: 'fractional knapsack', file: 'daa5.txt' },
        { name: 'job sequencing', file: 'daa6.txt' },
        { name: 'travelling salesman', file: 'daa7.txt' },
        { name: 'all pair shortest path', file: 'daa8.txt' },
        { name: ' 8 queen’s', file: 'daa9.txt' },
        { name: 'graph coloring', file: 'daa10.txt' },
        { name: 'Dijkstra', file: 'daa11.txt' },  

    ];

    // Generate buttons for each practical
    practicals.forEach(practical => {
        const buttonCard = document.createElement('button');
        buttonCard.className = 'button-card';

        const heading = document.createElement('h2');
        heading.textContent = practical.name;

        buttonCard.appendChild(heading);
        practicalsContainer.appendChild(buttonCard);

        // Add a click event listener to each button
        buttonCard.addEventListener('click', function () {
            // Redirect to the PDF when the button is clicked
            window.location.href = `media/daa_pract/${practical.file}`;
        });
    });

    // Show practicals when the button is clicked
    viewPracticalsBtn.addEventListener('click', function () {
        viewPracticalsBtn.style.display = 'none';
        practicalsContainer.style.display = 'flex';
    });
});