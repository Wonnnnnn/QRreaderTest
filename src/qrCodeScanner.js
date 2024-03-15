document.addEventListener("DOMContentLoaded", function(event) {
    const codeReader = new ZXing.BrowserQRCodeReader();
    const btnScanQR = document.getElementById('btn-scan-qr');
    const qrResult = document.getElementById('qr-result');
    const outputData = document.getElementById('outputData');

    btnScanQR.addEventListener('click', () => {
        // 버튼 클릭 시 카메라 활성화
        codeReader.decodeFromInputVideoDevice(undefined, 'qr-canvas', (result, err) => {
            if (result) {
                // QR 코드 스캔 결과를 표시
                qrResult.hidden = false;
                outputData.innerText = result.text;
            }
            if (err) {
                console.error('QR 코드 스캔 중 오류:', err);
            }
        });
    });
});
