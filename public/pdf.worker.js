// public/pdf.worker.js

import { PDFWorker } from 'pdfjs-dist/build/pdf.worker.entry';

const worker = new PDFWorker({});
worker.initialize();

export default worker;
