import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from '../../components/spinner/spinner.component';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as Location } from '../../assets/location.svg';
import { ReactComponent as Company } from '../../assets/company.svg';

import { UserPageContainer, UserCard, UserImage, UserName, Field, Button } from './userpage.styles';

class UserPage extends Component {
  state = {
    avatar_url: '',
    name: '',
    login: '',
    company: '',
    location: '',
    email: '',
    isLoading: true,
    isError: false
  }

  componentDidMount() {
    if (this.props.location.state?.user) {
      const { avatar_url, name, login, company, location, email } = this.props.location.state.user;
      this.setState({
        avatar_url,
        name,
        login,
        company,
        location,
        email,
        isLoading: false
      })
    } else {
      const { userId } = this.props.match.params;
      axios.get(`https://api.github.com/users/${userId}`)
        .then(res => {
          const { avatar_url, name, login, company, location, email } = res.data;
          this.setState({
            avatar_url,
            name,
            login,
            company,
            location,
            email,
            isLoading: false
          });
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            isError: true
          });
        })
    }
  }

  render() {
    if (this.state.isError) throw Error;
    const { avatar_url, name, login, company, location, email, isLoading } = this.state;
    return (
      <UserPageContainer>
        {
          isLoading
            ? <Spinner />
            : <UserCard>
              <UserImage avatar={avatar_url} />
              <UserName>
                <span>{name}</span>
                <span>{login}</span>
              </UserName>
              <Field>
                <Company />
                <span>{company || 'Not provided'}</span>
              </Field>
              <Field>
                <Location />
                <span>{location || 'Not provided'}</span>
              </Field>
              <Field>
                <Email />
                <span>{email || 'Not provided'}</span>
              </Field>
              <Button>
                <Link to='/'>
                  <CustomButton>Go back</CustomButton>
                </Link>
              </Button>
            </UserCard>
        }
      </UserPageContainer>
    )
  }
};

export default UserPage;