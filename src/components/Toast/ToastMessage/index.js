import PropTypes from 'prop-types';

import { Container } from './styles';

import xCirlcleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCirlcleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ text, type }) {
  return (
    <Container>
      {type === 'danger' && <img src={xCirlcleIcon} alt="X" />}
      {type === 'success' && <img src={checkCirlcleIcon} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
