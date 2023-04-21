import { useEffect, useState } from 'react';
const { ipcRenderer } = window.require('electron');

const useDatabase = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        // Set up IPC event listener for 'getDatabase' message
        ipcRenderer.on('getAllData', (event, arg) => {
            setData(arg);
        });

        ipcRenderer.invoke('getAllData');
        
        // Clean up IPC event listener on component unmount
        return () => {
            ipcRenderer.removeAllListeners('getDatabase');
        };
    }, []);
    return [data, () => { ipcRenderer.invoke('getAllData') }];
};

export default useDatabase;