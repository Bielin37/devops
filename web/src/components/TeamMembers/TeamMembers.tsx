import MEMBERS from '../../../../data/team.json';
import TeamMember from '../TeamMember/TeamMember';

const TeamMembers = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Unser Team</h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MEMBERS.map((member) => (
          <li
            key={`member-${member.id}`}
            className="col-span-1 rounded-lg bg-white p-6 shadow transition-transform hover:scale-105  hover:shadow-md"
          >
            <TeamMember
              teamMember={{
                id: member.id,
                firstName: member.name.split(' ')[0],
                lastName: member.name.split(' ')[1],
                avatar: member.image,
                team: member.team,
                createdAt: member.createdAt,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
