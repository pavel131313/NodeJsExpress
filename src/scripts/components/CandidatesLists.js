import {useAxios} from "use-axios-client";
import React, {useEffect, useState} from "react";

function CandidatesList() {

  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const perPage = 20;

  const {data, error, loading} = useAxios({
    url: 'http://localhost:3500/api/candidates'
  });

  useEffect(() => {
    data.values && setPages(Math.floor(data.values.length / perPage))
  },[data])

  const handlePageClick = (event) => {
    let page = event.selected;
    setPage({page})
  }

  const items = data.values.slice(page * perPage, (page + 1) * perPage);


  if (loading || !data) return (
    <div
      className="w-full flex items-center justify-center px-4 py-2 font-semibold leading-6 shadow text-white bg-gray-800"
    >
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
      </svg>
      Processing...
    </div>
  );

  if (error) return "Error!";

  return (
    <div className={'flex flex-col'}>
        <div className={'overflow-hidden'}>
          <table className={'min-w-full'}>
            <thead className={'border-b bg-gray-800 text-left'}>
            <tr>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                #
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Name
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Email
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Landline
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Mobile
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Options
              </th>
            </tr>
            </thead>
            <tbody>
            {items && items.map(item => (
              <tr className={'bg-white border-b'} key={item.id}>
                <td className={'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'}>1</td>
                <td className={'text-sm text-gray-900 px-6 py-4 whitespace-nowrap'}>
                  {item.first_name + ' ' + item.last_name}
                </td>
                <td className={'text-sm text-gray-900 px-6 py-4 whitespace-nowrap'}>
                  {item.email}
                </td>
                <td className={'text-sm text-gray-900 px-6 py-4 whitespace-nowrap'}>
                  {item.landline}
                </td>
                <td className={'text-sm text-gray-900 px-6 py-4 whitespace-nowrap'}>
                  {item.mobile}
                </td>
                <td className={'text-sm text-gray-900 px-6 py-4 whitespace-nowrap'}>
                  <button className="py-2 font-semibold text-sm text-blue-600">View</button>
                  <button className="mx-2 px-4 py-2 font-semibold text-sm bg-green-700 text-white rounded-lg shadow-sm">Approve</button>
                  <button className="px-4 py-2 font-semibold text-sm bg-red-600 text-white rounded-lg shadow-sm">Decline</button>
                </td>
              </tr>
            ))}
            </tbody>
            <tfoot className={'border-b bg-gray-800 text-left'}>
            <tr>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                #
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Name
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Email
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Landline
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Mobile
              </th>
              <th scope="col" className={'text-sm font-medium text-white px-6 py-4'}>
                Options
              </th>
            </tr>
            </tfoot>
          </table>
        </div>

      <nav aria-label="Page navigation example" className={'text-right mt-5'}>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a href="#"
               className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#"
               className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#"
               className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page"
               className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#"
               className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#"
               className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a onClick={() => handlePageClick()}
              href="#"
               className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default CandidatesList
