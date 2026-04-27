import type {
  CreateTeamMemberMutation,
  CreateTeamMemberInput,
  CreateTeamMemberMutationVariables,
} from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import type { TypedDocumentNode } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import TeamMemberForm from 'src/components/TeamMember/TeamMemberForm';

const CREATE_TEAM_MEMBER_MUTATION: TypedDocumentNode<
  CreateTeamMemberMutation,
  CreateTeamMemberMutationVariables
> = gql`
  mutation CreateTeamMemberMutation($input: CreateTeamMemberInput!) {
    createTeamMember(input: $input) {
      id
    }
  }
`;

const NewTeamMember = () => {
  const [createTeamMember, { loading, error }] = useMutation(
    CREATE_TEAM_MEMBER_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeamMember created');
        navigate(routes.teamMembers());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input: CreateTeamMemberInput) => {
    createTeamMember({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TeamMember</h2>
      </header>
      <div className="rw-segment-main">
        <TeamMemberForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewTeamMember;
