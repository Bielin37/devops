import type {
  FindTeamMemberById,
  FindTeamMemberByIdVariables,
} from 'types/graphql';

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web';

import TeamMember from 'src/components/TeamMember/TeamMember';

export const QUERY: TypedDocumentNode<
  FindTeamMemberById,
  FindTeamMemberByIdVariables
> = gql`
  query FindTeamMemberById($id: Int!) {
    teamMember: teamMember(id: $id) {
      id
      firstName
      lastName
      avatar
      team
      project
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>TeamMember not found</div>;

export const Failure = ({
  error,
}: CellFailureProps<FindTeamMemberByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  teamMember,
}: CellSuccessProps<FindTeamMemberById, FindTeamMemberByIdVariables>) => {
  return <TeamMember teamMember={teamMember} />;
};
