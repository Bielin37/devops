import type { FindTeamMembers, FindTeamMembersVariables } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web';

import TeamMembers from 'src/components/TeamMember/TeamMembers';

export const QUERY: TypedDocumentNode<
  FindTeamMembers,
  FindTeamMembersVariables
> = gql`
  query FindTeamMembers {
    teamMembers {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      No teamMembers yet.{' '}
      <Link to={routes.newTeamMember()} className="rw-link">
        Create one?
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps<FindTeamMembers>) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  teamMembers,
}: CellSuccessProps<FindTeamMembers, FindTeamMembersVariables>) => {
  return <TeamMembers teamMembers={teamMembers} />;
};
