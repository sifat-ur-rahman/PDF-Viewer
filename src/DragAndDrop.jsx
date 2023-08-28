import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DragAndDrop = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col  items-center mt-10">
        <label className="block mb-2 text-5xl font-medium text-gray-900 dark:text-white" form="pdfInput">Upload file</label><br />
      <input
        type="file"
        id="pdfInput"
        className="file-input file-input-bordered file-input-lg w-full max-w-xs"
        accept=".pdf"
        onChange={handlePdfChange}
      />
      {pdfFile && (
        <div className="mt-4 border border-orange-400">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            
            {Array.from(new Array(numPages), (el, index) => (
              <Page  key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
