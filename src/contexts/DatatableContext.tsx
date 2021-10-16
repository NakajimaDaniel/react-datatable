import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import  api  from '../services/api';


type DatatableContextProviderProps  = {
  children : ReactNode,
}

interface serverData {
  id_vm: number;
  ip: string;
  hostname: string;
  memory: number;
  CPU: number;
  totalDiskGB: number;
}

type DatatableContextType = {
  serverData: serverData[],
  setSelectedServers: (data: serverData[]) => void,
  selectedServers: serverData[],
}

const DatatableContext = createContext({} as DatatableContextType);


export function DatatableContextProvider({children} : DatatableContextProviderProps) {

  const [serverData, setServerData] = useState<serverData[]>([])

  const [selectedServers, setSelectedServers] = useState<any[]>([]);


  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get('http://localhost:3333/servers');
        const data: Array<any> = res.data;

        setServerData(data.map(data => {
          return {
            id_vm: data.id_vm,
            ip: data.ip,
            hostname: data.hostname,
            memory: data.configuracao.memoryProvisioned,
            CPU: data.configuracao.cpuProvisioned,
            totalDiskGB: data.configuracao.totalDiskGB,
          }
        }))

      } catch(err) {
        alert('erro ao buscar dados');
      }
    }
    getData();
  },[]);




  return (
    <DatatableContext.Provider value={{serverData, setSelectedServers, selectedServers}}>
      {children}
    </DatatableContext.Provider>
  )
}

export const useDatatable = () => {return useContext(DatatableContext)}