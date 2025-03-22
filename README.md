

---

 **QR Code Generator and Scanner**
A simple Node.js application that generates QR codes from user-provided URLs and saves them as images.

## **Features**
✅ Generate QR codes from any URL  
✅ Save generated QR codes as PNG images  
✅ Store the entered URL in a text file  
✅ Simple and interactive CLI  

## **Installation**
1. Clone the repository:
   ```sh
   git clone https://github.com/mdparvezmussaruf/qrcode.git
   cd qrcode
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## **Usage**
Run the following command:
```sh
node index.js
```
Then enter a URL when prompted. The script will generate a QR code image (`qrcode.png`) and save the URL to `url.txt`.

## **Project Structure**
```
qrcode/
│── public/         # (Optional) Store public assets
│── qr_codes/       # Directory for storing generated QR codes
│── .gitignore      # Files to ignore in Git
│── LICENSE         # Project license
│── README.md       # Project documentation
│── index.js        # Main script
│── package.json    # Node.js dependencies
│── package-lock.json
```

## **Dependencies**
- [inquirer](https://www.npmjs.com/package/inquirer) – CLI prompt for user input  
- [qr-image](https://www.npmjs.com/package/qr-image) – Generate QR code images  
- [fs](https://nodejs.org/api/fs.html) – File system module for saving files  

## **License**
This project is licensed under the **Apache 2.0 License**.

---
