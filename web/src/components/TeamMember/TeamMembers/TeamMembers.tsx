import type {
  DeleteTeamMemberMutation,
  DeleteTeamMemberMutationVariables,
  FindTeamMembers,
} from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import type { TypedDocumentNode } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/TeamMember/TeamMembersCell';
import { timeTag, truncate } from 'src/lib/formatters';

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

const TeamMembersList = ({ teamMembers }: FindTeamMembers) => {
  const [deleteTeamMember] = useMutation(DELETE_TEAM_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('TeamMember deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id: DeleteTeamMemberMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete teamMember ' + id + '?')) {
      deleteTeamMember({ variables: { id } });
    }
  };

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
            <th>Team</th>
            <th>Project</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((teamMember) => (
            <tr key={teamMember.id}>
              <td>{truncate(teamMember.id)}</td>
              <td>{truncate(teamMember.firstName)}</td>
              <td>{truncate(teamMember.lastName)}</td>
              <td>{truncate(teamMember.avatar || '')}</td>
              <td>{truncate(teamMember.team)}</td>
              <td>{truncate(teamMember.project || '')}</td>
              <td>{timeTag(teamMember.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.teamMember({ id: teamMember.id })}
                    title={'Show teamMember ' + teamMember.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTeamMember({ id: teamMember.id })}
                    title={'Edit teamMember ' + teamMember.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete teamMember ' + teamMember.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(teamMember.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamMembersList;
