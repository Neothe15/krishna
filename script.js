const grid = document.getElementById('workout-grid');

function renderWorkouts(filter = 'all') {
    grid.innerHTML = "";
    
    // Filter the data from db.js
    const filteredData = filter === 'all' 
        ? workouts 
        : workouts.filter(item => item.category === filter);

    filteredData.forEach(item => {
        grid.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="position-relative">
                        <img src="${item.img}" class="card-img-top" alt="${item.title}">
                        <span class="badge-custom">${item.level}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-primary">${item.title}</h5>
                        <p class="card-text text-muted small">${item.desc}</p>
                    </div>
                    <div class="card-footer bg-white border-0 pb-3">
                        <a href="workout.html?id=${item.id}" class="btn btn-sm btn-outline-primary w-100">View Routine</a>
                    </div>
                </div>
            </div>
        `;
    });
}

window.filterData = function(category) {
    renderWorkouts(category);
}

renderWorkouts();
