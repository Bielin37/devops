export const schema = gql`
  type TeamMember {
    id: Int!
    firstName: String!
    lastName: String!
    avatar: String
    team: String!
    project: String
    createdAt: DateTime!
  }

  type Query {
    teamMembers: [TeamMember!]! @requireAuth
    teamMember(id: Int!): TeamMember @requireAuth
  }

  input CreateTeamMemberInput {
    firstName: String!
    lastName: String!
    avatar: String
    team: String!
    project: String
  }

  input UpdateTeamMemberInput {
    firstName: String
    lastName: String
    avatar: String
    team: String
    project: String
  }

  type Mutation {
    createTeamMember(input: CreateTeamMemberInput!): TeamMember! @requireAuth
    updateTeamMember(id: Int!, input: UpdateTeamMemberInput!): TeamMember!
      @requireAuth
    deleteTeamMember(id: Int!): TeamMember! @requireAuth
  }
`;
