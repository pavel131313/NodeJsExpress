import {useAxios} from "use-axios-client";
import React, {useState} from "react";

function CandidatesList() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState([]);
  const perPage = 20;
  const {data, error, loading} = useAxios({url: "http://localhost:3500/api/candidates"});
  const {values} = data || {};
  const pages = values?.length ? Math.ceil(values.length / perPage) : 0;
  const items = search.length ? search : values?.slice(page * perPage, (page + 1) * perPage);

  const handleChange = async event => {
      const searchTerm = event.target.value.toLowerCase()
      const result = values?.filter(value => {
        return value.email.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
          value.full_name.toLowerCase().match(new RegExp(searchTerm, 'g'))
      })
      setSearch(result);
  };

  if (loading || !data)
    return (
      <div
        className="w-full flex items-center justify-center px-4 py-2 font-semibold leading-6 shadow text-white bg-gray-800">
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Processing...
      </div>
    );



  return (
    <div className={"flex flex-col"}>
      {error && <div>{error.message}</div>}
      <div className={'flex items-center '}>
        <div/>
        <div className={'flex flex-row items-center'}>
          <input
            onChange={handleChange}
            type="text"
            className={'font-large bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'}
            placeholder="Search"/>
        </div>
      </div>

      <div className={"overflow-hidden"}>
        <table className={"min-w-full"}>
          <thead className={"border-b bg-gray-800 text-left"}>
          <tr>
            <th
              scope="col"
              className={'text-sm font-medium text-white px-6 py-4 w-10'}
            >
              #
            </th>
            <th
              scope="col"
              className={'text-sm font-medium text-white px-6 py-4 w-1/5'}
            >
              Name
            </th>
            <th
              scope="col"
              className={'text-sm font-medium text-white px-6 py-4 w-1/5'}
            >
              Email
            </th>
            <th
              scope="col"
              className={'text-sm font-medium text-white px-6 py-4 w-1/5'}
            >
              Landline
            </th>
            <th
              scope="col"
              className={'text-sm font-medium text-white px-6 py-4 w-1/5'}
            >
              Mobile
            </th>
            <th
              scope="col"
              className={'text-sm font-medium text-white px-6 py-4 w-48'}
            >
              Options
            </th>
          </tr>
          </thead>
          <tbody>
          {items &&
            items.map((item, i) => (
              <tr className={"bg-white border-b"} key={item.id}>
                <td
                  className={
                    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  }
                >
                  {(((page + 1) * perPage) - perPage) + (i + 1)}
                </td>
                <td
                  className={
                    "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                  }
                >
                  {item.full_name}
                </td>
                <td
                  className={
                    "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                  }
                >
                  {item.email}
                </td>
                <td
                  className={
                    "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                  }
                >
                  {item.landline}
                </td>
                <td
                  className={
                    "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                  }
                >
                  {item.mobile}
                </td>
                <td
                  className={
                    "text-sm text-gray-900 px-6 py-4 whitespace-nowrap"
                  }
                >
                  <button className="py-2 font-semibold text-sm text-blue-600">
                    View
                  </button>
                  <button className="mx-2 px-4 py-2 font-semibold text-sm bg-green-700 text-white rounded-lg shadow-sm">
                    Approve
                  </button>
                  <button className="px-4 py-2 font-semibold text-sm bg-red-600 text-white rounded-lg shadow-sm">
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className={"border-b bg-gray-800 text-left"}>
          <tr>
            <th
              scope="col"
              className={"text-sm font-medium text-white px-6 py-4"}
            >
              #
            </th>
            <th
              scope="col"
              className={"text-sm font-medium text-white px-6 py-4"}
            >
              Name
            </th>
            <th
              scope="col"
              className={"text-sm font-medium text-white px-6 py-4"}
            >
              Email
            </th>
            <th
              scope="col"
              className={"text-sm font-medium text-white px-6 py-4"}
            >
              Landline
            </th>
            <th
              scope="col"
              className={"text-sm font-medium text-white px-6 py-4"}
            >
              Mobile
            </th>
            <th
              scope="col"
              className={"text-sm font-medium text-white px-6 py-4"}
            >
              Options
            </th>
          </tr>
          </tfoot>
        </table>
      </div>

      <nav aria-label="Page navigation example" className={"text-right mt-5"}>
        <ul className="inline-flex items-center -space-x-px">
          <li className={'px-4'}>
            {values?.length && values?.length.toLocaleString()} items
          </li>
          <li>
            <button
              onClick={() => page >= 1 && setPage((prev) => prev - 1)}
              className={`${page === 0 && 'cursor-not-allowed'} block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li className={'px-4'}>
            {`${page + 1} of ${pages}`}
          </li>
          <li>
            <button
              onClick={() => page < pages && setPage((prev) => prev < pages && prev + 1)}
              className={`${page === pages && 'cursor-not-allowed'} block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CandidatesList;
