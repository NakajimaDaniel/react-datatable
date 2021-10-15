import { useDatatable } from '../../contexts/DatatableContext';
import './styles.scss';

export function ServerList() {

  const { serverData } = useDatatable();

  return (
    <div className="serverListContainer">
    <div className="serverListWrapper">
      <h1>Sumário dos recursos dos servidores</h1>
      <div className="serverListDataTable">
        <table>

          <thead>
            <tr>
              <th>Select</th>
              <th>Hostname</th>
              <th>Memória</th>
              <th>vCPUs</th>
              <th>Disco</th>
              <th>IP</th>
            </tr>
          </thead>

          <tbody>
            {serverData.map(data => {return (
              <tr key={data.id_vm}>
                <td><input type="checkbox"/></td>
                <td>{data.hostname}</td>
                <td>{data.memory} GB</td>
                <td>{data.CPU} vCPUs</td>
                <td>{data.totalDiskGB} GB</td>
                <td>{data.ip}</td>
              </tr>
            )})}
          </tbody>

        </table>
      </div>
    </div>
  </div>
  )
}