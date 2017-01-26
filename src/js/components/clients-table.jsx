import React from 'react';
import defaultProps from '../../mock-data/clients-table';
import styles from '../../scss/components/clients-table';

const ClientsTable = ({
  clients,
}) => {
  const renderClientsListItems = clients.map(({logo}, index) => (
    <li className={styles.clientsListItem} key={index}>
      {logo}
    </li>
  ));

  return (
    <div className={styles.clientsTable}>
      <ul className={styles.clientsList}>
        {renderClientsListItems}
      </ul>
    </div>
  );
}

ClientsTable.defaultProps = defaultProps;

export default ClientsTable;
