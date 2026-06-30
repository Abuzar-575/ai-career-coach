import { FiUploadCloud } from "react-icons/fi";

function ResumeUpload({ file, setFile }) {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="bg-white rounded-3xl border shadow-sm p-8">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-bold">

            Upload Resume

          </h2>

          <p className="text-slate-500 mt-2">

            PDF files only

          </p>

        </div>

        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">

          Step 1

        </div>

      </div>

      <label className="mt-10 cursor-pointer block">

        <div className="border-2 border-dashed border-slate-300 hover:border-indigo-500 transition rounded-3xl py-12">

          <div className="flex flex-col items-center">

            <div className="bg-indigo-100 p-6 rounded-full">

              <FiUploadCloud className="text-5xl text-indigo-600"/>

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              Drag & Drop Resume

            </h3>

            <p className="text-slate-500 mt-2">

              or click anywhere to browse

            </p>

          </div>

        </div>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />

      </label>

      {file && (

        <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-5">

          <div className="font-semibold text-green-700">

            ✅ {file.name}

          </div>

          <p className="text-sm text-green-600 mt-1">

            Resume uploaded successfully.

          </p>

        </div>

      )}

    </div>
  );
}

export default ResumeUpload;