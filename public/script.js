document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("qr-form");
    const qrInput = document.getElementById("qr-input");
    const qrImage = document.getElementById("qr-image");
    const downloadBtn = document.getElementById("download-btn");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const text = qrInput.value.trim();
        if (text === "") {
            alert("Please enter text to generate a QR code!");
            return;
        }

        try {
            const response = await fetch("/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();

            if (response.ok) {
                qrImage.src = data.qrCodeUrl;
                qrImage.classList.remove("hidden");

                downloadBtn.href = data.qrCodeUrl;
                downloadBtn.classList.remove("hidden");
            } else {
                alert(data.error || "Failed to generate QR code");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        }
    });
});
