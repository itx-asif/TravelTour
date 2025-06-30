import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QRCodeGenerator() {
    const [text, setText] = useState("");

    return (
        <div className="p-6 max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
            <input
                type="text"
                placeholder="Enter text or URL"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border px-4 py-2 w-full rounded mb-4"
            />
            {text && (
                <div className="mt-6 bg-white p-4 rounded shadow inline-block">
                    <QRCodeCanvas
                        value={text}
                        size={200}
                        bgColor="#ffffff"
                        fgColor="#000000"
                        level="H"
                    />
                </div>
            )}
        </div>
    );
}

export default QRCodeGenerator;
