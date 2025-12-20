/*import React from 'react';
import './ApplicationsTable.css';

const ApplicationsTable = ({ applications }) => (
  <div className="applications-card">
    <h3>Mes Candidatures</h3>
    <table>
      <thead>
        <tr>
          <th>MISSION</th>
          <th>ASSOCIATION</th>
          <th>DATE</th>
          <th>STATUT</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app,i)=>(
          <tr key={i}>
            <td>{app.mission}</td>
            <td className="gray">{app.association}</td>
            <td className="gray">{app.date}</td>
            <td>
              <span className={`status ${app.status==='En attente'?'pending':'accepted'}`}>{app.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ApplicationsTable;*/
import React from 'react';
import './Candidatures.css';

const Candidatures = () => {
  return (
    <div className="candidatures-card">
      <h3 className="candidatures-title">Mes Candidatures</h3>
      <table className="candidatures-table">
        <thead>
          <tr>
            <th>MISSION</th>
            <th>ASSOCIATION</th>
            <th>DATE</th>
            <th>STATUT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maraude Sociale</td>
            <td className="text-gray">Croix Rouge</td>
            <td className="text-gray">18 Oct</td>
            <td>
              <span className="status-badge status-pending">En attente</span>
            </td>
          </tr>
          <tr>
            <td>Collecte Vêtements</td>
            <td className="text-gray">Emmaüs</td>
            <td className="text-gray">22 Oct</td>
            <td>
              <span className="status-badge status-accepted">Acceptée</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Candidatures;