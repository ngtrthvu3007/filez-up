import React, { useState } from "react";
import { UploadIcon, RemoveFile, FileIcon } from "../../components/Icons";

const Main = () => {
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [emptyFile, setEmtyFile] = useState(true);

  const onUploadFile = (e) => {
    let file = e.target.files[0];

    if (file?.size <= 2000000) {
      setFile(file);
      setFileName(file.name);
      setFileType(file.type);
      setFileSize((file.size / (1024 * 1024)).toFixed(4));
      setEmtyFile(false);
    } else alert("Maximum of file is 2 MB");
    // let url = URL.createObjectURL(file);
  };

  const onRemoveFile = () => {
    setFile({});
    setFileName("");
    setFileType("");
    setFileSize(0);
    setEmtyFile(true);
  };

  const onSubmitFile = () => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    // call api truyeefn vafo formData
  };

  return (
    <div className="p-5 px-8 md:px-28 text-center">
      <div>
        <h2 className="text-[20px] text-center m-5 text-white">
          <strong className="text-[#66a3ff]"> Uploading </strong>File and
          <strong className="text-[#66a3ff]"> Share</strong> it
        </h2>
        <div className="text-center">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col  items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed  rounded-lg cursor-pointer bg-slate-500 dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center  justify-center pt-5 pb-6">
                <UploadIcon />
                <p className="mb-2 text-lg md:text-2xl text-white dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or{" "}
                  <strong className="text-primary">drag</strong> and <strong className="text-primary">drop</strong>
                </p>
                <p className="text-xs text-white">Image, Pdf, Doc ( Max Size : 2MB)</p>
              </div>
              <input id="dropzone-file" className="hidden" type="file" onChange={(e) => onUploadFile(e)} />
            </label>
          </div>
          {!emptyFile && (
            <div className="flex items-center gap-2  justify-between mt-5 border rounded-md p-2  border-blue-200">
              <div className="flex items-center p-2 w-full">
                <FileIcon />
                <div className="text-left ml-2">
                  <h2 className="text-white">{fileName}</h2>
                  <h2 className="text-[12px] text-white">
                    {fileType} - {fileSize} MB
                  </h2>
                </div>
              </div>
              <div onClick={() => onRemoveFile()}>
                <RemoveFile />
              </div>
            </div>
          )}

          <button
            onClick={() => onSubmitFile()}
            disabled={emptyFile}
            className="p-2 bg-primary bg-[#837DFE] text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
