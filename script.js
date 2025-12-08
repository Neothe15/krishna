const workouts = [
    {
        title: "10 Week Mass Building Program",
        desc: "This workout is designed to increase your muscle mass as much as possible in 10 weeks.",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
        tag: "MUSCLE BUILDING"
    },
    {
        title: "Fast & Furious: 20 Minute Pump",
        desc: "Short on time? This intense circuit will get your heart rate up and muscles pumping.",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
        tag: "FAT LOSS"
    },
    {
        title: "Dumbbell Only Home Workout",
        desc: "No gym? No problem. A full body routine using only a pair of dumbbells.",
        img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
        tag: "HOME WORKOUT"
    },
    {
        title: "Upper/Lower Split for Strength",
        desc: "The classic split to pack on raw strength and size. Heavy compound movements.",
        img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500",
        tag: "STRENGTH"
    }
];

const grid = document.getElementById('workout-grid');

workouts.forEach(item => {
    grid.innerHTML += `
        <div class="card">
            <div class="card-img" style="background-image: url('${item.img}')"></div>
            <div class="card-content">
                <div class="card-title">${item.title}</div>
                <div class="card-desc">${item.desc}</div>
                <div class="tags">${item.tag}</div>
            </div>
        </div>
    `;
});
