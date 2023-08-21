import { hourly_sales } from "@/data/data";

export default function ReportTable({ CookieStands }) {
  return (
    <div className="mt-6">
      {CookieStands.length === 0 ? (
        <p className="text-center text-blue-400">Report table is Empty...</p>
      ) : (
        <div className="mx-auto overflow-x-auto">
          <table className="min-w-max mt-4 bg-white border border-gray-400 shadow-md rounded-lg">
            <caption className="mb-2 text-lg font-semibold text-center text-blue-500">Sales Report</caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4">Location</th>
                {hourly_sales.map((time, index) => (
                  <th key={index} className="py-2 px-4">
                    {time}
                  </th>
                ))}
                <th className="py-2 px-4">Totals</th>
              </tr>
            </thead>
            <tbody>
              {CookieStands.map((obj) => (
                <tr key={obj.id}>
                  <td className="py-2 px-4 border-t">
                    {obj.location}
                  </td>
                  {hourly_sales.map((sales, index) => (
                    <td key={index} className="py-2 px-4 border-t">
                      {sales}
                    </td>
                  ))}
                  <td className="py-2 px-4 border-t">
                    {hourly_sales.reduce((sum, sales) => sum + sales, 0) * CookieStands.length}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-200">
                <td className="py-2 px-4 font-semibold">Total</td>
                {hourly_sales.map((sales, index) => (
                  <td key={index} className="py-2 px-4 font-semibold">
                    {sales * CookieStands.length}
                  </td>
                ))}
                <td className="py-2 px-4 font-semibold">
                  {hourly_sales.reduce((sum, sales) => sum + sales, 0) * CookieStands.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
