import PropTypes from 'prop-types';
import { Container } from './Wrapper.styled';

const Wrapper = ({ title, children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
