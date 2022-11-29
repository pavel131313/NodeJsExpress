import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useAxios} from "use-axios-client";

const CandidateSingle = () => {
  const params = useParams();
  console.log('props', params.id) //eslint-disable-line
  const {data, error, loading} = useAxios({url: `http://localhost:3500/api/candidate/${params.id}`});
  const {values} = data || {};

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
    <>
      {error && <div>{error.message}</div>}
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">{values.first_name + ' ' + values.last_name}</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">{values.email}.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>

            <div className="bg-gray-50 px-4 py-5 sm:grid grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd
                className="mt-1 text-sm text-gray-900 col-span-2 sm:mt-0">{values.first_name + ' ' + values.last_name}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 col-span-2 sm:mt-0">{values.email}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Landline</dt>
              <dd className="mt-1 text-sm text-gray-900 col-span-2 sm:mt-0">{values.landline}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Mobile</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.mobile}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Skype ID</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.skype_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address Line 1</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.address_line_1}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address Line 2</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.address_line_2}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address Line 3</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.address_line_3}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address Line 4</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.address_line_4}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Post Code</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.post_code}</dd>
            </div>

            {/*TODO: In progress*/}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Notice Period</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.notify_date}</dd>
            </div>

            {/*TODO: In progress*/}
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Job Title</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Field</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.field_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Experience</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Qualifications</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Sectors</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Part Time Circumstance</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Interim Circumstance</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">How did you hear about us?</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Locations and Work Types</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">{values.job_title_id}</dd>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">{values.job_title_id}</dd>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Interim Circumstance</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Interim Circumstance</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.job_title_id}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Location Comments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.location_comments}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Additional Notes</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.additional_notes}</dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Internal Notes</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.internal_notes}</dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Processed CV</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{values.cv}</dd>
            </div>
            {/*<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">*/}
            {/*  <dt className="text-sm font-medium text-gray-500">About</dt>*/}
            {/*  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">*/}
            {/*    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur*/}
            {/*    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure*/}
            {/*    nostrud*/}
            {/*    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.*/}
            {/*  </dd>*/}
            {/*</div>*/}
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {/*<ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">*/}
                {/*  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">*/}
                {/*    <div className="flex w-0 flex-1 items-center">*/}
                {/*      <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                {/*      <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>*/}
                {/*    </div>*/}
                {/*    <div className="ml-4 flex-shrink-0">*/}
                {/*      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                {/*        Download*/}
                {/*      </a>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">*/}
                {/*    <div className="flex w-0 flex-1 items-center">*/}
                {/*      <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />*/}
                {/*      <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>*/}
                {/*    </div>*/}
                {/*    <div className="ml-4 flex-shrink-0">*/}
                {/*      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                {/*        Download*/}
                {/*      </a>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}

export default CandidateSingle;