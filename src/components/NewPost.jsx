import classes from './NewPost.module.css';
import PropTypes from 'prop-types';

function NewPost(props) {
  return (
      <form className={classes.form}>
          <p>
              <label htmlFor="body">Text</label>
              <textarea id="body" required rows={3} onChange={props.onBodyChange} />
          </p>
          <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" required onChange={props.onAuthorChange} />
          </p>
      </form>
  );
}

NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
};

export default NewPost;