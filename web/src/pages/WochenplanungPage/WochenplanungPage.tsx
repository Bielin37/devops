import { Metadata } from '@redwoodjs/web'

import MEMBERS from '../../../../data/team.json'

const WochenplanungPage = () => {
  return (
    <>
      <Metadata title="Wochenplanung" description="Wochenplanung" />

      <h1 className="mb-6 text-2xl font-bold">Wer ist wann im Büro?</h1>

      <h2 className="mb-2 flex items-center justify-between text-lg font-bold">
        Diese Woche
        <div className="text-sm font-normal">18.11.-22.11.2024</div>
      </h2>

      <div className="mb-12 overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Teammitglied
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Montag
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Dienstag
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Mittwoch
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Donnerstag
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Freitag
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {MEMBERS.map((member) => (
              <tr className="hover:bg-gray-50" key={`planing-${member.id}`}>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium text-gray-900"
                >
                  {member.name}
                </th>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {Math.random() < 0.5 ? (
                    <span className="text-lg text-green-600">✓</span>
                  ) : (
                    <span className="text-lg text-red-600">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {Math.random() < 0.5 ? (
                    <span className="text-lg text-green-600">✓</span>
                  ) : (
                    <span className="text-lg text-red-600">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {Math.random() < 0.5 ? (
                    <span className="text-lg text-green-600">✓</span>
                  ) : (
                    <span className="text-lg text-red-600">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {Math.random() < 0.5 ? (
                    <span className="text-lg text-green-600">✓</span>
                  ) : (
                    <span className="text-lg text-red-600">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-500">
                  {Math.random() < 0.5 ? (
                    <span className="text-lg text-green-600">✓</span>
                  ) : (
                    <span className="text-lg text-red-600">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mb-2 flex items-center justify-between text-lg font-bold">
        Nächste Woche
        <div className="text-sm font-normal">25.11.-29.11.2024</div>
      </h2>
      <p>...</p>
    </>
  )
}

export default WochenplanungPage
