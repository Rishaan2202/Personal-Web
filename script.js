let count = 0;

const button = document.getElementById("3D Print Orders");

button.addEventListener("click", () => {
    count++;
});

button.addEventListener("click", () => {
    if (count === 1) {
        alert("Thank you for your interest in our 3D printing service! We are currently in the process of setting up our online ordering system. In the meantime, please feel free to contact us directly at rishaan.sharma2202@gmail.com to place an order or inquire about our services. We appreciate your patience and look forward to serving you soon!");
    } else if (count > 1) {
        alert("We are still working on setting up our online ordering system for our 3D printing service. Please contact us directly at rishaan.sharma2202@gmail.com to place an order or inquire about our services. Thank you for your continued interest and support!");
    }
});