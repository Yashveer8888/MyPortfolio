import React, { Component } from 'react'

export class Coding extends Component {
  render() {
    return (
      <div>
        <div class="container">
            <div class="section-header">
                <h2>Problem Solving Skills</h2>
                <p>My Coding Journey</p>
            </div>
            <div class="coding-stats">
                <div class="stat-card">
                    <h3>Problems Solved</h3>
                    <div class="stat-number">500+</div>
                    <p>Across all difficulty levels</p>
                </div>
                <div class="stat-card">
                    <h3>Contest Rating</h3>
                    <div class="stat-number">1800</div>
                    <p>Top 10% globally</p>
                </div>
                <div class="stat-card">
                    <h3>Streak</h3>
                    <div class="stat-number">100</div>
                    <p>Days of consistent practice</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Coding
