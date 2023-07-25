import React from 'react';
import './NotAuthorization.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import { Icon } from '@ohif/ui';

export default function NotAuthorization({
  message = 'Você não tem autorização para acessar essa página.',
  showGoBackButton = true,
}) {
  const context = useAppContext();

  return (
    <div className={'not-authorization'}>
      <Icon name="ohif-text-logo" className="header-logo-text-notFound" />
      <h2>{message}</h2>
      <h4>Entre novamente através do</h4>

      <Link
        to={{ pathname: 'https://report.higiatec.com.br/' }}
        target="_blank"
      >
        <button>HigIA Report</button>
      </Link>
    </div>
  );
}
