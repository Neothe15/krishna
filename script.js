// 1. Grab the search box
const searchInput = document.getElementById('searchInput');

// 2. Listen for typing
searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    // 3. Filter workouts based on Title OR Desc OR Badge
    const filteredWorkouts = workouts.filter(workout => {
        return (
            workout.title.toLowerCase().includes(searchString) ||
            workout.desc.toLowerCase().includes(searchString) ||
            workout.category.toLowerCase().includes(searchString)
        );
    });

    // 4. Render the results (Reuse your existing function!)
    // We need to modify renderWorkouts slightly to accept raw data
    renderWithData(filteredWorkouts);
});

// Refactor your render function to accept data as an argument
function renderWithData(data) {
    grid.innerHTML = "";
    if(data.length === 0) {
        grid.innerHTML = "<h3 class='text-center text-muted'>No workouts found!</h3>";
        return;
    }
    
    data.forEach(item => {
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

// Initial Load
renderWithData(workouts);
