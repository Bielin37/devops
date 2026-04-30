// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web';

import TeamMembersCell from 'src/components/TeamMember/TeamMembersCell';

import MEMBERS from '../../../../data/team.json';

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Front-end Team Berlin" />

      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <TeamMembersCell />
        </div>

        <aside className="mt-8 lg:mt-0">
          <div className="sticky top-20 flex flex-col gap-6">
            <section className="sticky top-0 rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Heute im Büro:
              </h2>
              <ul className="flex flex-row gap-4">
                {MEMBERS.slice(0, 3).map((member) => (
                  <li key={`intheoffice-${member.id}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </li>
                ))}
              </ul>
              <p className="mb-6 mt-6">Eventuell kommen noch:</p>
              <ul className="flex flex-row gap-4">
                {MEMBERS.slice(3, 5).map((member) => (
                  <li key={`maybe-intheoffice-${member.id}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Unsere nächsten Termine:
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                    5
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Welcome & Xmas Party
                    </p>
                    <p className="text-sm text-gray-500">5. Dezember</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                    18
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">
                      Weihnachts-Sushi
                    </p>
                    <p className="text-sm text-gray-500">18. Dezember</p>
                  </div>
                </li>
              </ul>
            </section>

            <section className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Zukünftige Vorträge
              </h2>
              <ul>
                <li>Projektvorstellung</li>
                <li>Redwood.js</li>
              </ul>
            </section>
          </div>
        </aside>
      </div>
    </>
  );
};

export default HomePage;
