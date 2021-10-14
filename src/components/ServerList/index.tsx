import './styles.scss';

export function ServerList() {
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
            <tr>
              <td><input type="radio"/></td>
              <td>Server 1</td>
              <td>10 GB</td>
              <td>4 vCPUs</td>
              <td>200 GB</td>
              <td>10.0.0.1</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  </div>
  )
}