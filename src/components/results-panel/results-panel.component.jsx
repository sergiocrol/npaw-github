import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector
} from 'recharts';

import UserCard from '../user-card/user-card.component';
import Spinner from '../spinner/spinner.component';
import WelcomeScreen from '../welcome-screen/welcome-screen.component';

import { ResultsPanelContainer, OverviewUsers, ChartPanel, SelectChart } from './results-panel.styles';

class ResultPanel extends Component {
  state = {
    activeIndex: 0,
    isBar: true
  }

  filterByFollowers = users => {
    if (users === null) return;
    let data = [];
    users.forEach(user => {
      data.push({ name: user.data.login, followers: user.data.followers })
    })
    return data.sort((a, b) => (a.followers > b.followers)
      ? -1
      : ((b.followers > a.followers)
        ? 1
        : 0)).slice(0, 10);
  }

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Fw ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { isFetching, users, error } = this.props;
    if (error) throw Error;
    const data = this.filterByFollowers(users);
    return (
      <ResultsPanelContainer>
        {
          users === null && !isFetching
            ? <WelcomeScreen />
            : isFetching
              ? <Spinner />
              : <>
                <OverviewUsers>
                  {
                    users.map(user =>
                      <Link key={user.data.id} to={{
                        pathname: `/user/${user.data.login}`,
                        state: {
                          user: user.data
                        }
                      }}>
                        <UserCard user={user.data} />
                      </Link>)
                  }
                </OverviewUsers>
                <ChartPanel isBar={this.state.isBar}>
                  <SelectChart isBar={this.state.isBar}>
                    <span onClick={() => this.setState({ isBar: true })}>bar chart</span>
                    <span onClick={() => this.setState({ isBar: false })}>pie chart</span>
                  </SelectChart>
                  <ResponsiveContainer width='90%' height={200}>
                    <BarChart
                      width={400}
                      height={300}
                      data={data}
                      barSize={20}
                    >
                      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="followers" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                  </ResponsiveContainer>
                  <PieChart width={400} height={325}>
                    <Pie
                      activeIndex={this.state.activeIndex}
                      activeShape={this.renderActiveShape}
                      data={data}
                      cx={200}
                      cy={200}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#af5c69"
                      dataKey="followers"
                      onMouseEnter={this.onPieEnter}
                    />
                  </PieChart>
                </ChartPanel>
              </>
        }
      </ResultsPanelContainer >
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
  isFetching: state.user.isFetching,
  error: state.user.errorMessage
});

export default connect(mapStateToProps)(ResultPanel);