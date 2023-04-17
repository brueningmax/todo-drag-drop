import { useEffect } from 'react';
const { ipcRenderer } = window.require('electron');

const useDatabase = () => {
    useEffect(() => {
        // Set up IPC event listener for 'getDatabase' message
        ipcRenderer.on('getDatabase', (event, arg) => {
            console.log(arg);
        });

        // Invoke 'getDatabase' IPC message
        ipcRenderer.invoke('getDatabase');

        // Clean up IPC event listener on component unmount
        return () => {
            ipcRenderer.removeAllListeners('getDatabase');
        };
    }, []);
};

export default useDatabase;