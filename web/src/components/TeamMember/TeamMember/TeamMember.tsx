import type {
  DeleteTeamMemberMutation,
  DeleteTeamMemberMutationVariables,
  FindTeamMemberById,
} from 'types/graphql';

import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import type { TypedDocumentNode } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

const DELETE_TEAM_MEMBER_MUTATION: TypedDocumentNode<
  DeleteTeamMemberMutation,
  DeleteTeamMemberMutationVariables
> = gql`
  mutation DeleteTeamMemberMutation($id: Int!) {
    deleteTeamMember(id: $id) {
      id
    }
  }
`;

interface Props {
  teamMember: NonNullable<FindTeamMemberById['teamMember']>;
}

const TeamMember = ({ teamMember }: Props) => {
  const [deleteTeamMember] = useMutation(DELETE_TEAM_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('TeamMember deleted');
      navigate(routes.teamMembers());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id: DeleteTeamMemberMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete teamMember ' + id + '?')) {
      deleteTeamMember({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TeamMember {teamMember?.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{teamMember?.id}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{teamMember?.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{teamMember?.lastName}</td>
            </tr>
            <tr>
              <th>Avatar</th>
              <td>{teamMember?.avatar}</td>
            </tr>
            <tr>
              <th>Team</th>
              <td>{teamMember?.team}</td>
            </tr>
            <tr>
              <th>Project</th>
              <td>{teamMember?.project}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(teamMember?.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTeamMember({ id: teamMember?.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(teamMember?.id)}
        >
          Delete
        </button>
      </nav>
    </>
  );
};

export default TeamMember;
