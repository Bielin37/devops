import TeamMemberCell from 'src/components/TeamMember/TeamMemberCell';

type TeamMemberPageProps = {
  id: number;
};

const TeamMemberPage = ({ id }: TeamMemberPageProps) => {
  return <TeamMemberCell id={id} />;
};

export default TeamMemberPage;
