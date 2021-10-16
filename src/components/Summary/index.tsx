import { useDatatable } from '../../contexts/DatatableContext';
import './styles.scss';

export function Summary() {

  const { selectedServers } = useDatatable();

  return (
    <div className="summaryContainer">
      <div className="summaryWrapper">
        <h1>Sumário dos recursos dos servidores</h1>
        <div className="summaryTable">
          <div className="summaryTableCard">
            <span>Servidores Selecionados</span>
            <span>{selectedServers.length} servidores selecionados</span>
          </div>
          <div className="summaryTableCard">
            <span>Total de Memória</span>
            <span>{selectedServers.reduce((acc, server) => acc +=server.memory, 0)} GB</span>
          </div>
          <div className="summaryTableCard">
            <span>Total de CPUs</span>
            <span>{selectedServers.reduce((acc, server) => acc +=server.CPU, 0)} vCPUs</span>
          </div>
          <div className="summaryTableCard">
            <span>Total de Discos</span>
            <span>{selectedServers.reduce((acc, server) => acc +=server.totalDiskGB, 0)} GB</span>
          </div>
        </div>
      </div>
    </div>
  )
}