document.addEventListener('DOMContentLoaded', () => {
    const purchaseForm = document.getElementById('purchaseForm');
    const qrcodeContainer = document.getElementById('qrcodeContainer');

    purchaseForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const numeroRifa = document.getElementById('numeroRifa').value;
        const response = await fetch(`/generateQRCode/${numeroRifa}`);
        const qrCodeData = await response.json();

        const qr = new QRCode(qrcodeContainer, {
            text: qrCodeData.qrCodeData,
            width: 128,
            height: 128,
        });
    });
});
