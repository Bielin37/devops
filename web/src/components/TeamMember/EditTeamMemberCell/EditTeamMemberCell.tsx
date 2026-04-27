import type {
  EditTeamMemberById,
  UpdateTeamMemberInput,
  UpdateTeamMemberMutationVariables,
} from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import TeamMemberForm from 'src/components/TeamMember/TeamMemberForm';

export const QUERY: TypedDocumentNode<EditTeamMemberById> = gql`
  query EditTeamMemberById($id: Int!) {
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

const UPDATE_TEAM_MEMBER_MUTATION: TypedDocumentNode<
  EditTeamMemberById,
  UpdateTeamMemberMutationVariables
> = gql`
  mutation UpdateTeamMemberMutation($id: Int!, $input: UpdateTeamMemberInput!) {
    updateTeamMember(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  teamMember,
}: CellSuccessProps<EditTeamMemberById>) => {
  const [updateTeamMember, { loading, error }] = useMutation(
    UPDATE_TEAM_MEMBER_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeamMember updated');
        navigate(routes.teamMembers());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (
    input: UpdateTeamMemberInput,
    id: EditTeamMemberById['teamMember']['id']
  ) => {
    updateTeamMember({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TeamMember {teamMember?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TeamMemberForm
          teamMember={teamMember}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
