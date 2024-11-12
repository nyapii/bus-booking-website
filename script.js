function submitForm(event) {
    event.preventDefault();

    // Ambil data dari form
    const name = document.getElementById("name").value;
    const departureDate = document.getElementById("departureDate").value;
    const phone = document.getElementById("phone").value;
    const departurePoint = document.getElementById("departurePoint").value;
    const dropPoint = document.getElementById("dropPoint").value;
    const busClass = document.getElementById("busClass").value;

    // Gabungkan data pemesanan ke dalam format JSON
    const bookingData = {
        name,
        departureDate,
        phone,
        departurePoint,
        dropPoint,
        busClass
    };

    // Encode data sebagai URL agar mudah diakses di halaman tiket
    const encodedData = encodeURIComponent(JSON.stringify(bookingData));

    // Pastikan URL mengarah ke halaman ticket.html
    const qrURL = `${window.location.origin}/ticket.html?data=${encodedData}`;
    
    // Buat kode QR dari URL yang mengarah ke halaman tiket
    const qr = new QRious({
        element: document.getElementById("qrCode"),
        value: qrURL,
        size: 200,
        background: '#ffffff',
        foreground: '#000000'
    });

    // Sembunyikan form dan tampilkan halaman QR code
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("qrPage").style.display = "block";
}
