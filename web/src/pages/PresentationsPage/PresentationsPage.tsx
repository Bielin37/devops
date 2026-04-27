import { useState } from 'react';

import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { Metadata } from '@redwoodjs/web';

import AddPresentationModal, {
  PresentationFormData,
} from 'src/components/AddPresentationModal/AddPresentationModal';

import MEMBERS from '../../../../data/team.json';

const PresentationsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPresentation = (data: PresentationFormData) => {
    // TODO: Implement API call to save presentation
    console.log('New presentation:', data);
  };

  return (
    <>
      <Metadata title="Vorträge" description="Vorträge des Frontend Teams" />

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Vorträge</h1>
        </div>

        <div className="overflow-hidden rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Datum
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Titel
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Vortragende(r)
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {MEMBERS.map((member) => (
                <tr className="hover:bg-gray-50" key={`vortrag-${member.id}`}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    12. Dez 2024
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      Tolles Projekt
                    </div>
                    <div className="text-sm text-gray-500">
                      Vorstellung des Projekts
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={member.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {member.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                      In Vorbereitung
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Vortrag hinzufügen
          </button>
        </div>

        <AddPresentationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPresentation}
        />
      </div>
    </>
  );
};

export default PresentationsPage;
