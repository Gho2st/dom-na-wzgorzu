export default function Table({ headers, rows, text }) {
  return (
    <div className="overflow-x-auto md:w-3/4 mx-auto">
      <h3 className="text-3xl md:text-3xl text-center mb-10 font-bold text-customBlue">
        Dom Relaksu &quot;Na Wzgórzu&quot;
      </h3>
      <table className="w-full table-auto border-collapse  bg-white rounded-xl shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-center text-xl md:text-2xl font-bold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-center md:text-lg text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {text && <p className="mt-8 text-center text-sm">{text}</p>}
    </div>
  );
}
