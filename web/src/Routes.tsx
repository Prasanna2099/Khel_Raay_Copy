// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BaseLayout from './layouts/BaseLayout/BaseLayout'
import GlobalLoading from './components/GlobalLoading/GlobalLoading'
import WebsiteLayout from './layouts/WebsiteLayout/WebsiteLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/coming-soon" page={CounterPage} name="counter" />
      <Set wrap={BaseLayout} whileLoadingPage={GlobalLoading} whileLoadingAuth={GlobalLoading}>
        <Set wrap={WebsiteLayout}>
          <Route path="/fixture-table" page={FixtureTablePage} name="fixtureTable" />
          <Route path="/adhyayan" page={AdhyayanPage} name="adhyayan" />
          <Route path="/about" page={AboutPage} name="about" />
          <Route path="/privacy" page={PrivacyPage} name="privacy" />
          <Route path="/tac" page={TacPage} name="tac" />
          <Route path="/support" page={SupportPage} name="support" />
          <Route path="/" page={HomePage} name="home" />
        </Set>
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
