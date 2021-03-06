import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';

import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <div className="link-container">
        <Link to="/">
          <img src={arrow} alt="Back" />
          <span>Voltar</span>
        </Link>
      </div>

      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
