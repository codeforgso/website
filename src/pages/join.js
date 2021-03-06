import React from "react"
import Layout from "../components/layout"

const Join = () => (
  <Layout>
    <h1 className="mt-5 pl-2 join-label">Slack</h1>
    <a href="https://slack.codeforgreensboro.org/">
      <div className="columns is-mobile is-gapless mt-3">
        <div className="column is-four-fifths join-title">
          <h2 className="pl-5 py-3">Connect</h2>
        </div>
        <div className="column has-background-primary"></div>
      </div>
    </a>
    <h1 className="mt-6 pl-2 join-label">GitHub</h1>
    <a href="https://github.com/codeforgso">
      <div className="columns is-mobile is-gapless mt-3">
        <div className="column is-four-fifths join-title">
          <h2 className="pl-5 py-3">Work With Us</h2>
        </div>
        <div className="column has-background-primary"></div>
      </div>
    </a>
    <h1 className="mt-6 pl-2 join-label">MeetUp</h1>
    <a href="https://www.meetup.com/Code-for-Greensboro/">
      <div className="columns is-mobile is-gapless mt-3 mb-6">
        <div className="column is-four-fifths join-title">
          <h2 className="pl-5 py-3">Meet Us</h2>
        </div>
        <div className="column has-background-primary"></div>
      </div>
    </a>
  </Layout>
)

export default Join
