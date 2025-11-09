import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js`

interface PdfViewerProps {
  file: File
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = React.useState<number>(0)

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page key={`page_${i + 1}`} pageNumber={i + 1} />
        ))}
      </Document>
    </div>
  )
}
