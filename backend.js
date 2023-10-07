const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/generateQRCode/:numeroRifa', async (req, res) => {
    const numeroRifa = req.params.numeroRifa.padStart(3, '0'); // Garante que o número tenha 3 dígitos
    const chavePix = '035.098.090-09'; // Substitua 'suaChavePix' pela sua chave Pix única

    const qrCodeData = `PIX:${chavePix}?txid=${numeroRifa}`;
    const qrCodeDataURL = await QRCode.toDataURL(qrCodeData);

    res.json({ qrCodeData: qrCodeDataURL });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
