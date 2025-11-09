import React, { useState } from 'react'
import PdfViewer from './PdfViewer'
import './App.css'

export default function App() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setPdfFile(file)
    } else {
      alert("Please upload a valid PDF file.")
    }
  }

  return (
    <div className="app-container">
      <h1>📚 Gamified PDF Learning</h1>
      <p>Upload your study PDF and turn it into an interactive game!</p>

      <input type="file" accept="application/pdf" onChange={handleFileUpload} />

      {pdfFile && (
        <div className="pdf-container">
          <PdfViewer file={pdfFile} />
        </div>
      )}
    </div>
  )
}
