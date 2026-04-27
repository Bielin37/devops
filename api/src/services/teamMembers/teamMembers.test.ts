import type { TeamMember } from '@prisma/client';

import {
  teamMembers,
  teamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from './teamMembers';
import type { StandardScenario } from './teamMembers.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teamMembers', () => {
  scenario('returns all teamMembers', async (scenario: StandardScenario) => {
    const result = await teamMembers();

    expect(result.length).toEqual(Object.keys(scenario.teamMember).length);
  });

  scenario(
    'returns a single teamMember',
    async (scenario: StandardScenario) => {
      const result = await teamMember({ id: scenario.teamMember.one.id });

      expect(result).toEqual(scenario.teamMember.one);
    }
  );

  scenario('creates a teamMember', async () => {
    const result = await createTeamMember({
      input: { firstName: 'String', lastName: 'String', team: 'String' },
    });

    expect(result.firstName).toEqual('String');
    expect(result.lastName).toEqual('String');
    expect(result.team).toEqual('String');
  });

  scenario('updates a teamMember', async (scenario: StandardScenario) => {
    const original = (await teamMember({
      id: scenario.teamMember.one.id,
    })) as TeamMember;
    const result = await updateTeamMember({
      id: original.id,
      input: { firstName: 'String2' },
    });

    expect(result.firstName).toEqual('String2');
  });

  scenario('deletes a teamMember', async (scenario: StandardScenario) => {
    const original = (await deleteTeamMember({
      id: scenario.teamMember.one.id,
    })) as TeamMember;
    const result = await teamMember({ id: original.id });

    expect(result).toEqual(null);
  });
});
