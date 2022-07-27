import BrowseProvider from "contexts/BrowseContext"
import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import Account from "views/dashboard/Account"
import Browse from "views/dashboard/Browse"
import BrowseTherapistBook from "views/dashboard/BrowseTherapistBook"
import BrowseTherapistProfile from "views/dashboard/BrowseTherapistProfile"
import Dashboard from "views/dashboard/Dashboard"
import Explore from "views/dashboard/Explore"
import Journal from "views/dashboard/Journal"
import Messages from "views/dashboard/Messages"
import Mood from "views/dashboard/Mood"
import Policies from "views/dashboard/Policies"
import Schedule from "views/dashboard/Schedule"
import Settings from "views/dashboard/Settings"
import Therapist from "views/dashboard/Therapist"
import Therapists from "views/dashboard/Therapists"

export default [
  {
    component: (
      <RouteDashboard key={"account"} path={URL.ACCOUNT} exact>
        <Account />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"browse"} path={URL.BROWSE.BASE} exact>
        <BrowseProvider>
          <Browse />
        </BrowseProvider>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"browse book"} path={URL.BROWSE.BOOK} exact>
        <BrowseTherapistBook />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"browse therapist"} path={URL.BROWSE.THERAPIST} exact>
        <BrowseTherapistProfile />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"dashboard"} path={URL.DASHBOARD} exact>
        <Dashboard />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"explore"} path={URL.EXPLORE} exact>
        <Explore />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"journal"} path={URL.JOURNAL.BASE} exact>
        <Journal />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"messages"} path={URL.MESSAGES.BASE} exact>
        <Messages />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"mood"} path={URL.MOOD} exact>
        <Mood />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"policies"} path={URL.POLICIES.BASE} exact>
        <Policies />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"schedule"} path={URL.SCHEDULE} exact>
        <Schedule />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"settings"} path={URL.SETTINGS.BASE} exact>
        <Settings />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"therapists"} path={URL.THERAPISTS.BASE} exact>
        <Therapists />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"therapist profile"} path={URL.THERAPISTS.THERAPIST.PROFILE} exact>
        <Therapist />
      </RouteDashboard>
    )
  }
]
