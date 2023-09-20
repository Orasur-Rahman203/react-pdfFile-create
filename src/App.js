import "./App.css";
import React from "react";
import PDFFile from './Component/PDFFile.jsx';
import { PDFDownloadLink } from "@react-pdf/renderer";
// import ImagePicker from "./components/ImagePicker";

const App = () => {
  return (
    <div className="App">
      <h1>React PDF file download!</h1>
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
};

export default App;