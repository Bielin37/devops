// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router';

import MainLayout from 'src/layouts/MainLayout/MainLayout';
import ScaffoldLayout from 'src/layouts/ScaffoldLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="TeamMembers" titleTo="teamMembers" buttonLabel="New TeamMember" buttonTo="newTeamMember">
        <Route prerender path="/team-members/new" page={TeamMemberNewTeamMemberPage} name="newTeamMember" />
        <Route path="/team-members/{id:Int}/edit" page={TeamMemberEditTeamMemberPage} name="editTeamMember" />
        <Route path="/team-members/{id:Int}" page={TeamMemberTeamMemberPage} name="teamMember" />
        <Route prerender path="/team-members" page={TeamMemberTeamMembersPage} name="teamMembers" />
      </Set>
      <Set wrap={MainLayout}>
        <Route prerender path="/" page={HomePage} name="home" />
        <Route prerender path="/wochenplanung" page={WochenplanungPage} name="wochenplanung" />
        <Route prerender path="/presentations" page={PresentationsPage} name="presentations" />
        <Route prerender notfound page={NotFoundPage} />
      </Set>
    </Router>
  );
};

export default Routes;
