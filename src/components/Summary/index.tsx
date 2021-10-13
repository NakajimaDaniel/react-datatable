import './styles.scss';

export function Summary() {
  return (
    <div className="summaryContainer">
      <div className="summaryWrapper">
        <h1>Sumário dos recursos dos servidores</h1>
        <div className="summaryTable">
          <div className="summaryTableCard">
            <span>Servidores Selecionados</span>
            <span>4 servidores selecionados</span>
          </div>
          <div className="summaryTableCard">
            <span>Total de Memória</span>
            <span>354 GB</span>
          </div>
          <div className="summaryTableCard">
            <span>Total de CPUs</span>
            <span>75 vCPUs</span>
          </div>
          <div className="summaryTableCard">
            <span>Total de Discos</span>
            <span>3096 GB</span>
          </div>
        </div>
      </div>
    </div>
  )
}