function imageToBinary(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const arrayBuffer = event.target.result;
        const binaryData = new Uint8Array(arrayBuffer);

        // Convert to a binary string for visualization
        let binaryString = '';
        binaryData.forEach(byte => {
            // Convert each byte to its binary representation and pad with leading zeros if necessary
            binaryString += byte.toString(2).padStart(8, '0') + ' ';
        });

        document.getElementById('output').textContent = binaryString;
    };

    reader.readAsArrayBuffer(file);
}

// Add event listener to the file input element
document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        imageToBinary(file);
    }
});