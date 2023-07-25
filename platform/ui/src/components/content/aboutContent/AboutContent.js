import React from 'react';
import detect from 'browser-detect';
import { useTranslation } from 'react-i18next';

import './AboutContent.styl';

const AboutContent = () => {
  const { t } = useTranslation('AboutContent');

  const { os, version, name } = detect();
  const capitalize = s =>
    s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();

  const itemsPreset = () => {
    return [
      {
        name: 'Versão',
        value: process.env.VERSION_NUMBER,
      },
      {
        name: t('Número da build'),
        value: process.env.BUILD_NUM,
      },
      {
        name: t('Navegador'),
        value: `${capitalize(name)} ${version}`,
      },
      {
        name: t('OS'),
        value: os,
      },
    ];
  };

  const renderTableRow = ({ name, value, link }) => (
    <tr key={name} style={{ backgroundColor: 'transparent' }}>
      <td>{name}</td>
      <td>
        {link ? (
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {value}
          </a>
        ) : (
          value
        )}
      </td>
    </tr>
  );

  return (
    <div className="AboutContent" data-cy="about-modal">
      <div className="btn-group">
        {` `}
        <a
          className="btn btn-default"
          target="_blank"
          rel="noopener noreferrer"
          href="https://higiatec.com.br"
        >
          {t('Mais detalhes')}
        </a>
      </div>
      <div>
        <h3>{t('Informação sobre a versão')}</h3>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>{t('Nome')}</th>
              <th>{t('Valor')}</th>
            </tr>
          </thead>
          <tbody>{itemsPreset().map(item => renderTableRow(item))}</tbody>
        </table>
      </div>
    </div>
  );
};

export { AboutContent };
export default AboutContent;
