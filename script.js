const workouts = [
    {
        title: "10 Week Mass Building Program",
        desc: "Designed to increase muscle mass as much as possible.",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600",
        category: "muscle",
        badge: "HARDCORE"
    },
    {
        title: "20 Minute HIIT Pump",
        desc: "Intense circuit to get your heart rate up and fat melting.",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
        category: "fat_loss",
        badge: "QUICK"
    },
    {
        title: "Dumbbell Only Home Split",
        desc: "Full body routine using only a pair of dumbbells.",
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600",
        category: "muscle",
        badge: "HOME"
    },
    {
        title: "Strength & Power Builder",
        desc: "Focus on compound movements to build raw strength.",
        img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600",
        category: "strength",
        badge: "ELITE"
    }
];

const grid = document.getElementById('workout-grid');

function renderWorkouts(filter = 'all') {
    grid.innerHTML = "";
    
    const filteredData = filter === 'all' 
        ? workouts 
        : workouts.filter(item => item.category === filter);

    filteredData.forEach(item => {
        grid.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100">
                    <div class="position-relative">
                        <img src="${item.img}" class="card-img-top" alt="${item.title}">
                        <span class="badge-custom">${item.badge}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-primary">${item.title}</h5>
                        <p class="card-text text-muted small">${item.desc}</p>
                    </div>
                    <div class="card-footer bg-white border-0 pb-3">
                        <button class="btn btn-sm btn-outline-primary w-100">View Routine</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Global function for buttons to call
window.filterData = function(category) {
    renderWorkouts(category);
}

// Initial Load
renderWorkouts();
