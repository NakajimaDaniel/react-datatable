import { useEffect, useState } from 'react';
import { useDatatable } from '../../contexts/DatatableContext';
import './styles.scss';

interface serverData {
  id_vm: number;
  ip: string;
  hostname: string;
  memory: number;
  CPU: number;
  totalDiskGB: number;
}

export function ServerList() {

  const { serverData, setSelectedServers, selectedServers} = useDatatable();
  // const [selectedServers, setSelectedServers] = useState<any[]>([]);
  

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
                <td><input type="checkbox" onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedServers([
                          ...selectedServers,
                          {
                            id_vm: data.id_vm,
                            ip: data.ip,
                            hostname: data.hostname,
                            memory: data.memory,
                            CPU: data.CPU,
                            totalDiskGB: data.totalDiskGB,
                          },
                        ]);
                      } else {
                        setSelectedServers(
                          selectedServers.filter((item) => item.id_vm !== data.id_vm),
                        );
                      }
                    }}

                /></td>
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