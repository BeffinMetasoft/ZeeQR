const QRCode = require('qrcode')


// const generateQR = async URL => (await QRCode.toDataURL(URL))

const generateQR = async (URL) => {
    var opts = {
      errorCorrectionLevel: "H",
      type: "image/svg",
      width:"1000",
      quality: 0.92,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    };
  
    QRCode.toDataURL(URL, opts, function (err, url) {
      if (err) throw err;
  
      console.log(url);
    });
  };

module.exports = {
    generateQR
}
