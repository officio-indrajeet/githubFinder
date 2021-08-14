import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// const Search = ({ showClear, clearUsers, setAlert }) => {
// const Search = ({ setAlert }) => {
const Search = () => {
  // setting up search users context
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // state = {
  //   text: '',
  // };

  // Created a text state
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // if (this.state.text === '') {
    if (text === '') {
      // this.props.setAlert('Please enter something', 'light');
      alertContext.setAlert('Please enter something', 'light');
    } else {
      // this.props.searchUsers(this.state.text);
      // searchUsers(text);
      githubContext.searchUsers(text);
      // this.setState({ text: '' });
      setText('');
    }
  };

  const onChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          // value={this.state.text}
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

// Search.propTypes = {
//   // searchUsers: PropTypes.func.isRequired,
//   // clearUsers: PropTypes.func.isRequired,
//   // showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };

export default Search;
