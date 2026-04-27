import type { Prisma, TeamMember } from '@prisma/client';

import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.TeamMemberCreateArgs>({
  teamMember: {
    one: { data: { firstName: 'String', lastName: 'String', team: 'String' } },
    two: { data: { firstName: 'String', lastName: 'String', team: 'String' } },
  },
});

export type StandardScenario = ScenarioData<TeamMember, 'teamMember'>;
