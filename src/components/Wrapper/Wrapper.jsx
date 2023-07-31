import PropTypes from 'prop-types';
import { Container } from './Wrapper.styled';

const Wrapper = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>{children}</div>
    </Container>
  );
};

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
